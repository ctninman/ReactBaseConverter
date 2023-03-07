import { createContext, useState } from "react";

const NumbersContext = createContext();

function Provider({children}) {
	const [testCount, setTestCount] = useState(5);

	const testValueToShare = {
		testCount,
		incrementTestCount: () => {
			setTestCount(testCount + 1)
		}
	}

	return <NumbersContext.Provider value={testValueToShare}>
		{children}
	</NumbersContext.Provider>
}

export {Provider};
export default NumbersContext