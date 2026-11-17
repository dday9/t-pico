import { mkdirSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { bundle } from "lightningcss";

const projectDirectory = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const sourceDirectory = join(projectDirectory, "src");
const distributionDirectory = join(projectDirectory, "dist");

const files = readdirSync(sourceDirectory)
	.filter(filename =>
		/^t-pico(?:\.[a-z][a-z0-9-]*)?\.css$/.test(filename) &&
		filename !== "t-pico.base.css"
	)
	.sort();

if (files.length === 0) {
	throw new Error("No T'Pico entry points found.");
}

mkdirSync(distributionDirectory, { recursive: true });

for (const filename of files) {
	const source = join(sourceDirectory, filename);
	const output = filename.replace(/\.css$/, ".min.css");
	const destination = join(distributionDirectory, output);

	const { code } = bundle({
		filename: source,
		minify: true
	});

	writeFileSync(destination, code);

	const size = (code.length / 1024).toFixed(2);

	console.log(`Built ${output} (${size} KB)`);
}

console.log(`\nSuccessfully built ${files.length} stylesheets.`);