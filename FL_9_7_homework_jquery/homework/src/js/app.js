$('#view-more').on('click', function () {
    $('.other-photos-section').css({
        'display': 'flex'
    });
    $('#view-more').css({
        'display': 'none'
    })
});


const images = $('img');
for (let i = 0; i < images.length; i++) {
    $(images[i]).on('click', function () {
        $('#my-modal').css({
            'display': 'flex'
        });
        $('.modal-image').attr('src', this.src);
        $('#left').on('click', function () {

            $('.modal-image').attr('src', images[i--].src);
        })
        $('#right').on('click', function () {

            $('.modal-image').attr('src', images[i++].src);
        })
    });
}

$('#close').on('click', function () {
    $('#my-modal').css({
        'display': 'none'
    });
    $('.modal-image').attr('src', '');
})
