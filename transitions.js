const MOTION = {
  fade: 100,
  heroSlide: 700,
  reveal: 600,
  entryScaleHold: 50,
  entryScaleSettle: 200,
  entryMobileFinalSettle: 300,
  easing: 'cubic-bezier(0.33, 1, 0.68, 1)',
};

const HERO_EXPAND_MAX_WIDTH = 2000;

function isMobileViewport() {
  return window.matchMedia('(max-width: 640px)').matches;
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function canRunFetchTransition() {
  return window.location.protocol === 'http:' || window.location.protocol === 'https:';
}

function getPageName() {
  const path = window.location.pathname;
  const file = path.split('/').pop() || 'index.html';
  if (file === '' || file === 'index.html') {
    return 'index';
  }
  return file.replace('.html', '');
}

const WORK_PAGE_TRANSITION_IDS = {
  'design-tokens-and-multi-theme-architecture.html': 'work-1-hero',
  'ai-prototypes-playground.html': 'work-2-hero',
  'unified-documentation.html': 'work-3-hero',
  'figma-components-plugins-and-trainings.html': 'work-4-hero',
  'immersive-dark-mode-and-accessibility.html': 'work-6-hero',
};

function isWorkPageHref(href) {
  if (!href) {
    return false;
  }

  try {
    const url = new URL(href, window.location.href);
    const file = url.pathname.split('/').pop() || '';
    return file in WORK_PAGE_TRANSITION_IDS;
  } catch {
    return false;
  }
}

function isCurrentWorkPage() {
  return Object.keys(WORK_PAGE_TRANSITION_IDS).some(
    (file) => getPageName() === file.replace('.html', ''),
  );
}

function getTransitionIdFromHref(href) {
  if (!href) {
    return null;
  }

  try {
    const file = new URL(href, window.location.href).pathname.split('/').pop() || '';
    return WORK_PAGE_TRANSITION_IDS[file] || null;
  } catch {
    return null;
  }
}

function isTransitionLink(link) {
  const href = link.getAttribute('href');
  if (!href || link.target === '_blank' || !isWorkPageHref(href)) {
    return false;
  }

  if (getPageName() === 'index') {
    return !!link.dataset.transitionId && !!link.closest('.work-grid');
  }

  if (isCurrentWorkPage()) {
    return !!isWorkPageNavLink(link);
  }

  return false;
}

function getTransitionId(link) {
  return link.dataset.transitionId || getTransitionIdFromHref(link.getAttribute('href'));
}

function getThumbContainer(link) {
  return link.querySelector('.thumb');
}

function isWorkPageNavLink(link) {
  return !!link.closest('.work-page-nav');
}

function getTransitionOriginRect(link) {
  if (isWorkPageNavLink(link)) {
    return null;
  }

  if (getPageName() === 'index') {
    return getThumbContainer(link)?.getBoundingClientRect() ?? null;
  }

  if (isCurrentWorkPage()) {
    return getHeroTarget()?.getBoundingClientRect() ?? null;
  }

  return null;
}

function getThumbMedia(link) {
  return link.querySelector('.thumb img, .thumb video');
}

function getHeroTarget() {
  return document.querySelector('.page-transition-hero[data-transition-id]');
}

function runAnimation(element, keyframes, options) {
  if (!element) {
    return Promise.resolve();
  }

  element.getAnimations().forEach((animation) => animation.cancel());

  const animation = element.animate(keyframes, {
    fill: 'forwards',
    ...options,
  });

  return animation.finished.catch(() => undefined);
}

function addAnimation(element, keyframes, options) {
  if (!element) {
    return Promise.resolve();
  }

  const animation = element.animate(keyframes, {
    fill: 'forwards',
    ...options,
  });

  return animation.finished.catch(() => undefined);
}

function ensureTransitionCurtain() {
  let curtain = document.querySelector('.page-transition-curtain');
  if (!curtain) {
    curtain = document.createElement('div');
    curtain.className = 'page-transition-curtain';
    curtain.setAttribute('aria-hidden', 'true');
    document.body.appendChild(curtain);
  }
  return curtain;
}

function resolveAssetUrl(src) {
  try {
    return new URL(src, window.location.href).href;
  } catch {
    return src;
  }
}

function preloadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
}

function isMediaReady(media) {
  return !!(media && media.complete && media.naturalWidth > 0);
}

