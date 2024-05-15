export default function () {
    const parallax = document.querySelector('.js_parallax');
    const title = parallax.querySelector('.js_title');

    const SPEED = 1.5;
    const OPACITY = -0.2;

    // viewable parallax height
    const parallaxHeight = parallax.getBoundingClientRect().height.toFixed(0);
    // console.log('parallaxHeight', parallaxHeight);

    function changeTitlePos() {
        // how much have we scrolled
        // console.log('parallax.scrollTop', parallax.scrollTop);

        const titleTransformY = (parallax.scrollTop / parallaxHeight).toFixed(3) * 100 * SPEED;

        const titleOpacity = 1 - (parallax.scrollTop / parallaxHeight).toFixed(1) + OPACITY;

        title.setAttribute(
            'style',
            `transform: translateY(${titleTransformY}%); opacity: ${titleOpacity};`
        );

        if (parallax.scrollTop === 0) {
            title.style.opacity = 1;
        }

        let newPos = document.documentElement.clientHeight / 9.5;

        if (titleTransformY.toFixed(0) >= newPos) {
            title.setAttribute(
                'style',
                `transform: translateY(${newPos}%); opacity: ${titleOpacity};`
            );
        }
    }

    parallax.onscroll = changeTitlePos;
}
