<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { locale } from '$lib/i18n/locale';
	import { en } from '$lib/i18n/dictionaries/en';
	import { hu } from '$lib/i18n/dictionaries/hu';
	import { contact } from '$lib/data/profile';
	import {
		sectionIds,
		activeSectionId,
		scrollProgress,
		scrollToSection
	} from '$lib/actions/sectionObserver';
	import LanguageToggle from './LanguageToggle.svelte';
	import UserIcon from '@lucide/svelte/icons/user';
	import FolderGit2Icon from '@lucide/svelte/icons/folder-git-2';
	import GraduationCapIcon from '@lucide/svelte/icons/graduation-cap';
	import BriefcaseIcon from '@lucide/svelte/icons/briefcase';
	import SparklesIcon from '@lucide/svelte/icons/sparkles';
	import AwardIcon from '@lucide/svelte/icons/award';
	import MailIcon from '@lucide/svelte/icons/mail';
	import GithubIcon from '@lucide/svelte/icons/github';
	import LinkedinIcon from '@lucide/svelte/icons/linkedin';

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

	let buttonEls: HTMLButtonElement[] = [];
	let pillTop = 0;
	let pillHeight = 0;
	let pillReady = false;

	function updatePill() {
		const activeIndex = sectionIds.indexOf($activeSectionId as (typeof sectionIds)[number]);
		const el = buttonEls[activeIndex];
		if (el) {
			pillTop = el.offsetTop;
			pillHeight = el.offsetHeight;
			pillReady = true;
		}
	}

	$: if ($activeSectionId && buttonEls.length) {
		updatePill();
	}

	onMount(async () => {
		await tick();
		updatePill();
	});
</script>

<aside
	class="glass-soft fixed inset-y-0 left-0 z-40 hidden w-72 flex-col border-r border-white/5 lg:flex"
>
	<div class="flex flex-1 flex-col overflow-y-auto px-5 py-6">
		<!-- Identity -->
		<button
			type="button"
			class="flex cursor-pointer flex-col items-center gap-3 text-center"
			on:click={() => goToSection('about')}
		>
			<img
				src="/avatar_image/me.png"
				alt="Attila Solymosi"
				class="brighter-avatar-border h-16 w-16 rounded-full border object-cover"
			/>
			<div>
				<p class="text-sm font-semibold" style="font-family:'Space Grotesk',sans-serif;">
					Attila Solymosi
				</p>
				<p class="mt-0.5 text-xs opacity-60">{t.hero.identity.role}</p>
			</div>
			<span
				class="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs backdrop-blur"
			>
				<span class="dot-live"></span>{t.hero.identity.openToWork}
			</span>
		</button>

		<div class="mt-5 flex justify-center">
			<LanguageToggle />
		</div>

		<div
			class="my-6 h-px"
			style="background:linear-gradient(90deg,transparent,color-mix(in oklab,var(--primary) 35%,transparent),transparent);"
		></div>

		<!-- Nav -->
		<nav class="relative flex-1">
			<!-- vertical progress rail -->
			<div class="absolute top-0 bottom-0 left-0 w-0.5 rounded-full bg-white/5" aria-hidden="true">
				<div
					class="w-full rounded-full transition-all duration-150"
					style="height: {$scrollProgress}%; background: linear-gradient(180deg, hsl(255 85% 65%), hsl(188 90% 55%));"
				></div>
			</div>

			<div class="relative ml-4 flex flex-col gap-1">
				{#if pillReady}
					<span
						class="pointer-events-none absolute right-0 left-0 rounded-lg transition-all duration-250"
						style="top: {pillTop}px; height: {pillHeight}px; background: color-mix(in oklab, var(--primary) 14%, transparent); border: 1px solid color-mix(in oklab, var(--primary) 35%, transparent);"
						aria-hidden="true"
					></span>
				{/if}

				{#each items as item, i (item.id)}
					<button
						bind:this={buttonEls[i]}
						class={'relative z-10 flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-opacity ' +
							($activeSectionId === item.id ? 'font-medium opacity-100' : 'opacity-60 hover:opacity-90')}
						aria-current={$activeSectionId === item.id ? 'page' : undefined}
						on:click={() => goToSection(item.id)}
					>
						<svelte:component this={item.icon} class="h-4 w-4 shrink-0" />
						{item.label}
					</button>
				{/each}
			</div>
		</nav>

		<div
			class="my-6 h-px"
			style="background:linear-gradient(90deg,transparent,color-mix(in oklab,var(--primary) 35%,transparent),transparent);"
		></div>

		<!-- Footer -->
		<a
			href="/cv/Solymosi%20Attila%20CV%20Eng.pdf"
			target="_blank"
			rel="noopener noreferrer"
			class="btn-primary flex w-full cursor-pointer items-center justify-center rounded-xl border px-4 py-2.5 text-center text-sm font-medium"
		>
			{t.nav.viewCv}
		</a>

		<p class="mt-5 text-center text-xs font-medium uppercase tracking-widest opacity-40">
			{t.sidebar.getInTouch}
		</p>
		<div class="mt-3 flex justify-center gap-2">
			<a
				class="btn-glass flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border"
				href={contact.github}
				target="_blank"
				rel="noreferrer"
				aria-label={t.sidebar.socialGithub}
			>
				<GithubIcon class="h-4 w-4" />
			</a>
			<a
				class="btn-glass flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border"
				href={contact.linkedin}
				target="_blank"
				rel="noreferrer"
				aria-label={t.sidebar.socialLinkedin}
			>
				<LinkedinIcon class="h-4 w-4" />
			</a>
			<a
				class="btn-glass flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border"
				href={'mailto:' + contact.email}
				aria-label={t.sidebar.socialEmail}
			>
				<MailIcon class="h-4 w-4" />
			</a>
		</div>
	</div>
</aside>