function getHeroFlyoverImage(hero, fallbackSrc) {
  const video = hero.querySelector('video');
  if (video?.poster) {
    return resolveAssetUrl(video.poster);
  }

  const img = hero.matches('img') ? hero : hero.querySelector('img');
  if (img?.src) {
    return resolveAssetUrl(img.currentSrc || img.src);
  }

  return resolveAssetUrl(fallbackSrc);
}

function rectToBounds(rect) {
  const slideDistance = Math.max(window.innerHeight - rect.top + 32, 120);

  return {
    left: rect.left,
    top: rect.top,
    width: rect.width,
    height: rect.height,
    slideDistance,
  };
}

function entryBoundsFromHeroBounds(bounds) {
  const viewportWidth = window.innerWidth;
  const width = Math.min(viewportWidth, HERO_EXPAND_MAX_WIDTH);
  const left = Math.max(0, (viewportWidth - width) / 2);
  const aspect = bounds.height / bounds.width;

  return {
    left,
    top: bounds.top,
    width,
    height: width * aspect,
    slideDistance: bounds.slideDistance,
  };
}

function getFlyoverLandingBounds(bounds) {
  return entryBoundsFromHeroBounds(bounds);
}

function boundsToKeyframe(bounds) {
  return {
    left: `${bounds.left}px`,
    top: `${bounds.top}px`,
    width: `${bounds.width}px`,
    height: `${bounds.height}px`,
  };
}

function isPlausibleHeroRect(rect) {
  return (
    rect.width > 1 &&
    rect.height > 1 &&
    rect.height <= window.innerHeight * 1.5 &&
    rect.width <= window.innerWidth * 1.1
  );
}

async function resetScrollPosition() {
  document.documentElement.classList.add('is-page-transitioning');
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  await nextFrame(3);
}

function buildFlyoverTranslate(translateY, translateX = 0) {
  return `translate3d(${translateX}px, ${translateY}px, 0)`;
}

async function animateMobileSettle(flyover, landing, targetBounds, duration) {
  const deltaX = targetBounds.left - landing.left;
  const deltaY = targetBounds.top - landing.top;

  applyFlyoverBounds(flyover, landing, 0);
  applyFlyoverScale(flyover, 1);

  await Promise.all([
    addAnimation(
      flyover,
      [
        { transform: buildFlyoverTranslate(0) },
        { transform: buildFlyoverTranslate(deltaY, deltaX) },
      ],
      { duration, easing: MOTION.easing },
    ),
    addAnimation(
      flyover,
      [
        { width: `${landing.width}px`, height: `${landing.height}px` },
        { width: `${targetBounds.width}px`, height: `${targetBounds.height}px` },
      ],
      { duration, easing: MOTION.easing },
    ),
  ]);

  flyover.getAnimations().forEach((animation) => animation.cancel());
  applyFlyoverBounds(flyover, targetBounds, 0);
  applyFlyoverScale(flyover, 1);
}

function applyFlyoverBounds(flyover, bounds, translateY) {
  flyover.style.left = `${bounds.left}px`;
  flyover.style.top = `${bounds.top}px`;
  flyover.style.width = `${bounds.width}px`;
  flyover.style.height = `${bounds.height}px`;
  flyover.style.opacity = '1';
  flyover.style.transform = buildFlyoverTranslate(translateY);
}

function applyFlyoverScale(flyover, scale) {
  flyover.style.scale = String(scale);
}

function createHeroFlyover(imageSrc, bounds, originBounds) {
  const landing = bounds ? getFlyoverLandingBounds(bounds) : null;
  const startBounds = originBounds || landing;
  const translateY = originBounds ? 0 : startBounds.slideDistance;
  const flyover = document.createElement('div');
  flyover.className = 'page-transition-flyover';
  applyFlyoverBounds(flyover, startBounds, translateY);
  applyFlyoverScale(flyover, 1);

  const media = document.createElement('img');
  media.src = imageSrc;
  media.alt = '';
  flyover.appendChild(media);

  document.body.appendChild(flyover);
  return flyover;
}

async function nextFrame(count = 1) {
  for (let i = 0; i < count; i += 1) {
    await new Promise((resolve) => requestAnimationFrame(resolve));
  }
}

async function waitForLayoutReady() {
  if (document.fonts?.ready) {
    await Promise.race([
      document.fonts.ready.catch(() => undefined),
      new Promise((resolve) => setTimeout(resolve, 1500)),
    ]);
  }

  await nextFrame(2);
}

