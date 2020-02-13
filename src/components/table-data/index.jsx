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
		<React.Fragment>
			<div className="dable-data" onDoubleClick={doubleClickHandle}>
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

			<div style={{width: `500px`, fontFamily: `Arial`}}>
				<b>Как сделать типовые задачи в web приложении на React JS: (это для резюме условно, для наработки практики, выложить на гитхаб пэйджес)</b>
				<ul>
					<li><a href="https://habr.com/ru/post/346584/" target="_blank">https://habr.com/ru/post/346584/ (ознакомительная статья)</a></li>
					<li><a href="https://avrylkov.github.io/react/" target="_blank">https://avrylkov.github.io/react/ (пример для "потыканья")</a></li>
					<li><a href="https://github.com/avrylkov/react" target="_blank">https://github.com/avrylkov/react (исходники "примера для потыканья")</a></li>
				</ul>

				<h2>Сделать @TODO</h2>
				темы: -"рефакторинг и упорядочивание"; -"table-data"; ...
			</div>
		</React.Fragment>
	);
};

export default TableData;