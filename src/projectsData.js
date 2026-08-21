import battleship1x from './assets/preview/battleship_1x.webp';
import battleship2x from './assets/preview/battleship_2x.webp';
import weatherApp1x from './assets/preview/weatherApp_1x.webp';
import weatherApp2x from './assets/preview/weatherApp_2x.webp';
import todoList1x from './assets/preview/todoList_1x.webp';
import todoList2x from './assets/preview/todoList_2x.webp';
import ticTacToe1x from './assets/preview/ticTacToe_1x.webp';
import ticTacToe2x from './assets/preview/ticTacToe_2x.webp';
import restaurantPage1x from './assets/preview/restaurantPage_1x.webp';
import restaurantPage2x from './assets/preview/restaurantPage_2x.webp';
import library1x from './assets/preview/library_1x.webp';
import library2x from './assets/preview/library_2x.webp';
import installation1x from './assets/preview/installation_1x.webp';
import installation2x from './assets/preview/installation_2x.webp';

export const projects = [
	{
		title: 'Interactive Installation',
		description:
			'Undergraduate thesis project: An interactive sound installation bridging Arduino sensors, plants, and Pure Data generative soundscapes to explore human-nature dynamics.',
		githubUrl: 'https://github.com/cmatsagka/installation-repo',
		liveUrl: 'https://cmatsagka.github.io/installation-repo/',
		tags: [
			'HTML',
			'CSS',
			'JavaScript',
			'Arduino',
			'Raspberry Pi',
			'Pure Data',
		],
		images: { x1: installation1x, x2: installation2x },
	},

	{
		title: 'Battleship',
		description:
			'A responsive, test-driven Battleship game built with vanilla JavaScript (ES6+), HTML5, and CSS3. Features interactive drag-and-drop mechanics, a custom tracking AI, and a robust Jest unit testing suite.',
		githubUrl: 'https://github.com/cmatsagka/battleship',
		liveUrl: 'https://cmatsagka.github.io/battleship/',
		tags: ['HTML', 'CSS', 'JavaScript'],
		images: { x1: battleship1x, x2: battleship2x },
	},

	{
		title: 'Tic-Tac-Toe',
		description:
			'A modular, zero-globals Tic-Tac-Toe game built with vanilla JS. Emphasizes clean architecture using Factory Functions and the Module Pattern.',
		githubUrl: 'https://github.com/cmatsagka/tic-tac-toe',
		liveUrl: 'https://cmatsagka.github.io/tic-tac-toe/',
		tags: [
			'JavaScript (ES6)',
			'Module Pattern',
			'Factory Functions',
			'DOM Manipulation',
		],
		images: { x1: ticTacToe1x, x2: ticTacToe2x },
	},

	{
		title: 'Restaurant Page',
		description:
			'A modular single-page restaurant site built entirely with vanilla JS and packaged with Webpack. Features dynamic, tabbed content switching.',
		githubUrl: 'https://github.com/cmatsagka/restaurant-page',
		liveUrl: 'https://cmatsagka.github.io/restaurant-page/',
		tags: ['JavaScript (ES6)', 'Webpack', 'Dynamic DOM', 'npm Tooling'],
		images: { x1: restaurantPage1x, x2: restaurantPage2x },
	},

	{
		title: 'Todo LIst Dashboard',
		description:
			'A modular, single-page To-Do List application built with vanilla JavaScript. Features dynamic project folders, priority tracking, and local storage persistence.',
		githubUrl: 'https://github.com/cmatsagka/todo-list',
		liveUrl: 'https://cmatsagka.github.io/todo-list/',
		tags: [
			'JavaScript (ES6)',
			'Local Storage',
			'Modular Architecture',
			'CSS Grid/Flexbox',
		],
		images: { x1: todoList1x, x2: todoList2x },
	},

	{
		title: 'Weather App',
		description:
			'A responsive weather forecast web application featuring real-time weather data retrieval. Utilizes asynchronous JavaScript (Fetch API, Promises, async/await) to fetch, process, and dynamically present geographical data.',
		githubUrl: 'https://github.com/cmatsagka/weather-app',
		liveUrl: 'https://cmatsagka.github.io/weather-app/',
		tags: ['JavaScript', 'APIs', 'Async/Await', 'JSON'],
		images: { x1: weatherApp1x, x2: weatherApp2x },
	},
];
