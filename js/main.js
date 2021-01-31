const video = document.querySelector('video');

document.addEventListener('DOMContentLoaded', () => {
  new Main();
});

class Main {
  constructor() {
    this._init();
  }

  _init() {
    this.fullScreen = new FullScreen();
    this.playAndPause = new PlayAndPause();
    this.playbackRate = new PlaybackRate();
    this.progressBar = new ProgressBar();
    this._addEvent();
  }

  _addEvent() {
    // On video end, show play button icon
    video.addEventListener('ended', () => this.playAndPause.showPlayIcon());

    // Toggle show play button icon and pause button icon
    video.addEventListener('click', () => this.playAndPause.togglePlay());

    // Update Progress Bar
    video.addEventListener('timeupdate', () => this.progressBar.updateProgress());
  }
}
