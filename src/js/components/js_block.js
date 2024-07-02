export default function () {
    const blocks = document.querySelectorAll('.js_block');

    const parallax = document.querySelector('.js_parallax');
    // viewable parallax height
    const parallaxHeight = parallax.clientHeight;
    // console.log('parallaxHeight', parallaxHeight);

    function scrolling() {
        for (let i = 0; i < blocks.length; i++) {
            const blockItem = blocks[i];

            if (isPartiallyVisible(blockItem)) {
                blockItem.classList.add('active');
            }
            // else {
            //     blockItem.classList.remove('active');
            // }
        }
    }

    // add anim, when block is partially visible
    function isPartiallyVisible(element) {
        const elementBoundary = element.getBoundingClientRect();
        const top = elementBoundary.top;
        const bottom = elementBoundary.bottom;
        const height = elementBoundary.height;

        return top + height >= 0 && height + parallaxHeight > bottom;
    }

    parallax.addEventListener('scroll', scrolling);
}
