$(function() {
    /*
        var width = $(window).width();
        var height = $(window).height();
        $.blockUI({
            message: "<img src='img/index/" + (width > height ? "EUPA home.jpg" : "EUPA home-vertical.jpg") + "' style='width:auto ; height:100%;'/>",
            css: {
                top: 0,
                left: 0,
                width: width,
                height: height,
                backgroundColor: '#F8E13B',
                '-webkit-border-radius': '10px',
                '-moz-border-radius': '10px',
            }
        });
        $(".navbar").hide();

        setTimeout(function() {
            $(".navbar").show();
            $.unblockUI();
        }, 2500);
    */

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



    var navListItems = $('div.setup-panel div a'),
        allWells = $('.setup-content');

    allWells.hide();

    navListItems.click(function(e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
            $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-indigo').addClass('btn-default');
            $item.addClass('btn-indigo');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    $('div.setup-panel div a.btn-indigo').trigger('click');
});

new Vue({
    el: '.header-area',
    data: {
        sliders: [
            { "mold": "TSK-P103NBDQ.jpg" },
            { "mold": "TSK-2625ST.jpg" },
            { "mold": "TSK-2309BPZ.jpg" },
            { "mold": "TSK-2265GW.jpg" },
            { "mold": "TSK-2193W.jpg" },
            { "mold": "TSK-1837B.jpg" }
        ]
    },
    methods: {
        headerContent(slider) {
            // 談
            let $element =
                '<div class="article-read text-left">                                                                                 ' +
                '    <div class="article-read-inner">                                                                                 ' +
                '        <div class="article-back">                                                                                   ' +
                '            <a class="btn btn-outline-primary"><i class="ion ion-chevron-left"></i> Back</a>                         ' +
                '        </div>                                                                                                       ' +
                '    </div>                                                                                                           ' +
                '    <div class="w-100"><img src = "img/slider/{mold}" class="img-fluid" style=" width：100％"> </div>' +
                '</div>                                                                                                               ';

            let reg = /{([a-zA-Z0-9]+)}/g,
                res = [],
                element = $element;
            while (match = reg.exec($element)) {
                element = element.replace('{' + match[1] + '}', slider[match[1]]);
            }

            $.blockUI({
                message: element,
                css: {
                    top: 0,
                    left: 0,
                    width: $(window).width(),
                    height: $(window).height(),
                    overflow: 'scroll',
                    cursor: 'default'
                }
            });

            $("nav").hide();

            $(".article-read").fadeIn();
            $(document).on("click", ".article-back .btn", function() {
                $(".article-read").fadeOut(function() {
                    $(".article-read").remove();
                    $("nav").show();
                    $.unblockUI();
                });
                return false;
            });
        }

    },
    created() {

    }
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