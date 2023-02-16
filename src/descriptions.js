const whatIsABase = {'title': 'What is a Number Base?',
	'breakdown': [
		'A number base, also called a numeral system or a radix, is a way of representing numbers using a set of symbols or digits.', 
		'The number system used in everyday life is the decimal system, which is Base10.', 
		'Base10 has ten symbols, which are the digits 0, 1, 2, 3, 4, 5, 6, 7, 8, 9',
		'A place value in a number system represents the base to the next power.', 
		'In Base10, ones are 10 to the 0 power (10^0). Tens are 10^1. Hundreds are 10^2. Thousands are 10^3. ...',
		'Other base system have a different number of digits. For example, binary is Base2, meaning it has 2 digits: 0, and 1.',
		'In number bases with more than 10 digits, capital letters, lowercase letters, and other symbols are used to represent numbers greater or equal to ten.',
		'In this application, we\'ll use the following order : 0 - 9, A - Z (for 10 - 35), a - z (for 36 - 61), + (for 62), / (for 63).',
		'So in Base64: the symbol 8 = 8,  A = 10,  S = 28,  g = 42,  and so on.'
	]
}

const commonBaseSystems = {'title': 'What Are the Most Common Number Systems?', 
	'breakdown': [
		'The most commonly used number bases are:',
		'BINARY (Base2) uses only 2 digits : 0 and 1.',
		'DECIMAL (Base10) uses 10 digits : 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9.',
		'OCTAL (Base8) uses 8 digits : 0, 1, 2, 3, 4, 5, 6, and 7.',
		'HEXADECIMAL (Base16) uses 16 digits : 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, and F.',
		'BINARY is commonly used in computer programming and digital electronics because it is easy to represent using only two states (on and off, or 0 and 1).', 
		'DECIMAL is the most familiar base for most people, and is used for everyday arithmetic.', 
		'OCTAL and HEXADECIMAL are commonly used in computer programming, especially for representing binary numbers in a more compact and readable form.'
	]
}

const howToConvert = {'title': 'How to Convert to Another Base?', 
	'breakdown': 
	[
		'1: Divide the decimal number to be converted by the value of the new base.',
		'2: Place the remainder from Step 1 as the next digit in the new base, going from right to left.',
		'3: Divide the quotient (no remainder) of the previous divide by the new base.',
		'4: Place the remainder from Step 3 as the next digit (from right to left) of the new base number.',
		'5: Repeat steps 3 and 4 until your quotient equals 0. You now have the converted number.',
		'Example: Convert 99 (Base10) to Base8 (Octal).',
		'99 / 8 = 12 R 3.   3 becomes the digit furthest to the right. 3 ones (8^0).',
		'Our previous quotient was 12.   Now:   12 / 8 = 1 R 4.   4 is the next digit from the right. We have 4 eights (8^1) and 3 ones (8^0).    43',
		'Our previous quotient was 1.   Now:   1 / 8 = 0 R 1.   1 is the next digit from the right. We have 1 sixty-four (8^2), 4 eights (8^1), and 3 ones (8^0).    143',
		'Our previous quotient was 0. We are finished. 99 in Base8 is 143.  1 x 64,  4 x 8,  3 x 1.  64 + 32 + 3.'
	]
}

// const commonBaseSystems = {'title': 'What are some common base systems?', 'binary': 'The language of computers.'};

export {whatIsABase, commonBaseSystems, howToConvert}