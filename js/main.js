console.log('javascript connected!')

$(function () {
  //event listeners
  function createProj1Events(){
    var $pic1 = $('#proj1-pic');
    var $proj1Desc=$('#proj1-desc');
    var $proj1Hitbox = $('#proj1-hitbox')

    $pic1.on('mouseenter', function(){
      console.log('huva!');
      $proj1Desc.css({'display':'block', 'height':$pic1.height()});
      $pic1.css('opacity', '1')
    })

    $pic1.on('mouseleave', function(){
      console.log('off')
      $proj1Desc.css('display', 'none');
      $pic1.css('opacity', '.6')
    })

    // $proj1Hitbox.on('mouseleave', function(){
    //   console.log('off')
    //   $proj1Desc.css('display', 'none');
    //   $pic1.css('opacity', '.6')
    // })
  }

  function createProj2Events(){
    var $pic2 = $('#proj2-pic');
    var $proj2Desc = $('#proj2-desc')
    var $proj234Container = $('#project234-container')
    $pic2.on('mouseenter', function(){
      console.log('huva!');
      $proj2Desc.css({'display':'block', 'height':$proj234Container.height()});
      $pic2.css('opacity', '1');
    })

    $pic2.on('mouseleave', function(){
      console.log('off')
      $proj2Desc.css('display', 'none');
      $pic2.css('opacity', '.6')
    })
  }

  function createProj3Events(){
    var $pic3 = $('#proj3-pic');
    var $proj3Desc = $('#proj3-desc')
    var $proj234Container = $('#project234-container')

    $pic3.on('mouseenter', function(){
      console.log('huva!');
      $proj3Desc.css({'display':'block', 'height':$proj234Container.height()});
      $pic3.css('opacity', '1');
    })

    $pic3.on('mouseleave', function(){
      console.log('off')
      $proj3Desc.css('display', 'none');
      $pic3.css('opacity', '.6')
    })
  }

  function createProj4Events(){
    var $pic4 = $('#proj4-pic');
    var $proj4Desc = $('#proj4-desc')
    var $proj234Container = $('#project234-container')

    $pic4.on('mouseenter', function(){
      console.log('huva!');
      $proj4Desc.css({'display':'block', 'height':$proj234Container.height()});
      $pic4.css('opacity', '1');
    })

    $pic4.on('mouseleave', function(){
      console.log('off')
      $proj4Desc.css('display', 'none');
      $pic4.css('opacity', '.6')
    })
  }

  createProj1Events();
  createProj2Events();
  createProj3Events();
  createProj4Events();


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



