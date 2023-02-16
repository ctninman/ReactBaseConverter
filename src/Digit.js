
// import {useState, useEffect} from 'react'

function Digit ({digit, currentBase, lastClickType}) {

	const allDigits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/'

	// useEffect (() => {
	// 	console.log('change', digit)
	// 	setPreviousDigit(digit)
	// }, [digit] )

	// const [ghostDigit, setGhostDigit] = useState(null) 

	return (
		<>
	  	{lastClickType === 'plus' && digit  === '0' 
					? 
				<h1 className='add-pv'>{digit}</h1> 
					: 
				null
			}
			{lastClickType === 'minus' && digit  === allDigits[(currentBase - 1).toString()] 
					? 
				<h1 className='subtract-pv'>{digit}</h1>
					: 
				null
			}
			{	(lastClickType !== 'plus' && lastClickType  !== 'minus') || 
				(lastClickType === 'plus' && digit !== '0') || 
				(lastClickType === 'minus' && digit !== allDigits[(currentBase - 1).toString()])
					? 
				<h1>{digit}</h1> 
					: 
				null
			}
		</>
	)
}

export default Digit