// import 'bulma/css/bulma.css'

import { useState, useEffect } from 'react'
import TopHalf from './TopHalf'
import BottomHalf from './BottomHalf';
import './index.css'

function App() {

	const digitsTo64 = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/'

	const [ theNumber, setTheNumber ] = useState(1)
	const [ placeValues, setPlaceValues ] = useState([])
	const [ baseTenPlaceValues, setBaseTenPlaceValues ] = useState([1])
	const [currentBase, setCurrentBase] = useState(2)
	const [selectBaseForm, setSelectBaseForm] = useState(false)
	const [convertedNumber, setConvertedNumber] = useState(1)
	const [lastClickType, setLastClickType] = useState(null)

	useEffect (() => {
		setPlaceValues(determinePlaceValues(theNumber, currentBase))
		setBaseTenPlaceValues(determinePlaceValues(theNumber, 10))
		// setConvertedNumber(theNumber, placeValues)
	}, [theNumber, currentBase])

	useEffect(() => {
		setConvertedNumber(numToNewBase(theNumber, placeValues))
	}, [theNumber, placeValues] )


	function determinePlaceValues(num, numSystem) {

		let listOfPlaceValues = []
		let nextPlaceValue = 1

		while (nextPlaceValue <= num) {
			listOfPlaceValues.push(nextPlaceValue)
			nextPlaceValue = nextPlaceValue * numSystem
		}

		return listOfPlaceValues.reverse()
	}

	function numToNewBase(num, listPlaceVal) {

		if (num === 0) {return '0'}
		if (num === 1) {return '1'}
		
		// listPlaceVal.reverse()
		let remainingBalance = num
		let listNewSystemValues = []

		for (let i = 0; i < listPlaceVal.length; i++) {
			
			let digit, num;
			if (remainingBalance < parseInt(placeValues[i])) {
				num = 0
				digit = '0'
			} else {
				num = Math.floor(remainingBalance / parseInt(placeValues[i]))
				digit = digitsTo64[num]
			}
			listNewSystemValues.push(digit)
			remainingBalance -= num * parseInt(placeValues[i])
		}
		return listNewSystemValues.join('')
	}

	function verifyValidNumber (num) {
		if (num > 10000) {return false}
		else if (num <= 0) {return false}
		else return true
	}

	return (
		<div className='main-app'>	
			
			<TopHalf 
				theNumber={theNumber} 
				setTheNumber={setTheNumber}
				digitsTo64={digitsTo64}
				baseTenPlaceValues={baseTenPlaceValues}
				setBaseTenPlaceValues={setBaseTenPlaceValues}
				verifyValidNumber={verifyValidNumber}
				lastClickType={lastClickType}
				setLastClickType={setLastClickType}/>
			<BottomHalf 
				theNumber={theNumber} 
				setTheNumber={setTheNumber}
				convertedNumber={convertedNumber}
				currentBase={currentBase}
				setCurrentBase={setCurrentBase}
				placeValues={placeValues}
				setPlaceValues={setPlaceValues}
				selectBaseForm={selectBaseForm}
				setSelectBaseForm={setSelectBaseForm}
				determinePlaceValues={determinePlaceValues}
				digitsTo64={digitsTo64}
				verifyValidNumber={verifyValidNumber}
				lastClickType={lastClickType}
				setLastClickType={setLastClickType}
/>
		
		</div>
	)
}

export default App;