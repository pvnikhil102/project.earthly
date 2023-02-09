const img = document.getElementById("slider")

var slides = ['https://static.wixstatic.com/media/ead566_4508cbf965bc4b5d8fea145a89f9e3c6~mv2.jpg/v1/fill/w_1225,h_689,al_c,q_85,usm_0.66_1.00_0.01/ead566_4508cbf965bc4b5d8fea145a89f9e3c6~mv2.webp',
  'https://static.wixstatic.com/media/ead566_a12b3feb70ae46139eee97c99f6ecebf~mv2.jpg/v1/fill/w_1225,h_689,al_c,q_85,usm_0.66_1.00_0.01/ead566_a12b3feb70ae46139eee97c99f6ecebf~mv2.webp'
  , 'https://static.wixstatic.com/media/ead566_ea60d9df9d794e5295383cb7773b9b23~mv2.jpg/v1/fill/w_1225,h_689,al_c,q_85,usm_0.66_1.00_0.01/ead566_ea60d9df9d794e5295383cb7773b9b23~mv2.webp',];

var Start = 0;
function slider() {
  if (Start < slides.length) {
    Start = Start + 1;
  }
  else {
    Start = 1;
  }
  console.log(img);

  img.innerHTML = "<img src=" + slides[Start - 1] + ">";

}

setInterval(slider, 2000);