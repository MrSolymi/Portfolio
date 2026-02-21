<script lang="ts">
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import { experience } from '$lib/data/experience';
</script>

<SectionTitle
	eyebrow="Career"
	title="Experience"
	subtitle="Short timeline of the most important projects / roles, with focus on results."
/>

<div class="relative">
	<!-- FOLYTONOS VONAL -->
	<div class="brighter-border absolute top-0 bottom-0 left-3.25 hidden w-px border sm:block"></div>

	<div class="space-y-6">
		{#each experience as item (item.id)}
			<article class="grid items-start gap-6 sm:grid-cols-[28px_1fr]">
				<!-- Bal oszlop: csak a pont -->
				<div class="relative hidden sm:block">
					<span
						class="brighter-border absolute top-8 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border-2"
					></span>
				</div>

				<!-- Jobb oszlop: kártya -->
				<div class="glass border-2 rounded-2xl p-6">
					<header class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
						<div>
							<h3 class="text-lg font-semibold tracking-tight">{item.title}</h3>
							<p class="mt-1 text-sm opacity-80">
								<span class="font-medium opacity-90">{item.org}</span>
								{#if item.location}
									<span class="opacity-60"> • {item.location}</span>
								{/if}
							</p>
							<p class="mt-3 max-w-2xl text-sm opacity-80">{item.summary}</p>
						</div>

						<div class="text-sm opacity-70 sm:text-right">
							<p class="font-medium">{item.period}</p>
							{#if item.links?.length}
								<div class="mt-2 flex gap-3 sm:justify-end">
									{#each item.links as l}
										<a
											class="underline opacity-80 hover:opacity-100"
											href={l.href}
											target="_blank"
											rel="noreferrer"
										>
											{l.label}
										</a>
									{/each}
								</div>
							{/if}
						</div>
					</header>

					<div class="mt-5 grid gap-6 lg:grid-cols-3">
						<section class="lg:col-span-2">
							<p class="text-sm font-medium opacity-70">Key achievements</p>
							<ul class="mt-3 space-y-2">
								{#each item.achievements as a}
									<li class="flex gap-2 text-sm opacity-85">
										<span class="brighter-border mt-2 h-1.5 w-1.5 shrink-0 rounded-full border"></span>
										<span>{a}</span>
									</li>
								{/each}
							</ul>
						</section>

						<section>
							<p class="text-sm font-medium opacity-70">Stack</p>
							<div class="mt-3 flex flex-wrap gap-2">
								{#each item.stack as s}
									<span class="glass rounded-full border px-2.5 py-1 text-xs opacity-80">{s}</span>
								{/each}
							</div>
						</section>
					</div>
				</div>
			</article>
		{/each}
	</div>
</div>
