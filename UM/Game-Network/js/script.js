$("#button").click(function() {
    var offset = 20; //Offset of 20px

    $('html, body').animate({
        scrollTop: $("#elementtoScrollToID").offset().top + offset
    }, 2000);
});
