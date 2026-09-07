<script lang="ts">
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import { education } from '$lib/data/education';
	import { reveal } from '$lib/actions/reveal';
	import { locale } from '$lib/i18n/locale';
	import { en } from '$lib/i18n/dictionaries/en';
	import { hu } from '$lib/i18n/dictionaries/hu';

	$: t = $locale === 'hu' ? hu : en;
</script>

<SectionTitle
	eyebrow={t.education.eyebrow}
	title={t.education.title}
	subtitle={t.education.subtitle}
/>

<div class="relative">
	<!-- Gradient vertical timeline line -->
	<div
		class="absolute top-0 bottom-0 left-3.25 hidden sm:block"
		style="width: 1px; background: linear-gradient(to bottom, transparent, color-mix(in oklab, var(--primary) 45%, transparent) 15%, color-mix(in oklab, var(--primary) 45%, transparent) 85%, transparent);"
	></div>

	<div class="space-y-4 sm:space-y-6">
		{#each education as e, i (e.id)}
			<article
				class="grid items-start gap-6 sm:grid-cols-[28px_1fr]"
				use:reveal={{ delay: i * 120 }}
			>
				<!-- Glowing cyan dot -->
				<div class="relative hidden sm:block">
					<span
						class="absolute top-8 left-1/2 h-3.5 w-3.5 -translate-x-1/2 rounded-full"
						style="background: var(--accent-cyan); box-shadow: 0 0 0 3px hsl(240 12% 7%), 0 0 14px var(--accent-cyan);"
					></span>
				</div>

				<div class="card-accent glass-hover rounded-2xl p-4 sm:p-6">
					<header class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
						<div>
							<h3 class="text-lg font-semibold tracking-tight leading-snug">{e.degree[$locale]}</h3>
							<p class="mt-1 text-sm opacity-70">
								<span class="font-medium opacity-90">{e.school}</span>
								{#if e.location}<span class="opacity-50"> • {e.location}</span>{/if}
							</p>
						</div>

						<p class="text-xs sm:text-sm font-medium sm:text-right" style="color: var(--accent-cyan);">{e.period}</p>
					</header>

					{#if e.details?.length}
						<ul class="mt-4 sm:mt-5 space-y-1.5 sm:space-y-2">
							{#each e.details as d (d.en)}
								<li class="flex gap-2 text-sm opacity-75">
									<span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style="background: color-mix(in oklab, var(--primary) 70%, transparent);"></span>
									<span>{d[$locale]}</span>
								</li>
							{/each}
						</ul>
					{/if}
				</div>
			</article>
		{/each}
	</div>
</div>
