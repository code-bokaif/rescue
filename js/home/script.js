(function($) { "use strict";

	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});		
		
	//Animation
	
	$(document).ready(function() {
		$('body.hero-anime').removeClass('hero-anime');
	});

	//Menu On Hover
		
	$('body').on('mouseenter mouseleave','.nav-item',function(e){
			if ($(window).width() > 750) {
				var _d=$(e.target).closest('.nav-item');_d.addClass('show');
				setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
	});	
		
  })(jQuery);


  //Typing Effect On Homepage

  const typedTextSpan = document.querySelector(".typed-text");
  const cursorSpan = document.querySelector(".cursor");  
  const textArray = ["MEDICINES", "DOCTORS", "HOSPITALS"];
  const typingDelay = 200;
  const erasingDelay = 80;
  const newTextDelay = 500; // Delay between current and next text
  let textArrayIndex = 0;
  let charIndex = 0;
  
  function type() {
	if (charIndex < textArray[textArrayIndex].length) {
	  if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
	  typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
	  charIndex++;
	  setTimeout(type, typingDelay);
	} 
	else {
	  cursorSpan.classList.remove("typing");
		setTimeout(erase, newTextDelay);
	}
  }
  
  function erase() {
	  if (charIndex > 0) {
	  if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
	  typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
	  charIndex--;
	  setTimeout(erase, erasingDelay);
	} 
	else {
	  cursorSpan.classList.remove("typing");
	  textArrayIndex++;
	  if(textArrayIndex>=textArray.length) textArrayIndex=0;
	  setTimeout(type, typingDelay + 1100);
	}
  }
  
  document.addEventListener("DOMContentLoaded", function() {
	if(textArray.length) setTimeout(type, newTextDelay + 250);
  });

$(document).ready(function(){
    $("#search").focus(function() {
      $(".search-box").addClass("border-searching");
      $(".search-icon").addClass("si-rotate");
    });
    $("#search").blur(function() {
      $(".search-box").removeClass("border-searching");
      $(".search-icon").removeClass("si-rotate");
    });
    $("#search").keyup(function() {
        if($(this).val().length > 0) {
          $(".go-icon").addClass("go-in");
        }
        else {
          $(".go-icon").removeClass("go-in");
        }
    });
    $(".go-icon").click(function(){
      $(".search-form").submit();
    });
});