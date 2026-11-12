import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';

import './styles.css';
import { renderProjects } from './projects.js';
import { renderTechStack } from './techStackRender.js';
import { initProjectScrollObserver } from './scrollObserver.js';

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

	initMobileNav();
	renderProjects();
	initProjectScrollObserver();
	renderTechStack();
});

function initMobileNav() {
	const toggleBtn = document.getElementById('menu-toggle');
	const nav = document.getElementById('primary-nav');

	if (!toggleBtn || !nav) return;

	toggleBtn.addEventListener('click', () => {
		const isOpen = nav.classList.toggle('is-open');
		toggleBtn.setAttribute('aria-expanded', String(isOpen));
		toggleBtn.textContent = isOpen ? 'CLOSE' : 'MENU';
	});

	nav.querySelectorAll('.nav-links').forEach((link) => {
		link.addEventListener('click', () => {
			nav.classList.remove('is-open');
			toggleBtn.setAttribute('aria-expanded', 'false');
			toggleBtn.textContent = 'MENU';
		});
	});
}
