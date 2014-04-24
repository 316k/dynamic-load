function load_visible_img() {
    $('.dynamic-load').each(function() {
        if ($(this).offset().top > $(window).scrollTop() - $(this).height() &&
                $(this).offset().top < $(window).scrollTop() + $(window).height() + $(this).height()) {
            $(this).attr('src', $(this).data('src'));
            $(this).removeClass('dynamic-load');
            console.log('asd');
        }
    });
}

$(document).ready(function() {
    load_visible_img();
    $(window).scroll(load_visible_img);
});