const containerProfil = document.querySelector('.containerProfil');
let height = containerProfil.clientHeight;

window.addEventListener('scroll', () => {
    if(window.scrollY > height) {
        nav.classList.add('scroll');
    } else {
        nav.classList.remove('scroll');
    }
})


$(document).ready(function(){
    var mouseX, mouseY;
    var ww = $( window ).width();
    var wh = $( window ).height();
    var traX, traY;
    $(document).mousemove(function(e){
      mouseX = e.pageX;
      mouseY = e.pageY;
      traX = ((4 * mouseX) / 570) + 40;
      traY = ((4 * mouseY) / 570) + 50;
      console.log(traX);
      $(".title").css({"background-position": traX + "%" + traY + "%"});
    });
  });