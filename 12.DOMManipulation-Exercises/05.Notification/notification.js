function notify(message) {
    $('#notification').css('display', 'block');
    $('#notification').text(message);

    setTimeout(function () {
        $('#notification').css('display', 'none');
    }, 2000);
}