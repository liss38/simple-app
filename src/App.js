import React from 'react';

// Components
import TableData from './components/table-data';


const App = ({tableData}) => {

	return (
		<React.Fragment>
			<h1>React test!</h1>


			<h2>TableData component</h2>
			<TableData
				tableData={tableData}
			/>
		</React.Fragment>
	);
};

export default App;