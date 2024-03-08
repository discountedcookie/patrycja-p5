import * as Matter from "matter-js";
import Two from "two.js";
import Text from 'two.js/src/text';
import type { Shape } from "two.js/src/shape";
import p5 from "p5";

let engine: Matter.Engine;
let two: Two;

const onUpdateListeners: (() => void)[] = [];

function init() {
    // matter
    engine = Matter.Engine.create({
        gravity: { y: 0.01 },
    });

    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine!);

    // two
    two = new Two({
        type: Two.Types.canvas,
        autostart: true,
        fullscreen: true,
    })

    two!.bind('update', update);
    two!.appendTo(document.body);
}

function update() {
    Matter.Engine.update(engine);
    onUpdateListeners.forEach((fn) => fn())
}

init();

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

const views = {
    threeLayers: import('./threeLayers')
}

async function selectView(view: keyof typeof views) {
    init();
    (await views[view]).start(two, Matter, (fn) => {
        onUpdateListeners.push(fn);
    });
}

const selectEl = document.getElementById('select');
selectView('threeLayers');

// const render = Matter.Render.create({
//     canvas: document.querySelector('#matter'),
//     engine,
//     options: {
//         height: window.innerHeight,
//         width: window.innerWidth,
//     }
// });
// Matter.Render.run(render);