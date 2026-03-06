<script lang="ts">
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { projects as allProjects, type Project } from '$lib/data/projects';
	import * as Dialog from '$lib/components/ui/dialog';

	const allTags = Array.from(new Set(allProjects.flatMap((p) => p.tags))).sort();
	const filters = ['All', ...allTags];

	let active = 'All';

	$: visible = active === 'All' ? allProjects : allProjects.filter((p) => p.tags.includes(active));

	let open = false;
	let selected: Project | null = null;

	function openCaseStudy(p: Project) {
		selected = p;
		open = true;
	}

	function handleOpenChange(v: boolean) {
		open = v;
		if (!v) selected = null;
	}
</script>

<SectionTitle
	eyebrow="Work"
	title="Projects"
	subtitle="A few projects worth mentioning. Click on the case study to see the approach and details."
/>

<div class="-mx-4 mb-6 overflow-x-auto px-4 sm:mx-0 sm:mb-8 sm:overflow-visible sm:px-0">
	<div class="flex gap-2 whitespace-nowrap sm:flex-wrap sm:whitespace-normal">
		{#each filters as f}
			<button
				type="button"
				class={'cursor-pointer rounded-full border px-3 py-1.5 text-sm transition ' +
					(active === f ? 'btn-primary opacity-100' : 'btn-glass opacity-70 hover:opacity-100')}
				on:click={() => (active = f)}
			>
				{f}
			</button>
		{/each}
	</div>
</div>

<div class="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
	{#each visible as p (p.id)}
		<ProjectCard project={p} onOpenCaseStudy={openCaseStudy} />
	{/each}
</div>

<!-- SHADCN DIALOG -->
<Dialog.Root {open} onOpenChange={handleOpenChange}>
	<Dialog.Portal>
		<Dialog.Content
			class="glass z-50 max-h-[85vh] w-[calc(100vw-2rem)]! max-w-225! overflow-y-auto overscroll-contain rounded-2xl border-2 p-4 backdrop-blur-lg sm:p-8 lg:max-w-250!"
		>
			{#if selected?.caseStudy}
				<div class="flex items-start justify-between gap-4">
					<div>
						<h3 class="text-xl font-semibold tracking-tight">{selected.title}</h3>
						<p class="mt-2 text-sm opacity-80">{selected.description}</p>
					</div>
				</div>

				<div class="mt-6 grid gap-6 sm:grid-cols-2">
					<section class="glass rounded-2xl border p-4 sm:p-5">
						<p class="text-sm font-medium opacity-70">Problem</p>
						<p class="mt-2 text-sm opacity-85">{selected.caseStudy.problem}</p>
					</section>

					<section class="glass rounded-2xl border p-4 sm:p-5">
						<p class="text-sm font-medium opacity-70">Stack</p>
						<div class="mt-3 flex flex-wrap gap-2">
							{#each selected.caseStudy.stack as s}
								<span class="glass brighter-border rounded-full border px-2.5 py-1 text-xs opacity-80">{s}</span>
							{/each}
						</div>
					</section>

					<section class="glass rounded-2xl border p-4 sm:col-span-2 sm:p-5">
						<p class="text-sm font-medium opacity-70">Solution</p>
						<ul class="mt-3 space-y-2">
							{#each selected.caseStudy.solution as s}
								<li class="flex gap-2 text-sm opacity-85">
									<span class="brighter-border mt-2 h-1.5 w-1.5 shrink-0 rounded-full border"
									></span>
									<span>{s}</span>
								</li>
							{/each}
						</ul>
					</section>

					<section class="glass rounded-2xl border p-4 sm:col-span-2 sm:p-5">
						<p class="text-sm font-medium opacity-70">Results</p>
						<ul class="mt-3 space-y-2">
							{#each selected.caseStudy.results as r}
								<li class="flex gap-2 text-sm opacity-85">
									<span class="brighter-border mt-2 h-1.5 w-1.5 shrink-0 rounded-full border"
									></span>
									<span>{r}</span>
								</li>
							{/each}
						</ul>
					</section>
				</div>

				<!--
				<div class="flex items-start justify-end gap-4">
					<Dialog.Close class="btn-primary cursor-pointer rounded-xl border px-3 py-2 text-sm">
						Close
					</Dialog.Close>
				</div>
				-->
			{/if}
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
