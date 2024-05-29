// Turn audio
// document.getElementById('application').addEventListener('click', function() {
//   document.getElementById('sound').play();
// });

// Show preview / slide 1
const btnPlayReview = document.getElementById('btn-play');
btnPlayReview.addEventListener('click', function() {
  const previewVideo = document.getElementById('preview-video');
  const defaultVideo = document.getElementById('js-video-default');

  defaultVideo.pause();

  previewVideo.style.display = 'block';
  btnPlayReview.style.display = 'none';
  document.getElementById('sound').pause();

  previewVideo.play();
});
