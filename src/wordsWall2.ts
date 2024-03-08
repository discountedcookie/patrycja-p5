import { onUpdate, two } from './canvas'

export function start() {
    const text = two.makeText("w o r d s", two.width / 2, 10, {
        fill: "red",
    });


    onUpdate(() => {
        text.position.y += 0.5
    })
}
