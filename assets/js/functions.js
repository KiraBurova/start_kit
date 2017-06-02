window.onload = function() {
  var slider = document.getElementsByClassName('slider')[0],
    images = slider.getElementsByTagName('img'),
    counter = 0,
    nextBtn = slider.getElementsByClassName('next')[0],
    prevBtn = slider.getElementsByClassName('prev')[0];
  
  function showImage(index) {
    for (var i = 0; i < images.length; i++) {
      images[i].className = 'hideImage';
    }
    images[index].className = 'showImage';
  }

  function nextImg() {
    if (counter < images.length - 1) {
      counter += 1;
    } else {
      counter = 0;
    }

    showImage(counter);
  }

  function prevImg() {

    if (counter > 0) {
      counter -= 1;
    } else {
      counter = images.length - 1;
    }

    showImage(counter);
  }

  nextBtn.onclick = nextImg;
  prevBtn.onclick = prevImg;

  showImage(counter);
}
