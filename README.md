# T'Pico

**A modern, classless CSS framework for semantic HTML.**

T'Pico is a fork of [Pico CSS](https://github.com/picocss/pico), based on its final v2.1.1 release. It preserves Pico's minimalist, HTML-first philosophy while rebuilding the framework with modern, modular CSS.

No JavaScript, Sass, utility classes, or custom HTML attributes are required to use the framework.

What to see it in action? Check out this demo: https://jsfiddle.net/bLpsf2jd/

## Why the Name?

The name **T'Pico** carries forward the naming convention of **T'CSS**, a CSS project inspired in part by the Cajun culture of South Louisiana.

In Cajun French, *T'* (pronounced “tee”) comes from *petit*, meaning “little.” It's commonly found in affectionate nicknames like *T-Boy* or *T-Bob*, reflecting a distinctive part of Louisiana's French-speaking heritage.

The name is a small tribute to that culture and its influence on my work. It also feels fitting for a lightweight CSS framework that embraces simplicity.

T'Pico continues that tradition while paying homage to the original Pico CSS project.

## Features

<dl>
  <dt><strong>Classless by design</strong></dt>
  <dd>Style semantic HTML elements without adding classes.</dd>
  <dt><strong>Modern CSS</strong></dt>
  <dd>Built using cascade layers, <code>:where()</code>, OKLCH colors, CSS custom properties, and <code>light-dark()</code>.</dd>
  <dt><strong>20 color palettes</strong></dt>
  <dd>Including Azure, Jade, Indigo, Pumpkin, and more.</dd>
  <dt><strong>Light and dark themes</strong></dt>
  <dd>Automatic color scheme support, with optional explicit selection.</dd>
  <dt><strong>Native HTML components</strong></dt>
  <dd>Uses browser features such as <code>&lt;dialog&gt;</code>, <code>&lt;details&gt;</code>, and the Popover API.</dd>
  <dt><strong>CSS-only interactions</strong></dt>
  <dd>No framework JavaScript or JavaScript fallbacks.</dd>
  <dt><strong>Modular source</strong></dt>
  <dd>Organized into tokens, themes, core styles, elements, and components.</dd>
  <dt><strong>Accessibility-minded</strong></dt>
  <dd>Built around native HTML semantics, keyboard accessibility, visible focus states, and reduced-motion preferences.</dd>
</dl>

## Compatibility with Pico CSS

T'Pico is a complete rewrite of Pico CSS v2.1.1, not a drop-in replacement. While it preserves the original project's classless philosophy and much of its visual appearance, its architecture, components, and behavior have been substantially reworked.

As a result, some features and behaviors supported by Pico CSS may be unavailable, implemented differently, or behave differently in T'Pico. For example:

- **Right-to-left (RTL) layouts:** T'Pico uses modern logical CSS properties where appropriate, but does not guarantee the same RTL behavior as Pico CSS.
- **Components:** Dropdowns, modals, offcanvas panels, and other interactive components rely on modern native browser capabilities, so their markup and behavior may differ.
- **Customization:** T'Pico uses CSS custom properties, cascade layers, and OKLCH colors rather than Pico's Sass-based customization system.
- **Utilities and layout:** T'Pico deliberately omits certain features, including the CSS Grid component and tooltips.

T'Pico prioritizes semantic HTML, modern browser standards, and CSS-only functionality over strict backward compatibility.

Applications migrating from Pico CSS should review their markup, custom styles, and component behavior rather than assuming existing implementations will work unchanged.

## Quick Start

Download or build the distribution files and include the default Azure stylesheet in your document:

```html
<link rel="stylesheet" href="dist/t-pico.min.css">
```

Then write semantic HTML:

```html
<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Hello, T'Pico!</title>
	<link rel="stylesheet" href="dist/t-pico.min.css">
</head>
<body>
	<header>
		<nav aria-label="Main navigation">
			<a href="/" aria-current="page">Home</a>
			<a href="/about">About</a>
			<a href="/contact">Contact</a>
		</nav>
	</header>

	<main>
		<h1>Hello, T'Pico!</h1>
		<p>Semantic HTML, styled automatically.</p>

		<article>
			<header>
				<h2>Welcome</h2>
			</header>
			<p>No classes required.</p>
			<footer>
				<a href="/about">Learn more</a>
			</footer>
		</article>
	</main>
</body>
</html>
```

## Color Palettes

T'Pico includes 20 color palettes:

Amber, Azure, Blue, Cyan, Fuchsia, Green, Grey, Indigo, Jade, Lime, Orange, Pink, Pumpkin, Purple, Red, Sand, Slate, Violet, Yellow, and Zinc.

