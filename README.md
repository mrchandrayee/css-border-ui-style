# CSS Border UI Style

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/css-border-ui-style/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A responsive, standalone recreation of the uploaded 19.37-second screen recording.

## Features reproduced from the video

- Heading: **CSS Border UI Style** with blue glow.
- Dark black page and charcoal control panels.
- Large live border preview on the left.
- Ten border-style choices on the right:
  `solid`, `dashed`, `dotted`, `double`, `groove`, `ridge`, `inset`, `outset`, `none`, `hidden`.
- Width slider (0–20px), initially 8px.
- Radius slider (0–50px), initially 28px.
- Color input, initially `#6e5bec` (purple).
- CSS output updates live as controls change.
- Copy CSS button.
- Responsive layout for mobile and desktop.

## Values visible in the video

At the shown groove state, the CSS readout is:

```css
border: 8px groove #6e5bec;
border-radius: 28px;
```

The video shows the UI and generated CSS output, not the original full HTML/CSS/JavaScript source. The source files in this project are a functional reconstruction of that interface and behavior.

## Run

1. Extract this ZIP.
2. Open `index.html` in Chrome, Firefox, Safari, or Edge.
3. Choose a border style, adjust width/radius, and select a color.
4. Copy the generated CSS with the **Copy CSS** button.

No npm, framework, server, or external dependency is required.

## Files

- `index.html` — interface and controls
- `style.css` — layout, colors, and responsive styling
- `script.js` — live preview, CSS generation, and copy action
- `README.md` — project notes and instructions

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
