import {useState,useEffect} from 'react'

function BaseExplanation({base, digitsTo64}) {

	const [showText, setShowText] = useState('')
	const [i, setI] = useState(1)

	const digitsInBase = digitsTo64.slice(0,base).split('').join(', ')

	const baseTenText = (`Base ${base} has ${base} digits. \nThey are: \n${digitsInBase}`)

	useEffect (() => {
		
		while (i < baseTenText.length) {
			const showTimeout = setTimeout(() => {
				setShowText(baseTenText.slice(0,i + 1))
				console.log(i)
				setI(i + 1)
			}, 75)
			
		return () => clearTimeout(showTimeout)}
	} , [i, baseTenText] )

	return (
		<div className='base-explanation'>
			{/* <p>Base {base} has {base} digits.</p>
			<p>They are:</p>
			<p>0, 1, 2, 3, 4, 5, 6, 7, 8, 9</p> */}
			{showText}
		</div>
	)
}

export default BaseExplanation;