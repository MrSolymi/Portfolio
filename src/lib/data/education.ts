import type { LocalizedText } from '$lib/i18n/types';

export type EducationItem = {
	id: string;
	school: string;
	degree: LocalizedText;
	period: string; // 2021 - 2025
	location?: string;
	details?: LocalizedText[]; // 2-4 bullet
};

export const education: EducationItem[] = [
	{
		id: 'bsc-debrecen',
		school: 'Debreceni Egyetem',
		degree: { en: 'BSc - Computer Science', hu: 'BSc - Programtervező informatikus' },
		period: '2021 - 2025',
		location: 'Debrecen, HU',
		details: [
			{
				en: 'Focus: software development, data structures, web/backend development',
				hu: 'Fókusz: szoftverfejlesztés, adatszerkezetek, web/backend fejlesztés'
			},
			{
				en: 'Projects: Java/Spring, database, client-server applications',
				hu: 'Projektek: Java/Spring, adatbázis, kliens-szerver alkalmazások'
			}
		]
	},
	{
		id: 'technical-school',
		school: 'Baross Gábor Technical School',
		degree: {
			en: "Software Development Training (haven't finished because of my university studies)",
			hu: 'Szoftverfejlesztő képzés (az egyetemi tanulmányaim miatt nem fejeztem be)'
		},
		period: '2020 - 2021',
		location: 'Debrecen, HU',
		details: [
			{ en: 'Focus: IT fundamentals, programming, networks', hu: 'Fókusz: IT alapok, programozás, hálózatok' }
		]
	},
	{
		id: 'high-school',
		school: 'Tóth Árpád High School',
		degree: { en: 'High School Diploma', hu: 'Érettségi' },
		period: '2016 - 2020'
	}
];
