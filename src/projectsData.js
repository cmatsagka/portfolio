// import battleshipImg from './assets/preview/battleship.jpg';
// import weatherAppImg from './assets/preview/weatherApp.jpg';
// import todoListImg from './assets/preview/todoList.jpg';
// import ticTacToeImg from './assets/preview/ticTacToe.jpg';
// import restaurantPageImg from './assets/preview/restaurantPage.jpg';
// import libraryImg from './assets/preview/library.jpg';

export const projects = [
	{
		title: 'Battleship',
		description:
			'A responsive, test-driven Battleship game built with vanilla JavaScript (ES6+), HTML5, and CSS3. Features interactive drag-and-drop mechanics, a custom tracking AI, and a robust Jest unit testing suite.',
		githubUrl: 'https://github.com/cmatsagka/battleship',
		liveUrl: 'https://cmatsagka.github.io/battleship/',
		tags: ['HTML', 'CSS', 'JavaScript'],
		// imageSrc: battleshipImg,
	},

	{
		title: 'Weather App',
		description:
			'A responsive weather forecast web application featuring real-time weather data retrieval. Utilizes asynchronous JavaScript (Fetch API, Promises, async/await) to fetch, process, and dynamically present geographical data.',
		githubUrl: 'https://github.com/cmatsagka/weather-app',
		liveUrl: 'https://cmatsagka.github.io/weather-app/',
		tags: ['JavaScript', 'APIs', 'Async/Await', 'JSON'],
		// imageSrc: weatherAppImg,
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
		// imageSrc: todoListImg,
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
		// imageSrc: ticTacToeImg,
	},

	{
		title: 'Restaurant Page',
		description:
			'A modular single-page restaurant site built entirely with vanilla JS and packaged with Webpack. Features dynamic, tabbed content switching.',
		githubUrl: 'https://github.com/cmatsagka/restaurant-page',
		liveUrl: 'https://cmatsagka.github.io/restaurant-page/',
		tags: ['JavaScript (ES6)', 'Webpack', 'Dynamic DOM', 'npm Tooling'],
		// imageSrc: restaurantPageImg,
	},

	{
		title: 'Personal Library',
		description:
			'A digital bookshelf app for cataloging books. Built with vanilla JS, focusing on dynamic object prototypes, DOM tables, and custom form validation.',
		githubUrl: 'https://github.com/cmatsagka/library',
		liveUrl: 'https://cmatsagka.github.io/library/',
		tags: [
			'JavaScript (ES6)',
			'Object Prototypes',
			'Forms & Validation',
			'DOM API',
		],
		// imageSrc: libraryImg,
	},
];
