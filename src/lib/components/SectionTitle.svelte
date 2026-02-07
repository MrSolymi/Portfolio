<script lang="ts">
	export let eyebrow: string = '';
	export let title: string = '';
	export let subtitle: string = '';
</script>

<div class="mb-8">
	{#if eyebrow}<p class="text-sm font-medium opacity-70">{eyebrow}</p>{/if}
	<h2 class="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
	{#if subtitle}<p class="mt-3 max-w-2xl text-base opacity-80">{subtitle}</p>{/if}
</div>
