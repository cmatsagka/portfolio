import externalLinkIconUrl from './assets/external-link.svg';
import { projects } from './projectsData.js';

export function renderProjects() {
	const container = document.getElementById('projects-container');
	if (!container) return;

	container.textContent = '';

	projects.forEach((proj, index) => {
		const panel = document.createElement('article');
		panel.classList.add('project-panel');

		const topOffset = 6 + index * 1.5;
		panel.style.top = `${topOffset}rem`;

		const meta = document.createElement('div');
		meta.classList.add('project-meta');

		const indexLabel = document.createElement('span');
		indexLabel.classList.add('project-index');
		const currentIndex = String(index + 1).padStart(2, '0');
		const totalProjects = String(projects.length).padStart(2, '0');
		indexLabel.textContent = `${currentIndex} / ${totalProjects}`;
		meta.appendChild(indexLabel);

		const headerRow = document.createElement('div');
		headerRow.classList.add('project-header-row');

		const title = document.createElement('h3');
		title.classList.add('project-title');
		title.textContent = proj.title;
		headerRow.appendChild(title);

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

			const githubIcon = document.createElement('img');
			githubIcon.src = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg`;
			githubIcon.alt = '';
			githubIcon.setAttribute('aria-hidden', 'true');
			githubLink.appendChild(githubIcon);
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

			const externalIcon = document.createElement('img');
			externalIcon.src = externalLinkIconUrl;
			externalIcon.alt = '';
			externalIcon.setAttribute('aria-hidden', 'true');
			liveLink.appendChild(externalIcon);
			linksWrapper.appendChild(liveLink);
		}

		headerRow.appendChild(linksWrapper);
		meta.appendChild(headerRow);

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

		const preview = document.createElement('div');
		preview.classList.add('project-preview');

		const projectImage = document.createElement('img');
		projectImage.classList.add('project-img');
		projectImage.src = proj.images.x1;
		projectImage.srcset = `${proj.images.x1} 1x, ${proj.images.x2} 2x`;
		projectImage.alt = '';
		projectImage.setAttribute('aria-hidden', true);
		projectImage.width = 900;
		projectImage.height = 600;
		projectImage.loading = 'lazy';
		projectImage.decoding = 'async';

		preview.appendChild(projectImage);
		panel.appendChild(meta);
		panel.appendChild(preview);
		container.appendChild(panel);
	});
}
