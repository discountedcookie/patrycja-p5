import canvas from './canvas'

const views = {
    // threeLayers: import('./threeLayers'),
    layeredBoxes: import('./layeredBoxes'),
    // loopingScribble: import('./loopingScribble'),
}

async function selectView(view: keyof typeof views) {
    console.log('select', view);
    canvas.init(await views[view]);
}

const selectEl = document.getElementById('select');

Object.keys(views).forEach((view) => {
    const option = document.createElement('option');
    option.innerText = view;

    selectEl?.appendChild(option);
})

selectEl?.addEventListener('change', (event) => {
    selectView(event.target.value);
})

selectView('layeredBoxes');