/* === Part 2: Functions, Scope, Parameters & Return Values === */

// Global variable
let globalCount = 0;

// Function with parameters and return value
function calculateDouble(number) {
  let localResult = number * 2; // Local scope variable
  return localResult;
}

// Reusable function to add a class for animation
function triggerAnimation(element, className) {
  element.classList.add(className);

  // Remove the class after animation ends so it can be reused
  element.addEventListener("animationend", () => {
    element.classList.remove(className);
  }, { once: true });
}

/* === Part 3: Combine CSS & JS === */

const box = document.getElementById("animatedBox");
const animateBtn = document.getElementById("animateBtn");
const togglePopupBtn = document.getElementById("togglePopupBtn");
const closePopupBtn = document.getElementById("closePopupBtn");
const popup = document.getElementById("popup");

// Animate box on button click
animateBtn.addEventListener("click", () => {
  globalCount++;
  console.log("Double of count:", calculateDouble(globalCount));
  triggerAnimation(box, "bounce");
});

// Popup toggle
togglePopupBtn.addEventListener("click", () => {
  popup.classList.toggle("show");
});

closePopupBtn.addEventListener("click", () => {
  popup.classList.remove("show");
});
