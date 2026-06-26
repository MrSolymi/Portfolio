import type { Action } from 'svelte/action';

export const tilt: Action<HTMLElement> = (node) => {
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return {};

	let rafId: number;

	function onMove(e: MouseEvent) {
		cancelAnimationFrame(rafId);
		rafId = requestAnimationFrame(() => {
			const rect = node.getBoundingClientRect();
			const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
			const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
			node.style.transform = `perspective(900px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) translateZ(6px)`;
			node.style.transition = 'transform 0.08s ease-out';
		});
	}

	function onLeave() {
		cancelAnimationFrame(rafId);
		node.style.transition = 'transform 0.45s ease';
		node.style.transform = '';
	}

	node.addEventListener('mousemove', onMove, { passive: true });
	node.addEventListener('mouseleave', onLeave);

	return {
		destroy() {
			cancelAnimationFrame(rafId);
			node.removeEventListener('mousemove', onMove);
			node.removeEventListener('mouseleave', onLeave);
		}
	};
};
