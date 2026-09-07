<script lang="ts">
	import { fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { projects as allProjects } from '$lib/data/projects';
	import { locale } from '$lib/i18n/locale';
	import { en } from '$lib/i18n/dictionaries/en';
	import { hu } from '$lib/i18n/dictionaries/hu';

	$: t = $locale === 'hu' ? hu : en;

	const allTags = Array.from(new Set(allProjects.flatMap((p) => p.tags))).sort();
	$: filters = [t.projects.filterAll, ...allTags];

	let active = 'All';

	$: visible = active === 'All' ? allProjects : allProjects.filter((p) => p.tags.includes(active));
</script>

<SectionTitle
	eyebrow={t.projects.eyebrow}
	title={t.projects.title}
	subtitle={t.projects.subtitle}
/>

<div class="-mx-4 mb-6 overflow-x-auto px-4 pb-1 sm:mx-0 sm:mb-8 sm:overflow-visible sm:px-0 sm:pb-0">
	<div class="flex gap-2 whitespace-nowrap sm:flex-wrap sm:whitespace-normal">
		{#each filters as f (f)}
			{@const isActive = f === active || (f === t.projects.filterAll && active === 'All')}
			<button
				type="button"
				class={'cursor-pointer rounded-full border px-3 py-1.5 text-sm transition-all ' +
					(isActive
						? 'opacity-100'
						: 'btn-glass opacity-60 hover:opacity-90')}
				style={isActive
					? 'background: color-mix(in oklab, var(--accent-cyan) 12%, transparent); border-color: color-mix(in oklab, var(--accent-cyan) 55%, transparent); color: color-mix(in oklab, var(--accent-cyan) 90%, white);'
					: ''}
				on:click={() => (active = f === t.projects.filterAll ? 'All' : f)}
			>
				{f}
			</button>
		{/each}
	</div>
</div>

<div class="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3" style="overflow: clip;">
	{#each visible as p (p.id)}
		<div animate:flip={{ duration: 250 }} transition:fade={{ duration: 180 }}>
			<ProjectCard project={p} />
		</div>
	{/each}
</div>
