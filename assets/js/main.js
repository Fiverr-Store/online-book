(function () {
	window.onload = function () {
		window.setTimeout(fadeout, 0);
	};
  function fadeout() {
		document.querySelector(".page-loader").style.opacity = "0";
		document.querySelector(".page-loader").style.display = "none";
	}

  //  window.addEventListener('load', function() {
  //   var myModal = new bootstrap.Modal(document.getElementById('p-modal'))
  //    setTimeout(function(){
  //     myModal.show();
  //    }, 200);
  // })

	window.onscroll = function () {
		var header_navbar = document.querySelector(".navbar-area");
		var sticky = header_navbar.offsetTop;
		if (window.pageYOffset > sticky) {
			header_navbar.classList.add("sticky");
		} else {
			header_navbar.classList.remove("sticky");
		}
		var backToTo = document.querySelector(".scroll-top");
		if (
			document.body.scrollTop > 50 ||
			document.documentElement.scrollTop > 50
		) {
			backToTo.style.display = "flex";
		} else {
			backToTo.style.display = "none";
		}
	};

  //===== mobile-menu-btn
  let navbarToggler = document.querySelector(".navbar-toggler");
  navbarToggler.addEventListener('click', function () {
      navbarToggler.classList.toggle("active");
  });





    /**
   * Testimonials slider
   */
     new Swiper('.first-slider', {
      speed: 600,
       loop: true,
      //  grabCursor: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
      slidesPerView: '1',
      // effect: "fade",
      navigation: {
        nextEl: ".btn-right",
        prevEl: ".btn-left",
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 10
        },

        576: {
          slidesPerView: 2,
          spaceBetween: 15
        },

        768: {
          slidesPerView: 3,
          spaceBetween: 13
        },

        992: {
          slidesPerView: 4,
          spaceBetween: 10
        },

        1200: {
          slidesPerView: 6,
          spaceBetween: 10
        }
      }
    });


    $('form#contact_form').submit(function() {
      $('form#contact_form .error').remove();
      var hasError = false;
      $('.requiredField').each(function() {
          if(jQuery.trim($(this).val()) == '') {
              var labelText = $(this).prev('label').text();
          //  $(this).parent().append('<span class="error">You forgot to enter your '+labelText+'.</span>');
              $(this).addClass('inputError');
              hasError = true;
          } else if($(this).hasClass('email')) {
              var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
              if(!emailReg.test(jQuery.trim($(this).val()))) {
                  var labelText = $(this).prev('label').text();
          //      $(this).parent().append('<span class="error">You entered an invalid '+labelText+'.</span>');
                  $(this).addClass('inputError');
                  hasError = true;
              }
          }
      });
      if(!hasError) {
          $('form#contact_form input.submit').fadeOut('normal', function() {
              $(this).parent().append('');
          });
          var formInput = $(this).serialize();
          $.post($(this).attr('action'),formInput, function(data){
              $('form#contact_form').slideUp("fast", function() {
                  $(this).before('<p class="success alert alert-success">Thanks! Your email was successfully sent.</p>');
              });
          });
      }

      return false;

  });


})();
