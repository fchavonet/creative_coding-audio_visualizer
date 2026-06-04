/******************************
* RESPONSIVE WARNING BEHAVIOR *
******************************/

const responsiveWarning = document.getElementById("responsive-warning");
// Enable/disable responsive warning.
const responsiveDesign = true;
// Mobile width limit.
const threshold = 768;

// Show or hide modal based on screen size.
function checkResponsiveState() {
  const small = window.innerWidth <= threshold;

  if (!responsiveDesign && small) {
    if (!responsiveWarning.open) {
      responsiveWarning.showModal();
      document.body.classList.add("overflow-hidden");
    }
  } else {
    if (responsiveWarning.open) {
      responsiveWarning.close();
      document.body.classList.remove("overflow-hidden");
    }
  }
}

// Initial check.
checkResponsiveState();

// Real-time resize detection.
window.addEventListener("resize", checkResponsiveState);


/************************
* MODE TOGGLE BEHAVIOR *
************************/

const themeController = document.querySelector(".theme-controller");

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);

  if (theme === "black") {
    document.documentElement.style.setProperty("--bar-color", "rgba(0, 255, 255, 1)");
    document.documentElement.style.setProperty("--bar-glow", "rgba(0, 255, 255, 0.8)");
  } else {
    document.documentElement.style.setProperty("--bar-color", "rgb(255, 100, 0)");
    document.documentElement.style.setProperty("--bar-glow", "rgba(255, 100, 0, 0.35)");
  }

  localStorage.setItem("theme", theme);
}

// Check and apply saved mode on page load.
let savedTheme = localStorage.getItem("theme");

if (savedTheme === null) {
  savedTheme = "black";
}

applyTheme(savedTheme);

// Toggle mode and save preference.
if (themeController) {
  if (savedTheme === "black") {
    themeController.checked = true;
  } else {
    themeController.checked = false;
  }

  themeController.addEventListener("change", function () {
    if (themeController.checked) {
      applyTheme("black");
    } else {
      applyTheme("light");
    }
  });
}


/****************************
* AUDIO VISUALIZER BEHAVIOR *
****************************/

const NUM_BARS = 150;       // Number of bars around circle.
const GAP = 10;             // Gap between circle and bars.
const MIN_DIAMETER = 50;    // Smallest circle diameter.
const MAX_DIAMETER = 250;   // Largest circle diameter.
const MAX_BAR_LENGTH = 250; // Maximum bar length.

// Canvas and audio state.
let audioVisualizer;
let context;
let width;
let height;
let centerX;
let centerY;
let analyser;
let dataArray;

function getCSSVariable(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

// Initialize everything after DOM loads.
window.addEventListener("DOMContentLoaded", function initialize() {
  audioVisualizer = document.getElementById("audio-visualizer");

  if (!audioVisualizer) {
    return;
  }

  context = audioVisualizer.getContext("2d");

  resizeCanvasToWindow();
  window.addEventListener("resize", resizeCanvasToWindow);

  setupAudio();
});

// Adjust audioVisualizer size to fit window.
function resizeCanvasToWindow() {
  width = window.innerWidth;
  height = window.innerHeight;
  audioVisualizer.width = width;
  audioVisualizer.height = height;
  centerX = width / 2;
  centerY = height / 2;
}

// Access microphone and start audio processing.
function setupAudio() {
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(function (stream) {
      // Choose AudioContext implementation.
      const AudioCtor = window.AudioContext || window.webkitAudioContext;

      const audioContext = new AudioCtor();

      // Create analyser node.
      analyser = audioContext.createAnalyser();
      analyser.fftSize = 256;

      // Connect microphone source to analyser.
      const source = audioContext.createMediaStreamSource(stream);
      source.connect(analyser);

      // Prepare data array for frequency values.
      dataArray = new Uint8Array(analyser.frequencyBinCount);

      // Start drawing loop.
      drawFrame();
    })
    .catch(function (error) {
      console.error("Microphone access error:", error);
    });
}

// Draw one frame and request next.
function drawFrame() {
  window.requestAnimationFrame(drawFrame);

  if (!analyser || !dataArray) {
    return;
  }

  // Get current frequency data.
  analyser.getByteFrequencyData(dataArray);

  // Clear audioVisualizer.
  context.clearRect(0, 0, width, height);

  // Compute average frequency for circle radius.
  let total = 0;

  for (let i = 0; i < dataArray.length; i++) {
    total += dataArray[i];
  }

  const average = total / dataArray.length;
  const minR = MIN_DIAMETER / 2;
  const maxR = MAX_DIAMETER / 2;
  const radius = minR + (average / 255) * (maxR - minR);

  const BAR_COLOR = getCSSVariable("--bar-color");
  const BAR_GLOW = getCSSVariable("--bar-glow");

  // Draw central circle.
  context.save();
  context.shadowBlur = 10;
  context.shadowColor = BAR_GLOW;
  context.beginPath();
  context.arc(centerX, centerY, radius, 0, Math.PI * 2);
  context.strokeStyle = BAR_COLOR;
  context.lineWidth = 5;
  context.stroke();
  context.restore();

  // Draw bars around circle.
  const angleStep = (Math.PI * 2) / NUM_BARS;

  for (let j = 0; j < NUM_BARS; j++) {
    // Map bar index to frequency data.
    const freqIndex = Math.floor(j * dataArray.length / NUM_BARS);
    const amplitude = dataArray[freqIndex];
    const length = (amplitude / 255) * MAX_BAR_LENGTH;
    const angle = angleStep * j - Math.PI / 2;

    // Compute bar start and end points.
    const startX = centerX + Math.cos(angle) * (radius + GAP);
    const startY = centerY + Math.sin(angle) * (radius + GAP);
    const endX = centerX + Math.cos(angle) * (radius + GAP + length);
    const endY = centerY + Math.sin(angle) * (radius + GAP + length);

    // Draw bar line.
    context.save();
    context.shadowBlur = 5;
    context.shadowColor = BAR_GLOW;
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(endX, endY);
    context.strokeStyle = BAR_COLOR;
    context.lineWidth = 2;
    context.stroke();
    context.restore();
  }
}