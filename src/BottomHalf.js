import { useState } from "react"
import SelectNumberForm from "./SelectNumberForm"

function BottomHalf ({num, setTheNumber}) {

	const [currentBase, setCurrentBase] = useState(2)
	const [changeBase, setChangeBase] = useState(false)
	const [ changeNumInBase, setChangeNumInBase ] = useState(false)

	return (

		<div className='bottom-half'>
			<div className='upper-third'>
				<div>
					<button onClick={() => setChangeBase(!changeBase)}>Change base</button>
					{changeBase ? <div>Change base</div> : null}
				</div>
				<div>Base {currentBase}</div>
				<button onClick={() => setChangeNumInBase(!changeNumInBase)}>Enter a number</button>
				{changeNumInBase ? <SelectNumberForm setTheNumber={setTheNumber}/> : null}
			</div>
			
			<div className='minus-num-plus'>
				<div><h2>-</h2></div>
				<div><h1>{num}</h1></div>
				<div><h2>+</h2></div>

			</div>
		</div>
	)
}

export default BottomHalf