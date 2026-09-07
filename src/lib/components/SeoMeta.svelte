<script lang="ts">
	const siteUrl = 'https://portfolio.mrsolymi.me';

	export let title: string;
	export let description: string;
	export let path: string;
	export let image: string = '/avatar_image/me.png';

	$: url = siteUrl + path;
	$: absoluteImage = siteUrl + image;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={absoluteImage} />
	<meta property="og:url" content={url} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={absoluteImage} />
</svelte:head>
