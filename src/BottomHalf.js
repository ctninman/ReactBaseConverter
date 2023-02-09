import { useState, useEffect } from "react"
import SelectNumberForm from "./SelectNumberForm"
import BaseForm from './BaseForm'
import NumberGrid from "./NumberGrid"

function BottomHalf ({digitsTo64, theNumber, setTheNumber, convertedNumber, placeValues, setPlaceValues, currentBase, setCurrentBase, selectBaseForm, setSelectBaseForm}) {

	// const [changeBase, setChangeBase] = useState(false)
	const [changeNumInBase, setChangeNumInBase] = useState(false)

	const [convertGridStyle, setConvertGridStyle] = useState('')
	const [convertDigitBreakdown, setConvertDigitBreakdown] = useState([])
	const [convertDigitValues, setConvertDigitValues] = useState([])
	const [convertGridNumStr, setConvertGridNumStr] = useState([])

	useEffect (() => {
		setConvertGridNumStr(convertedNumber.toString().split(''))
	}, [convertedNumber])

	useEffect (() => {
		let styleString = ''
		let extraColumn = '8vw '
		for (let i = 0; i < placeValues.length; i++) {
			styleString = styleString.concat(extraColumn)
			console.log(styleString)
		}
		setConvertGridStyle(styleString)
	}, [convertGridNumStr])

	useEffect (() => {
		let digitArray = []
		for (let i = 0; i < placeValues.length; i++) {
			digitArray.push(digitsTo64.indexOf(convertGridNumStr[i]) + ' x ' + placeValues[i])
		}
		setConvertDigitBreakdown(digitArray)
	}, [convertGridStyle, convertGridNumStr])

	useEffect (() => {
		let valuesArray = []
		for (let i = 0; i < placeValues.length; i++) {
			valuesArray.push(digitsTo64.indexOf(convertGridNumStr[i]) * placeValues[i])
		}
		setConvertDigitValues(valuesArray)
	}, [convertDigitBreakdown])
	

	return (

		<div className='bottom-half'>
				<div className='base-button-div'>
					<button onClick={() => setSelectBaseForm(true)}>Change base</button>
					{/* {changeBase ? <div>Change base</div> : null} */}
				</div>
				<div className='num-button-div'>
					<button onClick={() => setChangeNumInBase(true)}>Enter a number</button>
					</div>
			<div className='upper-third'>
					<div><h1>Base {currentBase}</h1></div>
			</div>
			{selectBaseForm 
					? 
					<BaseForm 
					setSelectBaseForm={setSelectBaseForm} 
					setCurrentBase={setCurrentBase}
					/> 
					: 
					null
				}
				{changeNumInBase 
						? 
						<SelectNumberForm 
						setTheNumber={setTheNumber} 
						setChangeNumInBase={setChangeNumInBase}/> 
						: 
						null
					}
			<NumberGrid 
				placeValues={placeValues}
				digitArray={convertGridNumStr}
				digitTimes={convertDigitBreakdown}
				digitVal={convertDigitValues}
				style={convertGridStyle}
				digitsTo64={digitsTo64}
				classNme='lower-grid'/>
			

		</div>
	)
}

export default BottomHalf