// import 'bulma/css/bulma.css'

import { useState } from 'react'
import TopHalf from './TopHalf'
import BottomHalf from './BottomHalf';
import './index.css'

function App() {

	const [ theNumber, setTheNumber ] = useState(0)
	

	return (
		<div className='main-app'>	
			
			<TopHalf num={theNumber} setTheNumber={setTheNumber}/>
			<BottomHalf num={theNumber + 5} setTheNumber={setTheNumber}/>
		
		</div>
	)
}

export default App;