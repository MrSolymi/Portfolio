import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const sectionIds = [
	'about',
	'projects',
	'experience',
	'education',
	'skills',
	'certifications'
] as const;

export const activeSectionId = writable<string>('about');
export const scrollProgress = writable<number>(0);

let cleanup: (() => void) | null = null;

export function refreshSectionTracker(): void {
	if (!browser) return;
	cleanup?.();
	cleanup = null;

	const sections = sectionIds
		.map((id) => document.getElementById(id))
		.filter((el): el is HTMLElement => !!el);

	if (sections.length === 0) {
		scrollProgress.set(0);
		return;
	}

	const io = new IntersectionObserver(
		(entries) => {
			const visible = entries
				.filter((e) => e.isIntersecting)
				.sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
			if (visible?.target?.id) activeSectionId.set(visible.target.id);
		},
		{ rootMargin: '-15% 0px -55% 0px', threshold: 0.05 }
	);
	sections.forEach((s) => io.observe(s));

	function onScroll() {
		const max = document.body.scrollHeight - window.innerHeight;
		scrollProgress.set(max > 0 ? (window.scrollY / max) * 100 : 0);
	}
	window.addEventListener('scroll', onScroll, { passive: true });
	onScroll();

	cleanup = () => {
		io.disconnect();
		window.removeEventListener('scroll', onScroll);
	};
}

export function scrollToSection(id: string) {
	document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
