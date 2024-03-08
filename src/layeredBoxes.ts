import * as R from 'radash';
import p5 from "p5";

const blobsNumber = 16;

// console.log(Two[Two.Types.webgl].Utils);
// console.log(Two.WebGLRenderer.Utils)

export function start(p: p5) {
    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
        p.background("black");
    }

    p.draw = function () {
        p.background("black");

        // p.rotateY(p.frameCount * 0.01);
        p.translate(0, 0 + p.frameCount * 0.1, 0 + p.frameCount * 0.5);

        Array.from(Array(10)).forEach((_, i) => {
            p.push();
            p.randomSeed(i);

            const x = 20 * (i + p.random(-i - 10, i + 10));
            const y = 20 * (i + p.random(-i - 10, i + 10));
            const radius = 20;

            p.fill("white");
            p.translate(x, y);
            p.sphere(radius, 8, 8);

            p.pop();
        })
    }
}
