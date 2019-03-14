function dart() {
	let $firstLayer = $('#firstLayer');
	let $secondLayer = $('#secondLayer');
	let $thirdLayer = $('#thirdLayer');
	let $fourthLayer = $('#fourthLayer');
	let $fifthLayer = $('#fifthLayer');
	let $sixthLayer = $('#sixthLayer');

	let $homePoints = $('#Home p:first');
	let $awayPoints = $('#Away p:first');
	let isHome = true;
	let isWinner = false;

	if (isWinner) {
		$firstLayer.off('click');
		$secondLayer.off('click');
		$thirdLayer.off('click');
		$fourthLayer.off('click');
		$fifthLayer.off('click');
		$sixthLayer.off('click');
	}

	let points = $('#scoreBoard tbody td')
		.filter(x => x % 2 !== 0)
		.text()
		.split(' points')
		.filter(x => x)
		.map(x => Number(x));

	$firstLayer.on('click', function (e) {
		if (e.target === e.currentTarget) {
			getPoints(points[0]);
			hasWinner();
		}
	});

	$secondLayer.on('click', function (e) {
		if (e.target === e.currentTarget) {
			getPoints(points[1]);
			hasWinner();
		}
	});

	$thirdLayer.on('click', function (e) {
		if (e.target === e.currentTarget) {
			getPoints(points[2]);
			hasWinner();
		}
	});

	$fourthLayer.on('click', function (e) {
		if (e.target === e.currentTarget) {
			getPoints(points[3]);
			hasWinner();
		}
	});

	$fifthLayer.on('click', function (e) {
		if (e.target === e.currentTarget) {
			getPoints(points[4]);
			hasWinner();
		}
	});

	$sixthLayer.on('click', function (e) {
		if (e.target === e.currentTarget) {
			getPoints(points[5]);
			hasWinner();
		}
	});

	function getPoints(point) {
		if (isHome) {
			let totalPoints = Number($homePoints.text());
			totalPoints += point;
			$homePoints.text(totalPoints);
			isHome = false;
			changeTurn();
			if (totalPoints >= 100) {
				isWinner = true;
				$('#Home p:last').css('background-color', 'green');
				$('#Away p:last').css('background-color', 'red');
			}
		} else {
			let totalPoints = Number($awayPoints.text());
			totalPoints += point;
			$awayPoints.text(totalPoints);
			isHome = true;
			changeTurn();
			if (totalPoints >= 100) {
				isWinner = true;
				$('#Home p:last').css('background-color', 'red');
				$('#Away p:last').css('background-color', 'green');
			}
		}
	}

	function changeTurn() {
		if (isHome) {
			$('#turns p:first').text('Turn on Home');
			$('#turns p:last').text('Next is Away');
		} else {
			$('#turns p:first').text('Turn on Away');
			$('#turns p:last').text('Next is Home');
		}
	}

	function hasWinner(){
		if (isWinner) {
			$firstLayer.off('click');
			$secondLayer.off('click');
			$thirdLayer.off('click');
			$fourthLayer.off('click');
			$fifthLayer.off('click');
			$sixthLayer.off('click');
		}
	}
}