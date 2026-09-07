import { derived } from 'svelte/store';
import { page } from '$app/stores';
import type { Locale } from './types';

export const locale = derived(page, ($page): Locale => ($page.params.lang === 'hu' ? 'hu' : 'en'));

export function pathForLocale(pathname: string, target: Locale): string {
	const segments = pathname.split('/');
	if (segments.length > 1 && (segments[1] === 'en' || segments[1] === 'hu')) {
		segments[1] = target;
		return segments.join('/') || '/';
	}
	return `/${target}`;
}
