// Get DOM elements
const generateBtn = document.getElementById('generate-btn');
const colorBoxes = document.querySelectorAll('.color-box');
const colorCodes = document.querySelectorAll('.color-code');

// Function to generate random hex color
function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).toUpperCase().padStart(6, '0');
}

// Function to generate palette
function generatePalette() {
    colorBoxes.forEach((box, index) => {
        const randomColor = getRandomColor();
        box.style.backgroundColor = randomColor;
        colorCodes[index].textContent = randomColor;
    });
}

// Add click event listener to button
generateBtn.addEventListener('click', generatePalette);

// Generate initial palette on page load
window.addEventListener('load', generatePalette);

// Function to generate palette
function generatePalette() {
    colorBoxes.forEach((box, index) => {
        const randomColor = getRandomColor();
        box.style.backgroundColor = randomColor;
        colorCodes[index].textContent = randomColor;
    });
}

// Add click event to button
generateBtn.addEventListener('click', generatePalette);

// Generate palette on page load (optional)
generatePalette();