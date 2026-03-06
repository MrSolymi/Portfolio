export type ExperienceItem = {
	id: string;
	title: string; 
	org: string; 
	period: string; 
	location?: string; 
	summary: string; 
	achievements: string[];
	stack: string[]; 
	links?: { label: string; href: string }[];
};

export const experience: ExperienceItem[] = [
	{
		id: 'wpf-contact',
		title: 'Desktop Developer (WPF)',
		org: 'ContactManager',
		period: '2025',
		summary:
			'A WPF desktop application built on a contract basis to extract contacts from emails and manage them in a database.',
		achievements: [
			'MVVM architecture with reusable components',
			'SQLite-based storage with search and filtering via DataGrid',
			'Import pipeline: parsing → normalization → deduplication'
		],
		stack: ['C#', 'WPF', 'MVVM', 'SQLite', 'OAuth 2.0', 'Google Cloud Console']
	},
	{
		id: 'my-projects',
		title: 'Full-stack Developer',
		org: 'Personal Projects',
		period: '2023 - Present',
		location: 'Hungary / Remote',
		summary:
			'Backend-focused projects with Spring Boot, Svelte frontend integration, and Dockerized environments.',
		achievements: [
			'Designed and implemented REST APIs with validation and consistent error handling',
			'Built session-based authentication and end-to-end auth flows',
			'Set up Docker Compose environments for local and production-like workflows'
		],
		stack: ['Java', 'Spring Boot', 'Svelte', 'Docker', 'SQL'],
		links: [{ label: 'GitHub', href: 'https://github.com/MrSolymi' }]
	},
	{
		id: 'ik-hok-comm',
		title: 'Communications Officer',
		org: 'Faculty of Informatics Student Union',
		period: '2022 - 2025',
		location: 'University of Debrecen',
		summary:
			'Handled student-facing communication and social media for the faculty\'s student union, including event promotion and visual branding.',
		achievements: [
			'Acted as a main point of contact between the student union and students, sharing updates and answering questions',
			'Planned and published social media posts for events and important announcements',
			'Created visual assets and event branding (post templates, banners, visuals)',
			'Learned and used Adobe Photoshop and Illustrator to produce consistent designs'
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