async function waitForHeroMedia(hero) {
  const video = hero.querySelector('video');
  if (video?.poster) {
    await Promise.race([
      preloadImage(resolveAssetUrl(video.poster)),
      new Promise((resolve) => setTimeout(resolve, 5000)),
    ]);
  }

  const img = hero.matches('img') ? hero : hero.querySelector('img');
  if (img && !(img.complete && img.naturalWidth > 0)) {
    await Promise.race([
      new Promise((resolve) => {
        img.addEventListener('load', resolve, { once: true });
        img.addEventListener('error', resolve, { once: true });
      }),
      new Promise((resolve) => setTimeout(resolve, 5000)),
    ]);
  }

  if (video && video.readyState < 2) {
    await Promise.race([
      new Promise((resolve) => {
        video.addEventListener('loadeddata', resolve, { once: true });
        video.addEventListener('error', resolve, { once: true });
      }),
      new Promise((resolve) => setTimeout(resolve, 2000)),
    ]);
  }
}

async function measureHeroRect(hero, { fast = false, skipMediaWait = false } = {}) {
  if (!fast) {
    await resetScrollPosition();
  }

  if (!skipMediaWait && !fast) {
    await waitForHeroMedia(hero);
  }

  if (fast) {
    await nextFrame(2);
  } else {
    await waitForLayoutReady();
  }

  let previous = null;
  const attempts = fast ? 4 : 20;

  for (let attempt = 0; attempt < attempts; attempt += 1) {
    const rect = hero.getBoundingClientRect();
    if (
      isPlausibleHeroRect(rect) &&
      previous &&
      Math.abs(previous.top - rect.top) < 1 &&
      Math.abs(previous.width - rect.width) < 1
    ) {
      return rect;
    }

    previous = isPlausibleHeroRect(rect) ? rect : null;
    await nextFrame();
  }

  const fallback = hero.getBoundingClientRect();
  return isPlausibleHeroRect(fallback) ? fallback : null;
}

async function animateFlyoverSlide(flyover, bounds, hero, curtain, originBounds) {
  const mobile = isMobileViewport();
  const landing = getFlyoverLandingBounds(bounds);
  const settleDuration = mobile ? MOTION.entryMobileFinalSettle : MOTION.entryScaleSettle;
  const slideDuration = MOTION.heroSlide - MOTION.entryScaleHold - settleDuration;

  if (originBounds) {
    applyFlyoverBounds(flyover, originBounds, 0);
    applyFlyoverScale(flyover, 1);

    await addAnimation(
      flyover,
      [boundsToKeyframe(originBounds), boundsToKeyframe(landing)],
      {
        duration: slideDuration,
        easing: MOTION.easing,
      },
    );

    flyover.getAnimations().forEach((animation) => animation.cancel());
    applyFlyoverBounds(flyover, landing, 0);
    applyFlyoverScale(flyover, 1);
  } else {
    applyFlyoverBounds(flyover, landing, landing.slideDistance);
    applyFlyoverScale(flyover, 1);

    await addAnimation(
      flyover,
      [
        { transform: buildFlyoverTranslate(landing.slideDistance) },
        { transform: buildFlyoverTranslate(0) },
      ],
      {
        duration: slideDuration,
        easing: MOTION.easing,
      },
    );

    applyFlyoverBounds(flyover, landing, 0);
    applyFlyoverScale(flyover, 1);
  }

  await new Promise((resolve) => setTimeout(resolve, MOTION.entryScaleHold));

  const settledRect = hero?.getBoundingClientRect();
  const targetBounds =
    settledRect && isPlausibleHeroRect(settledRect) ? rectToBounds(settledRect) : bounds;

  const settleAnimation = mobile
    ? animateMobileSettle(flyover, landing, targetBounds, settleDuration)
    : addAnimation(
        flyover,
        [boundsToKeyframe(landing), boundsToKeyframe(targetBounds)],
        {
          duration: settleDuration,
          easing: MOTION.easing,
        },
      );

  if (curtain) {
    await Promise.all([settleAnimation, revealCurtain(curtain)]);
  } else {
    await settleAnimation;
  }

  return targetBounds;
}

function revealCurtain(curtain) {
  return runAnimation(curtain, [{ opacity: 1 }, { opacity: 0 }], {
    duration: MOTION.reveal,
    easing: MOTION.easing,
  });
}

