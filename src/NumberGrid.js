function NumberGrid({placeValues, digitArray, digitTimes, digitVal, style}) {
	return (
		<div className='upper-grid' style={{gridTemplateColumns: style}}>
			
			{placeValues.map(pv => (
				<p>{pv}s</p>
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