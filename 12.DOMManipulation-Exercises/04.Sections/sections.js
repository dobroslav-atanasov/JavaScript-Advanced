function create(sentences) {
    for (let item of sentences) {
        let $divElement = $('<div>');
        let $pElement = $('<p>');
		
        $pElement.text(item);
        $pElement.css('display', 'none');

        $divElement.on('click', ()=>{
            $pElement.css('display', 'block');
        });

        $divElement.append($pElement);
        $('#content').append($divElement);
    }
}