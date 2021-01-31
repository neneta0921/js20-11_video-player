const video = document.querySelector('video');

class Main {
  constructor() {
    this._init();
  }

  _init() {
    this.playAndPause = new PlayAndPause();
    this.playbackRate = new PlaybackRate();
    this.progressBar = new ProgressBar();
  }
}

new Main();
