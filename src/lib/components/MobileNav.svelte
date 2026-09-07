<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { locale } from '$lib/i18n/locale';
	import { en } from '$lib/i18n/dictionaries/en';
	import { hu } from '$lib/i18n/dictionaries/hu';
	import { sectionIds, activeSectionId, scrollToSection } from '$lib/actions/sectionObserver';
	import LanguageToggle from './LanguageToggle.svelte';
	import UserIcon from '@lucide/svelte/icons/user';
	import FolderGit2Icon from '@lucide/svelte/icons/folder-git-2';
	import GraduationCapIcon from '@lucide/svelte/icons/graduation-cap';
	import BriefcaseIcon from '@lucide/svelte/icons/briefcase';
	import SparklesIcon from '@lucide/svelte/icons/sparkles';
	import AwardIcon from '@lucide/svelte/icons/award';
	import DownloadIcon from '@lucide/svelte/icons/download';

	$: t = $locale === 'hu' ? hu : en;

	const iconMap = {
		about: UserIcon,
		projects: FolderGit2Icon,
		education: GraduationCapIcon,
		experience: BriefcaseIcon,
		skills: SparklesIcon,
		certifications: AwardIcon
	};

	$: items = sectionIds.map((id) => ({ id, label: t.nav[id], icon: iconMap[id] }));

	function goToSection(id: string) {
		if ($page.url.pathname === `/${$locale}`) {
			scrollToSection(id);
		} else {
			goto(`/${$locale}#${id}`);
		}
	}

</script>

<header
	class="glass-soft fixed inset-x-0 top-0 z-40 flex h-14 items-center justify-between border-b border-white/5 px-4 lg:hidden"
>
	<button
		type="button"
		class="cursor-pointer text-sm font-semibold"
		style="font-family:'Space Grotesk',sans-serif;"
		on:click={() => goToSection('about')}
	>
		Attila Solymosi
	</button>
	<div class="flex items-center gap-2">
		<LanguageToggle compact />
		<a
			href="/cv/Solymosi%20Attila%20CV%20Eng.pdf"
			target="_blank"
			rel="noopener noreferrer"
			class="btn-glass flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border"
			aria-label={t.nav.viewCv}
		>
			<DownloadIcon class="h-4 w-4" />
		</a>
	</div>
</header>

<nav
	class="glass-soft fixed inset-x-0 bottom-0 z-40 border-t border-white/5 lg:hidden"
	style="padding-bottom: env(safe-area-inset-bottom);"
>
	<div class="flex items-stretch justify-between overflow-x-auto px-1 py-1">
		{#each items as item (item.id)}
			<button
				type="button"
				class={'flex min-w-11 flex-1 cursor-pointer flex-col items-center gap-0.5 rounded-lg px-1 py-2 transition-opacity ' +
					($activeSectionId === item.id ? 'opacity-100' : 'opacity-55 hover:opacity-80')}
				style={$activeSectionId === item.id
					? 'color: color-mix(in oklab, var(--accent-cyan) 90%, white);'
					: ''}
				aria-current={$activeSectionId === item.id ? 'page' : undefined}
				aria-label={item.label}
				on:click={() => goToSection(item.id)}
			>
				<svelte:component this={item.icon} class="h-5 w-5" />
			</button>
		{/each}
	</div>
</nav>
