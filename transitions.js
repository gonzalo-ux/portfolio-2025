const MOTION = {
  fade: 300,
  heroSlide: 600,
  reveal: 100,
  entryScaleHold: 50,
  entryScaleSettle: 100,
  easing: 'cubic-bezier(0.33, 1, 0.68, 1)',
};

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

function isWorkIndexLink(link) {
  const href = link.getAttribute('href');
  if (!href || link.target === '_blank') {
    return false;
  }

  try {
    const url = new URL(href, window.location.href);
    return /^work-\d+\.html$/.test(url.pathname.split('/').pop() || '');
  } catch {
    return false;
  }
}

function getTransitionId(link) {
  return link.dataset.transitionId || null;
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
  const aspect = bounds.height / bounds.width;

  return {
    left: 0,
    top: bounds.top,
    width: viewportWidth,
    height: viewportWidth * aspect,
    slideDistance: bounds.slideDistance,
  };
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

function buildFlyoverTranslate(translateY) {
  return `translate3d(0, ${translateY}px, 0)`;
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

function createHeroFlyover(imageSrc, bounds) {
  const entry = entryBoundsFromHeroBounds(bounds);
  const flyover = document.createElement('div');
  flyover.className = 'page-transition-flyover';
  applyFlyoverBounds(flyover, entry, entry.slideDistance);
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
  const img = hero.matches('img') ? hero : hero.querySelector('img');
  if (img && !(img.complete && img.naturalWidth > 0)) {
    await Promise.race([
      new Promise((resolve) => {
        img.addEventListener('load', resolve, { once: true });
        img.addEventListener('error', resolve, { once: true });
      }),
      new Promise((resolve) => setTimeout(resolve, 2000)),
    ]);
  }

  const video = hero.querySelector('video');
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

async function measureHeroRect(hero, { fast = false } = {}) {
  await resetScrollPosition();
  await waitForHeroMedia(hero);

  if (fast) {
    await nextFrame(4);
  } else {
    await waitForLayoutReady();
  }

  let previous = null;
  const attempts = fast ? 8 : 20;

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

async function animateFlyoverSlide(flyover, bounds) {
  const entry = entryBoundsFromHeroBounds(bounds);
  const slideDuration = MOTION.heroSlide - MOTION.entryScaleHold - MOTION.entryScaleSettle;

  applyFlyoverBounds(flyover, entry, entry.slideDistance);
  applyFlyoverScale(flyover, 1);

  await addAnimation(
    flyover,
    [
      { transform: buildFlyoverTranslate(entry.slideDistance) },
      { transform: buildFlyoverTranslate(0) },
    ],
    {
      duration: slideDuration,
      easing: MOTION.easing,
    },
  );

  applyFlyoverBounds(flyover, entry, 0);
  applyFlyoverScale(flyover, 1);

  await new Promise((resolve) => setTimeout(resolve, MOTION.entryScaleHold));

  await addAnimation(
    flyover,
    [boundsToKeyframe(entry), boundsToKeyframe(bounds)],
    {
      duration: MOTION.entryScaleSettle,
      easing: MOTION.easing,
    },
  );
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

function handoffFlyoverToHero(flyover, hero, bounds) {
  if (!flyover) {
    if (hero) {
      hero.style.visibility = '';
    }
    return;
  }

  if (bounds) {
    applyFlyoverBounds(flyover, bounds, 0);
    applyFlyoverScale(flyover, 1);
  }

  hero.style.visibility = 'visible';
  flyover.remove();

  const video = hero.querySelector('video');
  if (video) {
    video.play().catch(() => undefined);
  }
}

async function fadeHomeToBlack(curtain) {
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

  if (!href || !transitionId || !fallbackImageSrc) {
    return false;
  }

  document.body.classList.add('is-page-transitioning');
  document.documentElement.classList.add('is-page-transitioning');
  const curtain = ensureTransitionCurtain();

  let nextDoc;
  try {
    [nextDoc] = await Promise.all([fetchPageDocument(href), fadeHomeToBlack(curtain)]);
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

  hero.style.visibility = 'hidden';

  const heroRect = await measureHeroRect(hero, { fast: true });
  const bounds = heroRect ? rectToBounds(heroRect) : null;

  if (bounds) {
    const imageSrc = getHeroFlyoverImage(hero, fallbackImageSrc);
    await preloadImage(imageSrc);

    const flyover = createHeroFlyover(imageSrc, bounds);
    await animateFlyoverSlide(flyover, bounds);

    await runAnimation(curtain, [{ opacity: 1 }, { opacity: 0 }], {
      duration: MOTION.reveal,
      easing: MOTION.easing,
    });

    handoffFlyoverToHero(flyover, hero, bounds);
  } else {
    await runAnimation(curtain, [{ opacity: 1 }, { opacity: 0 }], {
      duration: MOTION.reveal,
      easing: MOTION.easing,
    });
    hero.style.visibility = '';
  }

  curtain.remove();
  document.body.classList.remove('is-page-transitioning', 'is-entering-work');
  document.documentElement.classList.remove('is-page-transitioning');

  return true;
}

function initIndexTransitions() {
  document.addEventListener(
    'click',
    (event) => {
      if (prefersReducedMotion()) {
        return;
      }

      const link = event.target.closest('a[data-transition-id][href]');
      if (!link || !link.closest('.work-grid') || !isWorkIndexLink(link)) {
        return;
      }

      const href = link.getAttribute('href');
      const transitionId = getTransitionId(link);
      const thumb = getThumbMedia(link);
      const fallbackImageSrc = resolveAssetUrl(
        thumb?.currentSrc || thumb?.src || thumb?.getAttribute('src') || '',
      );

      if (!href || !transitionId || !fallbackImageSrc) {
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
  if (getPageName() === 'index') {
    initIndexTransitions();
  }
}

window.addEventListener('popstate', () => {
  window.location.reload();
});

bootTransitions();
