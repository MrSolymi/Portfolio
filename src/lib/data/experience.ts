export type ExperienceItem = {
	id: string;
	title: string; // pl. "Backend Developer (Spring Boot)"
	org: string; // cég / projekt / egyetem
	period: string; // "2024 — 2026" vagy "Jun 2025 — Present"
	location?: string; // optional
	summary: string; // 1 mondat
	achievements: string[]; // 3-5 bullet
	stack: string[]; // badge-ek
	links?: { label: string; href: string }[];
};

export const experience: ExperienceItem[] = [
	{
        id: 'wpf-contact',
		title: 'Desktop Developer (WPF)',
		org: 'ContactManager',
		period: '2025',
		summary: 'A WPF desktop application built on a contract basis to extract contacts from emails and manage them in a database.',
		achievements: [
			'MVVM architecture with reusable components',
			'SQLite-based storage with search and filtering via DataGrid',
			'Import pipeline: parsing → normalization → deduplication'
		],
		stack: ['C#', 'WPF', 'MVVM', 'SQLite', 'OAuth 2.0', 'Google Cloud Console']
	},
	{
		id: 'portfolio-projects',
		title: 'Full-stack Developer',
		org: 'Personal Projects',
		period: '2024 — Present',
		location: 'Hungary / Remote',
		summary: 'Backend-focused projects with Spring Boot, Svelte frontend integration, and Dockerized environments.',
		achievements: [
			'Designed and implemented REST APIs with validation and consistent error handling',
			'Built session-based authentication and end-to-end auth flows',
			'Set up Docker Compose environments for local and production-like workflows'
		],
		stack: ['Java', 'Spring Boot', 'Svelte', 'Docker', 'SQL'],
		links: [{ label: 'GitHub', href: 'https://github.com/MrSolymi' }]
	}
];
