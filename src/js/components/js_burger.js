export default function () {
    const menu = document.querySelector('.js_menu');
    const burgerBtn = document.querySelector('.js_burger');
    const parallax = document.querySelector('.js_parallax');

    burgerBtn.addEventListener('click', () => {
        menu.classList.toggle('menu-open');

        if (menu.classList.contains('menu-open')) {
            document.body.setAttribute('style', 'overflow: hidden');
            parallax.setAttribute('style', 'overflow: hidden');
        } else {
            document.body.removeAttribute('style');
            parallax.removeAttribute('style', 'overflow: hidden');
        }
    });
}
