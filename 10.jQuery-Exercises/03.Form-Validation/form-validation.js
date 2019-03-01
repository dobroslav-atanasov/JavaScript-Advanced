function validate() {
	$('#submit').on('click', function (e) {
		e.preventDefault();
		e.stopPropagation();

		if (!checkUsername()) {
			$('#username').css('border-color', 'red');
		} else {
			$('#username').css('border-color', '');
		}

		if (!checkEmail()) {
			$('#email').css('border-color', 'red');
		} else {
			$('#email').css('border-color', '');
		}

		if (!checkPassword()) {
			$('#password').css('border-color', 'red');
		} else {
			$('#password').css('border-color', '');
		}

		if (!checkConfirmPassword()) {
			$('#confirm-password').css('border-color', 'red');
		} else {
			$('#confirm-password').css('border-color', '');
		}

		if (!checkCompanyNumber()) {
			$('#companyNumber').css('border-color', 'red');
		} else {
			$('#companyNumber').css('border-color', '');
		}

		if (checkUsername() && checkEmail() && checkPassword() && checkConfirmPassword()) {
			if ($('#company').is(':checked')) {
				if (checkCompanyNumber()) {
					$('#valid').show();
				}
			} else {
				$('#valid').show();
			}
		}
	});

	$('#company').on('change', function () {
		if ($('#company').is(':checked')) {
			$('#companyInfo').show();
		} else {
			$('#companyInfo').hide();
		}
	});

	function checkCompanyNumber() {
		let number = Number($('#companyNumber').val());
		if (number >= 1000 && number <= 9999) {
			return true;
		}
		return false;
	}

	function checkConfirmPassword() { 
		let password = $('#password').val();
		let confirmPassword = $('#confirm-password').val();

		let pattern = /^[\w]{5,15}$/g;
		if (pattern.test($('#confirm-password').val()) && password === confirmPassword) {
			return true;
		}
		return false;
	}

	function checkPassword() {
		let pattern = /^[\w]{5,15}$/g;
		if (pattern.test($('#password').val())) {
			return true;
		}
		return false;
	}

	function checkEmail() {
		let pattern = /^[\w]+@[\w\.]+$/g;
		if (pattern.test($('#email').val())) {
			return true;
		}
		return false;
	}

	function checkUsername() {
		let pattern = /^[A-Za-z\d]{3,20}$/g;
		if (pattern.test($('#username').val())) {
			return true;
		}
		return false;
	}
}
