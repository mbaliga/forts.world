// Cultural and archaeological places are a separate layer from the fort inventory.
// Coordinates mark UNESCO property components or explicitly approximate regional anchors.
export const HERITAGE_PLACES = [
  {
    id: 'taxila-dharmarajika', name: 'Taxila · Dharmarajika stupa and monastery',
    kind: 'Buddhist archaeological landscape', lat: 33.744669, lon: 72.842667,
    presentCountry: 'Pakistan', period: 'Prehistoric–medieval; major Buddhist centre, 5th c. BCE–2nd c. CE',
    positionEvidence: 'UNESCO component coordinate; one point in a serial archaeological property',
    note: 'Taxila (Takṣaśilā) is a broad, multi-period landscape, not a single fort or one fixed city point. UNESCO describes it as a major Buddhist centre of learning and a Silk Road branch settlement, with successive urban sites including Bhir, Sirkap and Sirsukh.',
    sources: [['UNESCO Taxila property','https://whc.unesco.org/en/list/139/'],['UNESCO Taxila component coordinates','https://whc.unesco.org/fr/list/139/cartes']]
  },
  {
    id: 'pushkalavati-bala-hisar', name: 'Pushkalavati · Bala Hisar mound, Charsadda',
    kind: 'Ancient campaign settlement and archaeological mound', lat: 34.206282333, lon: 71.828915972,
    presentCountry: 'Pakistan · Khyber Pakhtunkhwa', period: '6th c. BCE–16th c. CE; Alexander’s campaign, 327 BCE',
    positionEvidence: 'Pakistan Department of Archaeology and Museums site coordinate for Bala Hisar mound; not the full Pushkalavati urban landscape',
    note: 'Pakistan’s Department of Archaeology identifies Bala Hisar with ancient Pushkalavati, a former Gandhara capital, and reports 52 cultural layers from the 6th century BCE through later occupation. Its account describes resistance to Alexander’s campaign for about a month in 327 BCE and the later shift of political importance toward Peshawar under Kanishka. Use this as a settlement/campaign node linked to nearby Peshawar, river confluences and Taxila; it is not a fort entry, and the marker covers only the Bala Hisar mound rather than every Pushkalavati component.',
    sources: [['Pakistan Department of Archaeology and Museums: Bala Hisar Mound record and coordinates','https://doam.gov.pk/public/sites/2160'],['UNESCO: Taxila, a Silk Road branch settlement and Buddhist learning centre','https://whc.unesco.org/en/list/139/'],['UNESCO Tentative List: Silk Road Sites in India, proposed northwest branches','https://whc.unesco.org/en/tentativelists/5492/']]
  },
  {
    id: 'nalanda-mahavihara', name: 'Nalanda Mahavihara',
    kind: 'Monastic and scholastic archaeological site', lat: 25.136667, lon: 85.443889,
    presentCountry: 'India · Bihar', period: '3rd c. BCE–13th c. CE',
    positionEvidence: 'UNESCO property coordinate',
    note: 'A major monastic and scholastic institution with archaeological remains spanning the 3rd century BCE to the 13th century CE. This site belongs in cultural, learning and pilgrimage histories as well as regional travel networks.',
    sources: [['UNESCO Nalanda Mahavihara property','https://whc.unesco.org/en/list/1502/'],['UNESCO property coordinates','https://whc.unesco.org/en/list/1502/maps']]
  },
  {
    id: 'bodh-gaya-mahabodhi', name: 'Bodh Gaya · Mahabodhi Temple Complex',
    kind: 'Buddhist pilgrimage and sacred landscape', lat: 24.695280, lon: 84.993890,
    presentCountry: 'India · Bihar (Gaya district)', period: 'Ashokan foundation tradition; surviving temple principally 5th–6th c. CE',
    positionEvidence: 'UNESCO property coordinate',
    note: 'Bodh Gaya is in Gaya district, about 16 km from Gaya city. UNESCO identifies the complex as a sacred site associated with the Buddha’s enlightenment and records an early temple under Ashoka.',
    sources: [['UNESCO Mahabodhi Temple Complex','https://whc.unesco.org/en/list/1056/'],['UNESCO property coordinates','https://whc.unesco.org/en/list/1056/maps']]
  },
  {
    id: 'bucephala-jhelum-vicinity', name: 'Bucephala · Jhelum vicinity (approximate)',
    kind: 'Ancient city tradition · debated location', lat: 32.933000, lon: 73.733000,
    presentCountry: 'Pakistan · Punjab', period: 'Alexander’s Hydaspes campaign, 326 BCE',
    positionEvidence: 'Approximate modern Jhelum vicinity anchor; ancient city location is unknown/debated',
    note: 'Bucephala (also Bucephalia/Boukephala) is associated in ancient tradition with Alexander’s campaign on the Hydaspes (Jhelum) and named for his horse Bucephalus. Plutarch says Alexander built the city where Bucephalus was buried; Arrian instead places the city at the point where Alexander began crossing and says the horse died there of toil and old age. The city’s exact location is not established; modern Jhelum is only a regional map anchor.',
    sources: [['Plutarch, Life of Alexander 62 · translation','https://lexundria.com/plut_alex/62/prr'],['Arrian, Anabasis V.19 · translation','https://www.gutenberg.org/files/46976/old/46976-h/46976-h.htm'],['Getty Thesaurus of Geographic Names · Bucephala location uncertainty','https://www.getty.edu/vow/TGNFullDisplay?english=N&find=&nation=vietnam&place=river&subjectid=6000998'],['Scholarly discussion of disputed site','https://etheses.whiterose.ac.uk/id/eprint/32067/1/Sairam_S_Ancient%20History_MAR_2022.pdf']]
  },
  {
    id: 'bamiyan-valley', name: 'Bamiyan Valley · cliff and archaeological landscape',
    kind: 'Buddhist and Islamic archaeological landscape', lat: 34.846942, lon: 67.825247,
    presentCountry: 'Afghanistan', period: '1st–13th c. CE',
    positionEvidence: 'UNESCO component coordinate; property includes several separate sites',
    note: 'The valley preserves Buddhist monuments, caves and later fortified settlements, including Shahr-i Zuhak and Shahr-i Ghulghulah. UNESCO describes the valley as a Silk Route stopping place linking China and India via ancient Bactria. A single marker cannot represent all component sites.',
    sources: [['UNESCO Bamiyan Valley property','https://whc.unesco.org/en/list/208/'],['UNESCO component coordinates','https://whc.unesco.org/fr/list/208/cartes/']]
  },
  {
    id: 'jam-minaret', name: 'Minaret and archaeological remains of Jam',
    kind: 'Ghurid archaeological landscape', lat: 34.396417, lon: 64.515889,
    presentCountry: 'Afghanistan', period: '12th–13th c. CE',
    positionEvidence: 'UNESCO component coordinate',
    note: 'A 12th-century minaret and associated archaeological remains in a remote Hari Rud valley setting; UNESCO identifies the site with Ghurid power and regional architectural traditions.',
    sources: [['UNESCO Jam property','https://whc.unesco.org/en/list/211/'],['UNESCO component coordinates','https://whc.unesco.org/en/list/211/maps']]
  },
  {
    id: 'bam-cultural-landscape', name: 'Bam · Arg-e Bam and cultural landscape',
    kind: 'Fortified town and qanat oasis landscape', lat: 29.116830, lon: 58.366667,
    presentCountry: 'Iran', period: 'Achaemenid origins; major trade centre, 7th–11th c. CE',
    positionEvidence: 'UNESCO property coordinate; includes a broad cultural landscape',
    note: 'Arg-e Bam is a major fortified mud-brick town within a wider oasis landscape shaped by qanats, trade routes and associated forts. It is an example of how a fort inventory can connect to water systems, settlement and regional trade rather than treating the citadel as an isolated point.',
    sources: [['UNESCO Bam and its Cultural Landscape','https://whc.unesco.org/en/list/1208/'],['UNESCO property coordinates','https://whc.unesco.org/en/list/1208/maps/']]
  },
  {
    id:'bhopal-kamlapati-panchakki',name:'Bhopal · Rani Kamlapati Mahal, panchakki and lake system',
    kind:'Palace, water mill and urban hydraulic landscape',lat:23.250944,lon:77.397919,
    presentCountry:'India · Madhya Pradesh',period:'Gond phase, early 18th c.; palace on the Bhojpal embankment',
    positionEvidence:'Palace coordinate used for the complex; panchakki lies in an adjoining structure and is not separately georeferenced',
    note:'The National Monuments Authority’s draft conservation plan describes the palace on the embankment between Upper and Lower Lakes and identifies an adjoining panchakki (water mill) and baoli supplied from Upper Lake through a tunnel. The mill is associated with the palace complex, not a separate mill in the lake gap. Map this with the embankment, water level and tunnel as a linked water system; do not invent tunnel geometry.',
    sources:[['National Monuments Authority: draft conservation plan for Rani Kamlapati Palace','https://www.nma.gov.in/showfile.php?lang=1&level=1&lid=2203&ls_id=1766'],['Bhopal Development Plan 2031: historic fort, lake and wall context','https://mptownplan.gov.in/LU-panel/Bhopal/Amrut/ENGLISH/VOL1.pdf'],['Incredible India: Rani Kamlapati Palace','https://www.incredibleindia.gov.in/en/madhya-pradesh/bhopal/rani-kamlapati-palace']]
  },
  {
    id:'bhopal-fatehgarh-walled-city',name:'Bhopal · Fatehgarh and Shahr-i-Khas fortifications',
    kind:'Fortified town and historic urban landscape · approximate anchor',lat:23.260,lon:77.400,
    presentCountry:'India · Madhya Pradesh',period:'Dost Mohammad Khan period, 1720s; later fortified urban additions',
    positionEvidence:'Approximate old-city anchor only; historic fort and wall geometry not registered',
    note:'The state development plan describes Fatehgarh Fort, the fortified Shahjahanabad extension and historic gateways; it names Somwara, Budhwara, Itwara and Jumerati among the Shahr-i-Khas entrances. UN-Habitat reports 14 historic gates to the fortified city. The Imperial Gazetteer describes a wall enclosing the Shahr-i-Khas. Parts of the old defensive fabric have later urban and government uses. This point marks the old-city system; individual gate positions, wall alignments and reused buildings are not registered here.',
    sources:[['Bhopal Development Plan 2031, heritage chapter and gate-location figures','https://mptownplan.gov.in/LU-panel/Bhopal/Amrut/ENGLISH/VOL1.pdf'],['UN-Habitat India, Bhopal City Profile and Diagnostic Report, 2021, §4.1.2','https://unhabitat.org.in/sites/default/files/2024-11/city_profile_and_diagnostic_report_bhopal_compressed_compressed.pdf'],['Imperial Gazetteer of India: Bhopal city (historical account)','https://library.bjp.org/jspui/bitstream/123456789/1941/1/The-Imperial-Gazetteer-Of-India-Vol-8%28Berhampore%20to%20Bombay%29.pdf'],['Government of Bhopal District: history','https://bhopal.nic.in/en/history/']]
  },
  {
    id:'islamnagar-jagdishpur',name:'Islamnagar (Jagdishpur) · fort, palaces and wall',
    kind:'Fortified settlement and palace group',lat:23.35596,lon:77.41701,
    presentCountry:'India · Madhya Pradesh',period:'Early 18th c.; Bhopal–Scindia political frontier, 1806–17 episode',
    positionEvidence:'OpenStreetMap-derived Fort Wall feature coordinate; nearby Chaman and Rani Mahal are separate components',
    note:'The Madhya Pradesh protected-monument register distinguishes the fort wall, Chaman Mahal, Rani Mahal and Gond Mahal. Treat these as an ensemble of defensive, courtly and garden architecture; do not collapse the whole site into a single palace or assume every surviving wall is intact.',
    sources:[['OpenStreetMap-derived mapped site anchor','https://mapcarta.com/W903271751'],['India Cine Hub: Bhopal heritage places','https://indiacinehub.gov.in/location/bhopal'],['Government of Bhopal District: history','https://bhopal.nic.in/en/history/']]
  },
  {
    id:'indore-rajwada',name:'Indore · Rajwada (Holkar Palace)',
    kind:'Fortified palace and dynastic urban centre',lat:22.71802,lon:75.85476,
    presentCountry:'India · Madhya Pradesh',period:'Holkar period, 18th–19th c.; earlier building tradition often dated 1747–49',
    positionEvidence:'Modern mapped building anchor; not an historic perimeter survey',
    note:'The Indore district describes the palace as a Holkar-era seven-storey structure with cylindrical corner bastions; the city’s own heritage narrative places it at the political and ceremonial centre. The bastions support classification as a fortified palace, but do not make this a complete city fort or a war scene by themselves. Its urban connection to markets, Krishnapura Chhatris and Holkar power belongs in the campaign view.',
    sources:[['Indore District: Rajwada','https://indore.nic.in/en/tourist-place/rajwada/'],['Madhya Pradesh Tourism: Indore heritage walk','https://www.mptourism.com/heritage-walk-in-indore.html'],['OpenStreetMap-derived modern location anchor','https://mapcarta.com/W191830230']]
  },
  {
    id:'indore-lalbagh-palace',name:'Indore · Lalbagh Palace',
    kind:'Holkar royal palace and political landscape',lat:22.70204,lon:75.84668,
    presentCountry:'India · Madhya Pradesh',period:'Holkar dynasty, late 19th–early 20th c.',
    positionEvidence:'Modern mapped building anchor; historic grounds require boundary registration',
    note:'A later Holkar residence in a distinct part of Indore from Rajwada. Preserve its own date, grounds and relationship to the city rather than treating Indore’s dynastic history as a single palace site.',
    sources:[['Indore District: Lalbagh Palace','https://indore.nic.in/en/tourist-place/lalbag-palace/'],['OpenStreetMap-derived modern location anchor','https://mapcarta.com/W192149966']]
  },
  {
    id:'indore-krishnapura-chhatris',name:'Indore · Krishnapura Chhatris',
    kind:'Holkar dynastic memorial landscape',lat:22.71878,lon:75.85802,
    presentCountry:'India · Madhya Pradesh',period:'Holkar memorials, 19th c.',
    positionEvidence:'Approximate mapped heritage-site point; no surveyed memorial boundary',
    note:'The cenotaph ensemble stands on the Khan River near Rajwada and connects royal memory, river edge and the palace district. These are not forts, but they help represent the political landscape and routes through Holkar Indore.',
    sources:[['Indore Smart City: heritage walk plan','https://smartcityindore.org/wp-content/uploads/2019/11/ABD-Master-Plan-Smart-city-Indore_Final-TCP_21.06.2018.pdf'],['2011 Census District Handbook: Indore heritage account','https://censusindia.gov.in/nada/index.php/catalog/712/download/2496/DH_2011_2322_PART_A_DCHB_INDORE.pdf'],['OpenStreetMap-derived modern location anchor','https://mapcarta.com/W191830229']]
  },
  {
    id:'hyderabad-qutb-shahi-urban-landscape',name:'Hyderabad · Golconda, Qutb Shahi tombs and Charminar',
    kind:'Fort capital and later urban-monument landscape · approximate city anchor',lat:17.383,lon:78.401,
    presentCountry:'India · Telangana',period:'Kakatiya and Qutb Shahi periods; Golconda capital, 14th–17th c.; Hyderabad founded 1591',
    positionEvidence:'Golconda fort point; other components are separately located and should not be read at this point',
    note:'The map includes playable Golconda and Bhongir forts. Golconda was a fortified capital containing ramparts, gates, bastions, armoury, palaces and water systems; the nearby Qutb Shahi Tombs form a separate royal necropolis, and Charminar marks the 1591 foundation of Hyderabad outside Golconda. A further eastward fort-palace project begun in 1620 survives at Sultan Nagar as Qila-yi Kohna. These are distinct sites and phases, not one perimeter. The wider Hyderabad city walls and gates still need individually registered geometry.',
    sources:[['UNESCO tentative-list dossier: Qutb Shahi Monuments of Hyderabad','https://whc.unesco.org/en/tentativelists/5573/'],['Hyderabad District: Golconda Fort','https://hyderabad.telangana.gov.in/tourist-place/golconda-fort/'],['Telangana Tourism: heritage sites and monuments','https://www.tourism.telangana.gov.in/customized-heritage-sites-monuments']]
  },
  {
    id:'sultan-nagar-qila-yi-kohna', name:'Sultan Nagar Fort · Qila-yi Kohna and mosque',
    kind:'Qutb Shahi fort-palace and mosque remains', lat:17.358923, lon:78.547134,
    presentCountry:'India · Telangana', period:'Construction begun 1620; project abandoned under Abdullah Qutb Shah',
    positionEvidence:'Approximate modern mapped feature coordinate; historic footprint and boundary not surveyed here',
    note:'A distinct, east-of-old-Hyderabad Qutb Shahi fort-palace project, also called Sultan Nagar Fort and Qila-yi Kohna. The architectural guide places the remains in Sururnagar and says construction began for Sultan Muhammad Qutb Shah before being abandoned by his successor. Keep this separate from Golconda Fort; this point is only a location anchor, not a reconstruction of the unfinished enclosure.',
    sources:[['Omar Khalidi, A Guide to Architecture in Hyderabad, Deccan, India (2009), pp. 14–15','https://dspace.mit.edu/bitstream/handle/1721.1/69102/HyderabadGuide_2009.pdf'],['Wikimedia Commons geolocated feature record','https://commons.wikimedia.org/wiki/Category:Sultan_Nagar_Fort']]
  }
];
