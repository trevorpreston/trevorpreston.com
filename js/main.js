console.log('javascript connected!')

$(function () {
  //event listeners
  function createProj1Events(){
    var $pic1 = $('#project1');
    var $proj1=$('#proj1-desc');
    var $proj1cont = $('#project-highlight-container')
    var $proj1hitbox = $('#proj1hitbox')

    $pic1.on('mouseover', function(){
      $pic1.css('opacity', '.9');
      $proj1.css({'display':'inline-block', 'height':$pic1.height()*.9});
      $proj1hitbox.css('display', 'block');
      console.log('HUVAh')
    })


    $proj1hitbox.on('mouseout', function(){
      $pic1.css('opacity', '.6')
      $proj1.css('display', 'none');
      $proj1hitbox.css('display', 'none')
      console.log('no huvah')
    })
  }

  function createProj2Events(){
    var $pic2 = $('#project2');
    var $proj = $('#proj-desc');
    var $projHitbox = $('#proj-hitbox');
    var $proj2cont = $('#project-highlight-container');
    var $proj2hitbox1 = $('#proj2hitbox1');

    $pic2.on('mouseover', function(){
      $pic2.css('opacity', '.9');
      $proj.css('display', 'inline-block');
      $projHitbox.css('display', 'block');
      $proj2hitbox1.css('display', 'block');
      console.log('HUVAh')
    })

    $proj2hitbox1.on('mouseout', function(){
      $pic2.css('opacity', '.6')
      $proj2hitbox1.css('display', 'none')
      console.log('no huvah')
    })

    $projHitbox.on('mouseout', function(){
      $proj.css('display', 'none')
      console.log('no huvah')
    })

  }






  createProj1Events();
  createProj2Events();


  /* SCROLL MAGIC*/
  // init
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave',
    }
  });

  // get all slides
  var slides = document.querySelectorAll("section.panel");

  // create scene for every slide
  for (var i=0; i<slides.length; i++) {
    new ScrollMagic.Scene({
        triggerElement: slides[i]
      })
      .setPin(slides[i])
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
  }

  var scroller = ['full stack apps.','responsive front-end.','robust back-end.', 'fluid UX.', 'web-connected devices.'];
  function cycleScroller(arr){
    $('#scroller-2').text(arr[0]);
    var i = 1;
    setInterval(
      function(){
        $('#scroller-2').text(arr[i]);
        i++;
        if(i >= scroller.length) i = 0;
      },2000);
  }

  // new ScrollMagic.Scene({triggerElement: ".about"})
  //       .setClassToggle("nav", "active") // add class toggle
  //       // .addIndicators() // add indicators (requires plugin)
  //       .addTo(controller);


var controller2 = new ScrollMagic.Controller({
  globalSceneOptions: {duration: 1.2*($(window).height())}
});

// build scenes

  new ScrollMagic.Scene({triggerElement: ".about"})
        .setClassToggle("nav", "active") // add class toggle
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

  new ScrollMagic.Scene({triggerElement: ".about"})
        .setClassToggle("#nav-tog-el-1", "active-nav") // add class toggle
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller2);
  new ScrollMagic.Scene({triggerElement: ".projects"})
        .setClassToggle("#nav-tog-el-2", "active-nav") // add class toggle
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller2);
  new ScrollMagic.Scene({triggerElement: ".contact"})
        .setClassToggle("#nav-tog-el-4", "active-nav") // add class toggle
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller2);


  $('#high1').on('click', (e) =>{
    $('html, body').animate({
          scrollTop: $(".projects").offset().top -100
      }, 500);
  })

  cycleScroller(scroller);
});



