(function ($) {
    "use strict";
    //when dom is ready start
    var executed = false;
    function skills_content () {
        if (!executed) {
            executed = true;
            var width = $('.progress-bar').data('percent');
            setTimeout(function () {
                $('.progress-bar').each(function () {
                    var executed = false;
                    var width = $(this).data('percent');
                    $(this).css({
                        'transition': 'width 3s'
                    });
                    $(this).appear(function () {
                        $(this).css('width', width + '%');
                        $(this).find('.count').countTo({
                            from: 0,
                            to: width,
                            speed: 1000,
                            refreshInterval: 50,
                        });
                    });
                });
            }, 500);
        }
    };
    $('#skill-content').click(skills_content);
})(jQuery);