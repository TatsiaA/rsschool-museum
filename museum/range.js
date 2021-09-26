const progress = document.querySelector('.progress__range');
progress.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #ffffff ${value}%, #ffffff 100%)`
})

const progress_volume = document.querySelector('.progress__range__volume');
progress_volume.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #ffffff ${value}%, #ffffff 100%)`
})