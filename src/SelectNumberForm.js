import { useState } from 'react';

function SelectNumberForm ({setTheNumber, setChangeNumInBase}) {

	const [ numForm, setNumForm ] = useState(1)

	function handleFormSubmit (event) {
		event.preventDefault()
		setTheNumber(parseInt(numForm))
		setChangeNumInBase(false)
	}

	function setSearchNum (event) {
		setNumForm(event.target.value)
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