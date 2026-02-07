<script lang="ts">
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import { education } from '$lib/data/education';
</script>

<SectionTitle
	eyebrow="Education"
	title="Tanulmányok"
	subtitle="Egyetem és releváns képzések röviden, a fókuszpontokkal."
/>

<div class="relative">
	<div class="absolute top-0 bottom-0 left-3 hidden w-px border-l sm:block"></div>

	<div class="space-y-6">
		{#each education as e (e.id)}
			<article class="relative sm:pl-12">
				<div class="absolute top-6 left-0 hidden h-6 w-6 items-center justify-center sm:flex">
					<span class="h-3 w-3 rounded-full border"></span>
				</div>

				<div class="rounded-2xl border p-6">
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
									<span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full border"></span>
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
