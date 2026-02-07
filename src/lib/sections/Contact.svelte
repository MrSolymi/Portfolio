<script lang="ts">
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import { contact } from '$lib/data/profile';

	let name = '';
	let email = '';
	let message = '';
	let sent = false;

	function submit() {
		// UI demo: később ide jöhet endpoint hívás
		if (!name || !email || !message) return;
		sent = true;
		setTimeout(() => (sent = false), 2500);
		name = '';
		email = '';
		message = '';
	}
</script>

<SectionTitle
	eyebrow="Contact"
	title="Contact"
	subtitle="Feel free to reach out — for work, projects, or any questions."
/>

<div class="grid gap-8 lg:grid-cols-2">
	<div class="rounded-2xl border p-6">
		<p class="text-sm opacity-80">
			The fastest way to reach me is via email. I also respond on LinkedIn.
		</p>

		<div class="mt-6 space-y-4 text-sm">
			<div class="flex items-center justify-between gap-3 rounded-xl border p-4">
				<span class="opacity-70">Location</span>
				<span class="font-medium">{contact.location}</span>
			</div>

			<a
				class="flex items-center justify-between gap-3 rounded-xl border p-4 opacity-90 hover:opacity-100"
				href={'mailto:' + contact.email}
			>
				<span class="opacity-70">Email</span>
				<span class="font-medium">{contact.email}</span>
			</a>

			<a
				class="flex items-center justify-between gap-3 rounded-xl border p-4 opacity-90 hover:opacity-100"
				href={contact.github}
				target="_blank"
				rel="noreferrer"
			>
				<span class="opacity-70">GitHub</span>
				<span class="font-medium">Open</span>
			</a>

			<a
				class="flex items-center justify-between gap-3 rounded-xl border p-4 opacity-90 hover:opacity-100"
				href={contact.linkedin}
				target="_blank"
				rel="noreferrer"
			>
				<span class="opacity-70">LinkedIn</span>
				<span class="font-medium">Open</span>
			</a>
		</div>

		<div class="mt-6 rounded-2xl border p-5">
			<p class="text-sm font-medium">Availability</p>
			<p class="mt-2 text-sm opacity-80">
				Open to backend / full-stack roles. Remote vagy hibrid is oké.
			</p>
		</div>
	</div>

	<form class="rounded-2xl border p-6" on:submit|preventDefault={submit}>
		<div class="grid gap-4">
			<label class="grid gap-2">
				<span class="text-sm opacity-80">Name</span>
				<input
					class="rounded-xl border bg-transparent px-4 py-2.5"
					bind:value={name}
					placeholder="Your name"
				/>
			</label>

			<label class="grid gap-2">
				<span class="text-sm opacity-80">Email</span>
				<input
					class="rounded-xl border bg-transparent px-4 py-2.5"
					bind:value={email}
					placeholder="you@email.com"
				/>
			</label>

			<label class="grid gap-2">
				<span class="text-sm opacity-80">Message</span>
				<textarea
					class="min-h-35 rounded-xl border bg-transparent px-4 py-2.5"
					bind:value={message}
					placeholder="How can I help?"
				></textarea>
			</label>

			<button class="rounded-xl border px-4 py-2.5 text-sm font-medium" type="submit">
				Send message
			</button>

			{#if sent}
				<p class="text-sm opacity-80">
					✅ Message “sent” (UI demo). Később rákötjük backend/emailre.
				</p>
			{/if}
		</div>
	</form>
</div>
