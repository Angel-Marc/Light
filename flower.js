window.onload = () => {
  const audio = document.getElementById('background-audio');
  
  // Add a click event listener to play audio on user interaction
  document.body.addEventListener('click', () => {
    audio.play();
  });
  // Hide the welcome sequence after the animation finishes
  setTimeout(() => {
    document.body.classList.remove("not-loaded");
    const seq = document.getElementById("welcome-sequence");
    if (seq) seq.style.display = "none"; // Hide the welcome sequence after it's done
  }, 22500000); // Adjust the timeout to match the total duration of your animation
};
