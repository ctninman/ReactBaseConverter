import {useState} from 'react'
import Digit from "./Digit"
import PlaceValueExplanation from './PlaceValueExplanation'

function NumberGrid({placeValues, digitArray, digitTimes, digitVal, style, classNme, currentBase, lastClickType, setLastClickType}) {
	
	// const [placeValueExplanation, setPlaceValueExplanation] = useState(false)

	// function handlePVHover () {
	// 	setPlaceValueExplanation(true)

	// }
	
	return (
		<div className={classNme} style={{gridTemplateColumns: style}}>
			
			{placeValues.map(pv => (
				<div>
					<p
						// onMouseEnter={() => setPlaceValueExplanation(true)} 
						// onMouseLeave={() => setPlaceValueExplanation(false)}
					>	
						{pv}
						{/* {placeValueExplanation ? <PlaceValueExplanation currentBase={currentBase}/> : null} */}
					</p>
					
				</div>
			))}
			{/* {placeValueExplanation ? <PlaceValueExplanation /> : null} */}

			{digitArray.map(digit => (
				<Digit digit={digit} lastClickType={lastClickType} currentBase={currentBase}/>
			))}

			{digitTimes.map(multiple => (
				<p>{multiple}</p>
			))}

			{digitVal.length ? digitVal.map(value => (
				<p>{value}</p>
			)) : null}

			
		</div>
	)
}

export default NumberGrid