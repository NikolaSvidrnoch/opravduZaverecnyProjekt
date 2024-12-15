document.addEventListener('DOMContentLoaded', () => {
    const seznamFilmu = document.querySelector('#seznam-filmu');

    if (!seznamFilmu) {
        console.error('Element #seznam-filmu nebyl nalezen!');
        return;
    }

    seznamFilmu.innerHTML = '';

    filmy.forEach((film) => {
        seznamFilmu.innerHTML += `
            <div class="col">
                <div class="card">
                    <img
                        src="${film.plakat.url}"
                        width="${film.plakat.sirka}"
                        height="${film.plakat.vyska}"
                        class="card-img-top"
                        alt="${film.nazev}"
                    />
                    <div class="card-body">
                        <h5 class="card-title">${film.nazev}</h5>
                        <p class="card-text">${film.ochutnavka}</p>
                        <a href="film.html#${film.id}" class="btn btn-primary">Přehrát</a>
                    </div>
                </div>
            </div>
        `;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("note-form");
    const termsCheckbox = document.getElementById("terms-checkbox");
    const termsFeedback = termsCheckbox.nextElementSibling.nextElementSibling;

    // Skrytí chyby při načtení stránky
    termsFeedback.style.display = "none";

    form.addEventListener("submit", (event) => {
      // Skrytí chyby před novou kontrolou
      termsCheckbox.classList.remove("is-invalid");
      termsFeedback.style.display = "none";

      if (!termsCheckbox.checked) {
        event.preventDefault(); // Zastaví odeslání formuláře
        termsCheckbox.classList.add("is-invalid");
        termsFeedback.style.display = "block"; // Zobrazí chybu
      }
    });
  });

const filmy = [
    {
        id: 'pelisky',
        nazev: 'Pelíšky',
        plakat: {
            url: 'https://image.pmgstatic.com/cache/resized/w663/files/images/film/posters/165/059/165059101_56d52a.jpg',
            sirka: 663,
            vyska: 700,
        },
        ochutnavka: 'České drama z období 1968.',
        popis: 'Jedna z nejúspěšnějších českých komedií o životních osudech tří generací mužů a žen v roce 1968.',
        premiera: '1999-04-08',
    },
    {
        id: 'promlceno',
        nazev: 'Promlčeno',
        plakat: {
            url: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/164/987/164987945_c36f6f.jpg',
            sirka: 420,
            vyska: 700,
        },
        ochutnavka: 'Český krimi thriller s Karlem Rodenem.',
        popis: 'Příběh Radka, který se po téměř dvaceti letech vrací, aby uzavřel svou minulost.',
        premiera: '2022-04-28',
    },
    {
		id: 'rrrrrrr',
		nazev: 'RRRrrrr!!!',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w663/files/images/film/posters/162/393/162393560_2aca32.jpg',
			sirka: 663,
			vyska: 919,
		},
		ochutnavka: 'Francouzská komedie.',
		popis:
			'Pred 35 000 rokmi v časoch, kedy bol boj o oheň už dávno vybojovaný, prišiel na rad šampón, kvôli ktorému bol spáchaný prvý zločin v histórii ľudstva. Dva praveké kmene, Špinavovlasých a Čistovlasých žijú v harmónii a mieri až do chvíle, keď si Špinavovlasí uvedomia, že sa od susedného kmeňa líšia... Čistotou vlasov. Ale tajnú receptúru na peniacu zmes majú iba Čistovlasí a tí sa o ňu nechcú podeliť... Čistovlasí až doteraz žili pokojný, šťastný a čistý život. Nikoho z nich nenapadlo, že by im mohol niekto závidieť ich krásne čisté vlasy. Dokonca ani špinavý a smradľavý susedný kmeň Špinavovlasých. Ale v jednu noc sa to stalo. Po prvý raz v histórii ľudstva bol spáchaný zločin. Človek zabil človeka... Čo bolo vlastne jeho motívom? Kto vyrieši tento záhadný rébus? Čo ak je táto vrrrrražda iba začiatkom hrôzostrašnej série? Všetky tieto otázky začínajú riešiť prrrrehistorickí vyšetrovatelia. Začína sa prrrraveká špionáž a s ňou prichádza aj prvý vyšetrovaný zločin v dejinách ľudskej spoločnosti. Zažijete prvé vypočúvania, sledovania a podozrievania. V bláznivej komédii režiséra Chabata vstúpite do prrrrehistorickej doby, kedy bola platená starostlivosť o deti nutnosťou, profesionálny volejbal zábavou a sledovanie nástenných malieb ako predchodcov televízie samozrejmosťou. Nezľaknite sa hrôzostrašných zvukov vychádzajúcich z jaskýň. Podmienky základných ľudských potrieb, boli pred 35 000 rokmi nedokonalé. (csfd.cz, oficiální text distributora)',
		premiera: '2004-09-23',
	},
    {
		id: 'ona',
		nazev: 'Ona',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/158/280/158280506_017bab.jpg',
			sirka: 420,
			vyska: 594,
		},
		ochutnavka: 'Romantické Sci-Fi z blízké budoucnosti',
		popis:
			'Děj snímku Her se odehrává v Los Angeles v nedaleké budoucnosti. Theodore (Joaquin Phoenix) je komplikovaný a citlivý muž, který se živí psaním dojemných a osobních dopisů pro druhé. Se zlomeným srdcem po ukončení dlouhého vztahu se začne zajímat o nový, pokročilý operační systém, o kterém jeho výrobce tvrdí, že představuje zcela unikátní a intuitivní bytost. Po jeho instalaci se seznamuje se „Samanthou", umělou inteligencí s milým ženským hlasem (Scarlett Johansson), která má zajímavé postřehy, je citlivá a překvapivě vtipná. Jak její potřeby a požadavky rostou společně s těmi jeho, mění se jejich přátelství ve skutečnou vzájemnou lásku. (csfd.cz, Falcon)',
		premiera: '2013-12-18',
	},
    {
		id: 'vlastnici',
		nazev: 'Vlastníci',
		plakat: {
			url: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/163/781/163781903_f1e217.png',
			sirka: 420,
			vyska: 593,
		},
		ochutnavka: 'Česká komedie.',
		popis:
			'Paní Zahrádková (Tereza Voříšková) s manželem (Vojta Kotek) idealisticky chtějí, aby společnými silami dům zachránili. Novomanželé Bernáškovi (Jiří Černý, Maria Sawa) se s nadšením připojují. Paní Roubíčková (Klára Melíšková) pedantsky kontroluje řádný průběh schůze. Paní Horvátová (Dagmar Havlová) všechno iniciativně komentuje. Naivní pan Švec (David Novotný) zastupuje svojí maminku. Paní Procházková (Pavla Tomicová) s panem Novákem (Ondřej Malý) hledá způsoby jak zhodnotit svůj majetek. Pan Nitranský (Andrej Polák) touží po půdě v domě a pan Kubát (Jiří Lábus) důsledně sabotuje jakékoliv rozhodnutí. A v pozadí číhají bratři Čermákovi (Kryštof Hádek, Stanislav Majer), jen starý pan profesor Sokol (Ladislav Trojan) zatím nic nekomentuje… (csfd.cz, CinemArt)',
		premiera: '2019-11-19',
	},
    {
        id: 'shrek-1',
        nazev: 'Shrek',
        plakat: {
            url: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/159/450/159450261_4baed7.jpg',
            sirka: 663,
            vyska: 700,
        },
        ochutnavka: 'Klasická pohádka s vtipem a zlobrem.',
        popis: 'Shrek, zelený zlobr, se vydává na cestu zachránit princeznu Fionu a obnovit klid v bažině.',
        premiera: '2001-05-18',
    },
    {
        id: 'shrek-2',
        nazev: 'Shrek 2',
        plakat: {
            url: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Shrek_2_poster.jpg',
            sirka: 663,
            vyska: 700,
        },
        ochutnavka: 'Pokračování pohádky se Shrekem a Fionou.',
        popis: 'Shrek a Fiona se setkávají s královskou rodinou a čelí novým výzvám.',
        premiera: '2004-05-19',
    },
    {
        id: 'doba-ledova',
        nazev: 'Doba ledová',
        plakat: {
            url: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/158/604/158604611_14be8b.jpg',
            sirka: 663,
            vyska: 700,
        },
        ochutnavka: 'Začátek epického dobrodružství doby ledové.',
        popis: 'Mamut Manny, lenochod Sid a šavlozubý tygr Diego se spojí, aby zachránili lidské dítě.',
        premiera: '2002-03-12',
    },
    {
        id: 'john-wick',
        nazev: 'John Wick',
        plakat: {
            url: 'https://upload.wikimedia.org/wikipedia/en/9/98/John_Wick_TeaserPoster.jpg',
            sirka: 663,
            vyska: 700,
        },
        ochutnavka: 'Nezastavitelný zabiják vrací úder.',
        popis: 'John Wick se vrací z důchodu, aby pomstil svého psa a zúčtoval se svou minulostí.',
        premiera: '2014-10-24',
    },
    {
        id: 'rychle-zbesile',
        nazev: 'Rychle a zběsile',
        plakat: {
            url: 'https://images.justwatch.com/poster/178643212/s718/rychli-a-zbesili.jpg',
            sirka: 663,
            vyska: 700,
        },
        ochutnavka: 'Začátek rychlého a zběsilého dobrodružství.',
        popis: 'Brian O\'Conner infiltruje svět nelegálních závodů, aby odhalil zločinecký gang.',
        premiera: '2001-06-22',
    },
    {
        id: 'kimi',
        nazev: 'KIMI',
        plakat: {
            url: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/166/002/166002844_2e67c1.jpg',
            sirka: 420,
            vyska: 622,
        },
        ochutnavka: 'Americký thriller o IT pracovnici s agorafobií.',
        popis: 'Žena s agorafobií odhalí násilný trestný čin a čelí svým největším strachům.',
        premiera: '2022-02-10',
    },
    {
        id: 'petrolejove-lampy',
        nazev: 'Petrolejové lampy',
        plakat: {
            url: 'https://image.pmgstatic.com/cache/resized/w663/files/images/film/posters/163/486/163486952_22889f.jpg',
            sirka: 663,
            vyska: 937,
        },
        ochutnavka: 'Sugestivní filmové drama podle románu Jaroslava Havlíčka.',
        popis: 'Příběh Štěpy, která se provdá za důstojníka, aniž by tušila jeho strašlivé tajemství.',
        premiera: '1971-10-01',
    },
    {
        id: 'krakonosovo-tajemstvi',
        nazev: 'Krakonošovo tajemství',
        plakat: {
            url: 'https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/166/933/166933672_58ebbc.jpg',
            sirka: 420,
            vyska: 592,
        },
        ochutnavka: 'Česká vánoční pohádka z Krkonoš.',
        popis: 'Dobrodružství o pokladu, tajemných horách a lásce, která překoná všechny překážky.',
        premiera: '2022-12-24',
    },
];