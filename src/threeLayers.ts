import { onUpdate, two } from './canvas'

export function start() {
    const text = two.makeText("WIDOK ZA OKNEM DZIELĘ NA 3 PLANY", two.width / 2, 10, {
        fill: "red",
    });


    onUpdate(() => {
        text.position.y += 1
    })
}
