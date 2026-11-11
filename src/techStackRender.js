import { techStack } from './techStackData.js';

export function renderTechStack() {
	const container = document.getElementById('tech-stack');
	const template = document.getElementById('tech-category-template');

	if (!container || !template) return;

	const techWrapper = document.createElement('div');
	techWrapper.classList.add('tech-wrapper');

	techStack.forEach((cat) => {
		const clone = template.content.cloneNode(true);

		clone.querySelector('.cat-index').textContent = cat.index;
		clone.querySelector('.cat-title').textContent = cat.title;

		const list = clone.querySelector('.tech-list');
		cat.items.forEach((item) => {
			const li = document.createElement('li');
			li.textContent = item;
			list.appendChild(li);
		});
		techWrapper.appendChild(clone);
	});

	container.appendChild(techWrapper);
}
