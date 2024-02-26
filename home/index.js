function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.style.display = "none";
}
function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.style.display = "block";
}

function navShow() {
  hideElementById("top-nav");
  showElementById("side-nav");
}
function navHide() {
  hideElementById("side-nav");
  showElementById("top-nav");
}
