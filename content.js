// Define the SVG filters for different types of color blindness
const filters = `
<svg style="display:none">
  <filter id="protanopia"><feColorMatrix values="0.567, 0.433, 0, 0, 0, 0.558, 0.442, 0, 0, 0, 0, 0.242, 0.758, 0, 0, 0, 0, 0, 1, 0"/></filter>
  <filter id="deuteranopia"><feColorMatrix values="0.625, 0.375, 0, 0, 0, 0.7, 0.3, 0, 0, 0, 0, 0.3, 0.7, 0, 0, 0, 0, 0, 1, 0"/></filter>
  <filter id="tritanopia"><feColorMatrix values="0.95, 0.05, 0, 0, 0, 0, 0.433, 0.567, 0, 0, 0, 0.475, 0.525, 0, 0, 0, 0, 0, 1, 0"/></filter>
  <filter id="achromatopsia"><feColorMatrix values="0.299, 0.587, 0.114, 0, 0, 0.299, 0.587, 0.114, 0, 0, 0.299, 0.587, 0.114, 0, 0, 0, 0, 0, 1, 0"/></filter>
</svg>`;

document.body.insertAdjacentHTML('beforeend', filters);

chrome.runtime.onMessage.addListener((request) => {
  if (request.type === "CHANGE_VISION") {
    document.documentElement.style.filter = request.value === "none" ? "none" : `url(#${request.value})`;
  }
});