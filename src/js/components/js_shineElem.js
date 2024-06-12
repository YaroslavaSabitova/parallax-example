export default function () {
    const shineContainer = document.querySelector('.js_shine-container');
    const shineElement = document.querySelector('.js_shine-element');

    shineContainer.addEventListener('mousemove', event => {
        shineElement.classList.add('active');

        // console.log('event', event);
        // console.log('event.clientX', event.clientX);
        // console.log('event.clientY', event.clientY);

        const rect = shineContainer.getBoundingClientRect();

        // console.log('rect', rect);
        // console.log('rect.left', rect.left);
        // console.log('rect.top', rect.top);

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        shineElement.style.left = `${x}px`;
        shineElement.style.top = `${y}px`;
    });

    shineContainer.addEventListener('mouseout', () => {
        shineElement.classList.remove('active');
    });
}
