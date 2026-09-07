<script lang="ts">
	import type { PageData } from './$types';
	import Container from '$lib/components/Container.svelte';
	import { locale } from '$lib/i18n/locale';
	import { en } from '$lib/i18n/dictionaries/en';
	import { hu } from '$lib/i18n/dictionaries/hu';
	import ArrowLeftIcon from '@lucide/svelte/icons/arrow-left';

	export let data: PageData;
	$: project = data.project;
	$: t = $locale === 'hu' ? hu : en;
</script>

<svelte:head>
	<title>{project.title} — Attila Solymosi</title>
	<meta name="description" content={project.description[$locale]} />
</svelte:head>

<section class="py-16 max-sm:py-10">
	<Container>
		<a
			href="/{$locale}#projects"
			class="btn-glass mb-8 inline-flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-sm"
		>
			<ArrowLeftIcon class="h-4 w-4" />
			{t.projects.title}
		</a>

		{#if project.caseStudy}
			{@const cs = project.caseStudy}
			<div class="card-accent glass-hover rounded-2xl p-5 sm:p-7">
				<span
					class="mb-3 inline-block rounded-full border px-2.5 py-0.5 text-xs tracking-widest uppercase"
					style="border-color: color-mix(in oklab, var(--accent-cyan) 50%, transparent); color: color-mix(in oklab, var(--accent-cyan) 80%, white);"
				>{t.projects.caseStudyLabel}</span>
				<h1
					class="text-2xl font-bold tracking-tight sm:text-4xl"
					style="font-family: 'Space Grotesk', sans-serif;"
				>{project.title}</h1>
				<p class="mt-3 max-w-2xl text-sm leading-relaxed opacity-60 sm:text-base">
					{project.description[$locale]}
				</p>

				<div class="mt-5 flex flex-wrap gap-2">
					{#if project.links?.repo}
						<a
							class="btn-glass cursor-pointer rounded-lg border px-3 py-2 text-sm"
							href={project.links.repo}
							target="_blank"
							rel="noreferrer"
						>
							{t.projects.githubLink}
						</a>
					{/if}
					{#if project.links?.live}
						<a
							class="btn-glass cursor-pointer rounded-lg border px-3 py-2 text-sm"
							href={project.links.live}
							target="_blank"
							rel="noreferrer"
						>
							{t.projects.liveLink}
						</a>
					{/if}
				</div>

				<div class="mt-7 grid gap-4 sm:grid-cols-2">
					<section
						class="rounded-xl p-4 sm:p-5"
						style="background: rgba(255,255,255,0.03); border-left: 2px solid color-mix(in oklab, var(--accent-cyan) 40%, transparent);"
					>
						<p
							class="text-xs font-medium uppercase tracking-widest"
							style="color: color-mix(in oklab, var(--accent-cyan) 70%, white);"
						>{t.projects.problem}</p>
						<p class="mt-2.5 text-sm leading-relaxed opacity-75">{cs.problem[$locale]}</p>
					</section>

					<section
						class="rounded-xl p-4 sm:p-5"
						style="background: rgba(255,255,255,0.03); border-left: 2px solid color-mix(in oklab, var(--primary) 55%, transparent);"
					>
						<p class="text-xs font-medium uppercase tracking-widest opacity-50">{t.projects.stack}</p>
						<div class="mt-3 flex flex-wrap gap-2">
							{#each cs.stack as s (s)}
								<span class="glass pill-hover rounded-full border px-2.5 py-1 text-xs opacity-75">{s}</span>
							{/each}
						</div>
					</section>

					<section
						class="rounded-xl p-4 sm:col-span-2 sm:p-5"
						style="background: rgba(255,255,255,0.03); border-left: 2px solid color-mix(in oklab, var(--primary) 55%, transparent);"
					>
						<p class="text-xs font-medium uppercase tracking-widest opacity-50">{t.projects.solution}</p>
						<ul class="mt-3 space-y-2">
							{#each cs.solution as s (s.en)}
								<li class="flex gap-2.5 text-sm opacity-75">
									<span
										class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
										style="background: color-mix(in oklab, var(--primary) 70%, transparent);"
									></span>
									<span>{s[$locale]}</span>
								</li>
							{/each}
						</ul>
					</section>

					<section
						class="rounded-xl p-4 sm:col-span-2 sm:p-5"
						style="background: rgba(255,255,255,0.03); border-left: 2px solid color-mix(in oklab, var(--accent-cyan) 40%, transparent);"
					>
						<p
							class="text-xs font-medium uppercase tracking-widest"
							style="color: color-mix(in oklab, var(--accent-cyan) 70%, white);"
						>{t.projects.results}</p>
						<ul class="mt-3 space-y-2">
							{#each cs.results as r (r.en)}
								<li class="flex gap-2.5 text-sm opacity-75">
									<span
										class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
										style="background: var(--accent-cyan);"
									></span>
									<span>{r[$locale]}</span>
								</li>
							{/each}
						</ul>
					</section>
				</div>
			</div>
		{/if}
	</Container>
</section>
