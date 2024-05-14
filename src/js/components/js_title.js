export default function () {
    const parallax = document.querySelector('.js_parallax');
    const title = parallax.querySelector('.js_title');

    const SPEED = 2;

    // высота всего параллакса
    const parallaxTotalHeight = parallax.scrollHeight;
    console.log('parallaxTotalHeight', parallaxTotalHeight);

    // видимая высота параллакса
    const parallaxHeight = parallax.getBoundingClientRect().height.toFixed(0);
    console.log('parallaxHeight', parallaxHeight);

    // сколько осталось прокрутить до конца параллакса
    const restOfParallax = parallaxTotalHeight - parallaxHeight;
    console.log('restOfParallax', restOfParallax);

    function changeTitlePos() {
        // на сколько прокрутили
        console.log('parallax.scrollTop', parallax.scrollTop);

        const titleTransformY = (parallax.scrollTop / restOfParallax).toFixed(3) * 100 * SPEED;
        console.log('titleTransformY', titleTransformY);

        title.setAttribute('style', `transform: translateY(${titleTransformY}%);`);
    }

    parallax.onscroll = changeTitlePos;
}
