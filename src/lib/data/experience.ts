import type { LocalizedText } from '$lib/i18n/types';

export type ExperienceItem = {
	id: string;
	title: LocalizedText;
	org: string;
	period: string;
	location?: string;
	summary: LocalizedText;
	achievements: LocalizedText[];
	stack: string[];
	links?: { label: string; href: string }[];
};

export const experience: ExperienceItem[] = [
	{
		id: 'masala-web',
		title: { en: 'Web Developer (SvelteKit)', hu: 'Webfejlesztő (SvelteKit)' },
		org: 'Masala Garden',
		period: '2026',
		summary: {
			en: 'A bilingual restaurant website built on a contract basis for Masala Garden, including a custom-designed graphical menu.',
			hu: 'Egy kétnyelvű étterem weboldal, ami vállalkozói megbízás keretében készült a Masala Garden számára, egyedi grafikus étlap tervezésével együtt.'
		},
		achievements: [
			{
				en: 'Built a bilingual (English/Hungarian) SvelteKit + Tailwind website',
				hu: 'Kétnyelvű (angol/magyar) SvelteKit + Tailwind weboldalt építettem'
			},
			{
				en: 'Set up a GitHub → Cloudflare Workers deploy pipeline that publishes on every push',
				hu: 'GitHub → Cloudflare Workers deploy folyamatot állítottam be, ami minden push-nál élesít'
			},
			{
				en: "Designed the restaurant's graphical menu in Adobe Photoshop",
				hu: 'Az étterem grafikus étlapját Adobe Photoshopban terveztem meg'
			}
		],
		stack: ['Svelte', 'Tailwind CSS', 'TypeScript', 'Cloudflare Workers', 'Adobe Photoshop'],
		links: [
			{ label: 'GitHub', href: 'https://github.com/MrSolymi/MasalaWeb' },
			{ label: 'Live', href: 'https://masalagarden.hu' }
		]
	},
	{
		id: 'wpf-contact',
		title: { en: 'Desktop Developer (WPF)', hu: 'Asztali fejlesztő (WPF)' },
		org: 'ContactManager',
		period: '2025',
		summary: {
			en: 'A WPF desktop application built on a contract basis to extract contacts from emails and manage them in a database.',
			hu: 'Egy vállalkozói megbízás keretében készült WPF asztali alkalmazás, ami emailekből nyer ki kapcsolatokat, és adatbázisban kezeli azokat.'
		},
		achievements: [
			{
				en: 'MVVM architecture with reusable components',
				hu: 'MVVM architektúra újrafelhasználható komponensekkel'
			},
			{
				en: 'SQLite-based storage with search and filtering via DataGrid',
				hu: 'SQLite-alapú tárolás kereséssel és szűréssel DataGrid segítségével'
			},
			{
				en: 'Import pipeline: parsing → normalization → deduplication',
				hu: 'Importálási folyamat: feldolgozás → normalizálás → duplikátumszűrés'
			}
		],
		stack: ['C#', 'WPF', 'MVVM', 'SQLite', 'OAuth 2.0', 'Google Cloud Console']
	},
	{
		id: 'my-projects',
		title: { en: 'Full-stack Developer', hu: 'Full-stack fejlesztő' },
		org: 'Personal Projects',
		period: '2023 - Present',
		location: 'Hungary / Remote',
		summary: {
			en: 'Backend-focused projects with Spring Boot, Svelte frontend integration, and Dockerized environments.',
			hu: 'Backend-fókuszú projektek Spring Boot-tal, Svelte frontend integrációval és dockerizált környezetekkel.'
		},
		achievements: [
			{
				en: 'Designed and implemented REST APIs with validation and consistent error handling',
				hu: 'REST API-k tervezése és megvalósítása validációval és egységes hibakezeléssel'
			},
			{
				en: 'Built session-based authentication and end-to-end auth flows',
				hu: 'Session-alapú autentikáció és teljes bejelentkezési folyamatok kiépítése'
			},
			{
				en: 'Set up Docker Compose environments for local and production-like workflows',
				hu: 'Docker Compose környezetek beállítása helyi és éleshez hasonló munkafolyamatokhoz'
			}
		],
		stack: ['Java', 'Spring Boot', 'Svelte', 'Docker', 'SQL'],
		links: [{ label: 'GitHub', href: 'https://github.com/MrSolymi' }]
	},
	{
		id: 'ik-hok-comm',
		title: { en: 'Communications Officer', hu: 'Kommunikációs felelős' },
		org: 'Faculty of Informatics Student Union',
		period: '2022 - 2025',
		location: 'University of Debrecen',
		summary: {
			en: "Handled student-facing communication and social media for the faculty's student union, including event promotion and visual branding.",
			hu: 'A kar hallgatói önkormányzatának hallgatók felé irányuló kommunikációját és közösségi médiáját vittem, beleértve az eseménypromóciót és a vizuális arculatot.'
		},
		achievements: [
			{
				en: 'Acted as a main point of contact between the student union and students, sharing updates and answering questions',
				hu: 'Fő kapcsolattartóként közvetítettem a hallgatói önkormányzat és a hallgatók között, híreket osztottam meg és kérdésekre válaszoltam'
			},
			{
				en: 'Planned and published social media posts for events and important announcements',
				hu: 'Közösségimédia-bejegyzéseket terveztem és publikáltam eseményekhez és fontos közleményekhez'
			},
			{
				en: 'Created visual assets and event branding (post templates, banners, visuals)',
				hu: 'Vizuális anyagokat és eseményarculatot készítettem (posztsablonok, bannerek, vizuális elemek)'
			},
			{
				en: 'Learned and used Adobe Photoshop and Illustrator to produce consistent designs',
				hu: 'Megtanultam és használtam az Adobe Photoshopot és Illustratort az egységes megjelenés érdekében'
			}
		],
		stack: [
			'Communication',
			'Social Media',
			'Branding',
			'Adobe Photoshop',
			'Adobe Illustrator',
			'Teamwork'
		]
	}
];
