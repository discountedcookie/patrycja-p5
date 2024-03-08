import Two from 'two.js'
import { onUpdate, two } from './canvas'

function getRandomVariance(maxVariance) {
    return Math.random() * maxVariance * 2 - maxVariance;
}

export function start() {
    const center = { x: two.width / 2, y: two.height / 2 };

    const loopsNum = 1000;

    const loopRadius = Math.min(two.width, two.height) / 4;
    const loopResolution = 4;
    const maxAngleVariance = 0.3;
    const maxCenterVariance = 50;
    const maxRadiusVariance = 50;

    const curve = two.makeCurve([new Two.Anchor(0, 0)], true);
    curve.stroke = 'white';
    curve.noFill();

    function addPoint() {
        if (curve.vertices.length === loopsNum * loopResolution) {
            return;
        }

        const index = curve.vertices.length - 1;
        const loopIndex = Math.floor(index / loopResolution);
        console.log(loopIndex, index);

        const angle = ((index % loopResolution) / loopResolution * Math.PI * 2) + getRandomVariance(maxAngleVariance);
        const radius = loopRadius + getRandomVariance(maxRadiusVariance);
        const x = center.x + getRandomVariance(maxCenterVariance) + radius * Math.cos(angle) * (two.width / two.height);
        const y = center.y + getRandomVariance(maxCenterVariance) + radius * Math.sin(angle);

        curve.vertices.splice(0, 0, new Two.Anchor(x, y))
    }

    onUpdate(() => {
        addPoint();
        addPoint();
    })
}
