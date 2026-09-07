import { error } from '@sveltejs/kit';
import { projects } from '$lib/data/projects';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => {
	const langs = ['en', 'hu'] as const;
	return langs.flatMap((lang) => projects.map((p) => ({ lang, id: p.id })));
};

export const load: PageLoad = ({ params }) => {
	const project = projects.find((p) => p.id === params.id);
	if (!project) error(404, 'Project not found');
	return { project };
};
