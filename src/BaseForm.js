function BaseForm ({selectBaseForm, setSelectBaseForm, setCurrentBase}) {

	const range = (start, end) => {
    const length = end - start;
    return Array.from({ length }, (_, i) => start + i);
	}

	const rangeOfBases = range(2,65)

	function handleBaseSelect (num) {
		setCurrentBase(num)
		setSelectBaseForm(false)
	}

	return (
		<div className='select-base-form'>
			{rangeOfBases.map(base => (
				<div><p onClick={() => handleBaseSelect(base)}>{base}</p></div>
			))}
			<button onClick={() => setSelectBaseForm(false)}>X</button>
		</div>
	)
}

export default BaseForm