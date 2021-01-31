// Fullscreen ------------------------------- //
const player = document.querySelector('.player');
const fullscreenBtn = document.querySelector('.fullscreen');
const screenIcon = document.querySelector('#screen-icon');

/* View in fullscreen */
function openFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    /* Firefox */
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    /* IE/Edge */
    element.msRequestFullscreen();
  }
  video.classList.add('video-fullscreen');
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE/Edge */
    document.msExitFullscreen();
  }
  video.classList.remove('video-fullscreen');
}

let fullscreen = false;

// Toggle fullscreen
function toggleFullscreen() {
  screenIcon.className = '';
  if (!fullscreen) {
    openFullscreen(player);
    screenIcon.classList.add('fas', 'fa-compress');
  } else {
    closeFullscreen();
    screenIcon.classList.add('fas', 'fa-expand');
  }
  fullscreen = !fullscreen;
}

// Event Listener
fullscreenBtn.addEventListener('click', toggleFullscreen);
