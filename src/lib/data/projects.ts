export type Project = {
	id: string;
	title: string;
	description: string;
	tags: string[];
	highlights: string[];
	links?: {
		repo?: string;
		live?: string;
		caseStudy?: boolean;
	};
	caseStudy?: {
		problem: string;
		solution: string[];
		results: string[];
		stack: string[];
	};
};

export const projects: Project[] = [
	{
		id: 'contact-manager',
		title: 'ContactManager',
		description:
			'A WPF desktop app to extract, store, and review contacts from emails (MVVM, SQLite).',
		tags: ['WPF', 'C#', 'SQLite', 'MVVM'],
		highlights: [
			'Regex-based contact extraction with deduplication',
			'Filters, DataGrid UX, and review/status fields for a smooth workflow',
			'Google OAuth 2.0 integration (Gmail)'
		],
		links: { repo: 'https://github.com/MrSolymi/ContactManager', caseStudy: true },
		caseStudy: {
			problem:
				'Manually extracting contacts from emails was slow and error-prone - a fast, review-first workflow was needed.',
			solution: [
				'MVVM architecture with scalable UI state management',
				'SQLite + EF Core with a repository-style data layer for clean separation and testability',
				'Import pipeline: email → regex parsing → normalization → deduplication'
			],
			results: [
				'Faster processing with a consistent review workflow',
				'Searchable/filterable database with clean auditability'
			],
			stack: ['C#', 'WPF', 'MVVM', 'SQLite', 'Google OAuth 2.0']
		}
	},
	{
		id: 'unity-thesis-project',
		title: 'Unity 2D Metroidvania (Thesis Project)',
		description:
			'A 2D Unity platformer inspired by Hollow Knight - built with a component-first architecture for reusable, maintainable gameplay systems.',
		tags: ['Unity', 'C#', 'Game Dev'],
		highlights: [
			'Component-based gameplay code designed for reuse, clarity, and easy iteration',
			'State machines across player/enemies for clean, predictable behavior',
			'Save system, controller support, and multi-scene progression with seamless room-to-room transitions',
			'Soulslike-inspired combat elements (tight movement, responsive hit/feedback loop)'
		],
		links: { repo: 'https://github.com/MrSolymi/Szakdolgozat', caseStudy: true },
		caseStudy: {
			problem:
				'For my thesis, I wanted to build a 2D game while keeping the codebase highly modular - easy to extend, easy to debug, and built from reusable components rather than one-off scripts.',
			solution: [
				'Designed gameplay features around composable components to keep responsibilities small and systems reusable',
				'Used state machines to structure complex behaviors (player, enemies, and interactions) without spaghetti logic',
				'Implemented a save/load flow and input layer with controller support',
				'Built multi-scene traversal that supports room-based progression (inspired by Hollow Knight-style scene transitions)'
			],
			results: [
				'A maintainable codebase where new features can be added without rewriting existing systems',
				'Reusable components and patterns that can be carried over to future Unity projects',
				'A playable metroidvania-style prototype with saving, combat, and seamless scene-to-scene gameplay'
			],
			stack: [
				'Unity',
				'C#',
				'State Machines',
				'Component-based Architecture',
				'Input System',
				'Save/Load'
			]
		}
	},
	{
		id: 'portfolio',
		title: 'Portfolio Website',
		description:
			'My personal portfolio built with SvelteKit + Tailwind and fast Cloudflare deployment.',
		tags: ['Svelte', 'Tailwind', 'TypeScript'],
		highlights: [
			'Component-driven UI with a consistent look and a “clean but not boring” style',
			'Project case studies for the work that\'s worth diving into (problem → solution → results)',
			'Deployed on Cloudflare Workers with a simple Git-based update flow (push changes → site updates)'
		],
		links: {
			repo: 'https://github.com/MrSolymi/Portfolio',
			live: 'https://portfolio.mrsolymi.me',
			caseStudy: true
		},
		caseStudy: {
			problem:
				'I wanted a portfolio that feels modern and personal, while staying fast, easy to maintain, and simple to deploy.',
			solution: [
				'Built a reusable project data model and components',
				'Focused on UI details to keep the site polished',
				'Set up a lightweight Git → Cloudflare Workers deployment flow to publish updates quickly',
        'Optimized the layout for smaller screens, so everything stays readable and easy to navigate.'
			],
			results: [
				'A clean, maintainable site that\'s easy to extend with new projects and case studies; or restyle without rewriting content',
				'Fast, responsive experience with smooth navigation'
			],
			stack: ['Svelte', 'TypeScript', 'Tailwind CSS', 'Cloudflare Workers']
		}
	},
	{
		id: 'ticket-service',
		title: 'Ticket Service',
		description:
			'A Spring Boot + Spring Shell CLI app built as a university course project (taught by an EPAM instructor); admin setup for movies/rooms/screenings, user sign-in, seat booking, and dynamic pricing.',
		tags: ['Java', 'Spring Boot', 'Spring Shell', 'JPA', 'MySQL', 'H2', 'Maven'],
		highlights: [
			'Admin-only commands to manage movies, rooms, screenings, and price components',
			'Seat booking with validation (seat exists + not already taken) and booking history per user',
			'Flexible pricing: base price + components attachable to room/movie/screening, with “show price” support',
			'Covered with unit tests for both command and service layers (JUnit + Mockito)'
		],
		links: {
			repo: 'https://github.com/MrSolymi/epam-deik-java-dev/tree/main',
			caseStudy: true
		},
		caseStudy: {
			problem:
				'Build a small but realistic ticket booking system that stays clean under growing requirements (roles, pricing rules, validations) and remains easy to test.',
			solution: [
				'Spring Shell command layer + service layer + JPA repositories for clear separation of concerns',
				'Admin/user flows with command availability checks (admin-only operations)',
				'Pricing model with composable price components and a base price calculator',
				'Validation for seat existence, seat collisions, and screening overlap rules'
			],
			results: [
				'A working CLI app where admins can manage the cinema setup and users can book seats safely',
				'A structure that\'s easy to extend (new commands, rules, or pricing logic) and easy to test'
			],
			stack: [
				'Java',
				'Spring Boot',
				'Spring Shell',
				'Spring Data JPA',
				'MySQL/H2',
				'JUnit',
				'Mockito'
			]
		}
	},
	{
		id: 'rag-chunking-research',
		title: 'RAG Chunking Research (University Internship)',
		description:
			'A university internship research project exploring how chunking strategy and retrieval depth (top-k) affect retrieval quality in a RAG-style pipeline using LlamaIndex and Hugging Face embeddings.',
		tags: ['Python', 'LlamaIndex', 'Hugging Face', 'Embeddings', 'RAG'],
		highlights: [
			'Implemented and compared multiple chunking strategies: token-based, sentence-based, and token sliding windows with different overlaps',
			'Evaluated retrieval depth (top-k) and visualized metric curves to find the best k per method',
			'Identified 128-token chunks as a strong default: best results with smaller k, while 256/512 tended to underperform',
			'Switched from simple hit-based metrics to ROUGE / METEOR / BLEU via Hugging Face Evaluate for more interpretable results'
		],
		links: { caseStudy: true },
		caseStudy: {
			problem:
				'During my university internship, I explored whether better chunking + retrieval settings can improve retrieval quality for smaller LLM setups. The goal was to find chunking methods and top-k values that return useful context without flooding the model with noise.',
			solution: [
				'Implemented chunkers in Python (LlamaIndex): fixed token chunks, sentence-based chunks, and token-based sliding windows (with 50% / 25% / 12.5% overlaps)',
				'Ran experiments across different chunk sizes and top-k values (k = number of retrieved context chunks) and plotted curves per method',
				'Initially tried coverage-style metrics (accuracy / precision / recall / F1) based on how well retrieved context matched the reference, then moved to Hugging Face Evaluate (ROUGE / METEOR / BLEU) for more usable, comparable scores',
				'Cross-validated the best-performing setup on a separate ~1000-question set to confirm similar behavior'
			],
			results: [
				'128-token chunking produced the most practical trade-off: strong results with smaller k and a clearer performance curve than larger chunk sizes (256/512)',
				'Token sliding windows gave a small improvement over plain token chunking, but with added implementation complexity',
				'Established a repeatable evaluation workflow (metric curves by k) that can be reused to tune other datasets and chunkers'
			],
			stack: [
				'Python',
				'LlamaIndex',
				'Hugging Face (Embeddings + Evaluate)',
				'Vector Store',
				'ROUGE / METEOR / BLEU'
			]
		}
	},
	{
		id: 'spring-svelte-app',
		title: 'Spring Boot + Svelte',
		description:
			'Spring Boot backend API with a Svelte frontend, session-based auth, and a clean endpoint structure.',
		tags: ['Java', 'Spring Boot', 'Svelte', 'Auth'],
		highlights: [
			'Session-based authentication with secure password handling and auth flow design',
			'REST API design + validation, error handling, and a clean endpoint structure'
		]
		// links: { repo: "https://github.com/...", live: "https://..." },
		//links: { repo: 'https://github.com/...' }
	},
	{
		id: 'java-side-projects',
		title: 'Other Java Projects',
		description:
			'A small collection of Java side projects built out of curiosity - Discord bot experiments, plus lightweight Minecraft server plugins that add missing QoL features and simple gameplay tweaks.',
		tags: ['Java', 'Gradle', 'JDA', 'Minecraft Plugins', 'Spigot/Paper'],
		highlights: [
			'Minecraft plugins: custom commands, small QoL additions, and simple gameplay/item behavior tweaks',
			'Server-side player validation for multiplayer setups (useful when online-mode isn\'t enabled)',
			'Discord bot: modular slash commands + music playback with queue management'
		],
		links: { caseStudy: true },
		caseStudy: {
			problem:
				'I like having a playground for Java: quick projects where I can try APIs, build small utilities, and ship tiny features that are missing from tools or games I use.',
			solution: [
				'Built lightweight Minecraft plugins for Spigot/Paper with custom commands and small mechanics tweaks',
				'Added server-side checks/validation for players in multiplayer environments where online-mode isn\'t enabled',
				'Experimented with a Discord bot using JDA: a clean command structure and a music flow with per-guild queue handling'
			],
			results: [
				'A reusable base for small Java experiments (commands, event handling, integrations)',
				'Practical addons that improve multiplayer server experience without overcomplicating the code'
			],
			stack: ['Java', 'Spigot/Paper', 'JDA', 'Gradle']
		}
	},
	{
		id: 'homelab',
		title: 'Homelab & Self-Hosting Playground',
		description:
			'I have a small homelab server that I use as a playground and a practical dev environment. ' +
			'I run most things in Docker (managed via Portainer) - including my own Postgres and Redis instances for development, plus various self-hosted services like game servers (Minecraft and others), a torrent setup, lightweight media hosting.',
		tags: ['Docker', 'Portainer', 'PostgreSQL', 'Redis', 'Nginx', 'Self-Hosting', 'Linux'],
		highlights: [
			'Docker-based homelab managed through Portainer (easy spin-up / tear-down of services)',
			'Postgres + Redis available as reusable dev infrastructure for my projects',
			'Self-hosted extras: game servers, torrent stack, lightweight media hosting, and basic reverse-proxy experiments'
		],
		links: { caseStudy: true },
		caseStudy: {
			problem:
				'I wanted a real environment to learn and experiment. Something I can use daily for development, while also hosting useful services for myself (and sometimes friends).',
			solution: [
				'Set up a small dedicated server and standardized deployments with Docker + Portainer',
				'Run Postgres and Redis as always-available building blocks for local development and testing',
				'Experiment with self-hosted services and basic Nginx reverse-proxy setups to understand real-world networking and deployment patterns'
			],
			results: [
				'An ongoing playground that I keep improving: I can quickly try new services whenever I want.',
				'A reliable home infrastructure I regularly use for development (databases, caches) and for hosting game servers and personal services'
			],
			stack: ['Docker', 'Portainer', 'PostgreSQL', 'Redis', 'Nginx', 'Linux']
		}
	}
];
