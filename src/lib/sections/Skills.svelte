<script lang="ts">
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import { skills } from '$lib/data/profile';
	import { reveal } from '$lib/actions/reveal';
	import { locale } from '$lib/i18n/locale';
	import { en } from '$lib/i18n/dictionaries/en';
	import { hu } from '$lib/i18n/dictionaries/hu';

	$: t = $locale === 'hu' ? hu : en;

	const backend = skills.find((g) => g.id === 'backend')?.items ?? [];
	const devops = skills.find((g) => g.id === 'devops')?.items ?? [];
	const frontend = skills.find((g) => g.id === 'frontend')?.items ?? [];
	const database = skills.find((g) => g.id === 'database')?.items ?? [];

	const row1 = [...backend, ...devops];
	const row2 = [...frontend, ...database];
</script>

<SectionTitle
	eyebrow={t.skills.eyebrow}
	title={t.skills.title}
	subtitle={t.skills.subtitle}
/>

<div use:reveal={{ delay: 0 }}>
	<!-- Row 1: scrolls left -->
	<div class="marquee-track py-1">
		<div
			class="marquee-inner"
			style="gap: 0.75rem; animation: marquee-fwd 28s linear infinite;"
		>
			{#each [...row1, ...row1] as s, i (i)}
				<span class="glass pill-hover rounded-full border px-2.5 py-1 text-xs whitespace-nowrap opacity-80 sm:px-3 sm:py-1.5 sm:text-sm">/ {s}</span>
			{/each}
		</div>
	</div>

	<!-- Row 2: scrolls right -->
	<div class="marquee-track mt-3 py-1">
		<div
			class="marquee-inner"
			style="gap: 0.75rem; animation: marquee-rev 22s linear infinite;"
		>
			{#each [...row2, ...row2] as s, i (i)}
				<span class="glass pill-hover rounded-full border px-2.5 py-1 text-xs whitespace-nowrap opacity-80 sm:px-3 sm:py-1.5 sm:text-sm">/ {s}</span>
			{/each}
		</div>
	</div>
</div>

<div class="card-accent glass-hover mt-8 rounded-2xl p-5 sm:p-7" use:reveal={{ delay: 80 }}>
	<p class="text-xs font-medium opacity-50 uppercase tracking-widest">{t.skills.careTitle}</p>
	<div class="mt-4 grid gap-3 sm:grid-cols-3">
		<div class="card-accent glass-hover rounded-xl p-4">
			<p class="text-sm font-semibold" style="font-family: 'Space Grotesk', sans-serif;">{t.skills.care1Title}</p>
			<p class="mt-1.5 text-sm opacity-65">{t.skills.care1Text}</p>
		</div>
		<div class="card-accent glass-hover rounded-xl p-4">
			<p class="text-sm font-semibold" style="font-family: 'Space Grotesk', sans-serif;">{t.skills.care2Title}</p>
			<p class="mt-1.5 text-sm opacity-65">{t.skills.care2Text}</p>
		</div>
		<div class="card-accent glass-hover rounded-xl p-4">
			<p class="text-sm font-semibold" style="font-family: 'Space Grotesk', sans-serif;">{t.skills.care3Title}</p>
			<p class="mt-1.5 text-sm opacity-65">{t.skills.care3Text}</p>
		</div>
	</div>
</div>
