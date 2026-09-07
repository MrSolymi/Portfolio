import type { LocalizedText } from '$lib/i18n/types';

export type Project = {
	id: string;
	title: string;
	description: LocalizedText;
	tags: string[];
	highlights: LocalizedText[];
	links?: {
		repo?: string;
		live?: string;
		caseStudy?: boolean;
	};
	caseStudy?: {
		problem: LocalizedText;
		solution: LocalizedText[];
		results: LocalizedText[];
		stack: string[];
	};
};

export const projects: Project[] = [
	{
		id: 'contact-manager',
		title: 'ContactManager',
		description: {
			en: 'A WPF desktop app to extract, store, and review contacts from emails (MVVM, SQLite).',
			hu: 'Egy WPF asztali alkalmazás, amely emailekből nyer ki, tárol és tekint át kapcsolatokat (MVVM, SQLite).'
		},
		tags: ['WPF', 'C#', 'SQLite', 'MVVM', 'OAuth 2.0'],
		highlights: [
			{
				en: 'Regex-based contact extraction with deduplication',
				hu: 'Regex-alapú kapcsolatkinyerés duplikátumszűréssel'
			},
			{
				en: 'Filters, DataGrid UX, and review/status fields for a smooth workflow',
				hu: 'Szűrők, DataGrid UX és állapotmezők a zökkenőmentes munkafolyamathoz'
			},
			{ en: 'Google OAuth 2.0 integration (Gmail)', hu: 'Google OAuth 2.0 integráció (Gmail)' }
		],
		links: { repo: 'https://github.com/MrSolymi/ContactManager', caseStudy: true },
		caseStudy: {
			problem: {
				en: 'Manually extracting contacts from emails was slow and error-prone - a fast, review-first workflow was needed.',
				hu: 'A kapcsolatok kézi kigyűjtése emailekből lassú és hibalehetőségekkel teli volt - egy gyors, átekintés-központú munkafolyamatra volt szükség.'
			},
			solution: [
				{
					en: 'MVVM architecture with scalable UI state management',
					hu: 'MVVM architektúra skálázható UI állapotkezeléssel'
				},
				{
					en: 'SQLite + EF Core with a repository-style data layer for clean separation and testability',
					hu: 'SQLite + EF Core repository-alapú adatréteggel a tiszta szétválasztás és tesztelhetőség érdekében'
				},
				{
					en: 'Import pipeline: email → regex parsing → normalization → deduplication',
					hu: 'Importálási folyamat: email → regex feldolgozás → normalizálás → duplikátumszűrés'
				}
			],
			results: [
				{
					en: 'Faster processing with a consistent review workflow',
					hu: 'Gyorsabb feldolgozás egységes átekintési munkafolyamattal'
				},
				{
					en: 'Searchable/filterable database with clean auditability',
					hu: 'Kereshető/szűrhető adatbázis átlátható visszakövethetőséggel'
				}
			],
			stack: ['C#', 'WPF', 'MVVM', 'SQLite', 'OAuth 2.0']
		}
	},
	{
		id: 'masala-garden-website',
		title: 'Masala Garden Website',
		description: {
			en: 'A bilingual restaurant website for Masala Garden, built with SvelteKit and Tailwind and deployed on Cloudflare Workers via a GitHub-connected deploy pipeline.',
			hu: 'Egy kétnyelvű étterem weboldal a Masala Gardennek, SvelteKit és Tailwind alapokon, Cloudflare Workers-re telepítve egy GitHub-hoz kötött deploy folyamattal.'
		},
		tags: ['Svelte', 'Tailwind', 'TypeScript', 'Cloudflare Workers'],
		highlights: [
			{
				en: 'Bilingual (English/Hungarian) content on a fully static, prerendered SvelteKit site',
				hu: 'Kétnyelvű (angol/magyar) tartalom egy teljesen statikus, előre renderelt SvelteKit oldalon'
			},
			{
				en: 'Cloudflare Workers deployment that publishes automatically on every push to GitHub',
				hu: 'Cloudflare Workers telepítés, ami minden GitHub push-nál automatikusan frissül'
			},
			{
				en: "Designed the restaurant's graphical menu artwork in Adobe Photoshop",
				hu: 'Az étterem grafikus étlapját Adobe Photoshopban terveztem meg'
			}
		],
		links: {
			repo: 'https://github.com/MrSolymi/MasalaWeb',
			live: 'https://masalagarden.hu',
			caseStudy: true
		},
		caseStudy: {
			problem: {
				en: 'Masala Garden needed a fast, low-maintenance bilingual website plus a print-ready graphical menu.',
				hu: 'A Masala Gardennek egy gyors, alacsony karbantartású kétnyelvű weboldalra volt szüksége, valamint egy nyomtatható grafikus étlapra.'
			},
			solution: [
				{
					en: 'Built a fully static, prerendered SvelteKit site with English/Hungarian content',
					hu: 'Teljesen statikus, előre renderelt SvelteKit oldalt építettem angol/magyar tartalommal'
				},
				{
					en: 'Set up a GitHub → Cloudflare Workers deploy pipeline so pushing to the repo publishes updates automatically',
					hu: 'Egy GitHub → Cloudflare Workers deploy folyamatot állítottam be, hogy a repóba történő push automatikusan frissítse az oldalt'
				},
				{
					en: "Designed the restaurant's menu artwork in Adobe Photoshop",
					hu: 'Az étterem étlapjának grafikáját Adobe Photoshopban terveztem meg'
				}
			],
			results: [
				{
					en: 'A fast, maintenance-light bilingual website that runs entirely on static hosting',
					hu: 'Egy gyors, alacsony karbantartású kétnyelvű weboldal, ami teljes egészében statikus hosztingon fut'
				},
				{
					en: 'A one-step deploy flow (push → live) with no server to maintain',
					hu: 'Egyszerű deploy folyamat (push → élesítés) szerver üzemeltetése nélkül'
				}
			],
			stack: ['Svelte', 'TypeScript', 'Tailwind CSS', 'Cloudflare Workers']
		}
	},
	{
		id: 'unity-thesis-project',
		title: 'Unity 2D Metroidvania (Thesis Project)',
		description: {
			en: 'A 2D Unity platformer inspired by Hollow Knight - built with a component-first architecture for reusable, maintainable gameplay systems.',
			hu: 'Egy Hollow Knight ihlette 2D Unity platformer - komponens-központú architektúrával, újrafelhasználható és karbantartható játékrendszerekkel.'
		},
		tags: ['Unity', 'C#', 'Game Dev'],
		highlights: [
			{
				en: 'Component-based gameplay code designed for reuse, clarity, and easy iteration',
				hu: 'Komponens-alapú játékkód, újrafelhasználhatóságra, átláthatóságra és könnyű iterálásra tervezve'
			},
			{
				en: 'State machines across player/enemies for clean, predictable behavior',
				hu: 'Állapotgépek a játékosnál és az ellenfeleknél is a tiszta, kiszámítható viselkedésért'
			},
			{
				en: 'Save system, controller support, and multi-scene progression with seamless room-to-room transitions',
				hu: 'Mentési rendszer, kontroller támogatás és több jelenetes haladás zökkenőmentes szoba-szoba átmenetekkel'
			},
			{
				en: 'Soulslike-inspired combat elements (tight movement, responsive hit/feedback loop)',
				hu: 'Soulslike ihletésű harcrendszer elemek (pontos mozgás, reszponzív találat-visszajelzés)'
			}
		],
		links: { repo: 'https://github.com/MrSolymi/Szakdolgozat', caseStudy: true },
		caseStudy: {
			problem: {
				en: 'For my thesis, I wanted to build a 2D game while keeping the codebase highly modular - easy to extend, easy to debug, and built from reusable components rather than one-off scripts.',
				hu: 'A szakdolgozatomhoz egy 2D játékot akartam építeni úgy, hogy a kódbázis erősen moduláris maradjon - könnyen bővíthető, könnyen debuggolható, és újrafelhasználható komponensekből álljon, ne egyszer használatos szkriptekből.'
			},
			solution: [
				{
					en: 'Designed gameplay features around composable components to keep responsibilities small and systems reusable',
					hu: 'A játékmenet funkcióit összeilleszthető komponensek köré terveztem, hogy a felelősségek kicsik, a rendszerek pedig újrafelhasználhatók maradjanak'
				},
				{
					en: 'Used state machines to structure complex behaviors (player, enemies, and interactions) without spaghetti logic',
					hu: 'Állapotgépeket használtam a bonyolult viselkedések (játékos, ellenfelek, interakciók) strukturálására, spagetti-logika nélkül'
				},
				{
					en: 'Implemented a save/load flow and input layer with controller support',
					hu: 'Mentés/betöltés folyamatot és input réteget valósítottam meg kontroller támogatással'
				},
				{
					en: 'Built multi-scene traversal that supports room-based progression (inspired by Hollow Knight-style scene transitions)',
					hu: 'Több jelenetes bejárást építettem, ami szoba-alapú haladást tesz lehetővé (Hollow Knight-stílusú jelenetátmenetek ihlette)'
				}
			],
			results: [
				{
					en: 'A maintainable codebase where new features can be added without rewriting existing systems',
					hu: 'Karbantartható kódbázis, ahol új funkciók adhatók hozzá a meglévő rendszerek átírása nélkül'
				},
				{
					en: 'Reusable components and patterns that can be carried over to future Unity projects',
					hu: 'Újrafelhasználható komponensek és minták, amik átvihetők jövőbeli Unity projektekbe'
				},
				{
					en: 'A playable metroidvania-style prototype with saving, combat, and seamless scene-to-scene gameplay',
					hu: 'Játszható metroidvania-stílusú prototípus mentéssel, harcrendszerrel és zökkenőmentes jelenetváltásokkal'
				}
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
		description: {
			en: 'My personal portfolio built with SvelteKit + Tailwind and fast Cloudflare deployment.',
			hu: 'A saját portfólióm, SvelteKit + Tailwind alapokon, gyors Cloudflare telepítéssel.'
		},
		tags: ['Svelte', 'Tailwind', 'TypeScript', 'Cloudflare Workers'],
		highlights: [
			{
				en: 'Component-driven UI with a consistent look and a "clean but not boring" style',
				hu: 'Komponens-alapú UI egységes megjelenéssel és "letisztult, de nem unalmas" stílussal'
			},
			{
				en: "Project case studies for the work that's worth diving into (problem → solution → results)",
				hu: 'Esettanulmányok azokhoz a projektekhez, amikbe érdemes belemerülni (probléma → megoldás → eredmények)'
			},
			{
				en: 'Deployed on Cloudflare Workers with a simple Git-based update flow (push changes → site updates)',
				hu: 'Cloudflare Workers-re telepítve, egyszerű Git-alapú frissítési folyamattal (push → oldal frissül)'
			}
		],
		links: {
			repo: 'https://github.com/MrSolymi/Portfolio',
			live: 'https://portfolio.mrsolymi.me',
			caseStudy: true
		},
		caseStudy: {
			problem: {
				en: 'I wanted a portfolio that feels modern and personal, while staying fast, easy to maintain, and simple to deploy.',
				hu: 'Egy olyan portfóliót akartam, ami modernnek és személyesnek hat, ugyanakkor gyors, könnyen karbantartható és egyszerűen telepíthető marad.'
			},
			solution: [
				{
					en: 'Built a reusable project data model and components',
					hu: 'Újrafelhasználható projekt adatmodellt és komponenseket építettem'
				},
				{
					en: 'Focused on UI details to keep the site polished',
					hu: 'A UI részletekre koncentráltam, hogy az oldal letisztult maradjon'
				},
				{
					en: 'Set up a lightweight Git → Cloudflare Workers deployment flow to publish updates quickly',
					hu: 'Egy egyszerű Git → Cloudflare Workers telepítési folyamatot állítottam be a gyors frissítésekhez'
				},
				{
					en: 'Optimized the layout for smaller screens, so everything stays readable and easy to navigate.',
					hu: 'Az elrendezést kisebb képernyőkre is optimalizáltam, hogy minden olvasható és könnyen navigálható maradjon.'
				}
			],
			results: [
				{
					en: "A clean, maintainable site that's easy to extend with new projects and case studies; or restyle without rewriting content",
					hu: 'Egy letisztult, karbantartható oldal, amit könnyű új projektekkel és esettanulmányokkal bővíteni, vagy átstílusozni a tartalom átírása nélkül'
				},
				{
					en: 'Fast, responsive experience with smooth navigation',
					hu: 'Gyors, reszponzív élmény zökkenőmentes navigációval'
				}
			],
			stack: ['Svelte', 'TypeScript', 'Tailwind CSS', 'Cloudflare Workers']
		}
	},
	{
		id: 'ticket-service',
		title: 'Ticket Service',
		description: {
			en: 'A Spring Boot + Spring Shell CLI app built as a university course project (taught by an EPAM instructor); admin setup for movies/rooms/screenings, user sign-in, seat booking, and dynamic pricing.',
			hu: 'Egy Spring Boot + Spring Shell CLI alkalmazás, ami egyetemi kurzusi projektként készült (egy EPAM oktató vezetésével); admin oldali film/terem/vetítés kezelés, felhasználói bejelentkezés, helyfoglalás és dinamikus árazás.'
		},
		tags: ['Java', 'Spring Boot', 'Spring Shell', 'JPA', 'MySQL', 'H2', 'Maven'],
		highlights: [
			{
				en: 'Admin-only commands to manage movies, rooms, screenings, and price components',
				hu: 'Admin-only parancsok filmek, termek, vetítések és árkomponensek kezeléséhez'
			},
			{
				en: 'Seat booking with validation (seat exists + not already taken) and booking history per user',
				hu: 'Helyfoglalás validációval (a hely létezik + még nincs lefoglalva) és felhasználónkénti foglalási előzményekkel'
			},
			{
				en: 'Flexible pricing: base price + components attachable to room/movie/screening, with "show price" support',
				hu: 'Rugalmas árazás: alapár + teremhez/filmhez/vetítéshez csatolható árkomponensek, "ár megjelenítés" támogatással'
			},
			{
				en: 'Covered with unit tests for both command and service layers (JUnit + Mockito)',
				hu: 'Unit tesztekkel lefedve mind a parancs-, mind a szolgáltatásréteg (JUnit + Mockito)'
			}
		],
		links: {
			repo: 'https://github.com/MrSolymi/epam-deik-java-dev/tree/main',
			caseStudy: true
		},
		caseStudy: {
			problem: {
				en: 'Build a small but realistic ticket booking system that stays clean under growing requirements (roles, pricing rules, validations) and remains easy to test.',
				hu: 'Egy kicsi, de valósághoz közeli jegyfoglaló rendszer építése, ami a növekvő követelmények (szerepkörök, árazási szabályok, validációk) mellett is átlátható marad, és könnyen tesztelhető.'
			},
			solution: [
				{
					en: 'Spring Shell command layer + service layer + JPA repositories for clear separation of concerns',
					hu: 'Spring Shell parancsréteg + szolgáltatásréteg + JPA repository-k a világos felelősség-szétválasztásért'
				},
				{
					en: 'Admin/user flows with command availability checks (admin-only operations)',
					hu: 'Admin/felhasználói folyamatok parancs-elérhetőségi ellenőrzésekkel (admin-only műveletek)'
				},
				{
					en: 'Pricing model with composable price components and a base price calculator',
					hu: 'Árazási modell összeilleszthető árkomponensekkel és alapár-számítóval'
				},
				{
					en: 'Validation for seat existence, seat collisions, and screening overlap rules',
					hu: 'Validáció a hely létezésére, helyütközésekre és vetítés-átfedési szabályokra'
				}
			],
			results: [
				{
					en: 'A working CLI app where admins can manage the cinema setup and users can book seats safely',
					hu: 'Egy működő CLI alkalmazás, ahol az adminok kezelhetik a mozi beállításait, a felhasználók pedig biztonságosan foglalhatnak helyet'
				},
				{
					en: "A structure that's easy to extend (new commands, rules, or pricing logic) and easy to test",
					hu: 'Egy könnyen bővíthető (új parancsok, szabályok, árazási logika) és könnyen tesztelhető struktúra'
				}
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
		description: {
			en: 'A university internship research project exploring how chunking strategy and retrieval depth (top-k) affect retrieval quality in a RAG-style pipeline using LlamaIndex and Hugging Face embeddings.',
			hu: 'Egy egyetemi szakmai gyakorlat keretében készült kutatási projekt, ami azt vizsgálja, hogyan hat a darabolási stratégia és a lekérdezési mélység (top-k) a visszakeresés minőségére egy RAG-stílusú pipeline-ban, LlamaIndex és Hugging Face embeddingek segítségével.'
		},
		tags: ['Python', 'LlamaIndex', 'Hugging Face', 'Embeddings', 'RAG'],
		highlights: [
			{
				en: 'Implemented and compared multiple chunking strategies: token-based, sentence-based, and token sliding windows with different overlaps',
				hu: 'Több darabolási stratégiát valósítottam meg és hasonlítottam össze: token-alapú, mondat-alapú és eltolt token-ablakos módszerek különböző átfedésekkel'
			},
			{
				en: 'Evaluated retrieval depth (top-k) and visualized metric curves to find the best k per method',
				hu: 'Kiértékeltem a lekérdezési mélységet (top-k), és metrika-görbékkel vizualizáltam a legjobb k érték megtalálásához módszerenként'
			},
			{
				en: 'Identified 128-token chunks as a strong default: best results with smaller k, while 256/512 tended to underperform',
				hu: 'A 128-tokenes darabolás bizonyult erős alapértelmezésnek: a legjobb eredményeket kisebb k mellett hozta, míg a 256/512 gyengébben teljesített'
			},
			{
				en: 'Switched from simple hit-based metrics to ROUGE / METEOR / BLEU via Hugging Face Evaluate for more interpretable results',
				hu: 'Az egyszerű találat-alapú metrikákról átálltam ROUGE / METEOR / BLEU metrikákra a Hugging Face Evaluate segítségével, az értelmezhetőbb eredményekért'
			}
		],
		links: { caseStudy: true },
		caseStudy: {
			problem: {
				en: 'During my university internship, I explored whether better chunking + retrieval settings can improve retrieval quality for smaller LLM setups. The goal was to find chunking methods and top-k values that return useful context without flooding the model with noise.',
				hu: 'Az egyetemi szakmai gyakorlatom alatt azt vizsgáltam, hogy jobb darabolási és lekérdezési beállításokkal javítható-e a visszakeresés minősége kisebb LLM rendszerekben. A cél olyan darabolási módszerek és top-k értékek megtalálása volt, amik hasznos kontextust adnak vissza anélkül, hogy elárasztanák a modellt zajjal.'
			},
			solution: [
				{
					en: 'Implemented chunkers in Python (LlamaIndex): fixed token chunks, sentence-based chunks, and token-based sliding windows (with 50% / 25% / 12.5% overlaps)',
					hu: 'Darabolókat valósítottam meg Pythonban (LlamaIndex): fix token-darabok, mondat-alapú darabok és token-alapú eltolt ablakok (50% / 25% / 12,5%-os átfedésekkel)'
				},
				{
					en: 'Ran experiments across different chunk sizes and top-k values (k = number of retrieved context chunks) and plotted curves per method',
					hu: 'Kísérleteket futtattam különböző darabméretekkel és top-k értékekkel (k = a visszakeresett kontextusdarabok száma), és görbéket ábrázoltam módszerenként'
				},
				{
					en: 'Initially tried coverage-style metrics (accuracy / precision / recall / F1) based on how well retrieved context matched the reference, then moved to Hugging Face Evaluate (ROUGE / METEOR / BLEU) for more usable, comparable scores',
					hu: 'Kezdetben lefedettség-alapú metrikákat próbáltam (accuracy / precision / recall / F1) aszerint, hogy a visszakeresett kontextus mennyire egyezett a referenciával, majd áttértem a Hugging Face Evaluate-re (ROUGE / METEOR / BLEU) a használhatóbb, összehasonlítható eredményekért'
				},
				{
					en: 'Cross-validated the best-performing setup on a separate ~1000-question set to confirm similar behavior',
					hu: 'A legjobban teljesítő beállítást egy külön, kb. 1000 kérdésből álló halmazon kereszt-validáltam, hogy megerősítsem a hasonló viselkedést'
				}
			],
			results: [
				{
					en: '128-token chunking produced the most practical trade-off: strong results with smaller k and a clearer performance curve than larger chunk sizes (256/512)',
					hu: 'A 128-tokenes darabolás adta a legpraktikusabb kompromisszumot: erős eredmények kisebb k mellett, és tisztább teljesítménygörbe, mint a nagyobb darabméreteknél (256/512)'
				},
				{
					en: 'Token sliding windows gave a small improvement over plain token chunking, but with added implementation complexity',
					hu: 'Az eltolt token-ablakok kis javulást hoztak az egyszerű token-daraboláshoz képest, de nagyobb implementációs bonyolultsággal'
				},
				{
					en: 'Established a repeatable evaluation workflow (metric curves by k) that can be reused to tune other datasets and chunkers',
					hu: 'Egy megismételhető kiértékelési munkafolyamatot alakítottam ki (k szerinti metrika-görbék), ami újrahasználható más adathalmazok és darabolók finomhangolásához'
				}
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
		id: 'image-hosting-webapp',
		title: 'Image Hosting Web App (Team Project)',
		description: {
			en: 'A university team project: an invite-only image hosting web app with JWT-based authentication, per-user storage, and shareable links. Built with Spring Boot backend and a Svelte + TypeScript frontend.',
			hu: 'Egy egyetemi csapatprojekt: egy meghívásos képmegosztó webalkalmazás JWT-alapú autentikációval, felhasználónkénti tárhellyel és megosztható linkekkel. Spring Boot backenddel és Svelte + TypeScript frontenddel készült.'
		},
		tags: ['Java', 'Spring Boot', 'Svelte', 'TypeScript', 'JWT', 'Auth', 'JPA', 'Gradle'],
		highlights: [
			{
				en: 'Invite-only registration flow + JWT-based authentication and role-based access control',
				hu: 'Meghívásos regisztrációs folyamat + JWT-alapú autentikáció és szerepkör-alapú hozzáférés-kezelés'
			},
			{
				en: 'Per-account storage with image upload/download and basic quota management',
				hu: 'Fiókonkénti tárhely kép feltöltéssel/letöltéssel és alap kvótakezeléssel'
			},
			{
				en: 'Shareable links via generated URLs for controlled image sharing',
				hu: 'Megosztható linkek generált URL-eken keresztül a kontrollált képmegosztáshoz'
			}
		],
		links: { caseStudy: true },
		caseStudy: {
			problem: {
				en: 'As a team assignment at university, we had to design and build a full web application with real-world features like authentication, permissions, and secure content sharing.',
				hu: 'Egyetemi csapatos feladatként egy teljes webalkalmazást kellett megterveznünk és megépítenünk, valós funkciókkal, mint autentikáció, jogosultságkezelés és biztonságos tartalommegosztás.'
			},
			solution: [
				{
					en: 'Spring Boot backend with a clean API surface for authentication and image management',
					hu: 'Spring Boot backend átlátható API felülettel az autentikációhoz és a képkezeléshez'
				},
				{
					en: 'JWT-based auth flow to secure requests and support frontend integration',
					hu: 'JWT-alapú autentikációs folyamat a kérések biztonságához és a frontend integráció támogatásához'
				},
				{
					en: 'Invite-based onboarding so only approved users could create accounts',
					hu: 'Meghívás-alapú regisztráció, hogy csak jóváhagyott felhasználók hozhassanak létre fiókot'
				},
				{
					en: 'Implemented upload/download endpoints and per-user storage handling',
					hu: 'Feltöltési/letöltési végpontok és felhasználónkénti tárhelykezelés megvalósítása'
				},
				{
					en: 'Added shareable links using generated URLs, plus permission checks around access',
					hu: 'Megosztható linkek hozzáadása generált URL-ekkel, valamint jogosultság-ellenőrzésekkel'
				}
			],
			results: [
				{
					en: 'A working image hosting app with a complete JWT auth flow and controlled sharing',
					hu: 'Egy működő képmegosztó alkalmazás teljes JWT autentikációs folyamattal és kontrollált megosztással'
				},
				{
					en: 'A solid team-built full-stack project where backend and frontend responsibilities were clearly separated',
					hu: 'Egy szilárd, csapatban épített full-stack projekt, ahol a backend és a frontend felelősségei jól elváltak egymástól'
				}
			],
			stack: ['Java', 'Spring Boot', 'JWT', 'Svelte', 'TypeScript']
		}
	},
	{
		id: 'java-side-projects',
		title: 'Other Java Projects',
		description: {
			en: 'A small collection of Java side projects built out of curiosity - Discord bot experiments, plus lightweight Minecraft server plugins that add missing QoL features and simple gameplay tweaks.',
			hu: 'Egy kis gyűjtemény kíváncsiságból épített Java melléktermékekből - Discord bot kísérletek, valamint könnyű Minecraft szerver pluginok, amik hiányzó QoL funkciókat és egyszerű gameplay finomhangolásokat adnak hozzá.'
		},
		tags: ['Java', 'Gradle', 'JDA', 'Minecraft Plugins', 'Spigot/Paper'],
		highlights: [
			{
				en: 'Minecraft plugins: custom commands, small QoL additions, and simple gameplay/item behavior tweaks',
				hu: 'Minecraft pluginok: egyedi parancsok, kisebb QoL kiegészítések és egyszerű gameplay/item viselkedés finomhangolások'
			},
			{
				en: "Server-side player validation for multiplayer setups (useful when online-mode isn't enabled)",
				hu: 'Szerveroldali játékos-validáció multiplayer beállításokhoz (hasznos, ha az online-mode nincs bekapcsolva)'
			},
			{
				en: 'Discord bot: modular slash commands + music playback with queue management',
				hu: 'Discord bot: moduláris slash parancsok + zenelejátszás sorkezeléssel'
			}
		],
		links: { caseStudy: true },
		caseStudy: {
			problem: {
				en: 'I like having a playground for Java: quick projects where I can try APIs, build small utilities, and ship tiny features that are missing from tools or games I use.',
				hu: 'Szeretek Java-hoz egy játszóteret fenntartani: gyors projekteket, ahol kipróbálhatok API-kat, kisebb segédeszközöket építhetek, és apró funkciókat adhatok hozzá olyan eszközökhöz vagy játékokhoz, amiket használok.'
			},
			solution: [
				{
					en: 'Built lightweight Minecraft plugins for Spigot/Paper with custom commands and small mechanics tweaks',
					hu: 'Könnyű Minecraft pluginokat építettem Spigot/Paper-hez egyedi parancsokkal és apró mechanika-finomhangolásokkal'
				},
				{
					en: "Added server-side checks/validation for players in multiplayer environments where online-mode isn't enabled",
					hu: 'Szerveroldali ellenőrzéseket/validációt adtam hozzá multiplayer környezetekhez, ahol az online-mode nincs bekapcsolva'
				},
				{
					en: 'Experimented with a Discord bot using JDA: a clean command structure and a music flow with per-guild queue handling',
					hu: 'Kísérleteztem egy JDA-alapú Discord bottal: átlátható parancsstruktúra és zenei folyamat szerverenkénti sorkezeléssel'
				}
			],
			results: [
				{
					en: 'A reusable base for small Java experiments (commands, event handling, integrations)',
					hu: 'Egy újrafelhasználható alap kisebb Java kísérletekhez (parancsok, eseménykezelés, integrációk)'
				},
				{
					en: 'Practical addons that improve multiplayer server experience without overcomplicating the code',
					hu: 'Gyakorlatias kiegészítők, amik javítják a multiplayer szerver élményt anélkül, hogy túlbonyolítanák a kódot'
				}
			],
			stack: ['Java', 'Spigot/Paper', 'JDA', 'Gradle']
		}
	},
	{
		id: 'homelab',
		title: 'Homelab & Self-Hosting Playground',
		description: {
			en:
				'I have a small homelab server that I use as a playground and a practical dev environment. ' +
				'I run most things in Docker (managed via Portainer) - including my own Postgres and Redis instances for development, plus various self-hosted services like game servers (Minecraft and others), a torrent setup, lightweight media hosting.',
			hu:
				'Van egy kis homelab szerverem, amit játszótérként és praktikus fejlesztői környezetként használok. ' +
				'A legtöbb dolgot Dockerben futtatom (Portainerrel kezelve) - beleértve a saját Postgres és Redis instance-aimat a fejlesztéshez, valamint különböző saját üzemeltetésű szolgáltatásokat, mint játékszerverek (Minecraft és mások), torrent beállítás, könnyű média-hosztolás.'
		},
		tags: ['Docker', 'Portainer', 'PostgreSQL', 'Redis', 'Nginx', 'Self-Hosting', 'Linux'],
		highlights: [
			{
				en: 'Docker-based homelab managed through Portainer (easy spin-up / tear-down of services)',
				hu: 'Docker-alapú homelab Portaineren keresztül kezelve (szolgáltatások könnyű indítása/leállítása)'
			},
			{
				en: 'Postgres + Redis available as reusable dev infrastructure for my projects',
				hu: 'Postgres + Redis mint újrafelhasználható fejlesztői infrastruktúra a projektjeimhez'
			},
			{
				en: 'Self-hosted extras: game servers, torrent stack, lightweight media hosting, and basic reverse-proxy experiments',
				hu: 'Saját üzemeltetésű extrák: játékszerverek, torrent stack, könnyű média-hosztolás és alap reverse-proxy kísérletek'
			}
		],
		links: { caseStudy: true },
		caseStudy: {
			problem: {
				en: 'I wanted a real environment to learn and experiment. Something I can use daily for development, while also hosting useful services for myself (and sometimes friends).',
				hu: 'Egy valódi környezetet akartam a tanuláshoz és kísérletezéshez. Valamit, amit naponta használhatok fejlesztésre, miközben hasznos szolgáltatásokat is üzemeltethetek magamnak (és néha barátoknak).'
			},
			solution: [
				{
					en: 'Set up a small dedicated server and standardized deployments with Docker + Portainer',
					hu: 'Beállítottam egy kis dedikált szervert, és szabványosítottam a telepítéseket Docker + Portainer segítségével'
				},
				{
					en: 'Run Postgres and Redis as always-available building blocks for local development and testing',
					hu: 'Postgres-t és Redis-t mindig elérhető építőelemként futtatom a helyi fejlesztéshez és teszteléshez'
				},
				{
					en: 'Experiment with self-hosted services and basic Nginx reverse-proxy setups to understand real-world networking and deployment patterns',
					hu: 'Kísérletezem saját üzemeltetésű szolgáltatásokkal és alap Nginx reverse-proxy beállításokkal, hogy megértsem a valós hálózati és telepítési mintákat'
				}
			],
			results: [
				{
					en: 'An ongoing playground that I keep improving: I can quickly try new services whenever I want.',
					hu: 'Egy folyamatosan fejlesztett játszótér: bármikor gyorsan kipróbálhatok új szolgáltatásokat.'
				},
				{
					en: 'A reliable home infrastructure I regularly use for development (databases, caches) and for hosting game servers and personal services',
					hu: 'Egy megbízható otthoni infrastruktúra, amit rendszeresen használok fejlesztésre (adatbázisok, cache-ek), valamint játékszerverek és személyes szolgáltatások üzemeltetésére'
				}
			],
			stack: ['Docker', 'Portainer', 'PostgreSQL', 'Redis', 'Nginx', 'Linux']
		}
	}
];
