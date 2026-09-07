<script lang="ts">
	import { onMount } from 'svelte';
	import Container from '$lib/components/Container.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { contact } from '$lib/data/profile';
	import { locale } from '$lib/i18n/locale';
	import { en } from '$lib/i18n/dictionaries/en';
	import { hu } from '$lib/i18n/dictionaries/hu';
	import {
		siSpringboot, siPostgresql, siDocker, siGit, siDotnet,
		siSvelte, siTypescript, siLinux, siGithub, siPython, siSqlite, siTailwindcss
	} from 'simple-icons';

	$: t = $locale === 'hu' ? hu : en;

	const techStack = [
		{ icon: siSpringboot },
		{ icon: siPostgresql },
		{ icon: siDocker },
		{ icon: siGit },
		{ icon: siDotnet },
		{ icon: siSvelte },
		{ icon: siTypescript },
		{ icon: siLinux },
		{ icon: siGithub, color: '#c0c0c0' },
		{ icon: siPython },
		{ icon: siSqlite, color: '#5bafd6' },
		{ icon: siTailwindcss }
	];

	const featuredStack = ['Java', 'Spring Boot', 'Docker', 'PostgreSQL', 'Svelte', 'TypeScript', 'C#', 'Linux'];

	$: quick = [
		{ title: t.about.quick1Title, text: t.about.quick1Text },
		{ title: t.about.quick2Title, text: t.about.quick2Text },
		{ title: t.about.quick3Title, text: t.about.quick3Text }
	];

	let projectsCount = 0;
	let statsVisible = false;
	let statsEl: HTMLElement;

	$: phrases = t.hero.typewriterPhrases;
	let displayed = '';
	let phraseIndex = 0;
	let phraseDir = 1;
	let alive = true;

	function pause(ms: number) { return new Promise<void>((r) => setTimeout(r, ms)); }

	async function typeLoop() {
		await pause(300);
		while (alive) {
			const target = phrases[phraseIndex];
			for (let i = 0; i <= target.length && alive; i++) { displayed = target.slice(0, i); await pause(48); }
			if (!alive) break;
			await pause(2500);
			for (let i = target.length; i >= 0 && alive; i--) { displayed = target.slice(0, i); await pause(28); }
			if (!alive) break;
			await pause(180);
			phraseIndex += phraseDir;
			if (phraseIndex === phrases.length - 1 || phraseIndex === 0) phraseDir *= -1;
		}
	}

	onMount(() => {
		const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (!reduced) typeLoop(); else displayed = phrases[0];

		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting && !statsVisible) {
				statsVisible = true;
				animateCount(0, 5, 800, (v) => (projectsCount = v));
				observer.disconnect();
			}
		}, { threshold: 0.4 });
		if (statsEl) observer.observe(statsEl);
		return () => { alive = false; observer.disconnect(); };
	});

	function animateCount(from: number, to: number, duration: number, setter: (v: number) => void) {
		const start = performance.now();
		function step(now: number) {
			const progress = Math.min((now - start) / duration, 1);
			setter(Math.round(from + (to - from) * (1 - Math.pow(1 - progress, 3))));
			if (progress < 1) requestAnimationFrame(step);
		}
		requestAnimationFrame(step);
	}
</script>

