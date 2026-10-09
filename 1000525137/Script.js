
const slider = document.getElementById('zedSlider');
slider.innerHTML += slider.innerHTML; // duplicate for loop

let x = 0;
let speed = 1; // change to 2 for faster
let paused = false;

function animate(){
  if(!paused){
    x -= speed;
    if(x <= -slider.scrollWidth/2) x = 0;
    slider.style.transform = `translateX(${x}px)`;
  }
  requestAnimationFrame(animate);
}
animate();

// pause on touch / mouse
document.getElementById('zedSliderWrap').addEventListener('touchstart', ()=> paused = true);
document.getElementById('zedSliderWrap').addEventListener('touchend', ()=> paused = false);
document.getElementById('zedSliderWrap').addEventListener('mouseenter', ()=> paused = true);
document.getElementById('zedSliderWrap').addEventListener('mouseleave', ()=> paused = false);


