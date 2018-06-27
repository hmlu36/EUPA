$(function() {

    // navbar toggle使用
    $(".navbar-toggler").click(function() {
        /*
        var status = !$("#navbarResponsive").hasClass("show");
        console.log(status);
        if (status) {
            $(".navbar").addClass("bg-dark");
            $(".navbar").addClass("navbar-dark");
        } else {
            $(".navbar").removeClass("bg-dark");
            $(".navbar").removeClass("navbar-dark");
        }
        */

        $(".navbar").toggleClass("bg-dark");
        $(".navbar").toggleClass("navbar-dark");
    });



    //jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 10) {
            $(".fixed-top").addClass("top-nav-collapse");
            $("body").css("background-image", "none");
        } else {
            $(".fixed-top").removeClass("top-nav-collapse");
            $("body").css("background-image", "url(img/index/background.jpg)");
        }
    });

    var width = $(window).width();
    var height = $(window).height();
    //console.log(width);

    var topParameter = $(".navbar-nav").css('top').replace("px", "");
    topParameter = (topParameter == "auto") ? "80" : topParameter;
    // console.log(topParameter);

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - topParameter)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    $("a.js-scroll-trigger").click(function() {
        $(".navbar").removeClass("bg-dark");
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: Number(topParameter)
    });



    // Smart Wizard
    $('#smartwizard').smartWizard({
        selected: 0,
        theme: 'dots',
        transitionEffect: 'fade',
        showStepURLhash: true
    });

});


new Vue({
    el: '.container',
    data: {
        posts: [],
        paginate: ['coffees']
    },
    methods: {
        getData: function(type) {
            //alert(type);
            var url = "";
            if (type == "coffee") {
                url = "mock/coffee.json";
            } else if (type == "cooking") {
                url = "mock/cooking.json";
            } else if (type == "food") {
                url = "mock/food.json";
            } else if (type == "gadgage") {
                url = "mock/gadgage.json";
            }
            axios.get(url, {
                responseType: 'json'
            }).then(response => {
                // alert(JSON.stringify(response.data));
                this.posts = response.data;
            });
        }
    },
    created() {
        this.getData("coffee");
    }
});