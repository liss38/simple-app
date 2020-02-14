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


			<div style={{width: `500px`, fontFamily: `Arial`}}>
				<b>Как сделать типовые задачи в web приложении на React JS: (это для резюме условно, для наработки практики, выложить на гитхаб пэйджес)</b>
				<ul>
					<li><a href="https://habr.com/ru/post/346584/" target="_blank">https://habr.com/ru/post/346584/ (ознакомительная статья)</a></li>
					<li><a href="https://avrylkov.github.io/react/" target="_blank">https://avrylkov.github.io/react/ (пример для "потыканья")</a></li>
					<li><a href="https://github.com/avrylkov/react" target="_blank">https://github.com/avrylkov/react (исходники "примера для потыканья")</a></li>
				</ul>


				<br/>
				<br/>
				---------------
				<br />
				<br />
				<h2>@TODO</h2>

				<i>Здесь описание общего функционала приложения/интерфейса</i>

				<div>темы: -""; -""; ...
					<h3>Модуль table-data</h3>
					<i>Поддерживаются горячие главиши при редактировании, кол-во отображаемых стобцов, сортировка по колнке, удаление, добавление строк, пейджинг, настраиваемый фильтр-поиск, tab-index, настройка индивидульного отображения столбцов: ширина, последовательность, видимость</i>
					<ul>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
				<div>
					<h3>Модуль с контролами и элементами форм</h3>
					<i></i>
					<ul>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
				<div>
					<h3>Модуль с древовидной структурой и драгндроп</h3>
					<i></i>
					<ul>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
				<div>
					<h3>Модуль с диаграммами, графиками и аналитикой</h3>
					<i></i>
					<ul>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
				<div>
					<h3>Модуль с картой, leaflet</h3>
					<i></i>
					<ul>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
				<div>
					<h3>Работа с внешними API: vk, git, etc</h3>
					<i></i>
					<ul>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
				<div>
					<h3>Финал: рефакторинг и упорядочивание</h3>
					<i></i>
					<ul>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
				
			</div>
		</React.Fragment>
	);
};

export default App;