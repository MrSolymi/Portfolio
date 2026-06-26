<script lang="ts">
	import { fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
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

<div class="-mx-4 mb-6 overflow-x-auto px-4 pb-1 sm:mx-0 sm:mb-8 sm:overflow-visible sm:px-0 sm:pb-0">
	<div class="flex gap-2 whitespace-nowrap sm:flex-wrap sm:whitespace-normal">
		{#each filters as f}
			<button
				type="button"
				class={'cursor-pointer rounded-full border px-3 py-1.5 text-sm transition-all ' +
					(active === f
						? 'opacity-100'
						: 'btn-glass opacity-60 hover:opacity-90')}
				style={active === f
					? 'background: color-mix(in oklab, var(--accent-cyan) 12%, transparent); border-color: color-mix(in oklab, var(--accent-cyan) 55%, transparent); color: color-mix(in oklab, var(--accent-cyan) 90%, white);'
					: ''}
				on:click={() => (active = f)}
			>
				{f}
			</button>
		{/each}
	</div>
</div>

<div class="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3" style="overflow: clip;">
	{#each visible as p (p.id)}
		<div animate:flip={{ duration: 250 }} transition:fade={{ duration: 180 }}>
			<ProjectCard project={p} onOpenCaseStudy={openCaseStudy} />
		</div>
	{/each}
</div>

<Dialog.Root {open} onOpenChange={handleOpenChange}>
	<Dialog.Portal>
		<Dialog.Content
			class="z-50 max-h-[85vh] w-[calc(100vw-2rem)]! max-w-225! overflow-y-auto overscroll-contain rounded-2xl p-5 backdrop-blur-2xl sm:p-8 lg:max-w-250!"
			style="background: rgba(10, 10, 18, 0.92); border-left: 3px solid color-mix(in oklab, var(--primary) 60%, transparent); border-top: 1px solid rgba(255,255,255,0.06); border-right: 1px solid rgba(255,255,255,0.04); border-bottom: 1px solid rgba(255,255,255,0.04);"
		>
			{#if selected?.caseStudy}
				<!-- Header -->
				<div class="mb-6">
					<div
						class="mb-4 h-px"
						style="background: linear-gradient(90deg, color-mix(in oklab, var(--primary) 80%, transparent), color-mix(in oklab, var(--primary) 10%, transparent), transparent);"
					></div>
					<span
						class="mb-3 inline-block rounded-full border px-2.5 py-0.5 text-xs tracking-widest uppercase"
						style="border-color: color-mix(in oklab, var(--accent-cyan) 50%, transparent); color: color-mix(in oklab, var(--accent-cyan) 80%, white);"
					>Case Study</span>
					<h3
						class="text-2xl font-bold tracking-tight sm:text-3xl"
						style="font-family: 'Space Grotesk', sans-serif;"
					>{selected.title}</h3>
					<p class="mt-2 text-sm leading-relaxed opacity-60">{selected.description}</p>
				</div>

				<div class="grid gap-4 sm:grid-cols-2">
					<section
						class="rounded-xl p-4 sm:p-5"
						style="background: rgba(255,255,255,0.03); border-left: 2px solid color-mix(in oklab, var(--accent-cyan) 40%, transparent);"
					>
						<p
							class="text-xs font-medium uppercase tracking-widest"
							style="color: color-mix(in oklab, var(--accent-cyan) 70%, white);"
						>Problem</p>
						<p class="mt-2.5 text-sm leading-relaxed opacity-75">{selected.caseStudy.problem}</p>
					</section>

					<section
						class="rounded-xl p-4 sm:p-5"
						style="background: rgba(255,255,255,0.03); border-left: 2px solid color-mix(in oklab, var(--primary) 55%, transparent);"
					>
						<p class="text-xs font-medium uppercase tracking-widest opacity-50">Stack</p>
						<div class="mt-3 flex flex-wrap gap-2">
							{#each selected.caseStudy.stack as s}
								<span class="glass pill-hover rounded-full border px-2.5 py-1 text-xs opacity-75">{s}</span>
							{/each}
						</div>
					</section>

					<section
						class="rounded-xl p-4 sm:col-span-2 sm:p-5"
						style="background: rgba(255,255,255,0.03); border-left: 2px solid color-mix(in oklab, var(--primary) 55%, transparent);"
					>
						<p class="text-xs font-medium uppercase tracking-widest opacity-50">Solution</p>
						<ul class="mt-3 space-y-2">
							{#each selected.caseStudy.solution as s}
								<li class="flex gap-2.5 text-sm opacity-75">
									<span
										class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
										style="background: color-mix(in oklab, var(--primary) 70%, transparent);"
									></span>
									<span>{s}</span>
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
						>Results</p>
						<ul class="mt-3 space-y-2">
							{#each selected.caseStudy.results as r}
								<li class="flex gap-2.5 text-sm opacity-75">
									<span
										class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
										style="background: var(--accent-cyan);"
									></span>
									<span>{r}</span>
								</li>
							{/each}
						</ul>
					</section>
				</div>
			{/if}
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
