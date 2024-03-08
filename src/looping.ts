import Two from 'two.js'
import { onUpdate, two } from './canvas'

function getRandomVariance(maxVariance) {
    return Math.random() * maxVariance * 2 - maxVariance;
}

export function start() {
    const center = { x: two.width / 2, y: two.height / 2 };

    const loopsNum = 150;

    const loopRadius = Math.min(two.width, two.height) / 1.5;
    const loopResolution = 6;
    const maxAngleVariance = 0.3;
    const maxCenterVariance = 20;
    const maxRadiusVariance = 50;

    const curve = two.makeCurve([new Two.Anchor(two.width / 2, two.height / 2)], true);
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

        curve.vertices.splice(0, 0, new Two.Anchor(x - (two.width / 2), y - (two.height / 2)))
    }

    onUpdate(() => {
        addPoint();
        addPoint();
    })
}
