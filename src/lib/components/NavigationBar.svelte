<script lang="ts">
	import { onDestroy, onMount, tick } from 'svelte';

	const items = [
		{ id: 'about', label: 'About me' },
		{ id: 'projects', label: 'Projects' },
		{ id: 'education', label: 'My education' },
		{ id: 'experience', label: 'Experience' },
		{ id: 'skills', label: 'Skills' },
		{ id: 'certifications', label: 'Certifications' },
		{ id: 'contact', label: 'Contact' }
	];

	let activeId = 'about';
	let scrollProgress = 0;
	let cleanup: null | (() => void) = null;

	let buttonEls: HTMLButtonElement[] = [];
	let pillLeft = 0;
	let pillWidth = 0;
	let pillReady = false;

	function updatePill() {
		const activeIndex = items.findIndex((i) => i.id === activeId);
		const el = buttonEls[activeIndex];
		if (el) {
			pillLeft = el.offsetLeft;
			pillWidth = el.offsetWidth;
			pillReady = true;
		}
	}

	$: if (activeId && buttonEls.length) {
		updatePill();
	}

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
			{ rootMargin: '-10% 0px -50% 0px', threshold: 0.05 }
		);

		sections.forEach((s) => io.observe(s));

		function onScroll() {
			const max = document.body.scrollHeight - window.innerHeight;
			scrollProgress = max > 0 ? (window.scrollY / max) * 100 : 0;
		}
		window.addEventListener('scroll', onScroll, { passive: true });

		return () => {
			io.disconnect();
			window.removeEventListener('scroll', onScroll);
		};
	}

	function scrollTo(id: string) {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	onMount(async () => {
		await tick();
		cleanup = setupObserver();
		await tick();
		updatePill();
	});

	onDestroy(() => cleanup?.());
</script>

<header class="sticky top-0 z-50 border-b border-white/5 backdrop-blur bg-black/40">
	<!-- Scroll progress bar -->
	<div
		class="absolute top-0 left-0 h-0.5 transition-all duration-150"
		style="width: {scrollProgress}%; background: linear-gradient(90deg, hsl(255 85% 65%), hsl(188 90% 55%));"
		aria-hidden="true"
	></div>

	<nav class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
		<a
			href="/"
			class="text-base font-semibold tracking-tight"
			style="font-family: 'Space Grotesk', sans-serif;"
		>
			Attila Solymosi
		</a>

		<div class="relative hidden items-center md:flex">
			<!-- Sliding pill indicator -->
			{#if pillReady}
				<span
					class="absolute top-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-all duration-250"
					style="left: {pillLeft}px; width: {pillWidth}px; height: 32px; background: color-mix(in oklab, var(--primary) 14%, transparent); border: 1px solid color-mix(in oklab, var(--primary) 35%, transparent);"
					aria-hidden="true"
				></span>
			{/if}

			{#each items as item, i}
				<button
					bind:this={buttonEls[i]}
					class={'relative z-10 cursor-pointer rounded-lg px-3 py-2 text-sm transition-opacity ' +
						(activeId === item.id ? 'opacity-100 font-medium' : 'opacity-60 hover:opacity-90')}
					aria-current={activeId === item.id ? 'page' : undefined}
					on:click={() => scrollTo(item.id)}
				>
					{item.label}
				</button>
			{/each}
		</div>

		<div class="flex items-center gap-2">
			<a
				class="btn-primary rounded-lg border px-3 py-2 text-sm"
				href="/cv/Solymosi%20Attila%20CV%20Eng.pdf"
				target="_blank"
				rel="noopener noreferrer"
			>
				View CV
			</a>
			<button
				class="btn-glass rounded-lg border px-3 py-2 text-sm md:hidden"
				on:click={() => scrollTo('projects')}
			>
				Projects
			</button>
		</div>
	</nav>
</header>
