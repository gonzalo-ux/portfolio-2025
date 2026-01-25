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
});
