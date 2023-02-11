import { useState, useEffect } from 'react'
import NumberGrid from './NumberGrid'
import BaseExplanation from './BaseExplanation'

function TopHalf ({theNumber, setTheNumber, baseTenPlaceValues, setBaseTenPlaceValues, digitsTo64, verifyValidNumber, lastClickType, setLastClickType}) {

	const [gridStyle, setGridStyle] = useState('')
	const [digitBreakdown, setDigitBreakdown] = useState([])
	const [digitValues, setDigitValues] = useState([])
	const [gridNumStr, setGridNumStr] = useState([])
	const [explainBaseTen, setExplainBaseTen] = useState(false)

	useEffect (() => {
		setGridNumStr(theNumber.toString().split(''))
	}, [theNumber])

	useEffect (() => {
		let styleString = ''
		let extraColumn = '8vw '
		for (let i = 0; i < gridNumStr.length; i++) {
			styleString = styleString.concat(extraColumn)
			console.log(styleString)
		}
		setGridStyle(styleString)
	}, [gridNumStr])

	useEffect (() => {
		let digitArray = []
		for (let i = 0; i < baseTenPlaceValues.length; i++) {
			digitArray.push(gridNumStr[i] + ' x ' + baseTenPlaceValues[i])
		}
		setDigitBreakdown(digitArray)
	}, [gridStyle, gridNumStr, baseTenPlaceValues])

	useEffect (() => {
		let valuesArray = []
		for (let i = 0; i < baseTenPlaceValues.length; i++) {
			valuesArray.push(gridNumStr[i] * baseTenPlaceValues[i])
		}
		setDigitValues(valuesArray)
	}, [digitBreakdown, baseTenPlaceValues, gridNumStr])

	function incrementTheNumber (num) {
		setLastClickType('plus')
		let isValid = verifyValidNumber(num + 1)
		if (isValid) {setTheNumber(theNumber + 1)}
		else {alert('too high')}
	}

	function decrementTheNumber (num) {
		setLastClickType('minus')
		let isValid = verifyValidNumber(num - 1)
		if (isValid) {setTheNumber(theNumber - 1)}
		else {alert('too low')}
	}
	

	return (
		
		<div className='top-half'>
			<div>
				<div className='base-ten-header'>
					<h1 className='base-header'>Base 10</h1>
					<div className='hover-explain' onMouseEnter={() => setExplainBaseTen(true)} onMouseLeave={() => setExplainBaseTen(false)}>
						💡
					</div>
					{explainBaseTen ? <BaseExplanation digitsTo64={digitsTo64} base={10} /> : null}
				</div>
			</div>
			<div className='minus-num-plus'>
				<div className='minus-button-div'>
					<button onClick={() => decrementTheNumber(theNumber)}>➖</button>
				</div>
				{/* <div><h1>{theNumber}</h1></div> */}
				<div className='plus-button-div'>
					<button onClick={() => incrementTheNumber(theNumber)}>➕</button>
				</div>
			</div>

			<NumberGrid 
				placeValues={baseTenPlaceValues}
				digitArray={gridNumStr}
				digitTimes={digitBreakdown}
				digitVal={digitValues}
				style={gridStyle}
				classNme='upper-grid'
				lastClickType={lastClickType}
				currentBase={10}/>

			{/* <div className='upper-grid' style={{gridTemplateColumns: gridStyle}}>
				
					{baseTenPlaceValues.map(pv => (
						<p>{pv}s</p>
					))}

					{gridNumStr.map(digit => (
						<h1>{digit}</h1>
					))}

					{digitBreakdown.map(multiple => (
						<p>{multiple}</p>
					))}

					{digitValues.map(value => (
						<p>{value}</p>
					))}

				
			</div> */}
		</div>
	)
}

export default TopHalf