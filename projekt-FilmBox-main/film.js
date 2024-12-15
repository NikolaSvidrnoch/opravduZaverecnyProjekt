document.addEventListener('DOMContentLoaded', () => {
    // Naplnění dat o filmu
    const filmId = location.hash.slice(1); // Odebereme mřížku z URL
    const film = filmy.find((f) => f.id === filmId);

    if (!film) {
        document.querySelector('#detail-filmu').innerHTML = '<p>Film nebyl nalezen.</p>';
        return;
    }

    // Naplníme stránku informacemi o filmu
    document.querySelector('.card-title').textContent = film.nazev;
    document.querySelector('.card-text').textContent = film.popis;
    document.querySelector('.img-fluid').src = film.plakat.url;
    document.querySelector('.img-fluid').alt = film.nazev;

    const datumPremiery = dayjs(film.premiera).format('D. M. YYYY');
    const rozdil = dayjs(film.premiera).diff(dayjs(), 'days');

    document.querySelector('#premiera').innerHTML = `
        Premiéra <strong>${datumPremiery}</strong><br>
        <small>${rozdil === 0 ? 'Premiéra je dnes!' : rozdil > 0 ? `Premiéra bude za ${rozdil} dní.` : `Premiéra byla před ${Math.abs(rozdil)} dny.`}</small>
    `;

    // Hvězdičkové hodnocení
    const stars = document.querySelectorAll('.button-star');
    let lastRating = 0;

    if (stars.length > 0) {
        function updateStars(rating) {
            stars.forEach((star, index) => {
                star.classList.toggle('fas', index < rating); // Plná hvězda
                star.classList.toggle('far', index >= rating); // Prázdná hvězda
            });
        }

        stars.forEach((star, index) => {
            star.addEventListener('click', () => {
                lastRating = index + 1;
                updateStars(lastRating);
                console.log(`Vybráno hodnocení: ${lastRating}`);
            });

            star.addEventListener('mouseenter', () => {
                updateStars(index + 1);
            });

            star.addEventListener('mouseleave', () => {
                updateStars(lastRating);
            });
        });
    } else {
        console.warn('Žádné hvězdičky nebyly nalezeny.');
    }

    // Formulář poznámky
    const form = document.querySelector('#note-form');
    const messageInput = document.querySelector('#message-input');
    const termsCheckbox = document.querySelector('#terms-checkbox');

    if (form && messageInput && termsCheckbox) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            let isValid = true;

            if (messageInput.value.trim() === '') {
                messageInput.classList.add('is-invalid');
                messageInput.focus();
                isValid = false;
            } else {
                messageInput.classList.remove('is-invalid');
            }

            if (!termsCheckbox.checked) {
                termsCheckbox.classList.add('is-invalid');
                termsCheckbox.focus();
                isValid = false;
            } else {
                termsCheckbox.classList.remove('is-invalid');
            }

            if (isValid) {
                form.innerHTML = `<p class="card-text">${messageInput.value.trim()}</p>`;
            }
        });

        messageInput.addEventListener('input', () => {
            messageInput.classList.remove('is-invalid');
        });

        termsCheckbox.addEventListener('change', () => {
            termsCheckbox.classList.remove('is-invalid');
        });
    } else {
        console.warn('Formulář nebo jeho části nebyly nalezeny.');
    }
});

