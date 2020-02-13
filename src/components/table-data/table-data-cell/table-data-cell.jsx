import React from 'react';

const TableDataCell = ({idDataRow, dataCell }) => {
	
	return (
		<div tabIndex={`1`} className="table-data__data-cell" style={{display: `inline-block`, verticalAlign: `top`, padding: `6px 12px`, border: `1px solid #f1f1f1`, margin: `1px`, color: `#333`, width: `15%`, height: `100%`, boxSizing: `border-box`}}>
			{dataCell.cellValue}
		</div>
	);
};

export default TableDataCell;