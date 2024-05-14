export default function () {
    const parallax = document.querySelector('.js_parallax');
    const title = parallax.querySelector('.js_title');

    const SPEED = 2;
    const OPACITY = -0.2;

    // total parallax height
    const parallaxTotalHeight = parallax.scrollHeight;
    // console.log('parallaxTotalHeight', parallaxTotalHeight);

    // console.log('parallax.getBoundingClientRect()', parallax.getBoundingClientRect());

    // viewable parallax height
    const parallaxHeight = parallax.getBoundingClientRect().height.toFixed(0);
    // console.log('parallaxHeight', parallaxHeight);

    // how much till the parallax end
    const restOfParallax = parallaxTotalHeight - parallaxHeight;
    // console.log('restOfParallax', restOfParallax);

    function changeTitlePos() {
        // how much we scroll
        // console.log('parallax.scrollTop', parallax.scrollTop);

        const titleTransformY = (parallax.scrollTop / restOfParallax).toFixed(3) * 100 * SPEED;
        // console.log('titleTransformY', titleTransformY);

        const titleOpacity = 1 - (parallax.scrollTop / restOfParallax).toFixed(1) + OPACITY;
        // console.log('titleOpacity', titleOpacity);

        title.setAttribute(
            'style',
            `transform: translateY(${titleTransformY}%); opacity: ${titleOpacity};`
        );

        if (parallax.scrollTop === 0) {
            title.style.opacity = 1;
        }
    }

    parallax.onscroll = changeTitlePos;
}
