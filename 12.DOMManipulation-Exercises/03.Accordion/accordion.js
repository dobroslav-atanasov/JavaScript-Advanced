function toggle() {
    let $button = $('.button');
    let $div = $('#extra');

    if ($button.text() === 'More') {
        $button.text('Less');
        $div.css('display', 'block');
    } else {
        $button.text('More');
        $div.css('display', 'none');
    }
}