<script lang="ts">
	import type { Project } from '$lib/data/projects';

	export let project: Project;
	export let onOpenCaseStudy: ((p: Project) => void) | null = null;
</script>

<article class=" glass group rounded-2xl border-2 p-6 transition hover:-translate-y-0.5">
	<header class="flex items-start justify-between gap-4">
		<div>
			<h3 class="text-lg font-semibold tracking-tight">{project.title}</h3>
			<p class="mt-2 text-sm opacity-80">{project.description}</p>
		</div>
	</header>

	<div class="mt-4 flex flex-wrap gap-2">
		{#each project.tags as tag}
			<span class="glass rounded-full border px-2.5 py-1 text-xs opacity-80">{tag}</span>
		{/each}
	</div>

	<ul class="mt-5 space-y-2">
		{#each project.highlights.slice(0, 3) as h}
			<li class="flex gap-2 text-sm opacity-80">
				<span class="brighter-border mt-2 h-1.5 w-1.5 shrink-0 rounded-full border"></span>
				<span>{h}</span>
			</li>
		{/each}
	</ul>

	<footer class="mt-6 flex flex-wrap items-center gap-3">
		{#if project.links?.repo}
			<a
				class="text-sm underline opacity-80 hover:opacity-100"
				href={project.links.repo}
				target="_blank"
				rel="noreferrer"
			>
				GitHub
			</a>
		{/if}
		{#if project.links?.live}
			<a
				class="text-sm underline opacity-80 hover:opacity-100"
				href={project.links.live}
				target="_blank"
				rel="noreferrer"
			>
				Live
			</a>
		{/if}

		{#if project.links?.caseStudy && onOpenCaseStudy}
			<button
				class="cursor-pointer text-sm underline opacity-80 hover:opacity-100"
				type="button"
				on:click={() => onOpenCaseStudy?.(project)}
			>
				Case study
			</button>
		{/if}
	</footer>
</article>
