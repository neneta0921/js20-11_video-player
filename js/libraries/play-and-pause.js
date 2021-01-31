// Play & Pause ----------------------------------- //
const playBtn = document.querySelector('#play-btn');

function showPlayIcon() {
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
}

// On video end, show play button icon
video.addEventListener('ended', showPlayIcon);

function togglePlay() {
  if (video.paused) {
    video.play();
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
  } else {
    video.pause();
    showPlayIcon();
  }
}

playBtn.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
