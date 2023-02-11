import { useState } from 'react';

function SelectNumberForm ({setTheNumber, setChangeNumInBase, theNumber, verifyValidNumber}) {

	const [ numForm, setNumForm ] = useState(theNumber)

	function handleFormSubmit (event) {
		event.preventDefault()
		let isValid = verifyValidNumber(numForm)
		if (isValid) {
			setTheNumber(parseInt(numForm))
			setChangeNumInBase(false)
		} else {
			alert ('please enter a number between 1 and 10,000')
		}
	}

	function setSearchNum (event) {
		let submissionNoCommas = event.target.value.replaceAll(/\D/g, '')
		setNumForm(submissionNoCommas)
	}

	return (
		<div className='number-form'>
			<h2>Select a number from 1 to 10,000</h2>
			<form onSubmit={handleFormSubmit}>
				<input type="text" name="number" value={numForm} onChange={setSearchNum}/>
				<input type="submit" value="CONVERT!" />
			</form>
		</div>
	)
}

export default SelectNumberForm