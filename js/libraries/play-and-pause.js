// Play & Pause ----------------------------------- //
class PlayAndPause {
  constructor() {
    this.playBtn = document.querySelector('#play-btn');
    this._init();
  }

  _init() {
    this._addEvent();
  }

  _showPlayIcon() {
    this.playBtn.classList.replace('fa-pause', 'fa-play');
    this.playBtn.setAttribute('title', 'Play');
  }

  _showPauseIcon() {
    this.playBtn.classList.replace('fa-play', 'fa-pause');
    this.playBtn.setAttribute('title', 'Pause');
  }

  _togglePlay() {
    if (video.paused) {
      video.play();
      this._showPauseIcon;
    } else {
      video.pause();
      showPlayIcon();
    }
  }

  _addEvent() {
    // On video end, show play button icon
    video.addEventListener('ended', this._showPlayIcon);

    // Event Listener
    this.playBtn.addEventListener('click', this._togglePlay);
    video.addEventListener('click', this._togglePlay);
  }
}
