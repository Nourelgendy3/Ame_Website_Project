/*==========  DROP DOWN MENU ==========*/
$(document).ready(function () {
    var DELAY = 700, clicks = 0, timer = null;
  
    // On click or double click
    $("nav ul li.dropdown a.dropdown-toggle")
        .on("click", function (e) {
            clicks++;
            if (clicks === 1) {
                timer = setTimeout(function () {
                    clicks = 0;
                }, DELAY);
            } else {
                clearTimeout(timer);
                $('.dropdown-menu').removeClass('show');
                $('html, body').animate({ //animate window scrolling (on click of "#" link)
                    scrollTop: $($.attr(this, 'href')).offset().top //when scrolling to link destination
                }, 1000);
                clicks = 0;
            }
        })
        .on("dblclick", function (e) {
            e.preventDefault();
        });
  
    //mulit-level menu
    $("ul.dropdown-menu [data-toggle='dropdown']").on("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
  
        $(this).siblings().toggleClass("show");
  
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
            $('.dropdown-submenu .show').removeClass("show");
        });
  
    });
});





/*========== NAVBAR TRANSPARENT TO SOLID ==========*/
$(document).ready(function () { //when document(DOM) loads completely
    checkScroll(); //check if page is scrolled
    $(window).scroll(checkScroll); //get scroll position of window
});

function checkScroll() { //check if page is scrolled
if ($(window).scrollTop() >= 300) { //if window is scrolled 300px or more
    $('.navbar').addClass('solid'); //add class 'solid' to element with class 'navbar'
} else { //if page is not scrolled 300px from top
    $('.navbar').removeClass('solid'); //remove class 'solid' from navbar element
}
}


/*========== ADD SOLID CLASS TO NAVBAR WHEN TOGGLED ==========*/
$('.navbar-toggler').click(function () { //when navbar-toggler is clicked
    if ($(window).scrollTop() <= 300) { //if window scrolled 300px or less from top
    $("nav.navbar").toggleClass("solid-toggle"); //add the solid class to navbar
    }
});


/*========== CLOSE MOBILE MENU ON CLICK & SMOOTH SCROLL TO LINK a[href^="#"] ==========*/
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('.navbar-toggler').addClass('collapsed');
    $('#navbarResponsive').removeClass('show');

    setTimeout(function () {
        $('nav.navbar').removeClass('solid-toggle');
    }, 300);

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().scrollTop
    }, 1000);
});

/* TOOLTIP */
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});
/* popover */
$(function () {
    $('[data-toggle="popover"]').popover()
});
$('.popover-dismiss').popover({
    trigger: 'focus'
});
/* Alert */
$(document).ready(function(){
    $('button').click(function(){
        $('.alert').show()
    }) 
});
/* Modal */

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
});
/* Alerts */
$('#Addmsg').on('click', function () {
    $.alert('Successfully added', {
        autoClose: false,
       
         
        
  });
  });





/*========== LIGHTBOX IMAGE GALLERY ==========*/
$(document).ready(function () {
    lightbox.option({
        'resizeDuration': 600,
        'wrapAround': true,
        'imageFadeDuration': 500
    });
});


/*========== MEET THE TEAM CAROUSEL ==========*/
$(document).ready(function(){ //when document(DOM) loads completely
    $('#team-carousel').owlCarousel({ //owlCarousel settings
        autoplay: true, //set to false to turn off autoplay and only use nav
        autoplayHoverPause: true, //set to false to prevent pausing on hover
        loop: true, //set to false to stop carousel after all slides shown
        autoplayTimeout: 8000, //time between transitions
        smartSpeed: 1200, //transition speed
        dotsSpeed: 1000, //transition speed when using dots/buttons
        responsive : { //set number of items shown per screen width
            0 : {
                items: 1 //0px width and up display 1 item
            },
            768 : {
                items: 2 //768px width and up display 2 items
            },
            992 : {
                items: 3 //992px width and up display 3 items
            }
        }
    });
  });




/*========== TOP SCROLL BUTTON ==========*/
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.top-scroll').fadeIn();
        } else {
            $('.top-scroll').fadeOut();
        }
    });
});


/*========== MAKE ALL ANIMATION "FADEINUP" ON MOBILE ==========*/
$(document).ready(function () {
    if ($(window).width() < 768) {
        $('div').attr('data-animation', 'fadeInUp');
    }
});



/*========== WAYPOINTS ANIMATION DELAY ==========*/
//Original Resource: https://www.oxygenna.com/tutorials/scroll-animations-using-waypoints-js-animate-css
$(function () { // a self calling function
  function onScrollInit(items, trigger) { // a custom made function
      items.each(function () { //for every element in items run function
          var osElement = $(this), //set osElement to the current
              osAnimationClass = osElement.attr('data-animation'), //get value of attribute data-animation type
              osAnimationDelay = osElement.attr('data-delay'); //get value of attribute data-delay time

          osElement.css({ //change css of element
              '-webkit-animation-delay': osAnimationDelay, //for safari browsers
              '-moz-animation-delay': osAnimationDelay, //for mozilla browsers
              'animation-delay': osAnimationDelay //normal
          });

          var osTrigger = (trigger) ? trigger : osElement; //if trigger is present, set it to osTrigger. Else set osElement to osTrigger

          osTrigger.waypoint(function () { //scroll upwards and downwards
              osElement.addClass('animated').addClass(osAnimationClass); //add animated and the data-animation class to the element.
          }, {
                  triggerOnce: true, //only once this animation should happen
                  offset: '70%' // animation should happen when the element is 70% below from the top of the browser window
              });
      });
  }

  onScrollInit($('.os-animation')); //function call with only items
  onScrollInit($('.staggered-animation'), $('.staggered-animation-container')); //function call with items and trigger
});


