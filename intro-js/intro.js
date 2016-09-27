// JavaScript Document


// site loader
$(window).load(function() {
    "use strict";
    // $('body').css('overflow', 'hidden');
    $('.loader').fadeOut('slow');
});


// quotes
$(function() {
    "use strict";
    /*
				- how to call the plugin:
				$( selector ).cbpQTRotator( [options] );
				- options:
				{
					// default transition speed (ms)
					speed : 2000,
					// default transition easing
					easing : 'ease',
					// rotator interval (ms)
					interval : 6000
				}
				- destroy:
				$( selector ).cbpQTRotator( 'destroy' );
				*/
    $('#cbp-qtrotator').cbpQTRotator();
});


// niceScroll
$(document).ready(function() {
    "use strict";
    $("body").niceScroll({
        cursorcolor: "#db0018",
        cursorwidth: "5px",
        cursorborder: "1px solid #db0018",
        cursorborderradius: "0px",
        zindex: "9999",
        scrollspeed: "60",
        mousescrollstep: "40",
        background: "rgba(0,0,0, 0)",
        autohidemode: false
    });
});


// niceScroll || scrollbars resize
$("body").getNiceScroll().resize();


// fade IN
$(window).load(function() {
        "use strict";
        $("body").css("display", "none");
        $("body").fadeIn(800);
})


// mobile-detect
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