function addSticker() {
    let $title = $('input.title');
    let $content = $('input.content');

    let title = $title.val();
    let content = $content.val();
    
    if (title && content) {
        let $li = $('<li>');
        $li.attr('class', 'note-content');

        let $a = $('<a>');
        $a.attr('class', 'button');
        $a.text('x');
        $a.on('click', function(){
            $li.remove();
        });
        $li.append($a);

        let $h2 = $(`<h2>${title}</h2>`);
        $li.append($h2);

        $li.append('<hr>');

        let $p = $(`<p>${content}</p>`);
        $li.append($p);

        let $ul = $('#sticker-list');
        $ul.append($li);    
    }

    $title.val('');
    $content.val('');
}