<script lang="ts">
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { projects as allProjects, type Project } from '$lib/data/projects';

	const allTags = Array.from(new Set(allProjects.flatMap((p) => p.tags))).sort();
	const filters = ['All', ...allTags];

	let active = 'All';

	$: visible = active === 'All' ? allProjects : allProjects.filter((p) => p.tags.includes(active));

	// Modal state
	let open = false;
	let selected: Project | null = null;

	function openCaseStudy(p: Project) {
		selected = p;
		open = true;
	}
	function close() {
		open = false;
		selected = null;
	}

	// ESC close
	function onKeyDown(e: KeyboardEvent) {
		if (e.key === 'Escape') close();
	}
</script>

<SectionTitle
	eyebrow="Work"
	title="Projects"
	subtitle="Néhány kiemelt munka — kattints a case study-ra, ha szeretnéd látni a megközelítést és döntéseket."
/>

<div class="mb-8 flex flex-wrap gap-2">
	{#each filters as f}
		<button
			type="button"
			class={'btn-glass cursor-pointer rounded-full border px-3 py-1.5 text-sm transition ' +
				(active === f ? 'opacity-100' : 'opacity-70 hover:opacity-100')}
			on:click={() => (active = f)}
		>
			{f}
		</button>
	{/each}
</div>

<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
	{#each visible as p (p.id)}
		<ProjectCard project={p} onOpenCaseStudy={openCaseStudy} />
	{/each}
</div>

{#if open && selected?.caseStudy}

	<!-- Overlay -->
	<!-- svelte-ignore a11y_interactive_supports_focus -->
	<div
		class="fixed inset-0 z-50 flex items-center justify-center p-4"
		role="dialog"
		aria-modal="true"
		aria-label="Project case study"
		on:keydown={onKeyDown}
	>
		<button class="absolute inset-0 opacity-60" aria-label="Close" on:click={close}></button>

		<!--bg-background-->
		<div class="glass relative w-full max-w-3xl rounded-2xl border-2 p-6 backdrop-blur-lg sm:p-8">
			<div class="flex items-start justify-between gap-4">
				<div>
					<h3 class="text-xl font-semibold tracking-tight">{selected.title}</h3>
					<p class="mt-2 text-sm opacity-80">{selected.description}</p>
				</div>
				<button class="btn-glass cursor-pointer rounded-xl border px-3 py-2 text-sm" on:click={close}> Close </button>
			</div>

			<div class="mt-6 grid gap-6 sm:grid-cols-2">
				<section class="glass rounded-2xl border p-5">
					<p class="text-sm font-medium opacity-70">Problem</p>
					<p class="mt-2 text-sm opacity-85">{selected.caseStudy.problem}</p>
				</section>

				<section class="glass rounded-2xl border p-5">
					<p class="text-sm font-medium opacity-70">Stack</p>
					<div class="mt-3 flex flex-wrap gap-2">
						{#each selected.caseStudy.stack as s}
							<span class="rounded-full border px-2.5 py-1 text-xs opacity-80">{s}</span>
						{/each}
					</div>
				</section>

				<section class="glass rounded-2xl border p-5 sm:col-span-2">
					<p class="text-sm font-medium opacity-70">Solution</p>
					<ul class="mt-3 space-y-2">
						{#each selected.caseStudy.solution as s}
							<li class="flex gap-2 text-sm opacity-85">
								<span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full border brighter-border"></span>
								<span>{s}</span>
							</li>
						{/each}
					</ul>
				</section>

				<section class="glass rounded-2xl border p-5 sm:col-span-2">
					<p class="text-sm font-medium opacity-70">Results</p>
					<ul class="mt-3 space-y-2">
						{#each selected.caseStudy.results as r}
							<li class="flex gap-2 text-sm opacity-85">
								<span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full border"></span>
								<span>{r}</span>
							</li>
						{/each}
					</ul>
				</section>
			</div>
		</div>
	</div>
{/if}
