(function($) {
    'use strict';

    jQuery(document).ready(function() {

        /*
         * ----------------------------------------------------------------------------------------
         *  PRELOADER
         * ----------------------------------------------------------------------------------------
         */

        $(window).load(function() {


            $('.preloader').fadeOut();
            $('.preloader-area').delay(350).fadeOut('slow');

            $(".menu-area").sticky({
                topSpacing: 0,
            });


            /*
             * ----------------------------------------------------------------------------------------
             *  SCROOL TO UP JS
             * ----------------------------------------------------------------------------------------
             */
            $(window).scroll(function() {
                if ($(this).scrollTop() > 250) {
                    $('.scrollup').fadeIn();
                } else {
                    $('.scrollup').fadeOut();
                }
            });

            $('.scrollup').on("click", function() {
                $("html, body").animate({
                    scrollTop: 0
                }, 800);
                return false;
            });


        });

        /*
         * ----------------------------------------------------------------------------------------
         *  CHANGE MENU BACKGROUND
         * ----------------------------------------------------------------------------------------
         */

        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 200) {
                $('.header-top-area').addClass('menu-bg');
            } else {
                $('.header-top-area').removeClass('menu-bg');
            }
        });


        /*
         * ----------------------------------------------------------------------------------------
         *  SMOTH SCROOL
         * ----------------------------------------------------------------------------------------
         */
        $('a.smoth-scroll').on("click", function(e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 0
            }, 1000);
            e.preventDefault();
        });


        /*
         * ----------------------------------------------------------------------------------------
         *  COUNTER UP
         * ----------------------------------------------------------------------------------------
         */

        var timerInit = false;
        $(".timer").each(function() {
            $(this).bind("inview", function(isInView) {
                var dataCount = parseInt($(this).attr("data-count"));
                if (isInView && timerInit == false) {
                    $(this).countTo({
                        from: 0,
                        to: dataCount,
                        speed: 2500,
                        refreshInterval: 50,
                        formatter: function(value, options) {
                            return value.toFixed(options.decimals);
                        },
                        onUpdate: function(value) {
                            // console.debug(this);
                        },
                        onComplete: function(value) {
                            timerInit = true;
                        }
                    });
                }
            });
        });

        /*
         * ----------------------------------------------------------------------------------------
         *  CCONTACT FORM
         * ----------------------------------------------------------------------------------------
         */

        function submitForm() {
            // Initiate Variables With Form Content
            var name = $("#name").val();
            var email = $("#email").val();
            var message = $("#message").val();

            $.ajax({
                type: "POST",
                url: "assets/php/contact.php",
                data: "name=" + name + "&email=" + email + "&message=" + message,
                success: function(text) {
                    if (text == "success") {
                        formSuccess();
                    }
                }
            });
        }

        function formSuccess() {
            $("#msgSubmit").removeClass("hidden");
        }



    });

})(jQuery);
