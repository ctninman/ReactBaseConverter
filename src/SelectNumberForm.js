import { useState } from 'react';

function SelectNumberForm ({setTheNumber, setChangeNumInBase}) {

	const [ numForm, setNumForm ] = useState(0)

	function handleFormSubmit (event) {
		event.preventDefault()
		setTheNumber(parseInt(numForm))
		setChangeNumInBase(false)
	}

	function setSearchNum (event) {
		setNumForm(event.target.value)
	}

	return (
		<form onSubmit={handleFormSubmit}>
			<input type="text" name="number" value={numForm} onChange={setSearchNum}/>
			<input type="submit" value="CONVERT!" />
		</form>
	)
}

export default SelectNumberForm