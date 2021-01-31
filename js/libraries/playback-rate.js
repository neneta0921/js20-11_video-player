class PlaybackRate {
  constructor(video) {
    this.video = video;
    this.playbackSpeed = document.querySelector('select');
    this._init();
  }

  _init() {
    this._addEvent();
  }

  _addEvent() {
    // Change Playback Speed -------------------- //
    this.playbackSpeed.addEventListener('change', () => {
      this.video.playbackRate = this.playbackSpeed.value;
    });
  }
}