// Filmy s dlouhými popisy
const filmy = [
    {
        id: 'pelisky',
        nazev: 'Pelíšky',
        plakat: {
            url: 'https://image.pmgstatic.com/cache/resized/w663/files/images/film/posters/165/059/165059101_56d52a.jpg',
        },
        popis: 'A je tu zpět jedna z nejúspěšnějších českých filmových komedií od renomovaných tvůrců - režiséra J. Hřebejka a scenáristy P. Jarchovského s řadou skvělých herců. Vraťme se tedy s oblíbenými postavami k rodinným rituálům, láskám a trapasům odehrávajícím se na sklonku šedesátých let minulého století v jedné pražské čtvrti. Jemná poetika a humorná nadsázka jsou charakteristické pro vyprávění životních osudů tří generací mužů a žen ve zvláštním období našich dějin v roce 1968… V jedné dvoupatrové vile tu žijí dvě rodiny - Šebkovi a Krausovi. Otec Šebek (M. Donutil), prostoduchý, ale dobrácký důstojník z povolání, je zastáncem panujícího režimu a stejně vehementně obhajuje i vlastní neomylnost v roli hlavy rodiny. Elegantní otec Kraus (J. Kodet), bývalý odbojář s trpkou válečnou zkušeností, je naopak zarytým opozičníkem. Také on je přesvědčený o tom, že má za všech okolností pravdu - není proto divu, že se tihle dva nemají zrovna v lásce. Jejich děti - gymnazista Michal (M. Beran) a jeho spolužačka Jindřiška (K. Nováková) - spolu vycházejí docela dobře. I když Michal by byl rád, kdyby ho jeho sousedka brala trochu víc na vědomí. Ta má ale oči pro jiného. Nezbývá mu tedy nic jiného, než aby smutně přihlížel, jak mu jeho první milostné body krade spolužák Elien (O. Brousek). U Šebků a Krausů se zatím střídají rodinné návštěvy, ve vší obřadnosti se tu slaví Vánoce, svatba i nečekaný, bolestný pohřeb. Do zabydlených domácností vtrhnou i některé novodobé vymoženosti v podobě umělohmotných lžiček, nerozbitných sklenic i podivných her pro statečné pionýry. Mládež zatím pokukuje po lákadlech světa kapitalismu a snaží se žít svůj vlastní, na rodičovských autoritách a "velké" historii nezávislý život. V soukromí rodinných pelíšků se tak čas od času odehrají malá dramata názorů a vztahů, která se v paměti jejich účastníků otisknou už nejspíš navždy… (csfd.cz, Česká televize)',
        premiera: '1999-04-08',
    },
    {
        id: 'promlceno',
        nazev: 'Promlčeno',
        plakat: {
            url: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/164/987/164987945_c36f6f.jpg',
        },
        popis: 'Šokující živé vysílaní, které během chvíle změní životy několika nevinných lidí. Radek (Karel Roden) se po téměř dvaceti letech nečekaně vrací do svého rodného města, aby zde nalezl jistou mladou ženu a jednou provždy se vyrovnal se svou minulostí. V pátrání po neznámé ženě mu pomáhá Eva, ambiciózní rozhlasová moderátorka, která jeho příběh dostane do své živě vysílané noční show. Chtěla mít ve vysílání senzační událost, ale k jejímu zděšení a ke zděšení všech posluchačů začne na povrch vyplouvat něco, s čím nikdo nepočítal. Svůj plán připravoval Radek několik let a během jeho vyprávění je do pochmurného příběhu vtažena nejen ona sama, ale i pražská kriminálka a další aktéři dlouho zapomenutých událostí. Začíná napínavý boj o čas a o spravedlnost. Opravdu už je vše nenávratně promlčeno? (csfd.cz, Bontonfilm)',
        premiera: '2022-04-28',
    },
    {
        id: 'rrrrrrr',
		nazev: 'RRRrrrr!!!',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w663/files/images/film/posters/162/393/162393560_2aca32.jpg',
          },
          popis: 'A je tu zpět jedna z nejúspěšnějších českých filmových komedií od renomovaných tvůrců - režiséra J. Hřebejka a scenáristy P. Jarchovského s řadou skvělých herců. Vraťme se tedy s oblíbenými postavami k rodinným rituálům, láskám a trapasům odehrávajícím se na sklonku šedesátých let minulého století v jedné pražské čtvrti. Jemná poetika a humorná nadsázka jsou charakteristické pro vyprávění životních osudů tří generací mužů a žen ve zvláštním období našich dějin v roce 1968… V jedné dvoupatrové vile tu žijí dvě rodiny - Šebkovi a Krausovi. Otec Šebek (M. Donutil), prostoduchý, ale dobrácký důstojník z povolání, je zastáncem panujícího režimu a stejně vehementně obhajuje i vlastní neomylnost v roli hlavy rodiny. Elegantní otec Kraus (J. Kodet), bývalý odbojář s trpkou válečnou zkušeností, je naopak zarytým opozičníkem. Také on je přesvědčený o tom, že má za všech okolností pravdu - není proto divu, že se tihle dva nemají zrovna v lásce. Jejich děti - gymnazista Michal (M. Beran) a jeho spolužačka Jindřiška (K. Nováková) - spolu vycházejí docela dobře. I když Michal by byl rád, kdyby ho jeho sousedka brala trochu víc na vědomí. Ta má ale oči pro jiného. Nezbývá mu tedy nic jiného, než aby smutně přihlížel, jak mu jeho první milostné body krade spolužák Elien (O. Brousek). U Šebků a Krausů se zatím střídají rodinné návštěvy, ve vší obřadnosti se tu slaví Vánoce, svatba i nečekaný, bolestný pohřeb. Do zabydlených domácností vtrhnou i některé novodobé vymoženosti v podobě umělohmotných lžiček, nerozbitných sklenic i podivných her pro statečné pionýry. Mládež zatím pokukuje po lákadlech světa kapitalismu a snaží se žít svůj vlastní, na rodičovských autoritách a "velké" historii nezávislý život. V soukromí rodinných pelíšků se tak čas od času odehrají malá dramata názorů a vztahů, která se v paměti jejich účastníků otisknou už nejspíš navždy… (csfd.cz, Česká televize)',
          premiera: '2004-09-22',
    },
    {
		id: 'ona',
		nazev: 'Ona',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/158/280/158280506_017bab.jpg',
		},
		popis:
			'Děj snímku Her se odehrává v Los Angeles v nedaleké budoucnosti. Theodore (Joaquin Phoenix) je komplikovaný a citlivý muž, který se živí psaním dojemných a osobních dopisů pro druhé. Se zlomeným srdcem po ukončení dlouhého vztahu se začne zajímat o nový, pokročilý operační systém, o kterém jeho výrobce tvrdí, že představuje zcela unikátní a intuitivní bytost. Po jeho instalaci se seznamuje se „Samanthou", umělou inteligencí s milým ženským hlasem (Scarlett Johansson), která má zajímavé postřehy, je citlivá a překvapivě vtipná. Jak její potřeby a požadavky rostou společně s těmi jeho, mění se jejich přátelství ve skutečnou vzájemnou lásku. (csfd.cz, Falcon)',
		premiera: '2013-12-18',
	},      
    {
        id: 'shrek-1',
        nazev: 'Shrek',
        plakat: {
            url: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/159/450/159450261_4baed7.jpg',
        },
        popis: 'Velký zelený zlobr Shrek si žil poklidným samotářským životem v močálu. Jenže teď si zlý trpaslík lord Farguaad nejen hodlá najít princeznu, se kterou by se oženil, a splnil si tak touhu stát se králem, ale také se rozhodl vykázat ze své země všechny pohádkové bytosti. Jednou z nich je užvaněný mluvící osel, který Farquaadovým mužům uteče a během honičky narazí na Shreka, kterého se pronásledovatelé leknou a utečou. Osel se rozhodne zůstat nečekanému zachránci po boku, z čehož zlobr nemá radost. Nemá však srdce osla se zbavit. Trpělivost mu dojde, až když jeho poklidný život zničí dav pohádkových bytostí, které Farquaad vyhnal do jeho močálu. Rozhodne se za lordem zajít do DuLocu a jediný, kdo je ochotný ukázat mu cestu, je užvaněný osel. Dorazí, právě když Farquaad hledá rytíře, který má mít tu čest jít pro něj zachránit princeznu Fionu, uvězněnou ve věži dalekého hradu střeženého drakem. Záludně využije situace a přiměje Shreka, aby se na výpravu vydal, výměnou za slib, že ho zbaví pohádkových bytostí a uvede bažinu do původního stavu. Po dlouhém putování dojdou k hradu a poněkud netradičním způsobem princeznu zachrání, což dívku, čekající krásného prince, poněkud rozladí. Další problém musí řešit osel, který se dostane do spárů draka a v nouzi nejvyšší mu začne lichotit. Načež se ukáže, že drak je vlastně dračice, která jeho lichotkám natolik podlehne, že se do něj zamiluje. Na zpáteční cestě se Shrek s Fionou rychle sblíží a už se mu nechce předat ji Farquaadovi. Jenže i princezna má tajemství, které poněkud mění situaci.',
        premiera: '2001-05-18',
    },
	{
		id: 'shrek-2',
		nazev: 'Shrek 2',
		plakat: {
			url: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Shrek_2_poster.jpg',
		},
		popis: "A byla svatba a pak spolu Shrek s Fionou žili šťastně až do smrti… Tedy žili by, kdyby se ovšem nevydali za princezninými rodiči! Návštěva království Za sedmero horami se totiž záhy zvrtne v další komické dobrodružství. S věrným Oslíkem za zády čelí Shrek nástrahám Kmotřičky víly, domýšlivému princi Krasoňovi a proslulému lovci zlobrů Kocourovi v botách, kterému však pod fasádou zuřivého bojovníka tepe srdce ze zlata.",
		premiera: '2004-05-19',
	},
    {
        id: 'doba-ledova',
        nazev: 'Doba ledová',
        plakat: {
            url: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/158/604/158604611_14be8b.jpg',
        },
        popis: 'Bylo nebylo. Ne tak dávno, sotva před 20 000 lety, v prehistorickém světě, kdy mrzne až praští, začíná příběh o mi-mi-migraci. Jak má jeden ale poznat, že jde o Dobu ledovou a ne třeba o Mrazivé časy nebo Velký chlad? No, tak se na naše hrdiny podívejte! Obličeje mají vyloženě ledové. A s tím přesunem je docela honička, zvlášť když zvířecí tým - mamut, tygr a lenochod - najdou lidské mládě, moc roztomilého človíčka, a usmyslí si, že prcka vrátí rodičům. Během dobrodružné cesty mají zvířata spoustu starostí jak se uživit. Mamut musí dávat pozor, aby mu věčně někdo nešlapal na chobot. A musí hájit svou tělnatost. Není přece tlustý, to ty chlupy dělají, že tak vypadá. Tygr zase potřebuje uchovat svou tygří vážnost. A ještě musí vyřešit spoustu problémů se vztahy. A jaký je to pořádek, když lenochod střídá partnerky jako ponožky? Panečku, mamut, ten je věrný. Na konec by to chtělo nějakou změnu. Což takhle "globální oteplení"?',
        premiera: '2002-03-12',
    },
    {
        id: 'john-wick',
        nazev: 'John Wick',
        plakat: {
            url: 'https://upload.wikimedia.org/wikipedia/en/9/98/John_Wick_TeaserPoster.jpg',
        },
        popis: 'Říká se: "Nedráždi hada bosou nohou". John Wick je zabiják na odpočinku, přesně ten typ chlápka, kterému je lepší se vyhnout. Vloupat se mu do domu, ukrást auto a zabít milovaného psa, to se prostě nemělo stát. Střední zlodějíčkové to nevěděli, jejich bossové v podsvětí ale ano. A musí jednat. Takže zatímco se John Wick vydává na svou drsnou vendetu, stává se zároveň terčem svých bývalých kolegů - nájemných zabijáků.',
        premiera: '2014-10-24',
    },
    {
        id: 'rychle-zbesile',
        nazev: 'Rychle a zběsile',
        plakat: {
            url: 'https://images.justwatch.com/poster/178643212/s718/rychli-a-zbesili.jpg',
        },
        popis: 'Brianovi se konečně podaří stát se členem party vedené Dominicem, který je doslova blázen do nelegálních závodů, pořádaných většinou v noci na periférii Los Angeles. Je to obrovské divadlo pro obecenstvo zběsilých jízd, ale především posedlost pro piloty speciálně upravených superauťáků. S ohlušujícím řevem motorů, řítící se městem několikanásobkem povolené rychlosti, pění všem adrenalin v krvi. Ve hře jsou peníze, prestiž, obdiv dívek. Jenže pro Dominica a jeho kámoše nejsou závody jediným zdrojem financí. A to je hlavní důvod, proč chce policista Brian získat jeho důvěru. V poslední době se množí záhadná přepadení kamionů a policie i FBI chtějí znát pachatele dřív než tiráci vezmou zákon do svých rukou. Ve chvíli, kdy má všechny důkazy o tom, že Dominic je vůdcem gangu, Brian zaváhá s odhalením pravdy. Zamiloval se do jeho sestry Miy a je mu jasné, že jí tím způsobí dvojnásobný šok. Mia neví, čím se ve skutečnosti bratr živí, ani netuší, kdo vlastně Brian je... ',
        premiera: '2001-06-22',
    },
    {
        id: 'kimi',
        nazev: 'KIMI',
        plakat: {
            url: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/166/002/166002844_2e67c1.jpg',
        },
        popis: 'Angela (Zoë Kravitz) se podílí na projektu KIMI. To je něco jako sofistikovaná domácí chůvička, která přijímá hlasový povely a dokáže je splnit. Třeba požadavek k zesílení televize. Zároveň i ve standby režimu neustále nahrává zvuky z blízkého okolí. Při analýze jedné nahrávky dojde Angela k závěru, že byl spáchán násilný čin a rozhodne se jednat. Dost jí při tom limituje to, že trpí agorafobií. Informuje své nadřízené a tím dojde k dalším pro ní nebezpečným skutečnostem. ',
        premiera: '2022-02-10',
    },
    {
        id: 'vlastnici',
		nazev: 'Vlastníci',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/163/781/163781903_f1e217.png',
		},
		popis:
			'Paní Zahrádková (Tereza Voříšková) s manželem (Vojta Kotek) idealisticky chtějí, aby společnými silami dům zachránili. Novomanželé Bernáškovi (Jiří Černý, Maria Sawa) se s nadšením připojují. Paní Roubíčková (Klára Melíšková) pedantsky kontroluje řádný průběh schůze. Paní Horvátová (Dagmar Havlová) všechno iniciativně komentuje. Naivní pan Švec (David Novotný) zastupuje svojí maminku. Paní Procházková (Pavla Tomicová) s panem Novákem (Ondřej Malý) hledá způsoby jak zhodnotit svůj majetek. Pan Nitranský (Andrej Polák) touží po půdě v domě a pan Kubát (Jiří Lábus) důsledně sabotuje jakékoliv rozhodnutí. A v pozadí číhají bratři Čermákovi (Kryštof Hádek, Stanislav Majer), jen starý pan profesor Sokol (Ladislav Trojan) zatím nic nekomentuje… (csfd.cz, CinemArt)',
		premiera: '2019-11-19',
	},
    {
        id: 'petrolejove-lampy',
        nazev: 'Petrolejové lampy',
        plakat: {
            url: 'https://image.pmgstatic.com/cache/resized/w663/files/images/film/posters/163/486/163486952_22889f.jpg',
        },
        popis: 'Sugestivní filmové drama Petrolejové lampy natočil Juraj Herz podle stejnojmenného románu Jaroslava Havlíčka. Vypráví v něm tragický příběh stárnoucí dívky Štěpy, žijící na přelomu století v dusném prostředí českého maloměsta, v ovzduší nepochopení a předstíraných citů, přetvářky a falše. Štěpě jsou neustále matkou vnucováni adepti na ženění, kteří ovšem musejí pocházet z téhož okruhu jako ona. Štěpa je však jiná než ostatní dívky. Jakoby zasažena duchem emancipace vyslouží si pověst dívky volných mravů a ta přirozeně nápadníky z řad městské honorace odrazuje. Než by se stala starou pannou, provdá se za bratrance, zkrachovalého důstojníka. V den svatby ale ještě netuší, jaká strašlivá nemoc pronásleduje jejího ženicha... Pečlivě rekonstruované období secese v sobě tají osudové lidské trápení: stárnoucí dívka z rodiny maloměstské honorace se dočká svého štěstí, když se provdá na pohledného důstojníka. Netuší ovšem, že muž trpí zhoubnou pohlavní chorobu - s marnou obětavostí pak o něho pečuje, vystavena zlomyslnému posměchu svého okolí. Vynikající, stále sugestivní snímek Juraje Herze se opírá o procítěné, jemně odstíněné herecké výkony Ivy Janžurové a Petra Čepka',
        premiera: '1971-10-01',
    },
    {
        id: 'krakonosovo-tajemstvi',
        nazev: 'Krakonošovo tajemství',
        plakat: {
            url: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/166/933/166933672_58ebbc.jpg',
        },
        popis: 'Na zámek v podhůří Krkonoš přijíždí nový majitel Štěpán (J. Prachař) se snoubenkou krásnou komtesou Blankou (D. Morávková) a mladším bratrem Adamem (J. Nedbal). Cestou kočár nešťastně srazí kolemjdoucí dívku Lidušku (L. Skleničková), Adam jí pomůže a ona se do něj zamiluje. V horském městečku je ještě jeden nový příchozí, národopisec Jiráček (O. Sokol), který sbírá místní pověsti a nevychází z údivu nad tím, že zdejší lidé ještě věří v Krakonoše. Díky Adamovi Liduška získá místo zahradnice na zámku, jenže také brzy zjistí, že Adam je beznadějně zamilovaný do Blanky. Sobecký a lakomý Štěpán se dozví od Jiráčka o nevídaných pokladech skrytých v krkonošských horách a je odhodlaný je získat, zvlášť, když Adam náhodou objeví vlašskou knihu, která pomocí tajných značek popisuje, jak se k nim dostat. Jenže rozluštit je nedokáže ani Jiráček. Po první neúspěšné výpravě se ukáže tajemný cizinec a nabídne Štěpánovi, že ho k pokladům dovede. Požaduje za to vlašskou knihu a největší drahý kámen, který najdou. Poklad skutečně objeví, ale Adam zapře drahokam, který vzal tajně kvůli Blance. Štěpán, který se nehodlá s nikým dělit, chce cizince připravit o život. Cizinec však v rozhodující chvíli odhalí svou pravou tvář. Je to Krakonoš! A strašný trest přijde vzápětí. Podaří se Lidušce zachránit Adama? Jakou záhadu skrývá starý obraz na zámku Hůrka a co strašlivého se v horách kdysi odehrálo? A kdo je vlastně Krakonoš a jaké je jeho největší tajemství?',
        premiera: '2022-12-24',
    },
];

