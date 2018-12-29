$( document ).ready(function() {

    /*responsive menu*/

    $('button.navbar-toggler').click(function () {
        $(this).parent().toggleClass("menu__responsive");
    });


    /*sticky menu*/

    $(window).scroll(function () {
        let scrollTop=$(this).scrollTop();
        if(scrollTop >70){
            $('.menu__nav').addClass('menu__sticky');
            $('.menu img:nth-child(1)').addClass('d-none');
            $('.menu img:nth-child(2)').removeClass('d-none').addClass('d-inline-block');
            // $('.nav-link').removeClass('white-text').addClass('black-text');
        }
        else {
            $('.menu__nav').removeClass('menu__sticky');
            $('.menu img:nth-child(1)').removeClass('d-none');
            $('.menu img:nth-child(2)').addClass('d-none').removeClass('d-inline-block');
            // $('.nav-link').addClass('white-text').removeClass('black-text');
        }
    });


    /*scroll top animation*/

    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
            $('.scroll-up').fadeIn("slow").css("display", "block");
        } else {
            $('.scroll-up').fadeOut("slow").css("display", "none");
        }
    });

    $(".scroll-up").click(function (event) {
        event.preventDefault();
        $("html, body").animate({scrollTop: 0}, "slow");
        return false;
    });
    var f=(function() {
        var $sidebar = $(".personal__account"),
            $window = $(window),
            $offset = $sidebar.offset(),
            topPadding = 90;
        console.log(window.innerWidth > 767);
        console.log($window.scrollTop() > $offset.top);
        if (window.innerWidth > 767) {
            $window.on('scroll',function () {
                    if ($window.scrollTop() > $offset.top) {
                        $sidebar.css("margin-top", ($window.scrollTop() - $offset.top + topPadding) + "px");
                    }
                    else {
                        $sidebar.css("margin-top", 0);
                    }
                }
            );
        }
    });
    f();


});