Azure is the default palette. To use a different palette, replace the stylesheet:

```html
<link rel="stylesheet" href="dist/t-pico.jade.min.css">
```

Each distribution file includes the complete framework and its selected palette. Only one stylesheet is necessary.

### Light and Dark Themes

T'Pico supports automatic color schemes based on the user's system preferences.

To explicitly select a theme, use the `data-theme` attribute on the root element:

```html
<html lang="en" data-theme="light">
```

Or:

```html
<html lang="en" data-theme="dark">
```

Without an explicit theme, T'Pico uses the system color preference.

## Components

T'Pico provides styling for native HTML elements and semantic component patterns.

| Component | HTML |
|---|---|
| Accordion | `<details>` and `<summary>` |
| Card | `<article>`, `<header>`, and `<footer>` |
| Dropdown | Popover API with `<button>` and `<ul>` |
| Group | `[role="group"]` |
| Loading | `aria-busy="true"` |
| Modal | `<dialog>` |
| Navigation | `<nav>`, `<ul>`, and `<ol>` |
| Offcanvas | `<dialog>` containing `<aside>` |
| Switch | `<input type="checkbox" role="switch">` |
| Toolbar | `<menu>` |

The framework also styles typography, forms, buttons, tables, code, progress indicators, meters, and other native HTML elements.

### Example: Accordion

```html
<details>
	<summary>Frequently Asked Question</summary>
	<p>This content can be expanded or collapsed.</p>
</details>
```

### Example: Dropdown

```html
<button type="button" popovertarget="example-dropdown">
	Options
</button>

<ul id="example-dropdown" popover>
	<li><a href="#profile">Profile</a></li>
	<li><a href="#settings">Settings</a></li>
	<li><a href="#logout">Log out</a></li>
</ul>
```

### Example: Modal

```html
<button type="button" command="show-modal" commandfor="example-modal">
	Open Modal
</button>

<dialog id="example-modal" closedby="any" aria-labelledby="modal-title">
	<article>
		<header>
			<h2 id="modal-title">Example Modal</h2>
			<button
				type="button"
				command="request-close"
				commandfor="example-modal"
				aria-label="Close"
			></button>
		</header>

		<p>This modal uses the native HTML Dialog API.</p>
	</article>
</dialog>
```

These components rely on native browser behavior rather than JavaScript implementations.

## Architecture

T'Pico uses plain CSS, organized into a layered architecture.

```text
src/
├── core/
├── tokens/
├── themes/
├── elements/
├── components/
├── palettes/
├── t-pico.base.css
├── t-pico.css
└── t-pico.*.css

dist/
└── t-pico*.min.css
```

The framework uses the following cascade layer order:

```css
@layer reset, tokens, themes, core, elements, components;
```

Each palette-specific entry point imports the shared base stylesheet and then applies its selected palette.

### Customization

T'Pico exposes CSS custom properties using the `--t-pico-` prefix. These provide control over colors, typography, spacing, borders, and other design values.

Because the framework uses cascade layers and low-specificity selectors, application-specific CSS can be added without unnecessarily complex selectors.

## Browser Support

T'Pico targets current evergreen browsers, including Chrome, Edge, Firefox, and Safari.

Some components depend on newer CSS and HTML features, including the Popover API, CSS Anchor Positioning, and native dialog commands. Availability and animation behavior may vary between browsers.

There are no JavaScript fallbacks for unsupported browser features.

## Philosophy and Limitations

T'Pico is intended to be a lightweight starting point for semantic HTML, not a complete UI application framework.

It deliberately does not include:

- Utility classes or a general-purpose CSS Grid system.
- CSS-generated tooltips.
- JavaScript-based components or compatibility fallbacks.
- A Sass-based customization system.

Complex application layouts and interactions may require additional application-specific CSS or JavaScript.

The framework's accessibility-oriented defaults do not replace appropriate semantic markup, accessible content, or application-level accessibility testing.

## Documentation

Detailed guides, component examples, and customization information are available in the [T'Pico Wiki](https://github.com/dday9/t-pico/wiki).

## Credits

T'Pico is an independent fork of [Pico CSS](https://github.com/picocss/pico), originally developed by the PicoCSS contributors.

T'Pico builds upon Pico CSS v2.1.1 but is independently developed and is not affiliated with or endorsed by the original project.

The Pico CSS name and logo remain associated with the original project.

## License

T'Pico is distributed under the [MIT License](LICENSE.md).

The project retains applicable copyright and license notices from the original Pico CSS project.