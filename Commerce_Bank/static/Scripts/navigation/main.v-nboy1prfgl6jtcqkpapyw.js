/*hamburger button line animation and media query*/

var hamburger = document.getElementsByClassName("hamburger")[0];
var firstLine = document.querySelector(".hamburger .line:first-child");
var lastLine = document.querySelector(".hamburger .line:last-child");
var secondLine = document.querySelector(".hamburger .line:nth-child(2)");

function mediaQuery(x) {
  if (x.matches) { // If media query matches
  
  	$(".dropdown-menu div.row").css("margin-right", "0");
  
    hamburger.style.display = "flex"

    hamburger.addEventListener("click", function() {
	
	  // If hamburger menu isn't clicked, do the following:
	  
      if (hamburger.classList.contains("transformed")) {
	  
      $('.openMenu').css('display','none')
        hamburger.classList.remove("transformed");
        firstLine.style.animationName = "firstLineReverse";
        lastLine.style.animationName = "lastLineReverse";
        secondLine.style.animation = "appear 500ms ease-in-out forwards";
        $('.hamburgerBtn').removeClass('onClickColor');
		$('.main').css({
          'display': 'block'
        })
		$('.footer_wrapper').css({
          'display': 'block'
        })

      } else {

        // Otherwise, when it's clicked and expanded, do the following:
		
		$(".dropdown-menu div.row").css("margin-right", "auto");
		
		$('body').css({
          'background': 'transparent',
          'height': '100vh',
		  'width': 'auto'
        })		
		$('.main').css({
          'display': 'none'		 
        })
		$('.footer_wrapper').css({
          'display': 'none'
        })
		
        $('.logIn').removeClass('onClickColor');
        $('.hamburgerBtn').addClass('onClickColor');
        $(".formHide").removeClass("formShowHide");
        $('.openMenu').slideDown();	
		$('.dropMenu ul > li').not(this).find('.navigation-dropdown-toggle').removeClass("expanded"); //rotate arrow
        hamburger.classList.add("transformed");
        firstLine.style.animationName = "firstLine";
        lastLine.style.animationName = "lastLine";
        secondLine.style.animation = "disappear 0ms ease-in-out 250ms forwards";

      }
    });
  } else {
    //hamburger.style.display = "none";
	
	hamburger.classList.remove("transformed");
	firstLine.style.animationName = "firstLineReverse";
	lastLine.style.animationName = "lastLineReverse";
	secondLine.style.animation = "appear 500ms ease-in-out forwards";
	
	
	//added on 8/10/2020
	/*
	$('body').css({
		  'background': 'transparent'
	})
	*/	
	$('main').css({
          'display': 'block'
    })	
	$('.footer_wrapper').css({
          'display': 'block'
    })
	
  }
}

var x = window.matchMedia("(max-width: 991px)")
mediaQuery(x)
x.addListener(mediaQuery)
/*End hamburger button line animation and media query*/

/*INTERNET EXPROLER outside menu MOBILE*/
window.addEventListener('mouseup', function(e) {
  var $menu = $('.openMenu');
  if (!$menu.is(e.target) &&
    $menu.has(e.target).length === 0) {
    $menu.hide();
    $('.hamburgerBtn').removeClass('onClickColor')
    firstLine.style.animationName = "firstLineReverse";
    lastLine.style.animationName = "lastLineReverse";
    secondLine.style.animation = "appear 500ms ease-in-out forwards";
    $('body').css({
      'background': 'transparent',
      'height': '100vh',
      'width': 'auto'
    })
	
	/*
	$('.main').css({
		'display': 'block'
	})	
	$('.footer_wrapper').css({
	  'display': 'block'
	})
	*/
  }  

})

/*clicked outside menu desktop */
var $menuDesktop = $('.dropdown-menu');

/*Internet Explorer outside menu desktop*/

      $(document).click(function (e) {
          if($('.dropdown-menu').is(':visible')&&!$(e.target).closest('.dropdown-menu').length){
             $('.dropdown-menu').slideUp(500);
			 $('.overlayBackground').removeClass('overlayBackgroundFill').css('display','none');
          }
      });
	  

	  
/**ACTIVE CLASS BORDER ON CARD***/
var prevDivCard;
$(".nav .nav-item").click(function() {
  $('.nav .nav-item').removeClass('active1');
  $(prevDivCard).removeClass('active1');
  $(this).addClass('active1');
  prevDivCard = $(this);
});
/***END ACTIVE CLASS BORDER ON CARD**/



