<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';

	let cursorGlow: HTMLDivElement;

	onMount(() => {
		const onMove = (e: MouseEvent) => {
			cursorGlow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
		};
		window.addEventListener('mousemove', onMove, { passive: true });
		return () => window.removeEventListener('mousemove', onMove);
	});
</script>

<div id="cursor-glow" bind:this={cursorGlow} aria-hidden="true"></div>

<div id="bg" aria-hidden="true"></div>

<div id="blobs" aria-hidden="true">
	<div id="blob-1"></div>
	<div id="blob-2"></div>
	<div id="blob-3"></div>
</div>

<slot />

<style>
	#blobs {
		position: fixed;
		inset: 0;
		z-index: -1;
		overflow: hidden;
		pointer-events: none;
	}

	#blobs > div {
		position: absolute;
		border-radius: 50%;
		filter: blur(80px);
		opacity: 0.13;
	}

	#blob-1 {
		width: 600px;
		height: 600px;
		top: -10%;
		left: -5%;
		background: radial-gradient(circle, hsl(255 85% 65%), transparent 70%);
	}

	#blob-2 {
		width: 500px;
		height: 500px;
		top: 40%;
		right: -10%;
		background: radial-gradient(circle, hsl(188 90% 55%), transparent 70%);
	}

	#blob-3 {
		width: 450px;
		height: 450px;
		bottom: 5%;
		left: 30%;
		background: radial-gradient(circle, hsl(263 70% 55%), transparent 70%);
	}
</style>
