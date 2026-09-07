<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import SeoMeta from '$lib/components/SeoMeta.svelte';
	import { en } from '$lib/i18n/dictionaries/en';

	onMount(() => {
		goto('/en', { replaceState: true });
	});
</script>

<SeoMeta
	title={`Attila Solymosi — ${en.hero.identity.role}`}
	description={en.hero.description}
	path="/en"
/>

<svelte:head>
	<meta http-equiv="refresh" content="0; url=/en" />
</svelte:head>
