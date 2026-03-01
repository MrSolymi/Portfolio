<script lang="ts">
	import type { Project } from '$lib/data/projects';

	export let project: Project;
	export let onOpenCaseStudy: ((p: Project) => void) | null = null;
</script>

<article class="glass group rounded-2xl border-2 p-4 transition sm:p-6 sm:hover:-translate-y-0.5">
	<header class="flex items-start justify-between gap-4">
		<div>
			<h3 class="text-lg leading-snug font-semibold tracking-tight">{project.title}</h3>
			<p class="mt-2 text-sm opacity-80">{project.description}</p>
		</div>
	</header>

	<div class="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
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

	<footer class="mt-6 flex flex-wrap gap-2">
		{#if project.links?.repo}
			<a
				class="btn-glass cursor-pointer rounded-lg border px-3 py-2 text-sm"
				href={project.links.repo}
				target="_blank"
				rel="noreferrer"
			>
				GitHub
			</a>
		{/if}

		{#if project.links?.live}
			<a
				class="btn-glass cursor-pointer rounded-lg border px-3 py-2 text-sm"
				href={project.links.live}
				target="_blank"
				rel="noreferrer"
			>
				Live
			</a>
		{/if}

		{#if project.links?.caseStudy && onOpenCaseStudy}
			<button
				class="btn-primary cursor-pointer rounded-lg border px-3 py-2 text-sm"
				type="button"
				on:click={() => onOpenCaseStudy?.(project)}
			>
				Case study
			</button>
		{/if}
	</footer>
</article>
