const video = document.querySelector('video');
const playBtn = document.getElementById('play-btn');
const progressRange = document.querySelector('div.progress-range');
const progressBar = document.querySelector('div.progress-bar');
const volumeIcon = document.getElementById('volume-icon');
const volumeRange = document.querySelector('div.volume-range');
const volumeBar = document.querySelector('div.volume-bar');
const playbackSpeed = document.querySelector('select');
const timeElapsedEl = document.querySelector('span.time-elapsed');
const timeDurationEl = document.querySelector('span.time-duration');
const fullscreenBtn = document.querySelector('div.fullscreen');

// Check if Playing
let isPlaying = false;

// Check if sound on/off
let isMuted = false;

// Check if Fullscreen
let playFullscreen = false;

// Play & Pause ----------------------------------- //
// Play Video
function playVideo() {
  isPlaying = true;
  video.play();
  // Change PlayBtn to PauseBtn
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.title = 'Pause';
}

// Pause Video and change button
function pauseVideo() {
  isPlaying = false;
  video.pause();
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.title = 'Play';
}

// PlayBtn Event Listener
playBtn.addEventListener('click', () => (isPlaying ? pauseVideo() : playVideo()));


// Progress Bar ---------------------------------- //
function updateProgressBar(e) {
  if (isPlaying) {
    const { duration, currentTime } = e.srcElement;
    // Update progress bar width
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
    // Calculate display for duration
    const durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds < 10) {
      durationSeconds = `0${durationSeconds}`;
    }
    // Delay switching duration Element to avoid NaN
    if (durationSeconds) {
      timeDurationEl.textContent = `${durationMinutes}:${durationSeconds}`;
    }
    // Calculate display for current time
    const currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds < 10) {
      currentSeconds = `0${currentSeconds}`;
    }
    timeElapsedEl.textContent = `${currentMinutes}:${currentSeconds} /`;
  }
}

function setProgressBar(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const { duration } = video;
  video.currentTime = (clickX / width) * duration;
}

// Progress Bar Event Listener
video.addEventListener('timeupdate', updateProgressBar);
progressRange.addEventListener('click', setProgressBar);


// Volume Controls --------------------------- //
// Sound On
function soundOn() {
  isMuted = false;
  video.muted = false;
  volumeIcon.classList.replace('fa-volume-mute', 'fa-volume-up');
  volumeIcon.title = 'Mute';
}

// Sound Off
function soundOff() {
  isMuted = true;
  video.muted = true;
  volumeIcon.classList.replace('fa-volume-up', 'fa-volume-mute');
  volumeIcon.title = 'Sound On';
}

// Volume Controls
function changeVolume(e) {
  // Change Volume value
  const width = this.clientWidth;
  const clickX = e.offsetX;
  video.volume = (clickX / width);
  // Update Volume bar width
  const volumePercent = (clickX / width) * 100;
  volumeBar.style.width = `${volumePercent}%`;
}

// Volume Event Listener
volumeIcon.addEventListener('click', () => (isMuted ?  soundOn() : soundOff()));
volumeRange.addEventListener('click', changeVolume);


// Change Playback Speed -------------------- //
playbackSpeed.addEventListener('change', () => {video.playbackRate = playbackSpeed.value});


// Fullscreen ------------------------------- //
// Open Fullscreen
function openFullscreen() {
  // playFullscreen = true;
  // video.classList.add('video-fullscreen');
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    // Safari
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
}

// Close Fullscreen
// function soundOff() {
//   playFullscreen = false;
//   video.classList.remove('video-fullscreen');
//   if (video.exitFullscreen) {
//     video.exitFullscreen();
//   } else if (video.webkitExitFullscreen) {
//     // Safari
//     video.webkitExitFullscreen();
//   } else if (video.msExitFullscreen) {
//     video.msExitFullscreen();
//   }
// }

// fullscreenBtn.addEventListener('click', () => (playFullscreen ?  closeFullscreen() : openFullscreen()));
fullscreenBtn.addEventListener('click', openFullscreen);
