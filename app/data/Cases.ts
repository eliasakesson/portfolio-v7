const cases: Case[] = [
	{
		name: 'Träsmak UF',
		title: 'Träsmak UF - E-handelslösning med inbyggt designverktyg',
		slug: 'trasmak-uf',
		tags: ['Webbutveckling', 'React', 'Next.js', 'Tailwind CSS'],
		liveUrl: 'https://trasmakuf.se',
		githubUrl: 'https://github.com/eliasakesson/Trasmak-UF',
		image: '/images/trasmak-uf.jpg',
		video: '/videos/trasmak-uf.mp4',
		underline: 'Webbutveckling',
		description: [
			{
				title: 'Bakgrund',
				text: `
				Vid starten av tredje året på gymnasiet startade jag UF-företaget Träsmak UF tillsammans med två klasskamrater. 
				Vi hittade en underleverantör som kunde producera träbrickor med valfri design, och ville då skapa en e-handel där kunderna kunde designa sina egna produkter i realtid.
				Jag fick då ansvaret att utveckla vår digitala plattform, som skulle ta hand om allt från att designa produkterna till att hantera betalningar och beställningar, samtidigt som den skulle vara användarvänlig och snygg.
				`
			},
			{
				title: 'Resultat',
				text: `Kunden kan enkelt göra hela köpet direkt på hemsidan, vilket underlättar för kunden och ökar konverteringen. 
				Resultatet blev en snygg och modern hemsida som är responsiv och användarvänlig. 
				Kunden kan välja mellan olika produkter och designa sin produkt i realtid med hjälp av det inbyggda designverktyget. 
				Designen kan sedan sparas till användarens konto, eller direkt läggas i varukorgen och köpas. 
				Hemsidan använder Stripe för betalningar, vilket säkerställer att betalningarna är säkra och att kunden kan känna sig trygg. 
				Hemsidan är även optimerad för SEO, vilket gör att den rankar högt i sökmotorer och syns för fler potentiella kunder.`
			},
			{
				title: 'Teknik',
				text: `Hemsidan är byggd i Next.js och använder sig primärt av Tailwind CSS för styling. 
				Firebase används för databas och autentisering, däribland lagring av designade produkter och användarkonton. 
				Stripe används för betalningar. Designverktyget är byggt från grunden med Typescript och React.`
			}
		]
	},
	{
		name: 'Volted',
		title: 'Volted - Prisvinnande mobilapp för elektronik-inlärning i skolan',
		slug: 'volted',
		tags: ['Apputveckling', 'React Native', 'Expo', 'Firebase'],
		githubUrl: 'https://github.com/eliasakesson/Volted',
		image: '/images/volted.jpg',
		underline: 'Apputveckling',
		description: [
			{
				title: 'Bakgrund',
				text: `
				Under mitt andra år på gymnasiet deltog jag tillsammans med två klasskamrater i tävlingen Blixtlåset, där vi skulle utveckla en produkt med uppgift att lösa ett problem i samhället.
				Vi fokuserade på elektronikinlärningen i skolan, då vi märkte att många elever inte hade tillgång till verktyg för att lära sig elektronik på ett roligt och interaktivt sätt.
				Vi ville därmed skapa en mobilapp/simulator där eleverna kunde lära sig om elektronik och bygga egna kretsar i en virtuell miljö, vilket skulle göra det roligare och enklare, men framför allt säkrare att lära sig.
				`
			},
			{
				title: 'Resultat',
				text: `Resultatet blev en mobilapp som fungerar som en simulator för att bygga elektronikkretsar.
				Användaren kan välja mellan olika komponenter och koppla ihop dem för att skapa en fungerande krets.
				Användaren kan använda sig av lampor, knappar och andra komponenter, och se hur strömmen rör sig genom kretsen i realtid.
				Appen är användarvänlig och har en snygg design som gör det enkelt för användaren att komma igång och lära sig.
				Appen innehåller även olika lektioner och projekt som användaren kan följa för att lära sig mer om elektronik, samt lägga till vänner och tävla om vem som kan samla mest poäng.
				`
			},
			{
				title: 'Teknik',
				text: `Appen är byggd i React Native med Expo, och använder sig av Firebase för databas och autentisering.
				Realtidsdatabasen Firestore används för att lagra användare, kretsar och poäng, och autentiseringen sköts med hjälp av Firebase Authentication.
				`
			}
		]
	}
];

export default cases;
