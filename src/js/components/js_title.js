export default function () {
    const parallax = document.querySelector('.js_parallax');
    const title = document.querySelector('.js_title');

    setTimeout(() => {
        title.classList.add('title-anim');
    }, 0);

    setTimeout(() => {
        title.style.opacity = 1;
        title.classList.remove('title-anim');
    }, 1500);

    const SPEED = 1;
    const OPACITY = -0.2;

    // viewable parallax height
    const parallaxHeight = parallax.getBoundingClientRect().height.toFixed(0);
    // console.log('parallaxHeight', parallaxHeight);

    function changeTitlePos() {
        // how much have we scrolled
        // console.log('parallax.scrollTop', parallax.scrollTop);

        const titleTransformY = (parallax.scrollTop / parallaxHeight).toFixed(3) * 100 * SPEED;

        // console.log('parallax.scrollTop / parallaxHeight', parallax.scrollTop / parallaxHeight);

        const titleOpacity = 1 - (parallax.scrollTop / parallaxHeight).toFixed(1) + OPACITY;

        title.setAttribute(
            'style',
            `transform: translate(0, ${titleTransformY}%); opacity: ${titleOpacity};`
        );

        if (parallax.scrollTop === 0) {
            title.style.opacity = 1;
        }

        // viewable window/client height
        let newPos = document.documentElement.clientHeight / 9.5;

        // to prevent unlimited scrolling
        if (titleTransformY.toFixed(0) >= newPos) {
            title.setAttribute(
                'style',
                `transform: translate(0, ${newPos}%); opacity: ${titleOpacity};`
            );
        }
    }

    parallax.onscroll = changeTitlePos;
}
