// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);

// Function to play animations
const playAnimation = (animationName) => {
  const modelViewer = document.querySelector("#model");
  if (modelViewer) {
    modelViewer.play({ 
      animationName,      // Play the specified animation
      repetitions: 1,     // Play once (change this if needed)
      pingpong: false     // Play forward only (set to true for back and forth motion)
    });
  } else {
    console.error("Model viewer element not found.");
  }
};

// Attach event listeners to animation buttons
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("close-valve-btn").addEventListener("click", () => playAnimation("Close_Shut_Off_Valve_Step_3"));
  document.getElementById("open-valve-btn").addEventListener("click", () => playAnimation("Large_Valves_Open"));
  document.getElementById("arrow-flow-btn").addEventListener("click", () => playAnimation("Large_Arrow_Flow"));
});
