import * as Matter from "matter-js";
import p5 from "p5";

type Shape = {
    body: Matter.Body,
    height?: number,
    width?: number,
    text?: string,
    type: 'circle' | 'rect' | 'text',
    options?: {
        wordPart?: boolean,
        fill?: string,
    }
}

const sketchText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime aliquid nisi cumque iure? Vel itaque minus impedit. Accusantium natus obcaecati in cum blanditiis quae! Earum esse cumque optio quod autem?';
const sketchWord = 'lorem';

const sketch = function (p: p5) {
    const engine = Matter.Engine.create({
        gravity: { y: 0 },
    });
    const render = Matter.Render.create({
        canvas: document.querySelector('#matter'),
        engine,
        options: {
            height: p.windowHeight,
            width: p.windowWidth,
        }
    });
    const runner = Matter.Runner.create();

    //

    const shapes: Shape[] = [];
    const onDrawListeners = [
        () => {
            // Update the physics engine
            Matter.Engine.update(engine);
        },
        () => {
            // reset the canvas
            p.background("black");
            p.fill("white");
        },
        () => {
            // render all shapes
            // shapes.forEach(renderShape);
        }
    ];

    function addShape(shape: Shape) {
        shapes.push(shape);
        Matter.Composite.add(engine.world, shape.body);

        return shape;
    }

    function renderShape(shape: Shape) {
        p.push();

        p.translate(shape.body.position.x, shape.body.position.y);
        p.rotate(shape.body.angle);

        if (shape.options?.fill) {
            p.fill(shape.options.fill);
        }

        switch (shape.type) {
            case 'circle':
                p.circle(0, 0, shape.width! * 2);
                break;
            case 'text':
                p.text(shape.text!, shape.width! / -2, shape.height! / 4);
                break;
            case 'rect':
                p.rect(shape.width! / -2, shape.height! / -2, shape.width!, shape.height!);
                break;
            default:
                break;
        }

        p.pop();
    }

    //

    const textSize = 30;
    const letters: Shape[] = [];

    function makeItFall() {
        engine.gravity.y = 0.15;

        letters.forEach((letter) => {
            Matter.Body.applyForce(
                letter.body,
                { x: p.random(0, p.width), y: p.height / 2 },
                { x: p.random(0.0001, 0.001), y: p.random(0.0001, 0.001) },
            )
        })

        sketchWord.split('').forEach((_letter, index) => {
            const letter = p.shuffle(letters).find(({ text }) => text === _letter);
            if (!letter) {
                return;
            }

            const targetPosition = {
                x: p.width * 0.1 + (index * 50),
                y: p.height - p.height * 0.1,
            };

            const onDraw = () => {
                const forceMagnitude = 0.001;
                const deltaX = targetPosition.x - letter.body.position.x;
                const deltaY = targetPosition.y - letter.body.position.y;

                // Normalize the direction
                const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
                const forceX = (deltaX / distance) * forceMagnitude;
                const forceY = (deltaY / distance) * forceMagnitude;

                Matter.Body.setAngle(letter.body, letter.body.angle / 2);

                if (distance > letter.width * 2) {
                    Matter.Body.applyForce(letter.body, letter.body.position, { x: forceX, y: forceY });
                } else {
                    Matter.Body.setAngle(letter.body, 0);
                    Matter.Body.setPosition(letter.body, targetPosition);
                    Matter.Body.setStatic(letter.body, true);

                    onDrawListeners.splice(onDrawListeners.indexOf(onDraw), 1);
                }
            };

            setTimeout(() => {
                letter.body.collisionFilter.mask = 0;
                onDrawListeners.push(onDraw);
            }, 2500);
        });
    }

    function writeText() {
        const interval = setInterval(() => {
            if (letters.length === sketchText.length) {
                clearInterval(interval);
                makeItFall();
                return;
            }

            nextLetter();
        }, 16)
    }

    function nextLetter() {
        if (letters.length === sketchText.length) {
            return;
        }

        const letter = sketchText[letters.length];
        const height = textSize;
        const width = p.textWidth(letter);

        let x = p.width * 0.1;
        let y = p.height * 0.1;
        if (letters.length > 0) {
            const lastLetter = letters.at(-1);

            x = lastLetter?.body.position.x! + lastLetter?.width!;
            y = lastLetter?.body.position.y!;

            if (x > p.width - p.width * 0.1) {
                x = p.width * 0.1;
                y = lastLetter?.body.position.y! + textSize * 1.2;
            }
        }

        letters.push(addShape({
            body: Matter.Bodies.rectangle(x, y, width, height),
            height,
            width,
            text: letter,
            type: 'text',
        }))
    }

    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.textSize(textSize);

        p.createButton("click")
            .position(10, 10)
            .mousePressed(writeText);

        p.createButton("debug")
            .position(50, 10)
            .mousePressed(() => {
                const m = document.querySelector("#matter");
                m.style.opacity = m.style.opacity === '1' ? '0' : '1';
            });

        Matter.Render.run(render);
        Matter.Runner.run(runner, engine);
    };

    p.draw = function () {
        onDrawListeners.forEach((fn) => fn())
    };
};

new p5(sketch);