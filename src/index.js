import React from 'react';
import ReactDOM from 'react-dom';

// App
import App from './app';


// mocks data
import tableData from './mocks/table-data';


ReactDOM.render(
	<App
		tableData={tableData}
	/>, 
	document.getElementById('root'))
;