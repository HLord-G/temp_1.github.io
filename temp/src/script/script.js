let alreadyAlerted = false;
function checkScreenWidth() { 
  if (!alreadyAlerted && window.innerWidth <= 557) {
    alreadyAlerted = true;
    $('[flexboy_id="sliders"]').attr("slides-per-view", "1");
    setTimeout(() => {
      alreadyAlerted = false;
    }, 100);
  }else{
    alreadyAlerted = true;
    $('[flexboy_id="sliders"]').attr("slides-per-view", "2");
    setTimeout(() => {
      alreadyAlerted = false;
    }, 100);
  }
}
window.addEventListener("load", checkScreenWidth);



function trackScrollPosition() {
window.addEventListener('scroll', () => {
const scrollPos = window.scrollY;
if (scrollPos >= 100) {
  $('nav').addClass('bg-base-300');
}else{
  $('nav').removeClass('bg-base-300');
}
});
}

// Tawga ang function para mo-register ang event listener
trackScrollPosition();



let menuact = false;

const navbar = $('[navbar="true"]');
const menuOpen = $('[menuview="true"]');
const menuClose = $('[menuclose="true"]');

$(document).on("click", '[menuview="true"]', function(e){
e.preventDefault();
if (menuact) return;
menuact = true;

menuOpen.hide();
menuClose.show();

navbar.removeClass('scale-out-ver-bottom w-[0px] h-[0px] opacity-0');
navbar.addClass('w-full h-full opacity-1');

setTimeout(() => {
navbar.addClass('scale-in-ver-bottom');
}, 100);

// Set to false after animation is done
setTimeout(() => {
menuact = false;
}, 700); // 600ms animation + 100ms buffer
});


$(document).on("click", '[menuclose="true"]', function(e){
e.preventDefault();
if (menuact) return;
menuact = true;

menuClose.hide();
menuOpen.show();

navbar.removeClass('scale-in-ver-bottom');
navbar.addClass('scale-out-ver-bottom');

setTimeout(() => {
navbar.removeClass('w-full h-full opacity-1');
navbar.addClass('w-[0px] h-[0px] opacity-0');
}, 800); // match sa animation duration

setTimeout(() => {
menuact = false;
}, 800); // 1000ms animation + buffer
});