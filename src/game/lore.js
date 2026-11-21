// "Learn more" cards: short, sourced-in-spirit notes on the people, animals and things you can select.
// Kept to well-established facts; where something is a reconstruction in this game, the card says so.
export const LORE = {
  // ---- soldiers
  'guard-siddi': { t: 'Siddi guard', b: 'The Siddis of Janjira were of East African (Habshi) descent, admirals to the Ahmadnagar and later the Mughal and Bijapur courts, who held the island from the late 1400s or 1500s into the 20th century. Their garrison held off Maratha, Portuguese and others; the fort was never taken by assault.' },
  'musketeer-siddi': { t: 'Siddi musketeer', b: 'Indian infantry of the 17th and 18th centuries carried the toradar, a long matchlock fired by a smouldering cord. It was slow to load (a shot every half minute or so) but accurate enough behind a parapet, where the defenders of a sea fort did most of their fighting.' },
  'gunner-siddi': { t: 'Gunner', b: 'Gun crews served the iron and bronze guns on the bastions: sponging, loading powder and shot, ramming, laying and firing with a linstock. Janjira mounted hundreds of guns, among them the great Kalal Bangadi.' },
  'archer-siddi': { t: 'Archer', b: 'The composite bow remained in Indian armies alongside the matchlock well into the 18th century: lighter, quicker to shoot, and favoured by cavalry.' },
  'guard-rajput': { t: 'Rajput guard', b: 'The Rathores of Marwar, who built Mehrangarh, and the Sisodias of Mewar, who held Chittorgarh and Kumbhalgarh, were Rajput clans whose soldiers wore the jama coat, a sash (kamarband) and the wound safa turban, and fought with sword, spear and shield as well as the matchlock.' },
  'guard-maratha': { t: 'Maratha infantryman', b: 'The Maratha armies of Shivaji and the Peshwas drew their infantry from the hill country of the Western Ghats (the Mavalas): light, quick troops at home on the steep paths of the Deccan forts.' },
  'musketeer-maratha': { t: 'Maratha musketeer', b: 'Maratha infantry carried matchlocks as well as swords and spears; the navy under Kanhoji Angre and his successors fought the Siddis of Janjira for control of the Konkan coast through the 18th century.' },
  'guard-mughal': { t: 'Mughal soldier', b: 'Mughal armies besieged most of the great forts of the Deccan and Rajasthan: Chittorgarh (1567–68), Daulatabad (1633), Golconda (1687). They were famous for their artillery and their mining of walls.' },
  'guard-deccan': { t: 'Deccani soldier', b: 'The Deccan sultanates (Ahmadnagar, Bijapur, Golconda) fielded armies of Deccanis, Habshis (Africans) and foreign recruits, and built the great artillery forts of the plateau.' },
  sepoy: { t: 'Sepoy', b: 'Indian soldiers in the service of the East India Company and later the Crown. At Gwalior in 1780 Captain Popham\'s sepoys took the fort by night, climbing the rock face by ladders and ropes.' },
  // ---- people
  courtier: { t: 'Courtier', b: 'Men of the court wore the long jama, a sash and a turban whose style marked their rank and region.' },
  villager: { t: 'Townsman', b: 'Most people in and around a fort were not soldiers but cultivators, artisans, traders and servants; many forts, like Jaisalmer, were whole towns.' },
  farmer: { t: 'Cultivator', b: 'Farming followed the monsoon: kharif crops (millets, rice) sown with the rains in June and July, rabi crops (wheat, pulses) sown after them on watered land.' },
  porter: { t: 'Porter', b: 'Grain, salt, cloth and powder moved on men\'s heads and backs, on bullocks and camels, and on the coast by boat.' },
  wrestler: { t: 'Pehlwan (wrestler)', b: 'Wrestling in the akhada, the earth pit, was a soldier\'s training across India; the mallakhamb pole of Maharashtra was used for strength and grip.' },
  // ---- animals
  horse: { t: 'Marwari horse', b: 'The Marwari, bred in Marwar (Jodhpur), is known for its inward-curving ear tips, hardiness and endurance in heat. It was the mount of the Rajput cavalry.' },
  elephant: { t: 'Asian elephant', b: 'Elephants carried rulers, hauled guns and stores, and were used in battle and to batter gates, which is why many fort gates are studded with iron spikes.' },
  'elephant-royal': { t: 'State elephant', b: 'Rulers rode in the howdah of a caparisoned elephant on state occasions and in war, as a moving command post.' },
  cow: { t: 'Zebu cattle', b: 'Humped Indian cattle (Bos indicus), kept for milk, ploughing and carting.' },
  buffalo: { t: 'Water buffalo', b: 'Kept for milk richer than the cow\'s and for ploughing wet fields.' },
  camel: { t: 'Dromedary', b: 'The camel of Rajasthan carried goods and riders across the Thar; the Rathores of Jodhpur kept camel troops.' },
  goat: { t: 'Goat', b: 'Goats were kept for milk and meat by nearly every household; they browse where cattle cannot.' },
  sheep: { t: 'Sheep', b: 'The Deccan and Rajasthan bred hardy coarse-wooled sheep for wool, meat and manure.' },
  chicken: { t: 'Hen', b: 'Domestic fowl descend from the red junglefowl of India and Southeast Asia.' },
  rooster: { t: 'Cock', b: 'Domestic fowl descend from the red junglefowl of India and Southeast Asia.' },
  dog: { t: 'Indian pariah dog', b: 'The free-ranging native dog of the subcontinent: medium-sized, short-coated, curled tail; among the oldest dog lineages.' },
  boar: { t: 'Indian wild boar', b: 'Hunted on foot and on horseback with spears; a cornered boar is dangerous.' },
  wolf: { t: 'Indian wolf', b: 'A smaller wolf of the plains and scrub of western and central India, known as a killer of sheep and goats; Kumbhalgarh\'s hills are now a sanctuary for it.' },
  peafowl: { t: 'Indian peafowl', b: 'India\'s national bird, protected in many princely states and sacred to many as the mount of Kartikeya; common round forts and temples.' },
  langur: { t: 'Hanuman langur', b: 'The grey langur, Hanuman\'s monkey, lives on many forts in troops that sun themselves on the walls.' },
  macaque: { t: 'Rhesus macaque', b: 'Bold, quick monkeys that live alongside people at temples and forts across northern and central India.' },
  rabbit: { t: 'Indian hare', b: 'The black-naped hare of the scrub and fields, fast and wary.' },
  cat: { t: 'Cat', b: 'Kept in granaries and stores against rats and mice.' },
  // ---- things
  gun: { t: 'Fortress gun', b: 'Indian founders cast great guns in bronze and forged them in iron from the 16th century. Guns on bastions fired through embrasures in the parapet; they could not depress far enough to fire at the foot of their own walls, which is why gates were flanked by towers for musketry.' },
  granary: { t: 'Granary', b: 'A fort expecting a siege laid in months of grain. A garrison ate about a seer (some 0.9 kg) a man a day, so stores were counted in days of provisions.' },
  barracks: { t: 'Barracks', b: 'Long ranges of rooms for the garrison, often built against the walls.' },
  palace: { t: 'Palace', b: 'Fort palaces rose in storeys round courtyards and cisterns, with jharokha balconies to catch the breeze and the view.' },
  temple: { t: 'Shrine', b: 'Most forts held temples or shrines, often older than the walls round them.' },
  mosque: { t: 'Mosque', b: 'Forts held by Muslim rulers had their mosques; Janjira\'s stands beside its smaller tank.' },
  house: { t: 'House', b: 'Houses of stone or mud with flat or tiled roofs; in Jaisalmer they are of the same golden sandstone as the fort.' },
};
export function loreFor(sel) {
  if (!sel) return null;
  if (sel.type === 'animal' || sel.type === 'soldier') return LORE[sel.a.s.kind] || LORE[sel.a.s.kind.replace(/-(grey|chestnut|black|war)$/, '')] || null;
  if (sel.type === 'gun') return LORE.gun;
  if (sel.type === 'garrison') return LORE[sel.G.use] || (sel.G.kind === 'bastion' ? { t: 'Bastion', b: 'Round bastions project from the curtain wall so that their guns and muskets can sweep its face; their parapets are pierced with embrasures.' } : null);
  if (sel.type === 'field') return { t: sel.F.C.label, b: sel.F.C.note };
  return null;
}
