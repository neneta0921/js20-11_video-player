class Main {
  constructor() {
    this.video = document.querySelector('video');
    this._init();
  }

  _init() {
    this.playbackRate = new PlaybackRate(this.video);
  }
}

new Main();
