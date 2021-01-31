// Fullscreen ------------------------------- //
class FullScreen {
  constructor() {
    this.fullscreen = false;
    this.fullscreenBtn = document.querySelector('.fullscreen');
    this.player = document.querySelector('.player');
    this.screenIcon = document.querySelector('#screen-icon');
    this._init();
  }

  _init() {
    this._addEvent();
  }

  /* View in fullscreen */
  _openFullscreen(element) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      /* Firefox */
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      /* IE/Edge */
      element.msRequestFullscreen();
    }
    video.classList.add('video-fullscreen');
  }

  /* Close fullscreen */
  _closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE/Edge */
      document.msExitFullscreen();
    }
    video.classList.remove('video-fullscreen');
  }

  // Toggle fullscreen
  _toggleFullscreen() {
    this.screenIcon.className = '';
    if (!this.fullscreen) {
      this._openFullscreen(this.player);
      this.screenIcon.classList.add('fas', 'fa-compress');
    } else {
      this._closeFullscreen();
      this.screenIcon.classList.add('fas', 'fa-expand');
    }
    this.fullscreen = !this.fullscreen;
  }

  // Event Listener
  _addEvent() {
    this.fullscreenBtn.addEventListener('click', () => this._toggleFullscreen());
  }
}
