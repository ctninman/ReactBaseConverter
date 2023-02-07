import { useState } from "react"

function BottomHalf () {

	const [currentBase, setCurrentBase] = useState(2)

	return (

		<div className='bottom-half'>
			<div className='upper-third'>
				<button>Change base</button>
				<div>Base {currentBase}</div>
				<button>Enter a number</button>
			</div>
			
			<div className='minus-num-plus'>
				<div><h2>-</h2></div>
				<div><h1>10101010101010</h1></div>
				<div><h2>+</h2></div>

			</div>
		</div>
	)
}

export default BottomHalf