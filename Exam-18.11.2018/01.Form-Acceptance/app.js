function acceptance() {
	let company = $('input[name="shippingCompany"]').val();
	let product = $('input[name="productName"]').val();
	let quantity = $('input[name="productQuantity"]').val();
	let scrape = $('input[name="productScrape"]').val();

	if (company && product && Number(quantity) > 0 && Number(scrape) >= 0) {
		let currentQuantity = Number(quantity) - Number(scrape);
		if (currentQuantity > 0) {
			let result = `[${company}] ${product} - ${currentQuantity} pieces`;

			let $div = $('<div>');
			let $p = $(`<p>${result}</p>`);
			$div.append($p);

			let $button = $('<button>');
			$button.text('Out of stock');
			$button.attr('type', 'button');
			$div.append($button);

			let $divResult = $('#warehouse');
			$divResult.append($div);

			$('#warehouse button').on('click', function (e) {
				$('button[type="button"]')[1].parentElement.remove();
			});
		}
	}

	$('input[name="shippingCompany"]').val('');
	$('input[name="productName"]').val('');
	$('input[name="productQuantity"]').val('');
	$('input[name="productScrape"]').val('');
}