import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';

import './styles.css';
import { renderProjects, initProjectScrollObserver } from './projects.js';
import { renderTechStack } from './techStackRender.js';

document.addEventListener('DOMContentLoaded', () => {
	renderProjects();
	initProjectScrollObserver();
	renderTechStack();
});
