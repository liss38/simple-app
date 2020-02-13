import React from 'react';

// utils
import { tableDataContentMapper } from '../../utils/table-data';

// 
import TableDataRow from './table-data-row/table-data-row';

const TableData = ({ tableData }) => {
	
	const doubleClickHandle = (evt) => {
		console.log(` doubleClickHandle::evt  `, evt, tableData, tableDataContentMapper(tableData.content));
	};

	return (
		<div onDoubleClick={doubleClickHandle}>
			Test TableData <br />
			---------------------
			<br />
			<br />
			{
				tableDataContentMapper(tableData.content).map( (item) => <TableDataRow
					key={item[0][`cellValue`]}
					idDataRow={item[0][`cellValue`]}
					dataRow={item}
				/>)
			}
		</div>
	);
};

export default TableData;