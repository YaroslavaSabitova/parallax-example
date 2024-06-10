export default function () {
    const header = document.querySelector('.js_header');
    const parallax = document.querySelector('.js_parallax');

    parallax.onscroll = function () {
        if (parallax.scrollTop > 0) {
            // header.setAttribute(
            //     'style',
            //     'background-color: rgba(0, 0, 0, 0.3); backdrop-filter: blur(15px)'
            // );

            header.classList.add('header-fixed');
        } else {
            // header.removeAttribute('style');

            header.classList.remove('header-fixed');
        }
    };
}