document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.button-star');

    if (stars.length > 0) {
        stars.forEach((star, index) => {
            star.addEventListener('click', () => {
                console.log(`Kliknuto na hvězdičku číslo ${index + 1}`);
            });

            star.addEventListener('mouseenter', () => {
                console.log(`Přetáhnuto nad hvězdičku číslo ${index + 1}`);
            });

            star.addEventListener('mouseleave', () => {
                console.log(`Opuštěno hvězdičku číslo ${index + 1}`);
            });
        });
    } else {
        console.warn('Žádné hvězdičky nebyly nalezeny.');
    }

    // Přehrávač videa
    const prehravac = document.getElementById('prehravac');
    const video = document.getElementById('video');
    const playButton = document.querySelector('.play');
    const pauseButton = document.querySelector('.pause');
    const currentTimeDisplay = document.querySelector('.current-time');

    if (prehravac && video) {
        // Přehrání videa
        playButton.addEventListener('click', () => {
            video.play();
        });

        // Pozastavení videa
        pauseButton.addEventListener('click', () => {
            video.pause();
        });

        // Událost: video se začíná přehrávat
        video.addEventListener('playing', () => {
            prehravac.classList.add('playing');
        });

        // Událost: video je pozastaveno
        video.addEventListener('pause', () => {
            prehravac.classList.remove('playing');
        });

        // Aktualizace aktuálního času
        video.addEventListener('timeupdate', () => {
            const currentTime = Math.floor(video.currentTime);
            const minutes = Math.floor(currentTime / 60);
            const seconds = currentTime % 60;
            currentTimeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        });
    }
});