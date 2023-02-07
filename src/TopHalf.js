function TopHalf ({num, setTheNumber}) {
	return (

		<div className='top-half'>
			<button onClick={() => setTheNumber(num - 1)}>-</button>
			<h1>{num}</h1>
			<button onClick={() => setTheNumber(num + 1)}>+</button>
		</div>
	)
}

export default TopHalf