<script lang="ts">
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import { skills } from '$lib/data/profile';
</script>

<SectionTitle
	eyebrow="Toolkit"
	title="Skills"
	subtitle="The most commonly used technologies and tools."
/>

<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
	{#each skills as group (group.title)}
		<section class="glass rounded-2xl border-2 p-6">
			<h3 class="text-base font-semibold tracking-tight">{group.title}</h3>
			<div class="mt-4 flex flex-wrap gap-2">
				{#each group.items as it}
					<span class="glass rounded-full border px-2.5 py-1 text-xs opacity-80">{it}</span>
				{/each}
			</div>
		</section>
	{/each}
</div>

<!-- extra “nice” blokk -->
<div class="glass mt-8 rounded-2xl border-2 p-6">
	<p class="text-sm font-medium opacity-70">What I care about</p>
	<div class="mt-3 grid gap-3 sm:grid-cols-3">
		<div class="glass rounded-2xl border p-4">
			<p class="text-sm font-medium">Clean architecture</p>
			<p class="mt-1 text-sm opacity-80">Clear boundaries, easy maintenance and extension.</p>
		</div>
		<div class="glass rounded-2xl border p-4">
			<p class="text-sm font-medium">Reliability</p>
			<p class="mt-1 text-sm opacity-80">Stable error handling, validation, testability.</p>
		</div>
		<div class="glass rounded-2xl border p-4">
			<p class="text-sm font-medium">Developer experience</p>
			<p class="mt-1 text-sm opacity-80">
				Strong tooling, automation where it matters, consistent code style.
			</p>
		</div>
	</div>
</div>
