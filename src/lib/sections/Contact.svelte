<script lang="ts">
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import { contact } from '$lib/data/profile';
</script>

<SectionTitle
	eyebrow="Contact"
	title="Contact"
	subtitle="Feel free to reach out - for work, projects, or any questions."
/>

<div class="glass rounded-2xl border-2 p-4 sm:p-6">
	<div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
		<p class="max-w-xl text-sm leading-relaxed opacity-80">
			The fastest way to reach me is via email. I also respond on LinkedIn. If you include a short
			project summary + timeline, I can reply faster.
		</p>

		<div class="flex flex-col gap-2 sm:flex-row sm:gap-3">
			<a
				class="btn-primary cursor-pointer rounded-xl border px-4 py-2.5 text-center text-sm font-medium"
				href={'mailto:' + contact.email}
			>
				Email me
			</a>
			<a
				class="btn-glass cursor-pointer rounded-xl border px-4 py-2.5 text-center text-sm font-medium"
				href={contact.linkedin}
				target="_blank"
				rel="noreferrer"
			>
				LinkedIn
			</a>
		</div>
	</div>

	<div class="mt-6 grid gap-3 sm:grid-cols-2">
		<div class="glass flex items-center justify-between gap-3 rounded-xl border p-4">
			<span class="text-sm opacity-70">Location</span>
			<span class="text-sm font-medium">{contact.location}</span>
		</div>

		<a
			class="btn-glass flex items-center justify-between gap-3 rounded-xl border p-4"
			href={'mailto:' + contact.email}
		>
			<span class="text-sm opacity-70">Email</span>
			<span class="text-sm font-medium break-all">{contact.email}</span>
		</a>

		<a
			class="btn-glass flex items-center justify-between gap-3 rounded-xl border p-4"
			href={contact.github}
			target="_blank"
			rel="noreferrer"
		>
			<span class="text-sm opacity-70">GitHub</span>
			<span class="text-sm font-medium">Open</span>
		</a>

		<a
			class="btn-glass flex items-center justify-between gap-3 rounded-xl border p-4"
			href={contact.linkedin}
			target="_blank"
			rel="noreferrer"
		>
			<span class="text-sm opacity-70">LinkedIn</span>
			<span class="text-sm font-medium">Open</span>
		</a>
	</div>

	<div class="glass mt-6 rounded-2xl border p-4 sm:p-5">
		<p class="text-sm font-medium">Availability</p>
		<p class="mt-2 text-sm leading-relaxed opacity-80">
			Open to backend / full-stack roles. Remote or hybrid could work too.
		</p>
	</div>
</div>
