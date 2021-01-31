const video = document.querySelector('video');

// Progress Bar ---------------------------------- //
const progressBar = document.querySelector('.progress-bar');
const progressRange = document.querySelector('.progress-range');
const currentTime = document.querySelector('.time-elapsed');
const duration = document.querySelector('.time-duration');

// Format current time, duration
function displayTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);
  seconds = seconds > 9 ? seconds : `0${seconds}`;
  return `${minutes}:${seconds}`;
}

// Update progress bar as video plays
function updateProgress() {
  progressBar.style.width = `${(video.currentTime / video.duration) * 100}%`;
  currentTime.textContent = `${displayTime(video.currentTime)} /`;
  duration.textContent = `${displayTime(video.duration)}`;
}

// Click to seek within the video
function setProgress(e) {
  const newTime = e.offsetX / progressRange.offsetWidth;
  progressBar.style.width = `${newTime * 100}%`;
  video.currentTime = newTime * video.duration;
}

progressRange.addEventListener('click', setProgress);
video.addEventListener('timeupdate', updateProgress);
video.addEventListener('canplay', updateProgress);
