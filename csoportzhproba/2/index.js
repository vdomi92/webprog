const hsl = document.querySelectorAll("input[type=range]");
const hue = hsl[0];
const saturation = hsl[1];
const lightness = hsl[2];

const hslOutput = document.querySelector("input[type=text]");

const btn = document.querySelector("button");
btn.addEventListener("click", () => handleClick());

const handleClick = () => {
  hslOutput.value = `hsl(${hue.value}, ${saturation.value}%, ${lightness.value}%)`;
  document.body.style.backgroundColor = `hsl(${hue.value}, ${saturation.value}%, ${lightness.value}%)`;
};

hsl.forEach((node) => node.addEventListener("change", () => handleChange()));

const handleChange = (e) => {
  document.body.style.backgroundColor = `hsl(${hue.value}, ${saturation.value}%, ${lightness.value}%)`;
};
