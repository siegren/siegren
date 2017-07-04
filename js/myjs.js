$(document).ready(function(){
	$('.arrow').click(function(){
	var h = 	$('#navbar').css("height");
	if(h == "80px"){
			$('.arrow').html('<img src="img/arrow-up.png">	');	
		$('#navbar').animate({height:"410px"},  { duration: 500, queue: false });
		$('#navbar ul').css({"display":"block"});
	}else{
		$('#navbar').animate({height:"80px"}, 500, function(){
			$('#navbar ul').css({"display":"none"});
			$('.arrow').html('<img src="img/arrow-down.png">	');			
		});

	}

})
})



// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });