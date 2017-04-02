smoothScroll.init();

new WOW().init();


$('.parallax-window').parallax({imageSrc: '/images/bg.jpg'});

$('.grid').isotope({
  // options...
  itemSelector: '.grid-item',
  masonry: {
    columnWidth: 200
  }
});




/* shahed vai */

$('.head').parallax("50%",0.4);
        $('#counter').parallax("50%",0.4);
        $('#client').parallax("50%",0.4);

        $(document).ready(

        function() {

          $("html").niceScroll();

        }

        );

         $(function() {
            $('.navbar-nav li a').bind('click', function(event) {
                var $anchor=$(this);
                $('html, body').stop().animate( {
                    scrollTop: $($anchor.attr('href')).offset().top
                }
                , 1500, 'easeInOutExpo');
                event.preventDefault();
            }
            );
           }
          );

          new WOW().init();


          $(document).ready(function() {
          $("html").niceScroll();
      });

      $(function () {
         $('.header').stickyNavbar();
      });


  
