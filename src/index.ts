import * as Matter from "matter-js";
import Two from "two.js";
import Text from 'two.js/src/text';
import type { Shape } from "two.js/src/shape";
import p5 from "p5";

const engine = Matter.Engine.create({
    gravity: { y: 0.01 },
});
const two = new Two({
    type: Two.Types.canvas,
    autostart: true,
    fullscreen: true,
})

const onUpdateListeners: (() => void)[] = [];

function update() {
    Matter.Engine.update(engine);
    onUpdateListeners.forEach((fn) => fn())
}

two.bind('update', update);
two.appendTo(document.body);

const runner = Matter.Runner.create();
Matter.Runner.run(runner, engine);

//
//
//

type Element = {
    body: Matter.Body,
    shape: Shape,
    height: number,
    width: number,
}

const elements: Element[] = [];

function addElement(_element) {
    // const x = 100;
    // const y = 100;
    // const width = p5.prototype.random(10, 40);
    // const height = 50;

    // const { height, width } = _element;

    // const body = Matter.Bodies.circle(_element.x, _element.y, width);
    // const shape = two.makeCircle(_element.x, _element.y, width);
    // const shape = two.makeRectangle(_element.x, _element.y, width, height);
    const shape = two.makeText(_element.text, _element.x, _element.y, {
        size: 40,
    });
    const { height, width } = shape.getBoundingClientRect();
    const body = Matter.Bodies.rectangle(_element.x, _element.y, width, shape.getBoundingClientRect().height);

    const element = {
        body,
        shape,
        width,
        height,
    }

    Matter.Composite.add(engine.world, element.body);
    elements.push(element);

    return element;
}

function updateElement(element: Element) {
    element.shape.rotation = element.body.angle;
    element.shape.position.x = element.body.position.x;
    element.shape.position.y = element.body.position.y;
}

onUpdateListeners.push(() => {
    elements.forEach(updateElement);
})

//

const sketchWord = 'lorem';
const sketchText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime aliquid nisi cumque iure? Vel itaque minus impedit. Accusantium natus obcaecati in cum blanditiis quae! Earum esse cumque optio quod autem? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime aliquid nisi cumque iure? Vel itaque minus impedit. Accusantium natus obcaecati in cum blanditiis quae! Earum esse cumque optio quod autem?';
const letters: Element[] = [];
const textSize = 40;

function writeNextLetter() {
    if (letters.length === sketchText.length) {
        return;
    }

    const letter = sketchText[letters.length];
    const height = textSize;
    const width = textSize / 2;

    let x = two.width * 0.1;
    let y = two.height * 0.1;
    if (letters.length > 0) {
        const lastLetter = letters.at(-1);

        x = lastLetter?.body.position.x! + lastLetter?.width!;
        y = lastLetter?.body.position.y!;

        if (x > two.width - two.width * 0.1) {
            x = two.width * 0.1;
            y = lastLetter?.body.position.y! + textSize * 1.2;
        }
    }

    letters.push(addElement({
        x,
        y,
        height,
        width,
        text: letter,
    }))
}

function writeText() {
    const interval = setInterval(() => {
        if (letters.length === sketchText.length) {
            clearInterval(interval);
            engine.gravity.y = -0.02;
            return;
        }

        writeNextLetter();
    }, 16)
}

window.addEventListener('click', () => {
    writeText();
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