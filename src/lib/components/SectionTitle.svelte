<script lang="ts">
	export let eyebrow: string = '';
	export let title: string = '';
	export let subtitle: string = '';
</script>

<div class="mb-6 sm:mb-8">
	{#if eyebrow}<p class="text-xs sm:text-sm font-medium opacity-70">{eyebrow}</p>{/if}
	<h2 class="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight leading-snug">{title}</h2>
	{#if subtitle}<p class="mt-3 max-w-2xl text-sm sm:text-base opacity-80 leading-relaxed">{subtitle}</p>{/if}
</div>
