(function($) {
		  
	
    // WINDOW.LOAD FUNCTION start
    $(window).load(function() {
        "use strict";
		
        // screen loader
        $('.screen-loader').fadeOut('slow');
	
    });
    // WINDOW.LOAD FUNCTION end
	
	
    // DOCUMENT.READY FUNCTION start
    $(document).ready(function() {
        "use strict";
		
        // preload
        $('#preload').css({
            display: 'table'
        });
		
        // preload.Timeout
        setTimeout(function() {
            $('#preload').delay(250).fadeOut(1400);
            $('#intro-wrapper').delay(1400).css({
                display: 'none'
            }).fadeIn(2400);
            $('#menu-wrapper').delay(1400).css({
                display: 'none'
            }).fadeIn(2400);
            $('#countdown-wrapper').delay(1400).css({
                display: 'none'
            }).fadeIn(2400);
			$('#film-grain').delay(1400).css({
                display: 'none'
            }).fadeIn(2400);
			$('.weather').delay(1400).css({
                display: 'none'
            }).fadeIn(2400);
			$('#snow').delay(1400).css({
                display: 'none'
            }).fadeIn(2400);
			$('#particles-holder').delay(1400).css({
                display: 'none'
            }).fadeIn(2400);
			$('.clouds').delay(1400).css({
                display: 'none'
            }).fadeIn(2400);
        });
		
        // kenburnsy
        $("#kenburnsy-bg").kenburnsy({
            fullscreen: true
        });
		
		// magnificPopup
        $('.popup-photo').magnificPopup({ 
  			type: 'image',
			gallery: {
				enabled: true,
  				tPrev: '',
  				tNext: '',
				tCounter: '%curr% / %total%'
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
		
        // countdown setup start
        $("#countdown").countdown({
            date: "15 August 2017 12:00:00", // countdown target date settings
            format: "on"
        }, function() {
            // callback function
        });
		
		// snow
		$(function() {
            $("#snow").each(function() {
                snowBind();
            });
        });
		
        // fire
        // fire home
        $("#fire-home").on("click", function(e) {
            e.preventDefault();
            $(".current").fadeOut(1200, function() {
                $("#home").fadeIn(2200);
                $(".current").removeClass("current");
                $("#home").addClass("current");
            });
        });
        // fire about
        $("#fire-about").on("click", function(e) {
            e.preventDefault();
            $(".current").fadeOut(1200, function() {
                $("#about").fadeIn(2200);
                $(".current").removeClass("current");
                $("#about").addClass("current");
            });
        });
        // fire services
        $("#fire-services").on("click", function(e) {
            e.preventDefault();
            $(".current").fadeOut(1200, function() {
                $("#services").fadeIn(2200);
                $(".current").removeClass("current");
                $("#services").addClass("current");
            });
        });
		// fire photos
        $("#fire-photos").on("click", function(e) {
            e.preventDefault();
            $(".current").fadeOut(1200, function() {
                $("#photos").fadeIn(2200);
                $(".current").removeClass("current");
                $("#photos").addClass("current");
            });
        });
        // fire contact
        $("#fire-contact").on("click", function(e) {
            e.preventDefault();
            $(".current").fadeOut(1200, function() {
                $("#contact").fadeIn(2200);
                $(".current").removeClass("current");
                $("#contact").addClass("current");
            });
        });
		
        // menu active state
        $('a.menu-state').on("click", function() {
            $('a.menu-state').removeClass("active");
            $(this).addClass("active");
        });
		
        // owlCarousel
        $(".services-gallery-slider").owlCarousel({
            slideSpeed: 350,
            singleItem: true,
            autoHeight: true,
            navigation: true,
            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });
		
        // wordRotator
        $("#wordrotator").wordsrotator({
            autoLoop: true, // auto rotate words
            randomize: false, // show random entries from the words array
            stopOnHover: false, // stop animation on hover
            changeOnClick: false, // force animation run on click
            animationIn: "fadeInLeft", // css class for entrace animation
            animationOut: "fadeOutRight", // css class for exit animation
            speed: 4000, // delay in milliseconds between two words
            words: ['Disfrute al máximo<br><span class="highlighter">...</span>', '... las ventajas que ofrece<br><span class="highlighter">la nube ...</span>',
                    '...con nuestras soluciones<br><span class="highlighter">CLOUD COMPUTING</span>'
                ]
                // Array of words, it may contain HTML values
        });
		
        // dialog
        (function() {
            var dlgtrigger = document.querySelector('[data-dialog]'),
                somedialog = document.getElementById(dlgtrigger.getAttribute('data-dialog')),
                dlg = new DialogFx(somedialog);
            dlgtrigger.addEventListener('click', dlg.toggle.bind(dlg));
        })();
		
        // YTPlayer
        $(function() {
            $(".player").mb_YTPlayer();
        });
	
    });
    // DOCUMENT.READY FUNCTION end
	
	
    // MOBILE DETECT start
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    // MOBILE DETECT end


})(jQuery);


// GOOGLE ANALYTICS start
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-3033286-18']);
_gaq.push(['_trackPageview']);
(function() {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();
// GOOGLE ANALYTICS end