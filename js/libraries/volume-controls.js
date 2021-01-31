// Volume Controls --------------------------- //
class VolumeControls {
  constructor() {
    this.volumeIcon = document.querySelector('#volume-icon');
    this.volumeRange = document.querySelector('.volume-range');
    this.volumeBar = document.querySelector('.volume-bar');
    this.lastVolume = 1;
    this._init();
  }

  _init() {
    this._addEvent();
  }

  // Mute
  _muteOn() {
    this.lastVolume = video.volume;
    video.volume = 0;
    this.volumeIcon.classList.add('fas', 'fa-volume-mute');
    this.volumeIcon.setAttribute('title', 'Unmute');
    this.volumeBar.style.width = 0;
  }

  _muteOff() {
    video.volume = this.lastVolume;
    this.volumeIcon.classList.add('fas', 'fa-volume-up');
    this.volumeIcon.setAttribute('title', 'Mute');
    this.volumeBar.style.width = `${this.lastVolume * 100}%`;
  }

  _toggleMute() {
    this.volumeIcon.className = '';
    if (video.volume) {
      this._muteOn();
    } else {
      this._muteOff();
    }
  }

  // Change icon depending on volume
  _changeVolumeIcon(volume) {
    this.volumeIcon.className = '';
    if (volume >= 0.5) {
      this.volumeIcon.classList.add('fas', 'fa-volume-up');
    } else if (volume < 0.5 && volume > 0) {
      this.volumeIcon.classList.add('fas', 'fa-volume-down');
    } else if (volume === 0) {
      this.volumeIcon.classList.add('fas', 'fa-volume-off');
    }
  }

  // Volume Bar
  _changeVolume(e) {
    let volume = e.offsetX / this.volumeRange.offsetWidth;

    // Rounding volume up or down
    volume < 0.1 ? (volume = 0) : false;
    volume > 0.9 ? (volume = 1) : false;

    // Change Volume and Volume Bar Width
    this.volumeBar.style.width = `${volume * 100}%`;
    video.volume = volume;

    // Change icon depending on volume
    this._changeVolumeIcon(volume);

    // Set volume to lastVolume
    this.lastVolume = volume;
  }

  _addEvent() {
    // Event Listener
    this.volumeIcon.addEventListener('click', () => this._toggleMute());
    this.volumeRange.addEventListener('click', (event) => this._changeVolume(event));
  }
}
