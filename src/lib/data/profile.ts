import type { LocalizedText } from '$lib/i18n/types';

export const skills = [
	{
		id: 'backend',
		title: { en: 'Backend', hu: 'Backend' } satisfies LocalizedText,
		items: ['Java', 'Spring Boot', 'REST', 'Validation', 'Session/Auth']
	},
	{
		id: 'frontend',
		title: { en: 'Frontend', hu: 'Frontend' } satisfies LocalizedText,
		items: ['Svelte', 'TypeScript', 'Tailwind UI (theme)']
	},
	{
		id: 'database',
		title: { en: 'Database', hu: 'Adatbázis' } satisfies LocalizedText,
		items: ['PostgreSQL', 'SQLite', 'SQL']
	},
	{
		id: 'devops',
		title: { en: 'DevOps & Tools', hu: 'DevOps és eszközök' } satisfies LocalizedText,
		items: ['Docker', 'Docker Compose', 'Git', 'CI/CD basics', 'Linux basics']
	}
] as const;

export const contact = {
	email: 'solymosiati001220@outlook.hu',
	github: 'https://github.com/MrSolymi',
	linkedin: 'https://www.linkedin.com/in/mrsolymi'
};
