<script lang="ts">
	import { tick } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import MobileNav from '$lib/components/MobileNav.svelte';
	import { refreshSectionTracker } from '$lib/actions/sectionObserver';

	afterNavigate(async () => {
		await tick();
		refreshSectionTracker();
	});
</script>

<Sidebar />
<MobileNav />

<main class="min-h-screen pt-14 pb-20 lg:pt-0 lg:pb-0 lg:pl-72">
	<slot />
</main>
