import * as Matter from "matter-js";
import Two from "two.js";
import type { Shape } from "two.js/src/shape";
import p5 from "p5";

const sketchText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime aliquid nisi cumque iure? Vel itaque minus impedit. Accusantium natus obcaecati in cum blanditiis quae! Earum esse cumque optio quod autem?';
const sketchWord = 'lorem';

//

const engine = Matter.Engine.create({
    gravity: { y: 0.01 },
});
const two = new Two({
    type: Two.Types.webgl,
    autostart: true,
    fullscreen: true,
})
const runner = Matter.Runner.create();

//

const onUpdateListeners = [
    () => {

        Matter.Engine.update(engine);
    }
];

function update() {
    onUpdateListeners.forEach((fn) => fn())
}

two.bind('update', update);
two.appendTo(document.body);
Matter.Runner.run(runner, engine);

//
//
//

type Element = {
    body: Matter.Body,
    shape: Shape
}

const elements: Element[] = [];

function addElement() {
    const x = 100;
    const y = 100;
    const width = p5.prototype.random(10, 40);
    const height = 50;

    const element = {
        body: Matter.Bodies.circle(x, y, width),
        shape: two.makeCircle(x, y, width),
        width,
        height,
    }

    Matter.Composite.add(engine.world, element.body);
    elements.push(element);
}

function updateElement(element: Element) {
    element.shape.position.x = element.body.position.x;
    element.shape.position.y = element.body.position.y;
}

onUpdateListeners.push(() => {
    elements.forEach(updateElement);
})

window.addEventListener('click', () => {
    setInterval(addElement, p5.prototype.random(32, 150));
})

//

// const render = Matter.Render.create({
//     canvas: document.querySelector('#matter'),
//     engine,
//     options: {
//         height: window.innerHeight,
//         width: window.innerWidth,
//     }
// });
// Matter.Render.run(render);