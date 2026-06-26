<script lang="ts">
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import { experience } from '$lib/data/experience';
	import { reveal } from '$lib/actions/reveal';
</script>

<SectionTitle
	eyebrow="Career"
	title="Experience"
	subtitle="Short timeline of the most important projects / roles, with focus on results."
/>

<div class="relative">
	<!-- Gradient vertical timeline line -->
	<div
		class="absolute top-0 bottom-0 left-3.25 hidden sm:block"
		style="width: 1px; background: linear-gradient(to bottom, transparent, color-mix(in oklab, var(--primary) 45%, transparent) 15%, color-mix(in oklab, var(--primary) 45%, transparent) 85%, transparent);"
	></div>

	<div class="space-y-4 sm:space-y-6">
		{#each experience as item, i (item.id)}
			<article
				class="grid items-start gap-6 sm:grid-cols-[28px_1fr]"
				use:reveal={{ delay: i * 120 }}
			>
				<!-- Glowing cyan dot -->
				<div class="relative hidden sm:block">
					<span
						class="absolute top-8 left-1/2 h-3.5 w-3.5 -translate-x-1/2 rounded-full"
						style="background: var(--accent-cyan); box-shadow: 0 0 0 3px hsl(240 12% 7%), 0 0 14px var(--accent-cyan);"
					></span>
				</div>

				<div class="card-accent glass-hover rounded-2xl p-4 sm:p-6">
					<header class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
						<div>
							<h3 class="text-lg leading-snug font-semibold tracking-tight">{item.title}</h3>
							<p class="mt-1 text-sm opacity-70">
								<span class="font-medium opacity-90">{item.org}</span>
								{#if item.location}
									<span class="opacity-50"> • {item.location}</span>
								{/if}
							</p>
							<p class="mt-3 max-w-2xl text-sm leading-relaxed opacity-65">{item.summary}</p>
						</div>

						<div class="shrink-0 text-xs sm:text-right sm:text-sm">
							<p class="font-medium" style="color: var(--accent-cyan);">{item.period}</p>
							{#if item.links?.length}
								<div class="mt-2 flex gap-3 sm:justify-end">
									{#each item.links as l}
										<a
											class="underline opacity-70 hover:opacity-100"
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

					<div class="mt-4 grid gap-5 sm:mt-5 sm:gap-6 lg:grid-cols-3">
						<section class="lg:col-span-2">
							<p class="text-xs font-medium opacity-50 uppercase tracking-wider">Key achievements</p>
							<ul class="mt-2 space-y-1.5 sm:mt-3 sm:space-y-2">
								{#each item.achievements as a}
									<li class="flex gap-2 text-sm opacity-75">
										<span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style="background: color-mix(in oklab, var(--primary) 70%, transparent);"></span>
										<span>{a}</span>
									</li>
								{/each}
							</ul>
						</section>

						<section>
							<p class="text-xs font-medium opacity-50 uppercase tracking-wider">Stack</p>
							<div class="mt-3 flex flex-wrap gap-1.5 sm:gap-2">
								{#each item.stack as s}
									<span class="glass pill-hover rounded-full border px-2.5 py-1 text-xs opacity-75">{s}</span>
								{/each}
							</div>
						</section>
					</div>
				</div>
			</article>
		{/each}
	</div>
</div>
