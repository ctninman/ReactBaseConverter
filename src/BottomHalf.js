import { useState, useEffect } from "react"
import SelectNumberForm from "./SelectNumberForm"
import BaseForm from './BaseForm'
import NumberGrid from "./NumberGrid"

function BottomHalf ({theNumber, setTheNumber, convertedNumber, placeValues, setPlaceValues, currentBase, setCurrentBase, selectBaseForm, setSelectBaseForm}) {

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
			digitArray.push(convertGridNumStr[i] + ' x ' + placeValues[i])
		}
		setConvertDigitBreakdown(digitArray)
	}, [convertGridStyle, convertGridNumStr])

	useEffect (() => {
		let valuesArray = []
		for (let i = 0; i < placeValues.length; i++) {
			valuesArray.push(convertGridNumStr[i] * placeValues[i])
		}
		setConvertDigitValues(valuesArray)
	}, [convertDigitBreakdown])


	

	return (

		<div className='bottom-half'>
			<div className='upper-third'>
				<div>
					<button onClick={() => setSelectBaseForm(true)}>Change base</button>
					{/* {changeBase ? <div>Change base</div> : null} */}
				</div>
				<div>Base {currentBase}</div>
				<button onClick={() => setChangeNumInBase(true)}>Enter a number</button>
				{changeNumInBase 
						? 
					<SelectNumberForm 
						setTheNumber={setTheNumber} 
						setChangeNumInBase={setChangeNumInBase}/> 
						: 
					null
				}
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
			<NumberGrid 
				placeValues={placeValues}
				digitArray={convertGridNumStr}
				digitTimes={convertDigitBreakdown}
				digitVal={convertDigitValues}
				style={convertGridStyle}/>
			
			<div className='minus-num-plus'>
				<div onClick={() => setTheNumber(theNumber - 1)}><h2>-</h2></div>
				<div onClick={() => console.log(convertedNumber)}><h1>{theNumber * 2}</h1></div>
				<div onClick={() => setTheNumber(theNumber + 1)}><h2>+</h2></div>

			</div>
		</div>
	)
}

export default BottomHalf