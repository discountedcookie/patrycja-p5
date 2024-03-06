import * as Matter from "matter-js";
import p5 from "p5";

const availableWords = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'exercitation', 'ullamco', 'laboris'];

const sketch = function (p: p5) {
    const engine = Matter.Engine.create({});
    const runner = Matter.Runner.create({});

    const words: { body: Matter.Body, width: number, height: number, text: string }[] = [];

    let boxBottom;

    function createBox() {
        const bottom = Matter.Bodies.rectangle(p.width / 2, p.height, p.width + 100, 10, { isStatic: true });
        const left = Matter.Bodies.rectangle(-100, p.height, 100, p.height, { isStatic: true });
        const right = Matter.Bodies.rectangle(p.width + 100, p.height, 100, p.height, { isStatic: true });

        boxBottom = bottom;

        return [bottom, left, right]
    }

    function createWord() {
        engine.gravity.scale = p.random(0.0005, 0.001);

        const x = p.random(0, p.width);
        const y = p.random(-100, 0);

        const text = p.random(availableWords);
        const height = p.random(p.height / 20, p.height / 40);
        const width = p.textWidth(text) * (height / 12.75);

        return {
            body: Matter.Bodies.rectangle(x, y, width, height, { angle: p.random(-0.2, 0.2), mass: (height * width) / 5000 }),
            width,
            height,
            text,
        }
    }

    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight);

        // Add the ground and sides of the box to the world
        Matter.Composite.add(engine.world, createBox());
        Matter.Runner.run(runner, engine);

        p.background("black");

        // Schedule a new word to be added
        const interval = setInterval(() => {
            const word = createWord();
            Matter.Composite.add(engine.world, word.body);
            words.push(word)

            if (words.length === 50) {
                clearInterval(interval)
                engine.gravity.scale = -0.00001
            }
        }, p.random(200, 500));
    };

    p.draw = function () {
        // reset the canvas
        p.background("black");

        // Update the physics engine
        Matter.Engine.update(engine);

        // Render the ground and its sides
        p.fill("black");
        p.rectMode(p.CENTER);
        p.rect(boxBottom!.position.x, boxBottom!.position.y, p.width, 10);

        // Render all words
        p.fill("white");
        p.angleMode(p.RADIANS);
        words.forEach((word) => {
            p.push();

            p.translate(word.body.position.x, word.body.position.y);
            p.rotate(word.body.angle);

            p.textSize(word.height);
            p.text(word.text, word.width / -2, word.height / 3);

            p.pop();
        });
    };
};

new p5(sketch);