<script lang="ts">
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import { education } from '$lib/data/education';
</script>

<SectionTitle
	eyebrow="Education"
	title="Education"
	subtitle="University and other relevant educational experiences."
/>

<div class="relative">
	<!-- FOLYTONOS VONAL -->
	<div class="brighter-border absolute top-0 bottom-0 left-3.25 hidden w-px border sm:block"></div>

	<div class="space-y-6">
		{#each education as e (e.id)}
			<article class="grid items-start gap-6 sm:grid-cols-[28px_1fr]">
				<!-- Bal oszlop: csak a pont -->
				<div class="relative hidden sm:block">
					<span
						class="brighter-border absolute top-8 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border-2"
					></span>
				</div>

				<!-- Jobb oszlop: kártya -->
				<div class="glass rounded-2xl border-2 p-6">
					<header class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
						<div>
							<h3 class="text-lg font-semibold tracking-tight">{e.degree}</h3>
							<p class="mt-1 text-sm opacity-80">
								<span class="font-medium opacity-90">{e.school}</span>
								{#if e.location}<span class="opacity-60"> • {e.location}</span>{/if}
							</p>
						</div>

						<p class="text-sm font-medium opacity-70 sm:text-right">{e.period}</p>
					</header>

					{#if e.details?.length}
						<ul class="mt-5 space-y-2">
							{#each e.details as d}
								<li class="flex gap-2 text-sm opacity-85">
									<span class="brighter-border mt-2 h-1.5 w-1.5 shrink-0 rounded-full border"></span>
									<span>{d}</span>
								</li>
							{/each}
						</ul>
					{/if}
				</div>
			</article>
		{/each}
	</div>
</div>
