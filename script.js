// script.js

document.addEventListener('DOMContentLoaded', () => {
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

function initIndexScrollNav() {
    const sectionIds = ['work', 'talks', 'articles'];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    if (sections.length !== sectionIds.length) {
        return;
    }

    const navLinks = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
    if (navLinks.length === 0) {
        return;
    }

    const headerOffset = 80;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let activeId = null;

    const setActive = (id) => {
        if (activeId === id) {
            return;
        }

        activeId = id;

        navLinks.forEach((link) => {
            link.classList.toggle('current', link.getAttribute('href') === `#${id}`);
        });
    };

    const updateActiveSection = () => {
        let currentId = null;

        for (const id of sectionIds) {
            const section = document.getElementById(id);
            if (section && section.getBoundingClientRect().top <= headerOffset) {
                currentId = id;
            }
        }

        setActive(currentId);
    };

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
            setActive(target.id);
        });
    });

    window.addEventListener('scroll', updateActiveSection, { passive: true });
    updateActiveSection();
}
