! function() {
    "use strict";
    $(document).ready(function() {
        function e() { $(".hero-content").css({ "min-height": $(window).height() }) }
        e(), $(window).resize(e), $(".lightbox--js").magnificPopup({ type: "image", mainClass: "mfp-with-zoom mfp-fade", gallery: { enabled: !0 }, zoom: { enabled: !0, duration: 300, easing: "ease-in-out", opener: function(e) { return e.is("img") ? e : e.find("img") } } }), $("#testimonials-slider").slick({ dots: !0, infinite: !0, speed: 500, fade: !0, adaptiveHeight: !0, draggable: !1, cssEase: "linear", appendDots: "#slick-dots", appendArrows: "#slick-arrow" })
    })
}();