<script lang="ts">
	import Container from '$lib/components/Container.svelte';

	import Projects from '$lib/sections/Projects.svelte';
	import Experience from '$lib/sections/Experience.svelte';
	import Education from '$lib/sections/Education.svelte';
	import Skills from '$lib/sections/Skills.svelte';
	import Certifications from '$lib/sections/Certifications.svelte';
	import Intro from '$lib/sections/Intro.svelte';

	import { locale } from '$lib/i18n/locale';
	import { en } from '$lib/i18n/dictionaries/en';
	import { hu } from '$lib/i18n/dictionaries/hu';

	$: t = $locale === 'hu' ? hu : en;
</script>

<svelte:head>
	<title>Attila Solymosi — {t.hero.identity.role}</title>
	<meta name="description" content={t.hero.description} />
</svelte:head>

<section id="about" class="scroll-mt-14 lg:scroll-mt-0">
	<Intro />
</section>

<section id="projects" class="scroll-mt-14 py-16 max-sm:py-10 lg:scroll-mt-0">
	<Container><Projects /></Container>
</section>

<section id="experience" class="scroll-mt-14 py-16 max-sm:py-10 lg:scroll-mt-0">
	<Container><Experience /></Container>
</section>

<section id="education" class="scroll-mt-14 py-16 max-sm:py-10 lg:scroll-mt-0">
	<Container><Education /></Container>
</section>

<section id="skills" class="scroll-mt-14 py-16 max-sm:py-10 lg:scroll-mt-0">
	<Container><Skills /></Container>
</section>

<section id="certifications" class="scroll-mt-14 py-16 max-sm:py-10 lg:scroll-mt-0">
	<Container><Certifications /></Container>
</section>

<footer class="border-t border-white/5 py-10 max-sm:py-6 bg-linear-to-b from-transparent to-black/20">
	<Container className="flex flex-col items-center gap-4">
		<p class="text-center text-xs tracking-[0.2em] uppercase opacity-25 font-mono">
			{t.footer.tagline}
		</p>
		<div class="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-between opacity-50">
			<p class="text-sm">© {new Date().getFullYear()} Attila Solymosi</p>
			<div class="flex gap-5 text-sm">
				<a class="hover:opacity-100 transition-opacity" href="https://github.com/MrSolymi" target="_blank" rel="noreferrer">{t.footer.githubLabel}</a>
				<a class="hover:opacity-100 transition-opacity" href="https://linkedin.com/in/mrsolymi" target="_blank" rel="noreferrer">{t.footer.linkedinLabel}</a>
				<a class="hover:opacity-100 transition-opacity" href="mailto:solymosiati001220@outlook.hu">{t.footer.emailLabel}</a>
			</div>
		</div>
	</Container>
</footer>
