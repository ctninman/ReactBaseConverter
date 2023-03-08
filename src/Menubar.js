import {useState} from 'react';
import { whatIsABase, commonBaseSystems, howToConvert } from './descriptions';
import NumberBasesExplanation from './NumberBasesExplanation';

const Menubar = () => {

	const [showBaseTutorial, setShowBaseTutorial] = useState(false)
	const [showCommonTutorial, setShowCommonTutorial] = useState(false)
	const [showConvertTutorial, setShowConvertTutorial] = useState(false)
	
	function handleBaseClick() {
		setShowBaseTutorial(!showBaseTutorial)
		setShowCommonTutorial(false)
		setShowConvertTutorial(false)
	}

	function handleCommonClick() {
		setShowCommonTutorial(!showCommonTutorial)
		setShowBaseTutorial(false)
		setShowConvertTutorial(false)
	}

	function handleConvertClick() {
		setShowConvertTutorial(!showConvertTutorial)
		setShowBaseTutorial(false)
		setShowCommonTutorial(false)
	}

	return (

		<div className='menu-bar'>
			<h4 onClick={handleBaseClick}>Number Bases</h4>
			<h4 onClick={handleCommonClick}>Common Bases</h4>
			<h4 onClick={handleConvertClick}>Converting</h4>

			{showBaseTutorial ? <NumberBasesExplanation setShowBaseTutorial={setShowBaseTutorial} description={whatIsABase}/> : null}
			{showCommonTutorial ? <NumberBasesExplanation setShowBaseTutorial={setShowCommonTutorial} description={commonBaseSystems}/> : null}
			{showConvertTutorial ? <NumberBasesExplanation setShowBaseTutorial={setShowConvertTutorial} description={howToConvert}/> : null}
		</div>
	);
};

export default Menubar;