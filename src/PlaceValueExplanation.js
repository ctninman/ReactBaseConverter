import React, {useState, useEffect} from 'react';

const PlaceValueExplanation = ({currentBase}) => {

	const whatIsABase = {'title': "What is a base?", 'decimal': 'Our number system'}

	const [showPVText, setShowPVText] = useState('')
	const [j, setJ] = useState(1)

	// const digitsInBase = digitsTo64.slice(0,base).split('').join(', ')

	// const baseTenText = (`Base ${base} has ${base} digits. \nThey are: \n${digitsInBase}`)

	useEffect (() => {
		
		while (j < whatIsABase.title.length) {
			const showTimeout = setTimeout(() => {
				setShowPVText(whatIsABase.title.slice(0,j + 1))
				console.log(j)
				setJ(j + 1)
			}, 75)
			
		return () => clearTimeout(showTimeout)}
	} , [j, whatIsABase.title] )

	return (
		<div className='place-value-explanation'>
			{/* <p>Base {base} has {base} digits.</p>
			<p>They are:</p>
			<p>0, 1, 2, 3, 4, 5, 6, 7, 8, 9</p> */}
			{showPVText}
		</div>
	);
};

export default PlaceValueExplanation;