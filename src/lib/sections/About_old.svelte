<script lang="ts">
	import SectionTitle from '$lib/components/SectionTitle.svelte';

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
		'I prefer clear architecture and consistent code style'
	];
</script>

<SectionTitle
	eyebrow="About me"
	title="Who am I?"
	subtitle="A short summary of what I’m good at and how I work."
/>

<div class="grid items-start gap-8 lg:grid-cols-2">
	<!-- Left card -->
	<div class="glass rounded-2xl border-2 p-6 shadow-xl">
		<p class="text-sm opacity-80">
			I’m Attila Solymosi, a software developer. I earned my BSc in Computer Science (Software
			Engineering) at the University of Debrecen in 2025.<br /><br />
			I focus primarily on building backend services with Spring Boot, and I enjoy delivering clean, reliable
			APIs and maintainable architectures. On the frontend, I work with Svelte and TypeScript to create
			fast, modern user experiences.<br /><br />
			I’m also comfortable in the C# .NET ecosystem. Previously, I delivered a WPF desktop application
			on a contract basis. Beyond professional work, I’m passionate about Unity game development, which
			also connects to my thesis work.
		</p>

		<ul class="mt-5 space-y-2">
			{#each bullets as b}
				<li class="flex gap-2 text-sm opacity-85">
					<span class="brighter-border mt-2 h-1.5 w-1.5 shrink-0 rounded-full border"></span>
					<span>{b}</span>
				</li>
			{/each}
		</ul>

		<div class="mt-6 flex flex-wrap gap-2">
			<span class="glass rounded-full border px-2.5 py-1 text-xs opacity-80">Open to work</span>
			<span class="glass rounded-full border px-2.5 py-1 text-xs opacity-80">Backend / Full-stack</span>
			<span class="glass rounded-full border px-2.5 py-1 text-xs opacity-80">Debrecen / Remote</span>
		</div>
	</div>

	<!-- Right cards -->
	<div class="grid gap-4">
		{#each quick as q (q.title)}
			<div class="glass rounded-2xl border-2 p-6 shadow-xl">
				<p class="text-sm font-medium">{q.title}</p>
				<p class="mt-2 text-sm opacity-80">{q.text}</p>
			</div>
		{/each}

		<div class="glass rounded-2xl border-2 p-6 shadow-xl">
			<p class="text-sm font-medium">Currently</p>
			<p class="mt-2 text-sm opacity-80">
				I’m open to backend or full-stack opportunities where I can build and improve reliable
				systems using Spring Boot and a modern stack.
			</p>
		</div>
	</div>
</div>
