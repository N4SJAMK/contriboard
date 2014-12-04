jQuery(document).ready(function($) {
    
    /* ======= Fixed nav when scrolled ======= */
    
    $(window).bind('scroll', function() {
         if ($(window).scrollTop() > 15) {
             $('#nav-bg').addClass('nav-bg');
         }
         else {
             $('#nav-bg').removeClass('nav-bg');
         }
    });
   
    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function(e){
        
        //store hash
        var target = this.hash;
                
        e.preventDefault();
        
		$('body').scrollTo(target, 800, {offset: -70, 'axis':'y', easing:'easeOutQuad'});
	});

});