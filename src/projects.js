import { projects } from './projectsData.js';

export function renderProjects() {
	const container = document.getElementById('projects-container');
	if (!container) return;

	container.textContent = '';

	projects.forEach((proj, index) => {
		const panel = document.createElement('article');
		panel.classList.add('project-panel');

		const topOffset = 5 + index * 1.5;
		panel.style.top = `${topOffset}rem`;

		const meta = document.createElement('div');
		meta.classList.add('project-meta');

		const indexLabel = document.createElement('span');
		indexLabel.classList.add('project-index');
		const currentIndex = String(index + 1).padStart(2, '0');
		indexLabel.textContent = `// ${currentIndex}`;
		meta.appendChild(indexLabel);

		const title = document.createElement('h3');
		title.classList.add('project-title');
		title.textContent = proj.title;
		meta.appendChild(title);

		const description = document.createElement('p');
		description.classList.add('project-desc');
		description.textContent = proj.description;
		meta.appendChild(description);

		if (proj.tags && proj.tags.length > 0) {
			const tagsWrapper = document.createElement('div');
			tagsWrapper.classList.add('projects-tags');

			proj.tags.forEach((tagText) => {
				const tagSpan = document.createElement('span');
				tagSpan.classList.add('project-tag');
				tagSpan.textContent = tagText;
				tagsWrapper.appendChild(tagSpan);
			});

			meta.appendChild(tagsWrapper);
		}

		const linksWrapper = document.createElement('div');
		linksWrapper.classList.add('projects-links');

		if (proj.githubUrl) {
			const githubLink = document.createElement('a');
			githubLink.classList.add('project-icon-link');
			githubLink.href = proj.githubUrl;
			githubLink.setAttribute(
				'aria-label',
				`View ${proj.title} source code on Github`
			);
			githubLink.target = '_blank';
			githubLink.rel = 'noopener noreferrer';
			githubLink.textContent = 'GITHUB ↗';

			linksWrapper.appendChild(githubLink);
		}

		if (proj.liveUrl) {
			const liveLink = document.createElement('a');
			liveLink.classList.add('project-icon-link');
			liveLink.href = proj.liveUrl;
			liveLink.setAttribute(
				'aria-label',
				`View ${proj.title} live website`
			);
			liveLink.target = '_blank';
			liveLink.rel = 'noopener noreferrer';
			liveLink.textContent = 'LIVE PREVIEW ↗';

			linksWrapper.appendChild(liveLink);
		}

		meta.appendChild(linksWrapper);

		const preview = document.createElement('div');
		preview.classList.add('project-preview');

		const imageWrapper = proj.liveUrl
			? document.createElement('a')
			: document.createElement('div');

		if (proj.liveUrl) {
			imageWrapper.href = proj.liveUrl;
			imageWrapper.setAttribute(
				'aria-label',
				`View ${proj.title} live website`
			);
			imageWrapper.target = '_blank';
			imageWrapper.rel = 'noopener noreferrer';
			imageWrapper.classList.add('project-img-link');
		}

		const projectImage = document.createElement('img');
		projectImage.classList.add('project-img');
		projectImage.src = proj.images.x1;
		projectImage.srcset = `${proj.images.x1} 1x, ${proj.images.x2} 2x`;
		projectImage.alt = proj.title ? `Screenshot of ${proj.title}` : '';
		projectImage.width = 900;
		projectImage.height = 600;
		projectImage.loading = 'lazy';
		projectImage.decoding = 'async';

		imageWrapper.appendChild(projectImage);
		preview.appendChild(imageWrapper);

		panel.appendChild(meta);
		panel.appendChild(preview);
		container.appendChild(panel);
	});
}
