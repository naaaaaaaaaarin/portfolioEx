function animateFrom(elem, direction){
  direction = direction || 1;
  let x= 0,
      y = direction * 100;
  if(elem.classList.contains("revealLeft_js")){
    x = -200;
    y = 0;
  } else if(elem.classList.contains("revealRight_js")){
    x = 200;
    y = 0;
  }
  elem.style.transfrom  = "trnaslate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    duration: 1.25,
    x: 0,
    y: 0,
    autoAlpha: 1,
    ease: "expo",
    overwrite: "auto"
  });
}

function hide(elem){
  gsap.set(elem, {autoAlpha: 0});
}

document.addEventListener("DOMContentLoaded", function(){
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".reveal_js").forEach(function(elem){
    hide(elem);

    ScrollTrigger.create({
      trigger: elem,
      onEnter: function(){animateFrom(elem)},
      onEnterBack: function(){animateFrom(elem, -1)},
      onLeave: function(){hide(elem)}
    })
  })
})