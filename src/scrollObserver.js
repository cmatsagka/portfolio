export function initProjectScrollObserver() {
	const handleScroll = () => {
		const panels = document.querySelectorAll('.project-panel');
		const windowHeight = window.innerHeight;

		const targetLine = windowHeight * 0.25;
		let closestPanel = null;
		let smallestDistance = Infinity;

		panels.forEach((panel) => {
			const rect = panel.getBoundingClientRect();
			const distance = Math.abs(rect.top - targetLine);

			if (rect.top <= windowHeight * 0.75 && rect.bottom >= 100) {
				if (distance < smallestDistance) {
					smallestDistance = distance;
					closestPanel = panel;
				}
			}
		});

		panels.forEach((panel) => {
			if (panel === closestPanel) {
				panel.classList.add('in-view');
			} else {
				panel.classList.remove('in-view');
			}
		});
	};

	let ticking = false;
	window.addEventListener(
		'scroll',
		() => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					handleScroll();
					ticking = false;
				});
				ticking = true;
			}
		},
		{ passive: true }
	);
	handleScroll();
}
