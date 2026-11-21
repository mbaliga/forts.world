# Fort wiki

Generated 2026-11-21 from the ledger, the merged world table and the model traces. 86095 sites in the ledger across 173 countries; 78053 have a model page.

- [Sources and licences](SOURCES.md): every dataset, tool and reference we draw on.
- [Metadata schema](SCHEMA.md): what each field means and where it comes from.
- [Evidence levels](#evidence-levels)
- Flat catalogue: [data/forts.csv](data/forts.csv)
- The Forts of the World page (a map of every site in the world table, with search and an in-browser 3D view of every model) is built from the same data by `tools/world/build-atlas.mjs`; see [Sources](SOURCES.md) section 5a.

## Evidence levels

| Level | Models |
|---|---|
| T1 (auto, outline) | 45926 |
| T1 (location-only) | 32062 |
| T1 | 57 |
| T2 (partial) | 5 |
| T2 (partial) + constructed (schematic) | 1 |
| T1 + constructed (schematic) | 1 |
| T1 (plan-validated) | 1 |

T2 means a survey plan was used. T1 (plan-validated) means a mapped outline was checked against a plan. T1 (auto, outline) and T1 (location-only) are automatic builds from open map data and terrain, unchecked against plans. Generic schematic means a stand-in layout with unverified fidelity.

## Countries

| Country | Sites | With a model |
|---|---|---|
| [Germany](countries/germany.md) | 16832 | 16806 |
| [France](countries/france.md) | 10068 | 10068 |
| [India](countries/india.md) | 7137 | 3812 |
| [Italy](countries/italy.md) | 7068 | 7068 |
| [Spain](countries/spain.md) | 5126 | 5126 |
| [United Kingdom](countries/united-kingdom.md) | 3704 | 3704 |
| [Czechia](countries/czechia.md) | 3353 | 3353 |
| [Poland](countries/poland.md) | 2695 | 2695 |
| [Austria](countries/austria.md) | 2267 | 2267 |
| [Sweden](countries/sweden.md) | 2162 | 2162 |
| [Japan](countries/japan.md) | 1566 | 1566 |
| [Switzerland](countries/switzerland.md) | 1343 | 1343 |
| [Belgium](countries/belgium.md) | 1032 | 1032 |
| [Portugal](countries/portugal.md) | 1014 | 1014 |
| [Lithuania](countries/lithuania.md) | 952 | 952 |
| [United States](countries/united-states.md) | 913 | 913 |
| [Norway](countries/norway.md) | 832 | 832 |
| [Romania](countries/romania.md) | 800 | 800 |
| [Pakistan](countries/pakistan.md) | 771 | 274 |
| [Denmark](countries/denmark.md) | 721 | 721 |
| [Russia](countries/russia.md) | 706 | 706 |
| [Ireland](countries/ireland.md) | 691 | 690 |
| [Greece](countries/greece.md) | 668 | 668 |
| [Latvia](countries/latvia.md) | 653 | 653 |
| [Belarus](countries/belarus.md) | 596 | 596 |
| [Slovakia](countries/slovakia.md) | 529 | 529 |
| [Ukraine](countries/ukraine.md) | 491 | 491 |
| [Netherlands](countries/netherlands.md) | 480 | 480 |
| [Türkiye](countries/turkiye.md) | 437 | 437 |
| [South Korea](countries/south-korea.md) | 425 | 425 |
| [Iran](countries/iran.md) | 385 | 385 |
| [Croatia](countries/croatia.md) | 380 | 380 |
| [Hungary](countries/hungary.md) | 357 | 357 |
| [Slovenia](countries/slovenia.md) | 335 | 335 |
| [Nepal](countries/nepal.md) | 334 | 92 |
| [Estonia](countries/estonia.md) | 273 | 273 |
| [New Zealand](countries/new-zealand.md) | 240 | 240 |
| [China](countries/china.md) | 234 | 234 |
| [Bangladesh](countries/bangladesh.md) | 227 | 45 |
| [Finland](countries/finland.md) | 213 | 213 |
| [Sri Lanka](countries/sri-lanka.md) | 193 | 37 |
| [Morocco](countries/morocco.md) | 171 | 171 |
| [Tunisia](countries/tunisia.md) | 165 | 165 |
| [Malta](countries/malta.md) | 165 | 165 |
| [Canada](countries/canada.md) | 150 | 150 |
| [Albania](countries/albania.md) | 141 | 141 |
| [Bulgaria](countries/bulgaria.md) | 136 | 136 |
| [Azerbaijan](countries/azerbaijan.md) | 115 | 115 |
| [Bosnia & Herzegovina](countries/bosnia-herzegovina.md) | 106 | 106 |
| [Brazil](countries/brazil.md) | 105 | 105 |
| [Georgia](countries/georgia.md) | 96 | 96 |
| [Afghanistan](countries/afghanistan.md) | 95 | 16 |
| [Indonesia](countries/indonesia.md) | 95 | 95 |
| [Serbia](countries/serbia.md) | 89 | 89 |
| [Luxembourg](countries/luxembourg.md) | 84 | 84 |
| [Israel](countries/israel.md) | 79 | 79 |
| [Armenia](countries/armenia.md) | 69 | 69 |
| [Bhutan](countries/bhutan.md) | 65 | 16 |
| [Syria](countries/syria.md) | 65 | 65 |
| [Chile](countries/chile.md) | 61 | 61 |
| [Australia](countries/australia.md) | 59 | 59 |
| [Egypt](countries/egypt.md) | 55 | 55 |
| [Taiwan](countries/taiwan.md) | 50 | 50 |
| [Jordan](countries/jordan.md) | 49 | 49 |
| [Thailand](countries/thailand.md) | 46 | 46 |
| [Saudi Arabia](countries/saudi-arabia.md) | 46 | 46 |
| [Ghana](countries/ghana.md) | 42 | 42 |
| [Algeria](countries/algeria.md) | 41 | 41 |
| [Lebanon](countries/lebanon.md) | 37 | 37 |
| [North Macedonia](countries/north-macedonia.md) | 36 | 36 |
| [Vietnam](countries/vietnam.md) | 35 | 35 |
| [Montenegro](countries/montenegro.md) | 34 | 34 |
| [Kazakhstan](countries/kazakhstan.md) | 31 | 31 |
| [United Arab Emirates](countries/united-arab-emirates.md) | 30 | 30 |
| [Uzbekistan](countries/uzbekistan.md) | 29 | 29 |
| [Philippines](countries/philippines.md) | 28 | 28 |
| [South Africa](countries/south-africa.md) | 27 | 27 |
| [Malaysia](countries/malaysia.md) | 27 | 27 |
| [Palestinian Territories](countries/palestinian-territories.md) | 26 | 26 |
| [Kosovo](countries/kosovo.md) | 26 | 26 |
| [Mexico](countries/mexico.md) | 25 | 25 |
| [Oman](countries/oman.md) | 25 | 25 |
| [Angola](countries/angola.md) | 23 | 23 |
| [Libya](countries/libya.md) | 23 | 23 |
| [Cyprus](countries/cyprus.md) | 21 | 21 |
| [Iraq](countries/iraq.md) | 20 | 20 |
| [Argentina](countries/argentina.md) | 20 | 20 |
| [Cuba](countries/cuba.md) | 19 | 19 |
| [Guernsey](countries/guernsey.md) | 18 | 18 |
| [North Korea](countries/north-korea.md) | 16 | 16 |
| [Isle of Man](countries/isle-of-man.md) | 16 | 16 |
| [Mozambique](countries/mozambique.md) | 15 | 15 |
| [Peru](countries/peru.md) | 15 | 15 |
| [Jersey](countries/jersey.md) | 15 | 15 |
| [Venezuela](countries/venezuela.md) | 14 | 14 |
| [Gibraltar](countries/gibraltar.md) | 14 | 14 |
| [Singapore](countries/singapore.md) | 12 | 12 |
| [Namibia](countries/namibia.md) | 11 | 11 |
| [Nigeria](countries/nigeria.md) | 10 | 10 |
| [Yemen](countries/yemen.md) | 10 | 10 |
| [Cape Verde](countries/cape-verde.md) | 10 | 10 |
| [Colombia](countries/colombia.md) | 9 | 9 |
| [Tajikistan](countries/tajikistan.md) | 9 | 9 |
| [Sudan](countries/sudan.md) | 9 | 9 |
| [Haiti](countries/haiti.md) | 8 | 8 |
| [Moldova](countries/moldova.md) | 8 | 8 |
| [Panama](countries/panama.md) | 8 | 8 |
| [Qatar](countries/qatar.md) | 7 | 7 |
| [Timor-Leste](countries/timor-leste.md) | 7 | 7 |
| [Gambia](countries/gambia.md) | 7 | 7 |
| [Curaçao](countries/curacao.md) | 7 | 7 |
| [Uruguay](countries/uruguay.md) | 7 | 7 |
| [Liechtenstein](countries/liechtenstein.md) | 6 | 6 |
| [Dominican Republic](countries/dominican-republic.md) | 6 | 6 |
| [Myanmar (Burma)](countries/myanmar-burma.md) | 6 | 6 |
| [British Virgin Islands](countries/british-virgin-islands.md) | 6 | 6 |
| [Turkmenistan](countries/turkmenistan.md) | 6 | 6 |
| [Ethiopia](countries/ethiopia.md) | 5 | 5 |
| [San Marino](countries/san-marino.md) | 5 | 5 |
| [Paraguay](countries/paraguay.md) | 5 | 5 |
| [Cameroon](countries/cameroon.md) | 5 | 5 |
| [Kyrgyzstan](countries/kyrgyzstan.md) | 5 | 5 |
| [Mauritania](countries/mauritania.md) | 5 | 5 |
| [Suriname](countries/suriname.md) | 4 | 4 |
| [Bahrain](countries/bahrain.md) | 4 | 4 |
| [St. Kitts & Nevis](countries/st-kitts-nevis.md) | 4 | 4 |
| [Mali](countries/mali.md) | 4 | 4 |
| [Bolivia](countries/bolivia.md) | 4 | 4 |
| [Guatemala](countries/guatemala.md) | 4 | 4 |
| [Micronesia](countries/micronesia.md) | 4 | 4 |
| [Vatican City](countries/vatican-city.md) | 3 | 3 |
| [São Tomé & Príncipe](countries/sao-tome-principe.md) | 3 | 3 |
| [Niger](countries/niger.md) | 3 | 3 |
| [Honduras](countries/honduras.md) | 3 | 3 |
| [Bahamas](countries/bahamas.md) | 3 | 3 |
| [Andorra](countries/andorra.md) | 3 | 3 |
| [Grenada](countries/grenada.md) | 3 | 3 |
| [Bermuda](countries/bermuda.md) | 3 | 3 |
| [Guyana](countries/guyana.md) | 3 | 3 |
| [Uganda](countries/uganda.md) | 3 | 3 |
| [Nicaragua](countries/nicaragua.md) | 2 | 2 |
| [Congo - Kinshasa](countries/congo-kinshasa.md) | 2 | 2 |
| [Mongolia](countries/mongolia.md) | 2 | 2 |
| [St. Vincent & Grenadines](countries/st-vincent-grenadines.md) | 2 | 2 |
| [Antigua & Barbuda](countries/antigua-barbuda.md) | 2 | 2 |
| [Dominica](countries/dominica.md) | 2 | 2 |
| [Kenya](countries/kenya.md) | 2 | 2 |
| [Tanzania](countries/tanzania.md) | 2 | 2 |
| [Sint Maarten](countries/sint-maarten.md) | 2 | 2 |
| [Guinea-Bissau](countries/guinea-bissau.md) | 2 | 2 |
| [Barbados](countries/barbados.md) | 2 | 2 |
| [Mauritius](countries/mauritius.md) | 2 | 2 |
| [Kuwait](countries/kuwait.md) | 2 | 2 |
| [Unknown](countries/unknown.md) | 1 | 0 |
| [Western Sahara](countries/western-sahara.md) | 1 | 1 |
| [Benin](countries/benin.md) | 1 | 1 |
| [Senegal](countries/senegal.md) | 1 | 1 |
| [Côte d’Ivoire](countries/cote-d-ivoire.md) | 1 | 1 |
| [St. Lucia](countries/st-lucia.md) | 1 | 1 |
| [Iceland](countries/iceland.md) | 1 | 1 |
| [Ecuador](countries/ecuador.md) | 1 | 1 |
| [Faroe Islands](countries/faroe-islands.md) | 1 | 1 |
| [Aruba](countries/aruba.md) | 1 | 1 |
| [Jamaica](countries/jamaica.md) | 1 | 1 |
| [Burkina Faso](countries/burkina-faso.md) | 1 | 1 |
| [Monaco](countries/monaco.md) | 1 | 1 |
| [Brunei](countries/brunei.md) | 1 | 1 |
| [Cambodia](countries/cambodia.md) | 1 | 1 |
| [Tonga](countries/tonga.md) | 1 | 1 |
| [St. Helena](countries/st-helena.md) | 1 | 1 |
| [Guinea](countries/guinea.md) | 1 | 1 |
| [Central African Republic](countries/central-african-republic.md) | 1 | 1 |
| [Madagascar](countries/madagascar.md) | 1 | 1 |
