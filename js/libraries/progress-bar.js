// Progress Bar ---------------------------------- //
const progressBar = document.querySelector('.progress-bar');

class ProgressBar {
  constructor() {
    this.progressRange = document.querySelector('.progress-range');
    this.currentTime = document.querySelector('.time-elapsed');
    this.duration = document.querySelector('.time-duration');
    this._init();
  }

  _init() {
    this._addEvent();
  }

  // Format current time, duration
  _displayTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    seconds = seconds > 9 ? seconds : `0${seconds}`;
    return `${minutes}:${seconds}`;
  }

  // Update progress bar as video plays
  _updateProgress() {
    progressBar.style.width = `${(video.currentTime / video.duration) * 100}%`;
    this.currentTime.textContent = `${this._displayTime(video.currentTime)} /`;
    this.duration.textContent = `${this._displayTime(video.duration)}`;
  }

  // Click to seek within the video
  _setProgress(e) {
    const newTime = e.offsetX / this.progressRange.offsetWidth;
    progressBar.style.width = `${newTime * 100}%`;
    video.currentTime = newTime * video.duration;
  }

  _addEvent() {
    this.progressRange.addEventListener('click', (event) => this._setProgress(event));
    video.addEventListener('timeupdate', () => this._updateProgress());
    video.addEventListener('canplay', () => this._updateProgress());
  }
}
