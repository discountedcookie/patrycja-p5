import * as Matter from "matter-js";
import Two from "two.js";

export const engine = Matter.Engine.create({ gravity: { y: 0 } });
export const runner = Matter.Runner.create();

export const two = new Two({
    autostart: false,
    fullscreen: true,
    type: Two.Types.webgl,
})

const updateListeners: (() => void)[] = [];

export function onUpdate(fn: () => void) {
    updateListeners.push(fn);
}

function update() {
    Matter.Engine.update(engine);
    updateListeners.forEach((fn) => fn());
}

two!.appendTo(document.body);
two!.bind('update', update);

export default {
    init: () => {
        Matter.Composite.clear(engine.world, false);
        two.clear();
        two.play();
    }
}