/**ACTIVE CLASS BORDER ON MegaMenu Links****/
var prevDiv;
$(".megaLink").click(function () {

  $(".activeMain").removeClass('activeMain');
  $(".selectedNav").removeClass('selectedNav');

  //$(prevDiv).removeClass('activeMain');
  //$(prevDiv).removeClass('selectedNav');

  $(this).addClass('activeMain');
  $(this).addClass('selectedNav');
  prevDiv = $(this);
});

/***END ACTIVE CLASS BORDER ON MegaMenu Links**/


/***ACTIVE CLASS BORDER ON SELECTOR IN FORM OPTION MOBILE VERSION**/
var prevDiv1;
$(".select h4").click(function() {
  $('.select h4').removeClass('active1');
  $(prevDiv1).removeClass('active1');
  $(this).addClass('active1');

  prevDiv1 = $(this);
});
/***END ACTIVE CLASS BORDER ON SELECTOR IN FORM OPTION MOBILE VERSION**/


/***ACTIVE CLASS BORDER ON SELECTOR IN FORM OPTION DESKTOP VERSION**/
var prevDiv2;

$(".selectDesktop h6").click(function() {
  $(".selectDesktop h6").removeClass('active2');
  $(prevDiv2).removeClass('active2');
  $(this).addClass('active2');
  prevDiv2 = $(this);
});
/***END ACTIVE CLASS BORDER ON SELECTOR IN FORM OPTION DESKTOP VERSION**/

/**Slide menu and arrows**/
$('.dropMenu ul').find('> li').click(function(e) {
  $('.dropMenu ul > li').not(this).find('.dropdown-menu').slideUp();
  $('.dropMenu ul > li').not(this).find('.navigation-dropdown-toggle').removeClass("expanded"); //added  
  $(this).find('.navigation-dropdown-toggle').stop(true, true).toggleClass("expanded");	//added
  
  if ($(this).find('.dropdown-menu').css('display') == 'none') {
    $(this).find('.dropdown-menu').stop(true, true).slideToggle(400);
	$(this).find('.dropdown-menu').addClass('floatNoneMobile');
    $('body').addClass('backgrBodyMobile');
	$('.overlayBackground').addClass('overlayBackgroundFill').css('display','block');
	
  } else {
    $(this).find('.dropdown-menu').slideUp(500);  
	$('.overlayBackground').removeClass('overlayBackgroundFill').css('display','none');
  }

  //return false; | use stopPropoagation instead so hyperlinks can work
  e.stopPropagation();
  
});
/**END Slide menu and arrows**/



/*CLICK ON LOGO MOBILE*/
$('.logo').click(function() {
  $('.hamburgerBtn').removeClass('onClickColor')
  $('body').css({
    'background': 'transparent',
    'height': '100vh',
    'width': 'auto'
  })
})

$('#megaMenu #personal-md .dropMenu ul li .dropdown-item').click(function() { //dropdown item
  $('.openMenu').hide();
  $('.hamburgerBtn').removeClass('onClickColor')
  hamburger.classList.remove("transformed");
  firstLine.style.animationName = "firstLineReverse";
  lastLine.style.animationName = "lastLineReverse";
  secondLine.style.animation = "appear 500ms ease-in-out forwards";
  $('body').css({
    'background': 'transparent',
    'height': '100vh',
    'width': 'auto'
  })  
})


$('.single').click(function() { //single item on menu
  $('.openMenu').hide();
  hamburger.classList.remove("transformed");
  firstLine.style.animationName = "firstLineReverse";
  lastLine.style.animationName = "lastLineReverse";
  secondLine.style.animation = "appear 500ms ease-in-out forwards";
  $('body').css({
    'background': 'transparent',
    'height': '100vh',
    'width': 'auto'
  })  
  $('.hamburgerBtn ').removeClass('onClickColor')
})




//clicked outside form MOBILE -----------------------OLD CODE
var $formM = $('.formHide');
// $(document).mouseup(e => {
//   if ($formM.is(e.target) &&
//     $formM.has(e.target).length === 0) {
//     $formM.removeClass('formShowHide');
//     $('.logIn').removeClass('onClickColor')
//     $('body').css({
//       'background': 'transparent',
//       'height': 'auto',
//       'width': 'auto'
//     })
//   }
// });


//clicked outside form MOBILE EXPLORER
window.addEventListener('mouseup', function(e) {
      if ($formM.is(e.target) &&
        $formM.has(e.target).length === 0) {
        $formM.removeClass('formShowHide');
		//$('.overlayBackground').removeClass('overlayBackgroundFill').css('display','none');
        $('.logIn').removeClass('onClickColor');
		$('body').css({
          'background': 'transparent',
          'height': '100vh',
          'width': 'auto'
        })
      }
})

// Get the modal
var loginModal = document.getElementById('main_login_modal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
}