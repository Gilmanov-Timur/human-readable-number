module.exports = function toReadable (number) {
	const strNumber = number.toString();
	const humanizedNumbers = {
		'0': 'zero',
		'1': 'one',
		'2': 'two',
		'3': 'three',
		'4': 'four',
		'5': 'five',
		'6': 'six',
		'7': 'seven',
		'8': 'eight',
		'9': 'nine',
		'10': 'ten',
		'11': 'eleven',
		'12': 'twelve',
		'13': 'thirteen',
		'14': 'fourteen',
		'15': 'fifteen',
		'16': 'sixteen',
		'17': 'seventeen',
		'18': 'eighteen',
		'19': 'nineteen',
		'20': 'twenty',
		'30': 'thirty',
		'40': 'forty',
		'50': 'fifty',
		'60': 'sixty',
		'70': 'seventy',
		'80': 'eighty',
		'90': 'ninety',
		'100': 'one hundred',
		'200': 'two hundred',
		'300': 'three hundred',
		'400': 'four hundred',
		'500': 'five hundred',
		'600': 'six hundred',
		'700': 'seven hundred',
		'800': 'eight hundred',
		'900': 'nine hundred',
	};
	const digits = strNumber.split('');

	if (strNumber in humanizedNumbers) {
		return humanizedNumbers[strNumber]
	} else if (number % 10 === 0) {
		return humanizedNumbers[digits[0] + '00'] + ' ' + humanizedNumbers[digits[1] + '0']
	} else if (number < 100) {
		return humanizedNumbers[digits[0] + '0'] + ' ' + humanizedNumbers[digits[1]]
	} else {
		return humanizedNumbers[digits[0] + '00'] + ' ' + (
			digits[1] + digits[2] in humanizedNumbers
				? humanizedNumbers[digits[1] + digits[2]]
				: (humanizedNumbers[digits[1] + '0'] ? humanizedNumbers[digits[1] + '0'] + ' ' : '') + humanizedNumbers[digits[2]])
	}
}
