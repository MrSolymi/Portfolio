<script lang="ts">
	const items = [
		{ id: 'about', label: 'Rólam' },
		{ id: 'projects', label: 'Projektek' },
		{ id: 'experience', label: 'Tapasztalat' },
        { id: 'education', label: 'Tanulmányok' },
		{ id: 'skills', label: 'Skillek' },
        { id: "certifications", label: "Certifikátok" },
		{ id: 'contact', label: 'Kapcsolat' }
	];

	let activeId = 'about';

	function setupObserver() {
		const sections = items
			.map((i) => document.getElementById(i.id))
			.filter(Boolean) as HTMLElement[];

		const io = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((e) => e.isIntersecting)
					.sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
				if (visible?.target?.id) activeId = visible.target.id;
			},
			{ rootMargin: '-30% 0px -60% 0px', threshold: [0.1, 0.2, 0.3] }
		);

		sections.forEach((s) => io.observe(s));
		return () => io.disconnect();
	}

	function scrollTo(id: string) {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	let cleanup: null | (() => void) = null;
	$: if (typeof window !== 'undefined' && !cleanup) cleanup = setupObserver();
</script>

<header class="sticky top-0 z-50 border-b backdrop-blur">
	<nav class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
		<a href="/" class="font-semibold tracking-tight">Solymosi Attila</a>

		<div class="hidden items-center gap-1 md:flex">
			{#each items as item}
				<button
					class={'rounded-lg px-3 py-2 text-sm transition ' +
						(activeId === item.id ? 'opacity-100' : 'opacity-70 hover:opacity-100')}
					on:click={() => scrollTo(item.id)}
				>
					{item.label}
				</button>
			{/each}
		</div>

		<div class="flex items-center gap-2">
			<a
				class="rounded-lg border px-3 py-2 text-sm"
				href="/cv.pdf"
				target="_blank"
				rel="noreferrer"
			>
				Download CV
			</a>
			<button
				class="rounded-lg border px-3 py-2 text-sm md:hidden"
				on:click={() => scrollTo('projects')}
			>
				Projects
			</button>
		</div>
	</nav>
</header>
