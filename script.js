// script.js

document.addEventListener('DOMContentLoaded', () => {
    initIndexPageLoadFade();

    // Vimeo player functionality
    const vimeoCover = document.getElementById('vimeo-cover');
    const vimeoIframe = document.getElementById('vimeo-iframe');

    if (vimeoCover && vimeoIframe) {
        vimeoCover.addEventListener('click', () => {
            // Set the iframe src to the data-src value (which includes autoplay=1)
            const videoSrc = vimeoIframe.getAttribute('data-src');
            if (videoSrc) {
                vimeoIframe.setAttribute('src', videoSrc);
            }
            // Hide the cover to reveal the iframe
            vimeoCover.style.display = 'none';
        });
    }

    initIndexScrollNav();
});

const INDEX_PAGE_FADE_MS = 800;

function initIndexPageLoadFade() {
    if (!document.body.classList.contains('is-index-loading')) {
        return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.body.classList.remove('is-index-loading');

    if (prefersReducedMotion) {
        return;
    }

    document.body.classList.add('is-index-enter');
    window.setTimeout(() => {
        document.body.classList.remove('is-index-enter');
    }, INDEX_PAGE_FADE_MS);
}

function initIndexScrollNav() {
    const navLinks = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
    if (navLinks.length === 0) {
        return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    navLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            const href = link.getAttribute('href');
            if (!href?.startsWith('#')) {
                return;
            }

            const target = document.getElementById(href.slice(1));
            if (!target) {
                return;
            }

            event.preventDefault();
            target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
            history.pushState(null, '', href);
            link.blur();
        });
    });
}
