<script lang="ts">
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import { certifications } from '$lib/data/certifications';
	import { reveal } from '$lib/actions/reveal';
	import { locale } from '$lib/i18n/locale';
	import { en } from '$lib/i18n/dictionaries/en';
	import { hu } from '$lib/i18n/dictionaries/hu';

	$: t = $locale === 'hu' ? hu : en;
</script>

<SectionTitle
	eyebrow={t.certifications.eyebrow}
	title={t.certifications.title}
	subtitle={t.certifications.subtitle}
/>

<div class="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
	{#each certifications as c, i (c.id)}
		<article class="glass glass-hover rounded-2xl border-2 p-4 sm:p-6" use:reveal={{ delay: i * 80 }}>
			<div class="flex items-start justify-between gap-4">
				<div class="min-w-0">
					<h3 class="text-base leading-snug font-semibold tracking-tight wrap-break-word">
						{c.name}
					</h3>
					<p class="mt-1 text-sm wrap-break-word opacity-80">{c.issuer}</p>
				</div>
				<p class="text-xs font-medium whitespace-nowrap opacity-70 sm:text-sm">{c.date}</p>
			</div>

			{#if c.tags?.length}
				<div class="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
					{#each c.tags as tag (tag)}
						<span class="glass pill-hover rounded-full border px-2.5 py-1 text-xs opacity-80">{tag}</span>
					{/each}
				</div>
			{/if}

			{#if c.credentialId}
				<p class="mt-4 text-sm break-all opacity-80">
					<span class="opacity-60">{t.certifications.credentialIdLabel}</span>
					{c.credentialId}
				</p>
			{/if}

			{#if c.url}
				<div class="mt-5">
					<a
						class="btn-glass inline-flex cursor-pointer rounded-lg border px-3 py-2 text-sm"
						href={c.url}
						target="_blank"
						rel="noreferrer"
					>
						{t.certifications.viewCredential}
					</a>
				</div>
			{/if}
		</article>
	{/each}
</div>
