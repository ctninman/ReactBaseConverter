import { useState, useEffect } from 'react'
import NumberGrid from './NumberGrid'

function TopHalf ({theNumber, setTheNumber, baseTenPlaceValues, setBaseTenPlaceValues}) {

	const [gridStyle, setGridStyle] = useState('')
	const [digitBreakdown, setDigitBreakdown] = useState([])
	const [digitValues, setDigitValues] = useState([])
	const [gridNumStr, setGridNumStr] = useState([])

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
	}, [gridStyle, gridNumStr])

	useEffect (() => {
		let valuesArray = []
		for (let i = 0; i < baseTenPlaceValues.length; i++) {
			valuesArray.push(gridNumStr[i] * baseTenPlaceValues[i])
		}
		setDigitValues(valuesArray)
	}, [digitBreakdown])


	

	return (

		<div className='top-half'>
			<div className='minus-num-plus'>
				<button onClick={() => setTheNumber(theNumber - 1)}>-</button>
				<h1>{theNumber}</h1>
				<button onClick={() => setTheNumber(theNumber + 1)}>+</button>
			</div>

			<NumberGrid 
				placeValues={baseTenPlaceValues}
				digitArray={gridNumStr}
				digitTimes={digitBreakdown}
				digitVal={digitValues}
				style={gridStyle}/>

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