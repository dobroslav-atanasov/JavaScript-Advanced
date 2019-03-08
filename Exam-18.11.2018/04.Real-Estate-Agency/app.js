function realEstateAgency() {
	let $rentPrice = $('input[name="apartmentRent"]');
	let $apartmentType = $('input[name="apartmentType"]');
	let $agencyCommission = $('input[name="agencyCommission"]');

	let $familyBudget = $('input[name="familyBudget"]');
	let $familyApartmentType = $('input[name="familyApartmentType"]');
	let $familyName = $('input[name="familyName"]');

	let $regOffer = $('button[name="regOffer"]');
	$regOffer.on('click', function () {
		let rentPrice = $rentPrice.val();
		let apartmentType = $apartmentType.val();
		let agencyCommission = $agencyCommission.val();

		if (Number(rentPrice) > 0 && Number(agencyCommission) >= 0
			&& Number(agencyCommission) <= 100 && apartmentType && apartmentType.indexOf(':') === -1) {
			$('#message').text('Your offer was created successfully.');

			let $divApartment = $('<div>');
			$divApartment.addClass('apartment');
			$divApartment.append(`<p>Rent: ${Number(rentPrice)}</p>`);
			$divApartment.append(`<p>Type: ${apartmentType}</p>`);
			$divApartment.append(`<p>Commission: ${Number(agencyCommission)}</p>`);
			$('#building').append($divApartment);
		} else {
			$('#message').text('Your offer registration went wrong, try again.');
		}

		$rentPrice.val('');
		$apartmentType.val('');
		$agencyCommission.val('');
	});

	let $findOffer = $('button[name="findOffer"]');
	$findOffer.on('click', function () {
		let familyBudget = $familyBudget.val();
		let familyApartmentType = $familyApartmentType.val();
		let familyName = $familyName.val();

		if (Number(familyBudget) > 0 && familyApartmentType && familyName) {
			$.each($('div.apartment'), function () {
				let apartmentType = $(this).children('p')[1].innerText.split(': ')[1];
				if (familyApartmentType === apartmentType) {
					let rentPrice = Number($(this).children('p')[0].innerText.split(': ')[1]);
					let agencyCommission = Number($(this).children('p')[2].innerText.split(': ')[1]);

					let totalCost = rentPrice + (rentPrice * (agencyCommission / 100));
					if (familyBudget >= totalCost) {
						let profit = 2 * (rentPrice * (agencyCommission / 100));
						let $roof = $('#roof h1');
						let money = Number($roof.text().split(' ')[2]);
						let totalMoney = profit + money;
						$roof.text(`Agency profit: ${totalMoney} lv.`);

						$('#message').text('Enjoy your new home! :))');
						$(this).attr('style', 'border: 2px solid red;');
						$(this).children('p:nth-child(1)').text(`${familyName}`);
						$(this).children('p:nth-child(2)').text(`live here now`);
						$(this).children('p:nth-child(3)').replaceWith('<button>MoveOut</button>');

						$(this).children('button').on('click', function(e){
							let $parent = e.target.parentElement;
							let $grandParent = $parent.parentElement;

							$grandParent.removeChild($parent);
							$('#message').text(`They had found cockroaches in ${$(this).children('p:nth-child(1)').text()}\'s apartment`);
						});

						return false;
					} else {
						$('#message').text('We were unable to find you a home, so sorry :(');
					}
				} else {
					$('#message').text('We were unable to find you a home, so sorry :(');
				}
			});
		} else {
			$('#message').text('Your offer registration went wrong, try again.');
		}

		$familyBudget.val('');
		$familyApartmentType.val('');
		$familyName.val('');
	});
}