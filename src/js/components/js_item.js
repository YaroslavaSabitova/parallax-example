export default function () {
    const items = document.querySelectorAll('.js_item');

    const SPEED = 0.03;

    function onCardMove(event) {
        const box = event.currentTarget.querySelector('.js_box');

        console.log('event:', event);

        const x = (event.offsetX - box.offsetWidth / 2) * SPEED;
        const y = -(event.offsetY - box.offsetHeight / 2) * SPEED;

        box.setAttribute('style', `transform: rotateX(${y}deg) rotateY(${x}deg)`);
    }

    function onCardOut(event) {
        const box = event.currentTarget.querySelector('.js_box');
        box.removeAttribute('style');
    }

    items.forEach(item => {
        item.onmousemove = onCardMove;
        item.onmouseout = onCardOut;
    });
}
