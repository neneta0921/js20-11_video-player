const playbackSpeed = document.querySelector('select');

// Change Playback Speed -------------------- //
playbackSpeed.addEventListener('change', () => {
  video.playbackRate = playbackSpeed.value;
});
