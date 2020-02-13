import React from 'react';

// 
import TableDataCell from '../table-data-cell/table-data-cell';

const TableDataRow = ({ idDataRow, dataRow }) => {
	return (
		<div className="table-data__data-row" style={{height: `35px`}}>
			{
				dataRow.map( (item) => <TableDataCell
					key={`${item['cellKey']}-${idDataRow}`}
					dataCell={item}
				/>)
			}
			
		</div>
	);
};

export default TableDataRow;