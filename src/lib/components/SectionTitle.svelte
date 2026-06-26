<script lang="ts">
	export let eyebrow: string = '';
	export let title: string = '';
	export let subtitle: string = '';
</script>

<div class="mb-8 sm:mb-10">
	{#if eyebrow}
		<span
			class="inline-block rounded-full border px-2.5 py-0.5 text-xs tracking-widest uppercase"
			style="border-color: color-mix(in oklab, var(--accent-cyan) 50%, transparent); color: color-mix(in oklab, var(--accent-cyan) 80%, white);"
		>
			{eyebrow}
		</span>
	{/if}
	<h2 class="mt-3 flex items-center text-3xl font-semibold tracking-tight leading-snug sm:text-4xl">
		<span
			class="mr-3 inline-block h-0.5 w-8 shrink-0 translate-y-px"
			style="background: linear-gradient(90deg, color-mix(in oklab, var(--primary) 80%, transparent), transparent);"
			aria-hidden="true"
		></span>
		{title}
	</h2>
	{#if subtitle}
		<p class="mt-3 max-w-2xl text-sm sm:text-base opacity-70 leading-relaxed">{subtitle}</p>
	{/if}
</div>
