import * as Matter from "matter-js";
import p5 from "p5";

// 30 random words
const availableWords = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'exercitation', 'ullamco', 'laboris'];
// let counter = 0;

const sketch = function (p: p5) {
    const engine = Matter.Engine.create({
        gravity: {
            scale: 0.0005
        },
        positionIterations: 10,
    });
    const runner = Matter.Runner.create({});

    const balls: Matter.Body[] = [];
    const words: { body: Matter.Body, width: number, height: number, text: string }[] = [];
    const ground = Matter.Bodies.rectangle(p.windowWidth / 2, p.windowHeight, p.windowWidth + 20, 10, { isStatic: true });

    let font;

    p.preload = function () {
        font = p.loadFont('fonts/MonaspaceRadon-Regular.otf');
    }

    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight);

        // Add the ground and the ball to the world
        Matter.Composite.add(engine.world, [ground]);
        Matter.Runner.run(runner, engine);

        p.background("black");
        p.textFont(font!);

        // Schedule a new word to be added
        setInterval(() => {
            // counter++;
            // if (counter === 10) {
            engine.gravity.scale = p.random(0.0005, 0.001);
            // }

            const x = p.random(0, p.width);
            const y = p.random(0, p.height / 3); // Limit y to the upper 1/3

            const text = p.random(availableWords);
            const height = p.random(p.windowHeight / 20, p.windowHeight / 40);
            const width = height / 1.6 * text.length;

            const newWord = {
                body: Matter.Bodies.rectangle(x, y, width, height, { restitution: 0.8 }),
                width,
                height,
                text,
            }

            Matter.Composite.add(engine.world, newWord.body);
            words.push(newWord);
        }, p.random(100, 300));
    };

    p.draw = function () {
        p.background("black");

        // Update the physics engine
        Matter.Engine.update(engine);

        // Render the ground
        p.fill(128);
        p.rectMode(p.CENTER);
        p.rect(ground.position.x, ground.position.y, p.windowWidth, 10);

        // Render all words
        words.forEach((word) => {
            p.fill("white");
            // p.rect(word.body.position.x, word.body.position.y, word.width, word.height);

            // p.fill("red");
            p.textSize(word.height);
            p.text(word.text, word.body.position.x, word.body.position.y + word.height * 0.85, word.width, word.height)
        });
    };
};

new p5(sketch);