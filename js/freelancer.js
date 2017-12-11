// Freelancer Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 170
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })
    
    // https://gist.github.com/tdsymonds/23917215f591a9e1442a38783c77f0f0
    
    // For the below to work with the escape key
    // I needed to add data-keyboard="false" to the modal
    // in the HTML so that the standard bootstrap function
    // doesn't fire, the below fires instead

    $('div.modal').on('show.bs.modal', function() {
        var modal = this;
        var hash = modal.id;
        window.location.hash = hash;
        window.onhashchange = function() {
            if (!location.hash){
                $(modal).modal('hide');
            }
        }
    });

    $('div.modal').on('hidden.bs.modal', function() {
        var hash = this.id;
        history.replaceState('', document.title, window.location.pathname);
    });

    // when close button clicked simulate back
    $('div.modal button.close').on('click', function(){
        window.history.back();
    })

    // when esc pressed when modal open simulate back
    $('div.modal').keyup(function(e) {
        if (e.keyCode == 27){
            window.history.back();          
        }
    });

})(jQuery); // End of use strict
