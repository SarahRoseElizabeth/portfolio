$(document).ready(function() {

  // changes to default unslider plugin arrows
    $('.my-slider').unslider({
      nav: false,
      arrows: {
      	prev: '<div class="arrow-div div-prev "><a class="unslider-arrow prev"></a></div>',
      	next: '<div class="arrow-div div-next"><a class="unslider-arrow next"></a></div>',
      }
    });

    // title screen animation
    let tl = new TimelineMax({repeat: -1, repeatDelay: 1});
    let pinkAnim = {fill:"#ff00cf", repeat: 1, yoyo: true,  ease: Power4.easeOut};
    let animLength = 0.75;

    tl.to("#A-3", animLength, pinkAnim, 0)
      .to("#R", animLength, pinkAnim, 1.0)
      .to("#T", animLength, pinkAnim, 2.0 )
      .to("#A", animLength, pinkAnim, 5.0)
      .to("#R-2", animLength, pinkAnim, 6.0)
      .to("#T", animLength, pinkAnim, 7.0)
      .to("#A-2", animLength, pinkAnim, 10.0)
      .to("#R", animLength, pinkAnim, 11.0)
      .to("#T", animLength, pinkAnim, 12.0)
  });