<section>
	<Container>
		<!-- ── HERO ─────────────────────────────────────────────── -->
		<div class="py-12 sm:py-16 lg:py-24">
			<div class="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">

				<!-- LEFT ── text content -->
				<div class="min-w-0" use:reveal={{ delay: 0 }}>
					<!-- Badge -->
					<div class="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs backdrop-blur">
						<span class="dot-live"></span>
						{t.hero.badgeAvailable}
					</div>

					<!-- Typewriter -->
					<p class="min-h-[1.5em] text-xs font-medium uppercase tracking-widest opacity-50 sm:text-sm">
						{displayed}<span class="typewriter-cursor" aria-hidden="true">|</span>
					</p>

					<!-- Headline -->
					<h1 class="gradient-text mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
						{t.hero.headline}
					</h1>

					<!-- Description -->
					<p class="mt-5 text-sm leading-relaxed opacity-70 sm:text-base">
						{t.hero.description}
					</p>

					<!-- CTAs -->
					<div class="mt-7 flex flex-col gap-3 sm:flex-row">
						<a href="#projects" class="btn-primary w-full cursor-pointer rounded-xl border px-5 py-3 text-center text-sm font-medium sm:w-auto">
							{t.hero.ctaProjects}
						</a>
						<a href={'mailto:' + contact.email} class="btn-glass w-full cursor-pointer rounded-xl border px-5 py-3 text-center text-sm font-medium sm:w-auto">
							{t.hero.ctaContact}
						</a>
					</div>

					<!-- Icon marquee -->
					<div class="marquee-track mt-8 py-1" aria-hidden="true">
						<div class="marquee-inner" style="gap: 2.25rem; animation: marquee-fwd 26s linear infinite;">
							{#each [...techStack, ...techStack] as tech, i (i)}
								<svg viewBox="0 0 24 24" class="h-6 w-6 shrink-0" fill={'color' in tech ? tech.color : '#' + tech.icon.hex} style="opacity:0.65">
									<title>{tech.icon.title}</title>
									<path d={tech.icon.path} />
								</svg>
							{/each}
						</div>
					</div>
				</div>

				<!-- RIGHT ── identity card -->
				<div class="min-w-0" use:reveal={{ delay: 100 }}>
					<div class="card-accent rounded-2xl p-6 sm:p-7">

						<!-- Avatar + name -->
						<div class="flex flex-col items-center gap-4 text-center">
							<div class="relative rounded-full p-0.75 avatar-ring" style="background: conic-gradient(from 180deg, var(--accent-cyan), hsl(255 85% 65%), hsl(280 70% 60%), var(--accent-cyan));">
								<div class="rounded-full bg-background p-0.5 avatar-counter">
									<img src="/avatar_image/me.png" alt="Attila Solymosi" class="block h-24 w-24 rounded-full object-cover sm:h-28 sm:w-28" loading="eager" />
								</div>
							</div>
							<div>
								<p class="text-lg font-semibold" style="font-family:'Space Grotesk',sans-serif;">Attila Solymosi</p>
								<p class="mt-0.5 text-sm opacity-60">{t.hero.identity.role}</p>
							</div>
							<div class="flex flex-wrap justify-center gap-2">
								<span class="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs backdrop-blur">
									<span class="dot-live"></span>{t.hero.identity.openToWork}
								</span>
								<span class="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs opacity-70 backdrop-blur">
									{t.hero.identity.locationBadge}
								</span>
							</div>
						</div>

						<!-- Divider -->
						<div class="my-6 h-px" style="background:linear-gradient(90deg,transparent,color-mix(in oklab,var(--primary) 35%,transparent),transparent);"></div>

						<!-- Stats -->
						<div class="grid grid-cols-3 gap-2 text-center" bind:this={statsEl}>
							<div>
								<p class="text-2xl font-bold" style="font-family:'Space Grotesk',sans-serif;color:var(--accent-cyan);">
									{statsVisible ? projectsCount + '+' : '5+'}
								</p>
								<p class="mt-1 text-xs uppercase tracking-wider opacity-50">{t.hero.identity.statsProjectsLabel}</p>
							</div>
							<div>
								<p class="text-2xl font-bold" style="font-family:'Space Grotesk',sans-serif;color:var(--accent-cyan);">2025</p>
								<p class="mt-1 text-xs uppercase tracking-wider opacity-50">{t.hero.identity.statsGraduateLabel}</p>
							</div>
							<div>
								<p class="text-lg font-bold" style="font-family:'Space Grotesk',sans-serif;color:var(--accent-cyan);">{t.hero.identity.statsFocusValue}</p>
								<p class="mt-1 text-xs uppercase tracking-wider opacity-50">{t.hero.identity.statsFocusLabel}</p>
							</div>
						</div>

						<!-- Divider -->
						<div class="my-6 h-px" style="background:linear-gradient(90deg,transparent,color-mix(in oklab,var(--primary) 35%,transparent),transparent);"></div>

						<!-- Top stack -->
						<div>
							<p class="mb-3 text-xs font-medium uppercase tracking-widest opacity-40">{t.hero.identity.topStackLabel}</p>
							<div class="flex flex-wrap gap-2">
								{#each featuredStack as s (s)}
									<span class="glass pill-hover rounded-full border px-2.5 py-1 text-xs opacity-70">{s}</span>
								{/each}
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>

		<!-- ── ABOUT ─────────────────────────────────────────────── -->
		<div class="grid items-start gap-6 sm:gap-8 lg:grid-cols-2">
			<div class="card-accent glass-hover rounded-2xl p-5 sm:p-7" use:reveal={{ delay: 0 }}>
				<p class="text-xs font-medium uppercase tracking-widest opacity-50">{t.about.eyebrow}</p>
				<h2 class="mt-2 text-2xl font-semibold tracking-tight">{t.about.title}</h2>
				<p class="mt-4 text-sm leading-relaxed opacity-75">
					{t.about.bioPart1}
					<br /><br />
					{t.about.bioPart2}
				</p>
				<ul class="mt-5 space-y-2">
					{#each t.about.bullets as b (b)}
						<li class="flex gap-2 text-sm opacity-80">
							<span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style="background:var(--accent-cyan);"></span>
							<span>{b}</span>
						</li>
					{/each}
				</ul>
			</div>

			<div class="grid gap-4">
				{#each quick as q, i (q.title)}
					<div class="card-accent glass-hover rounded-2xl p-5 sm:p-6" use:reveal={{ delay: i * 80 }}>
						<p class="text-sm font-semibold" style="font-family:'Space Grotesk',sans-serif;">{q.title}</p>
						<p class="mt-2 text-sm leading-relaxed opacity-70">{q.text}</p>
					</div>
				{/each}
				<div class="card-accent glass-hover rounded-2xl p-5 sm:p-6" use:reveal={{ delay: 240 }}>
					<p class="text-sm font-semibold" style="font-family:'Space Grotesk',sans-serif;">{t.about.currentlyTitle}</p>
					<p class="mt-2 text-sm leading-relaxed opacity-70">
						{t.about.currentlyText}
					</p>
				</div>
			</div>
		</div>
	</Container>
</section>
