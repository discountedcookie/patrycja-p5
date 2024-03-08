import Two from 'two.js'
import { shaders } from 'two.js/src/utils/shaders';

import * as R from 'radash';
import { onUpdate, two } from './canvas'

const blobsNumber = 16;

// console.log(Two[Two.Types.webgl].Utils);
// console.log(Two.WebGLRenderer.Utils)

export function start() {
    const blobRadius = Math.min(two.height, two.width);
    const blobResolution = 16;
    const blobRoughness = 24;

    const blobs: InstanceType<typeof Two.Path>[] = [];

    function createBlob() {
        const circle = new Two.Circle(0, 0, blobRadius, blobResolution);
        const points = circle.vertices.map((vector: InstanceType<typeof Two.Anchor>, index: number) => {
            const theta = ((index + 1) / circle.vertices.length) * Math.PI * 2;
            const radius = R.random(blobRadius - blobRoughness, blobRadius + blobRoughness);
            const x = radius * Math.cos(theta);
            const y = radius * Math.sin(theta);

            vector.set(x, y);

            return vector;
        })

        const blob = new Two.Path(points);
        blob.closed = true;
        blob.curved = true;
        blob.fill = `rgb(${R.random(0, 255)} ${R.random(0, 255)} ${R.random(0, 255)})`;
        blob.opacity = 0.5;
        // blob.noFill();
        blob.rotation = Math.random();
        blob.scale = R.random(80, 120) / 100;
        blob.translation.set(R.random(-two.width, two.width), R.random(-two.height, two.height));


        two.add(blob);
        return blob;
    }

    // Array.from(Array(blobsNumber)).forEach((_, index) => {
    //     const blob = createBlob(index % 4 === 0);
    //     blobs.push(blob);
    // })

    const box1 = two.makeRectangle(two.width / 2 - 25, two.height / 2 - 25, 100, 100);
    box1.fill = "red"

    const box2 = two.makeRectangle(two.width / 2 + 25, two.height / 2 + 25, 100, 100);
    box2.fill = "blue"

    const box1Group = two.makeGroup(box1);
    box1.
        // box.fill = "red";
        // const boxGroup = two.makeGroup(box);
        // boxGroup.mask = blobs[0];

        onUpdate(() => {
            // blobs.forEach((blob) => {
            //     const x = (blob.rotation > 0.5 ? 1 : -1) * 0.5;
            //     const y = (blob.scale as number > 1.0 ? 1 : -1) * 0.5;
            //     // blob.translation.add(x, y);

            //     const boundingRect = blob.getBoundingClientRect();
            //     const offset = 10;

            //     if (boundingRect.top > two.height + offset) {
            //         blob.translation.set(blob.position.x, boundingRect.height / -2);
            //     }
            //     if (boundingRect.left > two.width - offset) {
            //         blob.translation.set(boundingRect.width / -2, blob.position.y);
            //     }
            //     if (boundingRect.bottom < -offset) {
            //         blob.translation.set(blob.position.x, two.height - boundingRect.height / -2);
            //     }
            //     if (boundingRect.right < -offset) {
            //         blob.translation.set(two.width - boundingRect.width / -2, blob.position.x);
            //     }
            // })
        });
}
