import Digit from "./Digit"

function NumberGrid({placeValues, digitArray, digitTimes, digitVal, style, classNme, currentBase, lastClickType, setLastClickType}) {
	return (
		<div className={classNme} style={{gridTemplateColumns: style}}>
			
			{placeValues.map(pv => (
				<div><p>{pv}s</p></div>
			))}

			{digitArray.map(digit => (
				<Digit digit={digit} lastClickType={lastClickType} currentBase={currentBase}/>
			))}

			{digitTimes.map(multiple => (
				<p>{multiple}</p>
			))}

			{digitVal.map(value => (
				<p>{value}</p>
			))}

			
		</div>
	)
}

export default NumberGrid