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
import installation1x from './assets/preview/installation_1x.webp';
import installation2x from './assets/preview/installation_2x.webp';
import cvApplication1x from './assets/preview/cvApplication_1x.webp';
import cvApplication2x from './assets/preview/cvApplication_2x.webp';
import memoryCardGame1x from './assets/preview/memoryCardGame_1x.webp';
import memoryCardGame2x from './assets/preview/memoryCardGame_2x.webp';

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
		title: 'Memory Card Game',
		description:
			'A child-friendly memory card game built with React, featuring dynamic sticker layouts, multiple difficulty modes, custom avatar themes, and persistent high scores.',
		githubUrl: 'https://github.com/cmatsagka/memory-card-game',
		liveUrl: 'https://memory-card-bay-nu.vercel.app/',
		tags: ['React', 'Vite', 'JavaScript', 'CSS', 'Local Storage'],
		images: { x1: memoryCardGame1x, x2: memoryCardGame2x },
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
		title: 'CV Application',
		description:
			'A dynamic React application that allows users to easily build, preview, and edit professional CVs with real-time state updates and structured component forms.',
		githubUrl: 'https://github.com/cmatsagka/cv-application',
		liveUrl: 'https://cv-application-ten-psi.vercel.app/',
		tags: ['React', 'JavaScript', 'CSS', 'Component State'],
		images: { x1: cvApplication1x, x2: cvApplication2x },
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
];