async function fetchPageDocument(href) {
  const url = new URL(href, window.location.href);

  if (canRunFetchTransition()) {
    const response = await fetch(url.href, { credentials: 'same-origin' });
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url.href}`);
    }

    return new DOMParser().parseFromString(await response.text(), 'text/html');
  }

  return loadPageDocumentViaIframe(url.href);
}

function loadPageDocumentViaIframe(href) {
  return new Promise((resolve, reject) => {
    const iframe = document.createElement('iframe');
    iframe.hidden = true;
    iframe.setAttribute('aria-hidden', 'true');
    iframe.src = href;

    const cleanup = () => {
      iframe.remove();
    };

    iframe.addEventListener(
      'load',
      () => {
        try {
          const nextDoc = iframe.contentDocument;
          if (!nextDoc?.body) {
            throw new Error(`Failed to read ${href}`);
          }

          const html = `<!doctype html>${nextDoc.documentElement.outerHTML}`;
          cleanup();
          resolve(new DOMParser().parseFromString(html, 'text/html'));
        } catch (error) {
          cleanup();
          reject(error);
        }
      },
      { once: true },
    );

    iframe.addEventListener(
      'error',
      () => {
        cleanup();
        reject(new Error(`Failed to load ${href}`));
      },
      { once: true },
    );

    document.body.appendChild(iframe);
  });
}

function replaceFromDocument(selector, nextDoc) {
  const current = document.querySelector(selector);
  const next = nextDoc.querySelector(selector);

  if (!current || !next) {
    return false;
  }

  current.replaceWith(document.importNode(next, true));
  return true;
}

function swapPageContent(nextDoc, href) {
  document.title = nextDoc.title;
  replaceFromDocument('body > div.relative.z-2', nextDoc);
  replaceFromDocument('main', nextDoc);
  replaceFromDocument('footer.site-footer', nextDoc);

  const url = new URL(href, window.location.href);
  history.pushState({ portfolioPage: url.pathname }, '', `${url.pathname}${url.search}${url.hash}`);
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

function cleanupTransitionState(hero) {
  document.querySelector('.page-transition-curtain')?.remove();
  document.querySelector('.page-transition-flyover')?.remove();

  if (hero) {
    hero.style.visibility = '';
  }

  document.body.classList.remove('is-page-transitioning', 'is-entering-work');
  document.documentElement.classList.remove('is-page-transitioning');
}

async function handoffFlyoverToHero(flyover, hero, bounds) {
  if (!flyover) {
    if (hero) {
      await waitForHeroMedia(hero);
      hero.style.visibility = '';
    }
    return;
  }

  if (bounds) {
    applyFlyoverBounds(flyover, bounds, 0);
    applyFlyoverScale(flyover, 1);
  }

  await waitForHeroMedia(hero);
  hero.style.visibility = 'visible';
  flyover.remove();

  const video = hero.querySelector('video');
  if (video) {
    video.play().catch(() => undefined);
  }
}

async function fadePageOut(curtain) {
  const pageTargets = [
    document.querySelector('main'),
    document.querySelector('.site-header'),
    document.querySelector('footer.site-footer'),
    ...Array.from(document.querySelectorAll('.work-grid > a')),
  ].filter(Boolean);

  curtain.style.opacity = '0';

  await Promise.all([
    runAnimation(curtain, [{ opacity: 0 }, { opacity: 1 }], {
      duration: MOTION.fade,
      easing: MOTION.easing,
    }),
    ...pageTargets.map((target) =>
      runAnimation(target, [{ opacity: 1 }, { opacity: 0 }], {
        duration: MOTION.fade,
        easing: MOTION.easing,
      }),
    ),
  ]);

  curtain.style.opacity = '1';
}

async function runPageTransition(link) {
  const href = link.getAttribute('href');
  const transitionId = getTransitionId(link);
  const thumb = getThumbMedia(link);
  const fallbackImageSrc = resolveAssetUrl(
    thumb?.currentSrc || thumb?.src || thumb?.getAttribute('src') || '',
  );

  if (!href || !transitionId) {
    return false;
  }

  const originRect = getTransitionOriginRect(link);
  const originBounds =
    originRect && isPlausibleHeroRect(originRect) ? rectToBounds(originRect) : null;

  document.body.classList.add('is-page-transitioning');
  document.documentElement.classList.add('is-page-transitioning');
  const curtain = ensureTransitionCurtain();

  let flyover = null;
  if (originBounds && fallbackImageSrc) {
    flyover = createHeroFlyover(fallbackImageSrc, null, originBounds);
    if (!isMediaReady(thumb)) {
      preloadImage(fallbackImageSrc);
    }
  } else if (isWorkPageNavLink(link)) {
    const currentHero = getHeroTarget();
    const currentImage = currentHero ? getHeroFlyoverImage(currentHero, '') : '';
    const currentRect = currentHero?.getBoundingClientRect();
    if (currentImage && currentRect && isPlausibleHeroRect(currentRect)) {
      flyover = createHeroFlyover(currentImage, null, rectToBounds(currentRect));
    }
  }

  let nextDoc;
  let destinationImagePreload = null;
  try {
    [nextDoc] = await Promise.all([fetchPageDocument(href), fadePageOut(curtain)]);

    const nextHero = nextDoc.querySelector(
      `.page-transition-hero[data-transition-id="${CSS.escape(transitionId)}"]`,
    );
    if (nextHero) {
      const destinationImage = getHeroFlyoverImage(nextHero, fallbackImageSrc);
      if (destinationImage) {
        destinationImagePreload = preloadImage(destinationImage);
      }
    }
  } catch {
    cleanupTransitionState();
    window.location.href = href;
    return false;
  }

  swapPageContent(nextDoc, href);
  document.body.classList.add('is-entering-work');
  curtain.style.opacity = '1';
  await resetScrollPosition();

  const hero = getHeroTarget();
  if (!hero || hero.dataset.transitionId !== transitionId) {
    cleanupTransitionState(hero);
    window.location.href = href;
    return false;
  }

  const heroRect = await measureHeroRect(hero, { fast: true, skipMediaWait: true });
  const bounds = heroRect ? rectToBounds(heroRect) : null;

  if (bounds) {
    const imageSrc = getHeroFlyoverImage(hero, fallbackImageSrc);
    let transitionOriginBounds = originBounds;

    if (!flyover) {
      flyover = createHeroFlyover(imageSrc, bounds, null);
    } else if (!transitionOriginBounds && isWorkPageNavLink(link)) {
      const flyoverRect = flyover.getBoundingClientRect();
      if (isPlausibleHeroRect(flyoverRect)) {
        transitionOriginBounds = rectToBounds(flyoverRect);
      }
    }

    hero.style.visibility = 'hidden';

    const settledBounds = await animateFlyoverSlide(
      flyover,
      bounds,
      hero,
      curtain,
      transitionOriginBounds,
    );

    await handoffFlyoverToHero(flyover, hero, settledBounds);
  } else {
    flyover?.remove();
    await revealCurtain(curtain);
    await waitForHeroMedia(hero);
    hero.style.visibility = '';
  }

  curtain.remove();
  document.body.classList.remove('is-page-transitioning', 'is-entering-work');
  document.documentElement.classList.remove('is-page-transitioning');

  return true;
}

function prefetchTransitionPage(href) {
  if (!href || !canRunFetchTransition()) {
    return;
  }

  const url = new URL(href, window.location.href).href;
  fetch(url, { credentials: 'same-origin' }).catch(() => undefined);
}

function initTransitions() {
  document.addEventListener(
    'pointerenter',
    (event) => {
      const link = event.target.closest('a[href]');
      if (!link || !isTransitionLink(link)) {
        return;
      }

      prefetchTransitionPage(link.getAttribute('href'));
    },
    true,
  );

  document.addEventListener(
    'click',
    (event) => {
      if (prefersReducedMotion()) {
        return;
      }

      const link = event.target.closest('a[href]');
      if (!link || !isTransitionLink(link)) {
        return;
      }

      const href = link.getAttribute('href');
      const transitionId = getTransitionId(link);

      if (!href || !transitionId) {
        return;
      }

      event.preventDefault();
      event.stopImmediatePropagation();

      runPageTransition(link).catch(() => {
        cleanupTransitionState();
        window.location.href = href;
      });
    },
    true,
  );
}

function bootTransitions() {
  if (getPageName() === 'index' || isCurrentWorkPage()) {
    initTransitions();
  }
}

window.addEventListener('popstate', () => {
  window.location.reload();
});

bootTransitions();
