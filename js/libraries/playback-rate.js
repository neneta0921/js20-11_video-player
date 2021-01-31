class PlaybackRate {
  constructor() {
    this.playbackSpeed = document.querySelector('select');
    this._init();
  }

  _init() {
    this._addEvent();
  }

  _addEvent() {
    // Change Playback Speed -------------------- //
    this.playbackSpeed.addEventListener('change', () => {
      video.playbackRate = this.playbackSpeed.value;
    });
  }
}
