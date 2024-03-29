import * as Matter from "matter-js";
import p5 from "p5";

export const engine = Matter.Engine.create({ gravity: { y: 0 } });
export const runner = Matter.Runner.create();

const updateListeners: (() => void)[] = [];

export function onUpdate(fn: () => void) {
    updateListeners.push(fn);
}

function update() {
    Matter.Engine.update(engine);
    updateListeners.forEach((fn) => fn());
}

type View = {
    start: (p: p5) => void
}

export default {
    init: (view: View) => {
        Matter.Composite.clear(engine.world, false);
        new p5(view.start)
    }
}
