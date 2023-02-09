function NumberGrid({placeValues, digitArray, digitTimes, digitVal, style, classNme}) {
	return (
		<div className={classNme} style={{gridTemplateColumns: style}}>
			
			{placeValues.map(pv => (
				<div><p>{pv}s</p></div>
			))}

			{digitArray.map(digit => (
				<h1>{digit}</h1>
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