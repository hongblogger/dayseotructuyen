
// Countdown


// Bootstrap carousel
$('.carousel').carousel({
    interval: 6000
});

// Responsive video



// Sticky header
if ($('body').hasClass('sticky-header')) {
    var theLoc = $('#hd').position().top;
    $(window).scroll(function() {
        if (theLoc >= $(window).scrollTop()) {
			
            if ($('#hd').hasClass('fixed')) 
			
			{
                $('#hd').removeClass('fixed');
            }
        } else {
            if (!$('#hd').hasClass('fixed')) {
                $('#hd').addClass('fixed');
            }
        }
    });
}





// Responsive navigation
$('#flexnav').flexNav();



// Lighbox text
$('.popup-text').magnificPopup({
    removalDelay: 500,
    closeBtnInside: true,
    callbacks: {
        beforeOpen: function() {
            this.st.mainClass = this.st.el.attr('data-effect');
        }
    },
    midClick: true
});

// Lightbox iframe
$('.popup-iframe').magnificPopup({
    dispableOn: 700,
    type: 'iframe',
    removalDelay: 160,
    mainClass: 'mfp-fade',
    preloader: false
});





// Bootstrap tooltips
$('[data-toggle="tooltip"]').tooltip();











$('.bg-parallax').each(function() {
    var $obj = $(this);

    $(window).scroll(function() {
        // var yPos = -($(window).scrollTop() / $obj.data('speed'));
        var animSpeed;
        if ($obj.hasClass('bg-blur')) {
            animSpeed = 10;
        } else {
            animSpeed = 15;
        }
        var yPos = -($(window).scrollTop() / animSpeed);
        var bgpos = '50% ' + yPos + 'px';
        $obj.css('background-position', bgpos);

    });
});

// Document ready functions
$(document).ready(function() {


   

    // Owl Carousel
    var owlCarousel = $('#owl-carousel'),
        owlItems = owlCarousel.attr('data-items'),
        owlCarouselSlider = $('#owl-carousel-slider'),
        owlNav = owlCarouselSlider.attr('data-nav');
    // owlSliderPagination = owlCarouselSlider.attr('data-pagination');

    owlCarousel.owlCarousel({
        items: owlItems,
        navigation: true,
        navigationText: ['', '']
    });

    owlCarouselSlider.owlCarousel({
        slideSpeed: 800,
        paginationSpeed: 900,
		autoPlay:true,
        // pagination: owlSliderPagination,
        singleItem: true,
        navigation: true,
        navigationText: ['', ''],
        // autoPlay: 4500
    });


 
  $("#owl-demo").owlCarousel({
    items : 3,
    lazyLoad : true,
    navigation : false,
	autoPlay:true,
	pagination:false,
	 slideSpeed: 300,
        paginationSpeed: 400
  }); 
 

 $("#owl-demo-size").owlCarousel({
  
    lazyLoad : true,
   navigation : true,
	autoPlay:false,
	 pagination : true,
    paginationNumbers: false,
	navigationText : ["xem<br> lại","xem<br> thêm"],
        paginationSpeed: 400,
		 items : 3, //10 items above 1000px browser width
      itemsDesktop : [1000,3], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0
      itemsMobile : [400,1] // itemsMobile disabled - inherit from itemsTablet option
		
  }); 


});


// Lighbox gallery
$('#popup-gallery').each(function() {
    $(this).magnificPopup({
        delegate: 'a.popup-gallery-image',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

// Lighbox gallery
$('#popup-gallery').each(function() {
    $(this).magnificPopup({
        delegate: 'a.popup-gallery-image',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

// Lighbox image
$('.popup-image').magnificPopup({
    type: 'image'
});

