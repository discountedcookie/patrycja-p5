const build = await Bun.build({
    entrypoints: ["./src/index.ts"],
    outdir: "./dist",
    naming: "[dir]/[name]-[hash].[ext]",
    sourcemap: "inline",
});

build.outputs.forEach((i) => console.log(i.path));

const hash = build.outputs.find((i) => i.kind == "entry-point")?.hash;

const inputHtml = Bun.file("index.html");
const outputHtml = Bun.file("dist/index.html");
let indexHtmlContent = await inputHtml.text();
indexHtmlContent = indexHtmlContent.replace("src/index.ts", `index-${hash}.js`);
await Bun.write(outputHtml, indexHtmlContent);

Bun.serve({
    development: true,
    port: 4000,
    fetch(req) {
        const path = new URL(req.url).pathname;
        if (path === "/") {
            return new Response(Bun.file("./dist/index.html"));
        }

        const file = Bun.file(`dist${path}`);
        return new Response(file);
    },
});

