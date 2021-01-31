// Play & Pause ----------------------------------- //
class PlayAndPause {
  constructor() {
    this.playBtn = document.querySelector('#play-btn');
    this._init();
  }

  _init() {
    this._addEvent();
  }

  showPlayIcon() {
    this.playBtn.classList.replace('fa-pause', 'fa-play');
    this.playBtn.setAttribute('title', 'Play');
  }

  _showPauseIcon() {
    this.playBtn.classList.replace('fa-play', 'fa-pause');
    this.playBtn.setAttribute('title', 'Pause');
  }

  togglePlay() {
    if (video.paused) {
      video.play();
      this._showPauseIcon();
    } else {
      video.pause();
      this.showPlayIcon();
    }
  }

  _addEvent() {
    // Event Listener
    this.playBtn.addEventListener('click', () => this.togglePlay());
  }
}
