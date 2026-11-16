const previewBox = document.getElementById("previewBox");
const styleButtons = [...document.querySelectorAll(".style-button")];
const styleName = document.getElementById("styleName");
const styleDescription = document.getElementById("styleDescription");
const widthRange = document.getElementById("widthRange");
const radiusRange = document.getElementById("radiusRange");
const borderColor = document.getElementById("borderColor");
const widthValue = document.getElementById("widthValue");
const radiusValue = document.getElementById("radiusValue");
const cssCode = document.getElementById("cssCode");
const copyButton = document.getElementById("copyButton");
const copyStatus = document.getElementById("copyStatus");

const descriptions = {
  solid: "Clean and simple border",
  dashed: "Classic dashed outline",
  dotted: "Soft dotted outline",
  double: "Two-line layered border",
  groove: "3D carved look",
  ridge: "3D raised look",
  inset: "Pressed-in 3D effect",
  outset: "Raised 3D effect",
  none: "No border visible",
  hidden: "Hidden border style"
};

let currentStyle = "solid";

function updatePreview() {
  const width = Number(widthRange.value);
  const radius = Number(radiusRange.value);
  const color = borderColor.value;

  previewBox.style.border = `${width}px ${currentStyle} ${color}`;
  previewBox.style.borderRadius = `${radius}px`;
  previewBox.style.boxShadow = currentStyle === "solid" && width > 0
    ? `0 0 10px ${color}55` : "none";

  widthValue.value = `${width}px`;
  widthValue.textContent = `${width}px`;
  radiusValue.value = `${radius}px`;
  radiusValue.textContent = `${radius}px`;
  styleName.textContent = currentStyle;
  styleDescription.textContent = descriptions[currentStyle];
  document.documentElement.style.setProperty("--accent", color);

  cssCode.textContent =
    `border: ${width}px ${currentStyle} ${color};\nborder-radius: ${radius}px;`;
}

styleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentStyle = button.dataset.style;
    styleButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle("selected", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    updatePreview();
  });
});

[widthRange, radiusRange, borderColor].forEach((control) => {
  control.addEventListener("input", updatePreview);
});

copyButton.addEventListener("click", async () => {
  const text = cssCode.textContent;
  try {
    await navigator.clipboard.writeText(text);
    copyStatus.textContent = "Copied!";
  } catch {
    const temporary = document.createElement("textarea");
    temporary.value = text;
    document.body.appendChild(temporary);
    temporary.select();
    document.execCommand("copy");
    temporary.remove();
    copyStatus.textContent = "Copied!";
  }
  window.setTimeout(() => { copyStatus.textContent = ""; }, 1800);
});

styleButtons[0].setAttribute("aria-pressed", "true");
styleButtons.slice(1).forEach((button) => button.setAttribute("aria-pressed", "false"));
updatePreview();
