const video = document.querySelector('video');

class Main {
  constructor() {
    this._init();
  }

  _init() {
    this.playAndPause = new PlayAndPause();
    this.playbackRate = new PlaybackRate();
  }
}

new Main();
