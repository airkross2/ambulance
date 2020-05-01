$('.burger').click(function () {
    if ($('.m-menu').hasClass('active')) {
        $('.m-menu').slideUp(300);
        $('.m-menu').removeClass('active');
    } else {
        $('.m-menu').slideDown(300);
        $('.m-menu').addClass('active');
    }
});

