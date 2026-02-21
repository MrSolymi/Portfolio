<script lang="ts">
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import { certifications } from '$lib/data/certifications';
</script>

<SectionTitle
	eyebrow="Credentials"
	title="Certifications"
	subtitle="Relevant certifications and verifiable credentials."
/>

<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
	{#each certifications as c (c.id)}
		<article class="glass rounded-2xl border-2 p-6">
			<div class="flex items-start justify-between gap-4">
				<div>
					<h3 class="text-base font-semibold tracking-tight">{c.name}</h3>
					<p class="mt-1 text-sm opacity-80">{c.issuer}</p>
				</div>
				<p class="text-sm font-medium whitespace-nowrap opacity-70">{c.date}</p>
			</div>

			{#if c.tags?.length}
				<div class="mt-4 flex flex-wrap gap-2">
					{#each c.tags as t}
						<span class="glass rounded-full border px-2.5 py-1 text-xs opacity-80">{t}</span>
					{/each}
				</div>
			{/if}

			{#if c.credentialId}
				<p class="mt-4 text-sm opacity-80">
					<span class="opacity-60">Credential ID:</span>
					{c.credentialId}
				</p>
			{/if}

			{#if c.url}
				<div class="mt-5">
					<a
						class="text-sm underline opacity-80 hover:opacity-100"
						href={c.url}
						target="_blank"
						rel="noreferrer"
					>
						View credential
					</a>
				</div>
			{/if}
		</article>
	{/each}
</div>
