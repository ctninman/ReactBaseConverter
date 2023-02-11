import { useState, useEffect } from "react"
import SelectNumberForm from "./SelectNumberForm"
import BaseForm from './BaseForm'
import NumberGrid from "./NumberGrid"
import BaseExplanation from "./BaseExplanation"

function BottomHalf ({digitsTo64, theNumber, setTheNumber, convertedNumber, placeValues, setPlaceValues, currentBase, setCurrentBase, selectBaseForm, setSelectBaseForm, verifyValidNumber, lastClickType, setLastClickType}) {

	// const [changeBase, setChangeBase] = useState(false)
	const [changeNumInBase, setChangeNumInBase] = useState(false)

	const [convertGridStyle, setConvertGridStyle] = useState('')
	const [convertDigitBreakdown, setConvertDigitBreakdown] = useState([])
	const [convertDigitValues, setConvertDigitValues] = useState([])
	const [convertGridNumStr, setConvertGridNumStr] = useState([])
	const [explainBase, setExplainBase] = useState(false)

	useEffect (() => {
		setConvertGridNumStr(convertedNumber.toString().split(''))
	}, [convertedNumber])

	useEffect (() => {
		let styleString = ''
		let extraColumn = '6.5vw '
		for (let i = 0; i < placeValues.length; i++) {
			styleString = styleString.concat(extraColumn)
			console.log(styleString)
		}
		setConvertGridStyle(styleString)
	}, [convertGridNumStr, placeValues])

	useEffect (() => {
		let digitArray = []
		for (let i = 0; i < placeValues.length; i++) {
			digitArray.push(digitsTo64.indexOf(convertGridNumStr[i]) + ' x ' + placeValues[i])
		}
		setConvertDigitBreakdown(digitArray)
	}, [convertGridStyle, convertGridNumStr, digitsTo64, placeValues])

	useEffect (() => {
		let valuesArray = []
		for (let i = 0; i < placeValues.length; i++) {
			valuesArray.push(digitsTo64.indexOf(convertGridNumStr[i]) * placeValues[i])
		}
		setConvertDigitValues(valuesArray)
	}, [convertDigitBreakdown, digitsTo64, placeValues, convertGridNumStr])
	
	function handleBaseChange () {
		setSelectBaseForm(true)
		setLastClickType('base-change')
	}

	function handleNumSelect () {
		setChangeNumInBase(true)
		setLastClickType('num-change')
	}

	return (

		<div className='bottom-half'>
				<div className='base-button-div'>
					<button onClick={handleBaseChange}>Change base</button>
					{/* {changeBase ? <div>Change base</div> : null} */}
				</div>
				<div className='num-button-div'>
					<button onClick={handleNumSelect}>Enter a number</button>
					</div>
			<div className='upper-third'>
			<div className='base-ten-header'>
					<h1 className='base-header'>Base {currentBase}</h1>
					<div className='hover-explain' onMouseEnter={() => setExplainBase(true)} onMouseLeave={() => setExplainBase(false)}>
						💡
					</div>
					{explainBase ? <BaseExplanation digitsTo64={digitsTo64} base={currentBase} /> : null}
				</div>
					{/* <div><h1 className='base-header'>Base {currentBase}</h1></div> */}
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
						theNumber={theNumber}
						setTheNumber={setTheNumber} 
						setChangeNumInBase={setChangeNumInBase}
						verifyValidNumber={verifyValidNumber}/> 
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
				classNme='lower-grid'
				lastClickType={lastClickType}
				setLastClickType={setLastClickType}
				currentBase={currentBase}/>
			

		</div>
	)
}

export default BottomHalf