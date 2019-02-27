function attachEvents() {
    $('a').on('click', clickEvent);

    function clickEvent() {
        $('a').removeClass('selected');
        $(this).addClass('selected');
    }
}