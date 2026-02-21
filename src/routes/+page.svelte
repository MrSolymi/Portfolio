<script lang="ts">
	import Navbar from '$lib/components/NavigationBar.svelte';
	import Container from '$lib/components/Container.svelte';

	import Hero from '$lib/sections/Hero.svelte';
	import About from '$lib/sections/About.svelte';
	import Projects from '$lib/sections/Projects.svelte';
	import Experience from '$lib/sections/Experience.svelte';
	import Education from '$lib/sections/Education.svelte';
	import Skills from '$lib/sections/Skills.svelte';
	import Certifications from '$lib/sections/Certifications.svelte';
	import Contact from '$lib/sections/Contact.svelte';
</script>

<Navbar />

<main class="min-h-screen">
	<Hero />

	<section id="about" class="scroll-mt-14 py-20">
		<Container><About /></Container>
	</section>

	<section id="projects" class="scroll-mt-14 py-20">
		<Container><Projects /></Container>
	</section>

	<section id="education" class="scroll-mt-14 py-20">
		<Container><Education /></Container>
	</section>

	<section id="experience" class="scroll-mt-14 py-20">
		<Container><Experience /></Container>
	</section>

	<section id="skills" class="scroll-mt-14 py-20">
		<Container><Skills /></Container>
	</section>

	<section id="certifications" class="scroll-mt-14 py-20">
		<Container><Certifications /></Container>
	</section>

	<section id="contact" class="scroll-mt-14 py-20">
		<Container><Contact /></Container>
	</section>

	<footer class="border-t py-10">
		<Container className="flex flex-col sm:flex-row items-center justify-between gap-4 opacity-80">
			<p class="text-sm">© {new Date().getFullYear()} Attila Solymosi</p>
			<div class="flex gap-4 text-sm">
				<a
					class="opacity-80 hover:opacity-100"
					href="https://github.com/MrSolymi"
					target="_blank"
					rel="noreferrer">GitHub</a
				>
				<a
					class="opacity-80 hover:opacity-100"
					href="https://linkedin.com/in/mrsolymi"
					target="_blank"
					rel="noreferrer">LinkedIn</a
				>
				<a class="opacity-80 hover:opacity-100" href="mailto:solymosiati001220@outlook.hu">Email</a>
			</div>
		</Container>
	</footer>
</main>
