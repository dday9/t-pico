# Contributing to T'Pico

Thank you for your interest in improving T'Pico! Contributions that fix bugs, improve accessibility, refine existing components, or clarify documentation are welcome.

Before making a substantial change or proposing a new component, please [open an issue](https://github.com/dday9/t-pico/issues) to discuss the approach.

## Project Principles

T'Pico is a modern, classless, CSS-only rewrite of Pico CSS v2.1.1. Contributions should preserve its core principles:

- **Semantic HTML first.** Prefer native elements and standard HTML attributes over framework-specific classes or `data-*` attributes.
- **CSS only.** Do not add JavaScript to implement components or provide compatibility fallbacks.
- **Native behavior.** Use browser features such as `<dialog>`, `<details>`, and the Popover API instead of recreating them.
- **Accessible by design.** Preserve keyboard access, visible focus indicators, reduced-motion preferences, and appropriate ARIA semantics.
- **Modern browsers.** Target current evergreen browsers; document meaningful differences rather than adding legacy workarounds.

## Development Setup

Clone the repository and install the build dependency:

```bash
git clone https://github.com/dday9/t-pico.git
cd t-pico
npm install
```

Make changes in `src/`, then build the distribution stylesheets:

```bash
npm run build
```

The build uses Lightning CSS to bundle and minify all palette entry points into `dist/`. Do not edit the generated `dist/` files as your source of change.

For the source layout, palette architecture, and build details, see the [Development Wiki](https://github.com/dday9/t-pico/wiki/Development).

## CSS Conventions

- Use tabs for indentation.
- Put opening and closing braces on separate lines.
- Put each declaration on its own line, alphabetized by property name when practical.
- Keep rules inside the appropriate layer: `reset`, `tokens`, `themes`, `core`, `elements`, or `components`.
- Prefer low-specificity `:where()` selectors and existing `--t-pico-*` variables.
- Prefer logical CSS properties where appropriate.
- Add new source files to `src/t-pico.base.css` in the appropriate section, preserving intentional import-order exceptions.

Example:

```css
@layer components {
	:where(article) {
		border-radius: var(--t-pico-border-radius);
		margin-block-end: var(--t-pico-spacing);
	}
}
```

## Before Submitting a Pull Request

1. Run `npm run build` and confirm all palette distributions build successfully.
2. Test the affected elements or components in light and dark themes.
3. Check keyboard behavior, focus indicators, and reduced-motion behavior where relevant.
4. Test in more than one modern browser when changing native interactions or newer CSS features.
5. Update the README or [Wiki](https://github.com/dday9/t-pico/wiki) when you change documented behavior.
6. Explain what changed, why it changed, and how you tested it in your pull request.

T'Pico does not currently require a separate automated test or lint command. A successful build is necessary, but it is not a substitute for browser testing.

## Reporting Bugs

Please [open an issue](https://github.com/dday9/t-pico/issues) and include the affected browser and version, a description of the problem, steps to reproduce it, and a small HTML/CSS example if possible.

Thank you for helping keep T'Pico simple, semantic, and maintainable.