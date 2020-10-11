export default function validateForm(field, value) {
	let validationResult = null;
	switch (field) {
		case 'title':
			validationResult = validateTitle(value);
			break;
		case 'address':
			validationResult = validateAddress(value);
			break;
		case 'fullName':
			validationResult = validateFullName(value);
			break;
		case 'jobPosition':
			validationResult = validateJobPosition(value);
			break;
		case 'email':
			validationResult = validateEmail(value);
			break;
		case 'phone':
			validationResult = validatePhone(value);
			break;
	};

	return validationResult;
}

function validateTitle(value) {
	if (value.length === 0) {
		return 'This field cannot be empty';
	} else if (value.length > 0 && value.length < 3) {
		return 'Please enter at least 3 chars';
	};
}

function validateAddress(value) {
	if (value.length === 0) {
		return 'This field cannot be empty';
	} else if (value.length > 0 && value.length < 5) {
		return 'Please enter at least 5 chars';
	};
}

function validateFullName(value) {
	if (value.length === 0) {
		return 'This field cannot be empty';
	} else if (value.length > 0 && value.length < 3) {
		return 'Please enter at least 3 chars';
	};
}

function validateJobPosition(value) {
	if (value.length === 0) {
		return 'This field cannot be empty';
	};
}

function validateEmail(value) {
	const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

	if (value.length === 0) {
		return 'This field cannot be empty';
	} else if (!value.match(pattern)) {
		return 'Please enter a valid email address'
	};
}

function validatePhone(value) {
	const pattern = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/;

	if (value.length === 0) {
		return 'This field cannot be empty';
	} else if (!value.match(pattern) || value.length < 14) {
		return 'Please enter a valid phone number'
	};
}
