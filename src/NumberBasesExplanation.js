import React, {useState, useEffect} from 'react';

const NumberBasesExplanation = ({setShowBaseTutorial, description}) => {

	const [baseExpIndex, setBaseExpIndex] = useState(0)

	const [showBaseText, setShowBaseText] = useState('')
	const [j, setJ] = useState(1)

	// const digitsInBase = digitsTo64.slice(0,base).split('').join(', ')

	// const baseTenText = (`Base ${base} has ${base} digits. \nThey are: \n${digitsInBase}`)

	useEffect (() => {
		
		while (j < description.breakdown[baseExpIndex].length) {
			let currentBreakdownShow = description.breakdown[baseExpIndex]
			const showTimeout = setTimeout(() => {
				setShowBaseText(currentBreakdownShow.slice(0,j + 1))
				setJ(j + 1)
			}, 55)
			
		return () => clearTimeout(showTimeout)}
	} , [j, description.breakdown, baseExpIndex] )

	function handleBaseForward() {
		setShowBaseText('')
		setJ(1)
		if (baseExpIndex < description.breakdown.length - 1) {
			setBaseExpIndex(baseExpIndex + 1)
		} else {
			setBaseExpIndex(0)
		}
	}

	function handleBaseBack() {
		setShowBaseText('')
		setJ(1)
		if (baseExpIndex > 0) {
			setBaseExpIndex(baseExpIndex - 1)
		} else {
			setBaseExpIndex(description.breakdown.length - 1)
		}
	}

	return (
		<div className='place-value-explanation'>
			<h1>{description.title}</h1>
			<div className='place-value-desc-change'>
				<button onClick={handleBaseBack}>{'<<'}</button>
				<button className={showBaseText.length === description.breakdown[baseExpIndex].length ? 'button-pulse' : null} onClick={handleBaseForward}>{'>>'}</button>
			</div>
			<h3>{showBaseText}</h3>
			<button className='close-tutorial' onClick={() => setShowBaseTutorial(false)}>CLose</button>
		</div>
	);
};

export default NumberBasesExplanation;