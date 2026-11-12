import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';

import './styles.css';
import { renderProjects, initProjectScrollObserver } from './projects.js';
import { renderTechStack } from './techStackRender.js';

document.addEventListener('DOMContentLoaded', () => {
	const scrollTopBtn = document.getElementById('scroll-top-btn');
	if (scrollTopBtn) {
		window.addEventListener(
			'scroll',
			() => {
				if (window.scrollY > 300) {
					scrollTopBtn.classList.add('is-visible');
				} else {
					scrollTopBtn.classList.remove('is-visible');
				}
			},
			{ passive: true }
		);

		scrollTopBtn.addEventListener('click', () => {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		});
	}

	renderProjects();
	initProjectScrollObserver();
	renderTechStack();
});
