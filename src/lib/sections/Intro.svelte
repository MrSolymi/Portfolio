<script lang="ts">
	import Container from '$lib/components/Container.svelte';

	const quick = [
		{
			title: 'Backend & API',
			text: 'Spring Boot REST APIs with validation, error handling, and a clean endpoint structure.'
		},
		{
			title: 'Full-stack mindset',
			text: 'Svelte integration, auth flows, and backend decisions that support a smooth user experience.'
		},
		{
			title: 'DevOps basics',
			text: 'Docker / Compose, local-to-prod parity, and simple deploy workflows.'
		}
	];

	const bullets = [
		'Backend-focused with Java / Spring Boot',
		'Clear architecture and consistent code style',
		'Pragmatic Svelte + TypeScript integration'
	];
</script>

<section>
	<Container>
		<!-- HERO ROW -->
		<div class="grid items-start gap-8 sm:gap-10 lg:grid-cols-2">
			<div>
				<p class="text-xs font-medium opacity-70 sm:text-sm">Backend • Java • Spring Boot</p>

				<h1 class="mt-3 text-3xl leading-tight font-semibold tracking-tight sm:text-5xl">
					Modern backends, clean architecture, reliable APIs.
				</h1>

				<p class="mt-4 max-w-xl text-sm leading-relaxed opacity-80 sm:mt-5 sm:text-lg">
					Focused on REST APIs and well-structured code. Java + Spring Boot with pragmatic
					Svelte/Tailwind integration. I build measurable, maintainable services designed to scale.
				</p>

				<div class="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row">
					<a
						href="#projects"
						class="btn-primary w-full cursor-pointer rounded-xl border px-4 py-2.5 text-center text-sm font-medium sm:w-auto"
					>
						View Projects
					</a>
					<a
						href="#contact"
						class="btn-glass w-full cursor-pointer rounded-xl border px-4 py-2.5 text-center text-sm font-medium sm:w-auto"
					>
						Get in touch
					</a>
				</div>
			</div>

			<div class="grid gap-4">
				<div class="glass rounded-2xl border-2 p-4 sm:p-6">
					<div class="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-5">
						<div class="relative shrink-0">
							<div class="brighter-avatar-border rounded-full border-2 p-0.5">
								<img
									src="/avatar_image/me.png"
									alt="Attila Solymosi"
									class="h-28 w-28 rounded-full object-cover sm:h-40 sm:w-40"
									loading="lazy"
								/>
							</div>
						</div>

						<div class="min-w-0 text-center sm:text-left">
							<p class="text-lg font-semibold leading-tight">Attila Solymosi</p>
							<p class="mt-1 text-sm opacity-80">Backend / Full-stack Developer</p>

							<div class="mt-3 flex flex-wrap gap-2 justify-center sm:justify-start">
								<span class="glass rounded-full border px-2.5 py-1 text-xs opacity-80"
									>Open to work</span
								>
								<span class="glass rounded-full border px-2.5 py-1 text-xs opacity-80"
									>Debrecen / Remote</span
								>
							</div>
						</div>
					</div>
				</div>

				<div class="glass rounded-2xl border-2 p-4 sm:p-6">
					<p class="text-sm opacity-70">Featured stack</p>
					<p class="mt-2 text-sm sm:text-base font-medium">
						Java • Spring Boot • REST • Docker • C# • WPF • Svelte
					</p>
				</div>

				<div class="grid gap-3 sm:gap-4 sm:grid-cols-3">
					<div class="glass rounded-2xl border-2 p-4 sm:p-5">
						<p class="text-sm opacity-70">Projects</p>
						<p class="mt-1 text-xl font-semibold">5+</p>
					</div>
					<div class="glass rounded-2xl border-2 p-4 sm:p-5">
						<p class="text-sm opacity-70">Focus</p>
						<p class="mt-1 text-xl font-semibold">Backend</p>
					</div>
					<div class="glass rounded-2xl border-2 p-4 sm:p-5">
						<p class="text-sm opacity-70">Tools</p>
						<p class="mt-1 text-xl font-semibold">Docker & Git</p>
					</div>
				</div>
			</div>
		</div>

		<!-- ABOUT ROW -->
		<div class="mt-10 sm:mt-14 grid items-start gap-6 sm:gap-8 lg:grid-cols-2">
			<div class="glass rounded-2xl border-2 p-4 sm:p-6">
				<p class="text-sm font-medium opacity-70">About me</p>
				<h2 class="mt-2 text-2xl font-semibold tracking-tight">Who am I?</h2>

				<p class="mt-4 text-sm opacity-80 leading-relaxed">
					I’m Attila Solymosi, a software developer. I earned my BSc in Computer Science (Software
					Engineering) at the University of Debrecen in 2025. I primarily build backend services
					with Spring Boot and enjoy delivering clean, reliable APIs and maintainable architectures.
					<br /><br />
					I’m also comfortable in the C# .NET ecosystem (WPF). Beyond professional work, I’m passionate
					about Unity game development, which connects to my thesis work.
				</p>

				<ul class="mt-5 space-y-2">
					{#each bullets as b}
						<li class="flex gap-2 text-sm opacity-85">
							<span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full border brighter-border"></span>
							<span>{b}</span>
						</li>
					{/each}
				</ul>
			</div>

			<div class="grid gap-4">
				{#each quick as q (q.title)}
					<div class="glass rounded-2xl border-2 p-4 sm:p-6">
						<p class="text-sm font-medium">{q.title}</p>
						<p class="mt-2 text-sm opacity-80 leading-relaxed">{q.text}</p>
					</div>
				{/each}

				<div class="glass rounded-2xl border-2 p-4 sm:p-6">
					<p class="text-sm font-medium">Currently</p>
					<p class="mt-2 text-sm opacity-80 leading-relaxed">
						I’m open to backend or full-stack opportunities where I can build and improve reliable
						systems using Spring Boot and a modern stack.
					</p>
				</div>
			</div>
		</div>
	</Container>
</section>
