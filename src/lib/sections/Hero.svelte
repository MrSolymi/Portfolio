<script lang="ts">
	import Container from '$lib/components/Container.svelte';
</script>

<section class="pt-16 pb-10">
	<Container>
		<div class="grid items-center gap-10 lg:grid-cols-2">
			<div>
				<p class="text-sm font-medium opacity-70">Backend • Java • Spring Boot</p>
				<h1 class="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
					Modern backends, clean architecture, reliable APIs.
				</h1>
				<p class="mt-5 max-w-xl text-base opacity-80 sm:text-lg">
					Focused on REST APIs and well-structured code. Java + Spring Boot with pragmatic
					Svelte/Tailwind integration. I build measurable, maintainable services
					designed to scale.
				</p>

				<div class="mt-7 flex flex-wrap gap-3">
					<a href="#projects" class="rounded-xl border px-4 py-2 text-sm font-medium"
						>View Projects</a
					>
					<a
						href="#contact"
						class="rounded-xl border px-4 py-2 text-sm font-medium opacity-80 hover:opacity-100"
						>Get in touch</a
					>
				</div>

				<div class="mt-8 flex flex-wrap gap-2">
					<span class="rounded-full border px-3 py-1 text-xs opacity-80">Open to work</span>
					<span class="rounded-full border px-3 py-1 text-xs opacity-80">Debrecen / Remote</span>
					<span class="rounded-full border px-3 py-1 text-xs opacity-80">Spring • Java • C#</span>
				</div>
			</div>

			<div class="grid gap-4">
				<div class="rounded-2xl border p-6">
					<p class="text-sm opacity-70">Featured stack</p>
					<p class="mt-2 text-base font-medium">
						Java • Spring Boot • REST • Docker • C# • WPF • Svelte
					</p>
				</div>
				<div class="grid gap-4 sm:grid-cols-3">
					<div class="rounded-2xl border p-5">
						<p class="text-sm opacity-70">Projects</p>
						<p class="mt-1 text-xl font-semibold">5+</p>
					</div>
					<div class="rounded-2xl border p-5">
						<p class="text-sm opacity-70">Focus</p>
						<p class="mt-1 text-xl font-semibold">Backend</p>
					</div>
					<div class="rounded-2xl border p-5">
						<p class="text-sm opacity-70">Tools</p>
						<p class="mt-1 text-xl font-semibold">Docker & Git</p>
					</div>
				</div>
			</div>
		</div>
	</Container>
</section>
