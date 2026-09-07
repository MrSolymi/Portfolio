<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { locale, pathForLocale } from '$lib/i18n/locale';
	import type { Locale } from '$lib/i18n/types';

	export let compact = false;

	const activeStyle =
		'background: color-mix(in oklab, var(--accent-cyan) 16%, transparent); border-color: color-mix(in oklab, var(--accent-cyan) 55%, transparent); color: color-mix(in oklab, var(--accent-cyan) 90%, white);';

	function switchTo(target: Locale) {
		if ($locale === target) return;
		goto(pathForLocale($page.url.pathname, target));
	}
</script>

<div
	class={'glass inline-flex items-center gap-0.5 rounded-full border p-0.5 ' +
		(compact ? 'text-[10px]' : 'text-xs')}
>
	<button
		type="button"
		class={'cursor-pointer rounded-full border border-transparent px-2.5 py-1 transition-all ' +
			($locale === 'en' ? 'font-medium' : 'opacity-60 hover:opacity-90')}
		style={$locale === 'en' ? activeStyle : ''}
		aria-pressed={$locale === 'en'}
		on:click={() => switchTo('en')}
	>
		EN
	</button>
	<button
		type="button"
		class={'cursor-pointer rounded-full border border-transparent px-2.5 py-1 transition-all ' +
			($locale === 'hu' ? 'font-medium' : 'opacity-60 hover:opacity-90')}
		style={$locale === 'hu' ? activeStyle : ''}
		aria-pressed={$locale === 'hu'}
		on:click={() => switchTo('hu')}
	>
		HU
	</button>
</div>
