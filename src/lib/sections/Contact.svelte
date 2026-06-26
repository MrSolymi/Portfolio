<script lang="ts">
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import { contact } from '$lib/data/profile';
	import { reveal } from '$lib/actions/reveal';
</script>

<SectionTitle
	eyebrow="Contact"
	title="Contact"
	subtitle="Feel free to reach out - for work, projects, or any questions."
/>

<!-- Gradient separator -->
<div
	class="mb-10 h-px"
	style="background: linear-gradient(90deg, transparent, color-mix(in oklab, var(--primary) 45%, transparent) 50%, transparent);"
></div>

<div use:reveal>
	<!-- Centered big CTA -->
	<div class="text-center">
		<h2
			class="gradient-text text-3xl font-bold sm:text-5xl"
			style="font-family: 'Space Grotesk', sans-serif;"
		>
			Let's build something.
		</h2>
		<p class="mx-auto mt-4 max-w-md text-sm leading-relaxed opacity-60">
			The fastest way to reach me is via email. I also respond on LinkedIn. Looking forward to connecting!
		</p>

		<div class="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
			<a
				class="btn-primary w-full cursor-pointer rounded-xl border px-6 py-3 text-center text-sm font-medium sm:w-auto"
				href={'mailto:' + contact.email}
			>
				Email me
			</a>
			<a
				class="btn-glass w-full cursor-pointer rounded-xl border px-6 py-3 text-center text-sm font-medium sm:w-auto"
				href={contact.linkedin}
				target="_blank"
				rel="noreferrer"
			>
				LinkedIn
			</a>
		</div>
	</div>

	<!-- Contact info grid -->
	<div class="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
		<div class="card-accent glass-hover flex flex-col gap-1 rounded-xl p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
			<span class="text-xs uppercase tracking-wider opacity-50">Location</span>
			<span class="text-sm font-medium">{contact.location}</span>
		</div>

		<a
			class="card-accent glass-hover flex flex-col gap-1 rounded-xl p-4 transition-opacity hover:opacity-80 sm:flex-row sm:items-center sm:justify-between sm:gap-3"
			href={'mailto:' + contact.email}
		>
			<span class="shrink-0 text-xs uppercase tracking-wider opacity-50">Email</span>
			<span class="min-w-0 break-all text-sm font-medium">{contact.email}</span>
		</a>

		<a
			class="card-accent glass-hover flex flex-col gap-1 rounded-xl p-4 transition-opacity hover:opacity-80 sm:flex-row sm:items-center sm:justify-between sm:gap-3"
			href={contact.github}
			target="_blank"
			rel="noreferrer"
		>
			<span class="text-xs uppercase tracking-wider opacity-50">GitHub</span>
			<span class="text-sm font-medium" style="color: var(--accent-cyan);">MrSolymi ↗</span>
		</a>

		<a
			class="card-accent glass-hover flex flex-col gap-1 rounded-xl p-4 transition-opacity hover:opacity-80 sm:flex-row sm:items-center sm:justify-between sm:gap-3"
			href={contact.linkedin}
			target="_blank"
			rel="noreferrer"
		>
			<span class="text-xs uppercase tracking-wider opacity-50">LinkedIn</span>
			<span class="text-sm font-medium" style="color: var(--accent-cyan);">mrsolymi ↗</span>
		</a>
	</div>

	<!-- Availability -->
	<div class="card-accent glass-hover mt-5 rounded-2xl p-4 sm:p-5">
		<div class="flex items-center gap-2">
			<span class="dot-live"></span>
			<p class="text-sm font-semibold" style="font-family: 'Space Grotesk', sans-serif;">Availability</p>
		</div>
		<p class="mt-2 text-sm leading-relaxed opacity-65">
			Open to backend / full-stack roles. Remote or hybrid could work too.
		</p>
	</div>
</div>
