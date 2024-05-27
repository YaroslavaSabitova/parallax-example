export default function () {
    const header = document.querySelector('.js_header');
    const parallax = document.querySelector('.js_parallax');

    let scrollStarted = 0;


    const parallaxTop = parallax.getBoundingClientRect().top.toFixed(0);

    if () {
        header.classList.add('header-fixed');
    } else {
        header.classList.remove('header-fixed');
    }

    scrollStarted = scrollTop;
}
