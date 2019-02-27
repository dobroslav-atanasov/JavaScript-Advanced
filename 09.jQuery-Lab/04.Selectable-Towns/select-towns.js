function attachEvents() {
	$('li').on('click', function(){
		if ($(this).attr('data-selected')) {
			$(this).css('background-color', '').attr('data-selected', 'false');
		} else {
			$(this).css('background-color', '#DDD').attr('data-selected', 'true');
		}
		
	});

	$('#showTownsButton').on('click', function(){
		let towns = $('#items li[data-selected=true]').toArray().map(x => x.textContent).join(', ');
		$('#selectedTowns').text(`Selected towns: ${towns}`);
	});
}