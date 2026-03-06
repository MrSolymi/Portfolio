export type EducationItem = {
	id: string;
	school: string;
	degree: string; // pl. BSc Programtervező Informatikus
	period: string; // 2021 - 2025
	location?: string;
	details?: string[]; // 2-4 bullet
};

export const education: EducationItem[] = [
	{
		id: 'bsc-debrecen',
		school: 'Debreceni Egyetem',
		degree: 'BSc - Computer Science',
		period: '2021 - 2025',
		location: 'Debrecen, HU',
		details: [
			'Focus: software development, data structures, web/backend development',
			'Projects: Java/Spring, database, client-server applications'
		]
	},
	{
		id: 'technical-school',
		school: 'Baross Gábor Technical School',
		degree: "Software Development Training (haven't finished because of my university studies)",
		period: '2020 - 2021',
		location: 'Debrecen, HU',
		details: ['Focus: IT fundamentals, programming, networks']
	},
	{
		id: 'high-school',
		school: 'Tóth Árpád High School',
		degree: 'High School Diploma',
		period: '2016 - 2020'
	}
];
