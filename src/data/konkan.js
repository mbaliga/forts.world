// The Konkan campaign region: Janjira and the coast first, with the Sahyadri passes behind it.
// Every fact carries an evidence grade, as the design requires:
//   measured    surveyed or taken from a dataset (with its source)
//   documented  stated in historical or heritage sources (UNESCO, ASI, state archaeology, standard histories)
//   inferred    reasoned from general knowledge or practice; positions from memory are 'inferred' (about ±2 km)
//   unknown     not known; the game shows a placeholder
// Dates are years CE. A site does not exist in a campaign year before its first phase.
export const EVIDENCE = { measured: 'measured', documented: 'documented', inferred: 'inferred', unknown: 'unknown' };
export const OWNERS = {
  koli: { name: 'Koli chiefs', col: '#8a7a5a' }, ahmadnagar: { name: 'Nizam Shahis of Ahmadnagar', col: '#3f7f5f' },
  siddi: { name: 'Siddis of Janjira', col: '#2f6b45' }, bijapur: { name: 'Adil Shahis of Bijapur', col: '#5e8c3a' },
  maratha: { name: 'Marathas', col: '#d36a1a' }, angre: { name: 'Angres (Maratha admirals)', col: '#b8501a' },
  peshwa: { name: 'Peshwas', col: '#c0501e' }, mughal: { name: 'Mughals', col: '#7a4a9a' },
  portuguese: { name: 'Portuguese', col: '#2c5aa0' }, english: { name: 'English East India Company', col: '#a02c2c' },
  british: { name: 'British Raj', col: '#7a2020' }, janjira: { name: 'Janjira State', col: '#2f6b45' }, india: { name: 'Republic of India', col: '#4a6a8a' },
  yadava: { name: 'Yadavas of Devagiri', col: '#9a7a2a' }, delhi: { name: 'Delhi Sultanate', col: '#5a5a8a' }, bahmani: { name: 'Bahmani Sultanate', col: '#2a7a7a' }, nizam: { name: 'Nizams of Hyderabad', col: '#6a4a8a' },
};
// node: { id, name, kind: fort|port|town|pass, lat, lon, pos: evidence of position, phases: [{ from, to?, owner, note, ev }],
//         playable?: level id, water?: sea|creek|river|none, stores? (kg grain kept), unesco? }
const N = (o) => Object.assign({ pos: 'inferred', water: 'none', stores: 0, region: 'A' }, o);
export const NODES = [
  // ---- sea forts and coastal forts
  N({ id: 'murud-janjira', name: 'Murud-Janjira', kind: 'fort', lat: 18.2996, lon: 72.9644, pos: 'measured', water: 'sea', playable: 'murud-janjira', stores: 60000,
    phases: [{ from: 1490, to: 1567, owner: 'siddi', note: 'A wooden fort on the island, held for Ahmadnagar by its Siddi admirals (tradition; dates uncertain).', ev: 'inferred' },
      { from: 1567, to: 1948, owner: 'siddi', note: 'The stone fort; the Siddis hold it against every assault, the Marathas included. Never taken.', ev: 'documented' },
      { from: 1948, owner: 'india', note: 'Janjira State merges into India; the fort is a protected monument.', ev: 'documented' }] }),
  N({ id: 'padmadurg', name: 'Padmadurg (Kasa)', kind: 'fort', lat: 18.322, lon: 72.948, water: 'sea', playable: 'padmadurg',
    phases: [{ from: 1676, to: 1818, owner: 'maratha', note: 'Earlier construction date and long ownership are inferred and need reconciliation with the Kolaba Gazetteer, which cites a newly built fort around 1693.', ev: 'inferred' }, { from: 1818, owner: 'british', note: '', ev: 'inferred' }] }),
  N({ id: 'khanderi', name: 'Khanderi', kind: 'fort', lat: 18.7043, lon: 72.8133, water: 'sea', unesco: true,
    phases: [{ from: 1679, to: 1818, owner: 'maratha', note: 'Fortified by Shivaji in 1679 off the mouth of Bombay harbour; a component of the Maratha Military Landscapes (UNESCO World Heritage, 2025).', ev: 'documented' }, { from: 1818, owner: 'british', note: '', ev: 'inferred' }] }),
  N({ id: 'underi', name: 'Underi', kind: 'fort', lat: 18.700, lon: 72.830, water: 'sea',
    phases: [{ from: 1680, to: 1759, owner: 'siddi', note: 'Fortified by the Siddis beside Khanderi in answer to Shivaji.', ev: 'inferred' }, { from: 1759, owner: 'angre', note: '', ev: 'inferred' }] }),
  N({ id: 'kolaba', name: 'Kolaba (Alibag)', kind: 'fort', lat: 18.635, lon: 72.866, water: 'sea',
    phases: [{ from: 1680, to: 1713, owner: 'maratha', note: 'Fortified under Shivaji.', ev: 'inferred' }, { from: 1713, to: 1840, owner: 'angre', note: 'The seat of the Angre admirals.', ev: 'documented' }, { from: 1840, owner: 'british', note: '', ev: 'inferred' }] }),
  N({ id: 'revdanda', playable: 'revdanda', name: 'Revdanda (Chaul)', kind: 'fort', lat: 18.5474, lon: 72.9268, water: 'creek',
    phases: [{ from: 1524, to: 1740, owner: 'portuguese', note: 'Portuguese Chaul.', ev: 'documented' }, { from: 1740, owner: 'peshwa', note: 'Ceded after the Vasai campaign.', ev: 'inferred' }] }),
  N({ id: 'korlai', playable: 'korlai', name: 'Korlai', kind: 'fort', lat: 18.5377, lon: 72.9074, water: 'creek',
    phases: [{ from: 1594, to: 1740, owner: 'portuguese', note: 'Guards the Kundalika estuary opposite Chaul; the Gazetteer notes a 1592/1594 chronology disagreement.', ev: 'inferred' }, { from: 1740, owner: 'peshwa', note: '', ev: 'inferred' }] }),
  N({ id: 'suvarnadurg', name: 'Suvarnadurg', kind: 'fort', lat: 17.816389, lon: 73.084444, water: 'sea', unesco: true,
    phases: [{ from: 1600, to: 1660, owner: 'bijapur', note: 'A Bijapur island fort off Harnai.', ev: 'inferred' }, { from: 1660, to: 1755, owner: 'maratha', note: 'Taken by Shivaji in 1660; an Angre base; a component of the Maratha Military Landscapes (UNESCO World Heritage, 2025).', ev: 'documented' },
      { from: 1755, to: 1818, owner: 'peshwa', note: 'Taken from Tulaji Angre by a Company squadron and handed to the Peshwa (1755).', ev: 'documented' }, { from: 1818, owner: 'british', note: '', ev: 'inferred' }] }),
  N({ id: 'vijaydurg', name: 'Vijaydurg', kind: 'fort', lat: 16.560833, lon: 73.333333, water: 'sea', unesco: true, stores: 30000,
    phases: [{ from: 1200, to: 1653, owner: 'bijapur', note: 'An older fort, enlarged under Bijapur.', ev: 'inferred' }, { from: 1653, to: 1756, owner: 'angre', note: 'Shivaji\'s, then the Angres\' principal naval base.', ev: 'documented' },
      { from: 1756, to: 1818, owner: 'peshwa', note: 'Tulaji Angre\'s fleet burnt in 1756 by a Company and Peshwa attack.', ev: 'documented' }, { from: 1818, owner: 'british', note: '', ev: 'inferred' }] }),
  N({ id: 'sindhudurg', name: 'Sindhudurg', kind: 'fort', lat: 16.042, lon: 73.462, pos: 'inferred', water: 'sea', playable: 'sindhudurg', unesco: true, stores: 40000,
    phases: [{ from: 1667, to: 1765, owner: 'maratha', note: 'Built by Shivaji, 1664–67.', ev: 'documented' }, { from: 1765, to: 1766, owner: 'english', note: 'Taken by a Company force from Bombay and briefly held.', ev: 'inferred' }, { from: 1766, to: 1818, owner: 'maratha', note: '', ev: 'inferred' }, { from: 1818, owner: 'british', note: '', ev: 'inferred' }] }),
  // ---- hill forts behind the coast
  N({ id: 'raigad', name: 'Raigad', kind: 'fort', lat: 18.234, lon: 73.440, unesco: true, stores: 50000,
    phases: [{ from: 1656, to: 1689, owner: 'maratha', note: 'Taken by Shivaji in 1656; his capital; crowned here in 1674.', ev: 'documented' }, { from: 1689, to: 1733, owner: 'mughal', note: 'Taken by the Mughals in 1689.', ev: 'documented' }, { from: 1733, to: 1818, owner: 'peshwa', note: '', ev: 'inferred' }, { from: 1818, owner: 'british', note: 'Taken by the British in 1818.', ev: 'documented' }] }),
  N({ id: 'salher', name: 'Salher', kind: 'fort', lat: 20.722, lon: 73.942, unesco: true,
    phases: [{ from: 1600, to: 1671, owner: 'mughal', note: 'A hill fort of Baglana.', ev: 'inferred' }, { from: 1671, to: 1818, owner: 'maratha', note: 'Taken in 1671; the Marathas defeat a Mughal army before it in 1672. A component of the Maratha Military Landscapes (UNESCO, 2025).', ev: 'documented' }, { from: 1818, owner: 'british', note: '', ev: 'inferred' }] }),
  // ---- ports and towns
  N({ id: 'rajapuri', name: 'Rajapuri', kind: 'port', lat: 18.300, lon: 72.985, water: 'creek', stores: 8000, phases: [{ from: 1500, owner: 'siddi', note: 'The landing for Janjira on the mainland.', ev: 'documented' }] }),
  N({ id: 'murud', name: 'Murud', kind: 'town', lat: 18.325, lon: 72.962, water: 'sea', stores: 6000, phases: [{ from: 1500, owner: 'siddi', note: 'The Nawab\'s town on the mainland.', ev: 'inferred' }] }),
  N({ id: 'bombay', name: 'Bombay', kind: 'port', lat: 18.940, lon: 72.835, water: 'sea', stores: 80000, phases: [{ from: 1534, to: 1665, owner: 'portuguese', note: '', ev: 'documented' }, { from: 1665, to: 1858, owner: 'english', note: 'English from 1665; the Company\'s from 1668.', ev: 'documented' }, { from: 1858, owner: 'british', note: '', ev: 'documented' }] }),
  N({ id: 'dabhol', name: 'Dabhol', kind: 'port', lat: 17.590, lon: 73.180, water: 'creek', stores: 10000, phases: [{ from: 1400, to: 1660, owner: 'bijapur', note: 'An old port of the Deccan sultanates.', ev: 'inferred' }, { from: 1660, owner: 'maratha', note: '', ev: 'inferred' }] }),
  N({ id: 'ratnagiri', name: 'Ratnagiri', kind: 'port', lat: 16.990, lon: 73.300, water: 'sea', stores: 10000, phases: [{ from: 1600, to: 1670, owner: 'bijapur', note: '', ev: 'inferred' }, { from: 1670, to: 1818, owner: 'maratha', note: '', ev: 'inferred' }, { from: 1818, owner: 'british', note: '', ev: 'inferred' }] }),
  N({ id: 'malvan', name: 'Malvan', kind: 'port', lat: 16.060, lon: 73.470, water: 'sea', stores: 8000, phases: [{ from: 1600, to: 1660, owner: 'bijapur', note: '', ev: 'inferred' }, { from: 1660, owner: 'maratha', note: 'The town and anchorage opposite Sindhudurg.', ev: 'inferred' }] }),
  N({ id: 'mahad', name: 'Mahad', kind: 'town', lat: 18.083, lon: 73.420, water: 'river', stores: 12000, phases: [{ from: 1500, to: 1656, owner: 'bijapur', note: '', ev: 'inferred' }, { from: 1656, owner: 'maratha', note: 'Market town below Raigad, at the head of navigation on the Savitri.', ev: 'inferred' }] }),
  N({ id: 'pune', name: 'Pune', kind: 'town', lat: 18.520, lon: 73.856, water: 'river', stores: 60000, phases: [{ from: 1600, to: 1818, owner: 'maratha', note: 'Shivaji\'s jagir town, then the Peshwas\' capital.', ev: 'documented' }, { from: 1818, owner: 'british', note: '', ev: 'documented' }] }),
  // ---- passes over the Sahyadri: slow at any time, slower in the rains
  N({ id: 'bor-ghat', name: 'Bor Ghat', kind: 'pass', lat: 18.780, lon: 73.370, phases: [{ from: 1000, owner: null, note: 'The pass from the Konkan to Pune by Khandala.', ev: 'inferred' }] }),
  N({ id: 'varandha-ghat', name: 'Varandha Ghat', kind: 'pass', lat: 18.110, lon: 73.620, phases: [{ from: 1000, owner: null, note: 'From Mahad up to the Bhor plateau.', ev: 'inferred' }] }),
  N({ id: 'kumbharli-ghat', name: 'Kumbharli Ghat', kind: 'pass', lat: 17.400, lon: 73.680, phases: [{ from: 1000, owner: null, note: 'From Chiplun up to Karad.', ev: 'inferred' }] }),
  N({ id: 'amba-ghat', name: 'Amba Ghat', kind: 'pass', lat: 16.970, lon: 73.800, phases: [{ from: 1000, owner: null, note: 'From Ratnagiri up to Kolhapur.', ev: 'inferred' }] }),
  N({ id: 'naneghat', name: 'Naneghat', kind: 'pass', lat: 19.290, lon: 73.670, phases: [{ from: -200, owner: null, note: 'An ancient trade pass, with Satavahana inscriptions of the 2nd–1st c. BCE.', ev: 'documented' }] }),
  // ================================================================ region B: the Sahyadri passes and the Deccan
  N({ id: 'torna', name: 'Torna', kind: 'fort', region: 'B', lat: 18.276, lon: 73.622, stores: 15000, phases: [{ from: 1400, to: 1646, owner: 'bijapur', note: '', ev: 'inferred' }, { from: 1646, to: 1818, owner: 'maratha', note: 'The first fort Shivaji took, in 1646.', ev: 'documented' }, { from: 1818, owner: 'british', note: '', ev: 'inferred' }] }),
  N({ id: 'rajgad', name: 'Rajgad', kind: 'fort', region: 'B', lat: 18.246, lon: 73.682, unesco: true, stores: 30000, phases: [{ from: 1647, to: 1818, owner: 'maratha', note: 'Shivaji\'s capital before Raigad; a component of the Maratha Military Landscapes (UNESCO, 2025).', ev: 'documented' }, { from: 1818, owner: 'british', note: '', ev: 'inferred' }] }),
  N({ id: 'sinhagad', name: 'Sinhagad (Kondhana)', kind: 'fort', region: 'B', lat: 18.366, lon: 73.755, stores: 20000, phases: [{ from: 1500, to: 1647, owner: 'bijapur', note: '', ev: 'inferred' }, { from: 1647, to: 1665, owner: 'maratha', note: '', ev: 'inferred' }, { from: 1665, to: 1670, owner: 'mughal', note: 'Ceded by the treaty of Purandar (1665).', ev: 'documented' }, { from: 1670, to: 1818, owner: 'maratha', note: 'Retaken by Tanaji Malusare\'s night escalade in 1670.', ev: 'documented' }, { from: 1818, owner: 'british', note: '', ev: 'inferred' }] }),
  N({ id: 'purandar', name: 'Purandar', kind: 'fort', region: 'B', lat: 18.282, lon: 73.974, stores: 20000, phases: [{ from: 1500, to: 1649, owner: 'bijapur', note: '', ev: 'inferred' }, { from: 1649, to: 1665, owner: 'maratha', note: '', ev: 'inferred' }, { from: 1665, to: 1670, owner: 'mughal', note: 'Besieged by Jai Singh; the treaty of Purandar (1665) cedes it.', ev: 'documented' }, { from: 1670, to: 1818, owner: 'maratha', note: '', ev: 'inferred' }, { from: 1818, owner: 'british', note: '', ev: 'inferred' }] }),
  N({ id: 'lohagad', name: 'Lohagad', kind: 'fort', region: 'B', lat: 18.709, lon: 73.476, unesco: true, stores: 10000, phases: [{ from: 1500, to: 1657, owner: 'bijapur', note: '', ev: 'inferred' }, { from: 1657, to: 1665, owner: 'maratha', note: '', ev: 'inferred' }, { from: 1665, to: 1670, owner: 'mughal', note: 'Ceded at Purandar.', ev: 'documented' }, { from: 1670, to: 1818, owner: 'maratha', note: 'Watches the Bor Ghat road; a UNESCO component (2025).', ev: 'documented' }, { from: 1818, owner: 'british', note: '', ev: 'inferred' }] }),
  N({ id: 'pratapgad', name: 'Pratapgad', kind: 'fort', region: 'B', lat: 17.936, lon: 73.578, unesco: true, stores: 15000, phases: [{ from: 1656, to: 1818, owner: 'maratha', note: 'Built in 1656; Afzal Khan of Bijapur killed below it in 1659. A UNESCO component (2025).', ev: 'documented' }, { from: 1818, owner: 'british', note: '', ev: 'inferred' }] }),
  N({ id: 'shivneri', name: 'Shivneri', kind: 'fort', region: 'B', lat: 19.199, lon: 73.859, unesco: true, stores: 12000, phases: [{ from: 1490, to: 1636, owner: 'ahmadnagar', note: 'Shivaji was born here in 1630.', ev: 'documented' }, { from: 1636, to: 1716, owner: 'mughal', note: '', ev: 'inferred' }, { from: 1716, to: 1818, owner: 'maratha', note: '', ev: 'inferred' }, { from: 1818, owner: 'british', note: '', ev: 'inferred' }] }),
  N({ id: 'panhala', name: 'Panhala', kind: 'fort', region: 'B', lat: 16.812, lon: 74.110, unesco: true, stores: 30000, phases: [{ from: 1500, to: 1659, owner: 'bijapur', note: '', ev: 'inferred' }, { from: 1659, to: 1660, owner: 'maratha', note: 'Taken by Shivaji; besieged by Siddi Jauhar in 1660, Shivaji escaping to Vishalgad.', ev: 'documented' }, { from: 1660, to: 1673, owner: 'bijapur', note: '', ev: 'inferred' }, { from: 1673, to: 1844, owner: 'maratha', note: 'Later a seat of the Kolhapur state.', ev: 'inferred' }, { from: 1844, owner: 'british', note: '', ev: 'inferred' }] }),
  N({ id: 'ahmednagar', playable: 'ahmednagar', name: 'Ahmednagar', kind: 'fort', region: 'B', lat: 19.100, lon: 74.756, water: 'none', stores: 60000, phases: [{ from: 1490, to: 1600, owner: 'ahmadnagar', note: 'Capital of the Nizam Shahis; Chand Bibi defends it against the Mughals (1595–1600).', ev: 'documented' }, { from: 1600, to: 1759, owner: 'mughal', note: '', ev: 'inferred' }, { from: 1759, to: 1803, owner: 'peshwa', note: '', ev: 'inferred' }, { from: 1803, owner: 'british', note: 'Taken by Arthur Wellesley in 1803.', ev: 'documented' }] }),
  N({ id: 'daulatabad', name: 'Daulatabad (Devagiri)', kind: 'fort', region: 'B', lat: 19.942, lon: 75.213, playable: 'daulatabad', stores: 60000, phases: [{ from: 1187, to: 1318, owner: 'yadava', note: 'Devagiri, capital of the Yadavas.', ev: 'documented' }, { from: 1318, to: 1347, owner: 'delhi', note: 'Muhammad bin Tughluq renames it Daulatabad and moves his court there (1327).', ev: 'documented' }, { from: 1347, to: 1499, owner: 'bahmani', note: '', ev: 'inferred' }, { from: 1499, to: 1633, owner: 'ahmadnagar', note: '', ev: 'inferred' }, { from: 1633, to: 1724, owner: 'mughal', note: 'Taken by Shah Jahan\'s army in 1633.', ev: 'documented' }, { from: 1724, to: 1948, owner: 'nizam', note: '', ev: 'inferred' }, { from: 1948, owner: 'india', note: '', ev: 'documented' }] }),
  N({ id: 'satara', name: 'Satara', kind: 'town', region: 'B', lat: 17.680, lon: 74.000, water: 'river', stores: 30000, phases: [{ from: 1600, to: 1699, owner: 'bijapur', note: '', ev: 'inferred' }, { from: 1699, to: 1848, owner: 'maratha', note: 'Seat of the Chhatrapatis in the 18th century.', ev: 'inferred' }, { from: 1848, owner: 'british', note: '', ev: 'inferred' }] }),
  N({ id: 'kolhapur', name: 'Kolhapur', kind: 'town', region: 'B', lat: 16.700, lon: 74.240, water: 'river', stores: 30000, phases: [{ from: 1500, to: 1659, owner: 'bijapur', note: '', ev: 'inferred' }, { from: 1659, owner: 'maratha', note: 'Later the Kolhapur state.', ev: 'inferred' }] }),
  N({ id: 'wai', name: 'Wai', kind: 'town', region: 'B', lat: 17.950, lon: 73.890, water: 'river', stores: 10000, phases: [{ from: 1500, to: 1659, owner: 'bijapur', note: '', ev: 'inferred' }, { from: 1659, owner: 'maratha', note: '', ev: 'inferred' }] }),
  N({ id: 'junnar', name: 'Junnar', kind: 'town', region: 'B', lat: 19.205, lon: 73.880, water: 'river', stores: 15000, phases: [{ from: 1490, to: 1636, owner: 'ahmadnagar', note: 'Market town below Shivneri, on the road from Naneghat.', ev: 'inferred' }, { from: 1636, to: 1716, owner: 'mughal', note: '', ev: 'inferred' }, { from: 1716, owner: 'maratha', note: '', ev: 'inferred' }] }),
  N({ id: 'karad', name: 'Karad', kind: 'town', region: 'B', lat: 17.290, lon: 74.180, water: 'river', stores: 12000, phases: [{ from: 1500, to: 1659, owner: 'bijapur', note: '', ev: 'inferred' }, { from: 1659, owner: 'maratha', note: 'At the meeting of the Krishna and Koyna.', ev: 'inferred' }] }),
  N({ id: 'aurangabad', name: 'Aurangabad (Khadki)', kind: 'town', region: 'B', lat: 19.880, lon: 75.340, water: 'river', stores: 60000, phases: [{ from: 1610, to: 1636, owner: 'ahmadnagar', note: 'Founded as Khadki by Malik Ambar about 1610.', ev: 'documented' }, { from: 1636, to: 1724, owner: 'mughal', note: 'Aurangzeb\'s Deccan capital.', ev: 'documented' }, { from: 1724, to: 1948, owner: 'nizam', note: '', ev: 'inferred' }, { from: 1948, owner: 'india', note: '', ev: 'documented' }] }),
];
// what each place lives on: population, its harvest, its trade and resources (all inferred; for the economy)
export const ECON = {
  port: { pop: 6000, grow: 0.8, trade: 600, res: ['fish', 'salt', 'coconut', 'cloth'] }, town: { pop: 9000, grow: 1.05, trade: 300, res: ['rice', 'cloth', 'oil'] },
  fort: { pop: 600, grow: 0, trade: 0, res: [] }, pass: { pop: 0, grow: 0, trade: 0, res: [] },
};
export const RESOURCES_OF = { 'bor-ghat': ['timber'], 'varandha-ghat': ['timber'], 'kumbharli-ghat': ['teak'], 'amba-ghat': ['teak'], pune: ['horses', 'jowar'], satara: ['jowar'], ahmednagar: ['jowar', 'horses'], aurangabad: ['cotton', 'jowar'], kolhapur: ['jaggery', 'jowar'], mahad: ['rice', 'salt'], dabhol: ['salt', 'pepper'], bombay: ['cloth', 'guns'] };
// routes: sea lanes (closed in the monsoon), roads, ghat roads (slow; slower in the rains), creek ferries
// days: travel time in fair weather; monsoon: multiplier June–September (Infinity = closed)
export const ROUTES = [
  ['murud-janjira', 'rajapuri', 'ferry', 0.2], ['murud-janjira', 'murud', 'ferry', 0.2], ['murud-janjira', 'padmadurg', 'sea', 0.2],
  ['murud', 'revdanda', 'sea', 1], ['revdanda', 'korlai', 'ferry', 0.2], ['revdanda', 'kolaba', 'sea', 0.6], ['kolaba', 'khanderi', 'sea', 0.5], ['khanderi', 'underi', 'sea', 0.1], ['khanderi', 'bombay', 'sea', 0.8], ['kolaba', 'bombay', 'sea', 1],
  ['murud-janjira', 'suvarnadurg', 'sea', 2], ['suvarnadurg', 'dabhol', 'sea', 0.6], ['dabhol', 'ratnagiri', 'sea', 1.5], ['ratnagiri', 'vijaydurg', 'sea', 1.5], ['vijaydurg', 'malvan', 'sea', 1.5], ['malvan', 'sindhudurg', 'ferry', 0.1],
  ['rajapuri', 'mahad', 'road', 3], ['murud', 'revdanda', 'road', 2], ['mahad', 'raigad', 'road', 1], ['mahad', 'dabhol', 'road', 3], ['dabhol', 'ratnagiri', 'road', 4],
  ['mahad', 'varandha-ghat', 'ghat', 1.5], ['varandha-ghat', 'pune', 'road', 2], ['revdanda', 'bor-ghat', 'road', 3], ['bor-ghat', 'pune', 'ghat', 2], ['bombay', 'naneghat', 'road', 4], ['naneghat', 'salher', 'road', 6],
  ['dabhol', 'kumbharli-ghat', 'ghat', 2], ['ratnagiri', 'amba-ghat', 'ghat', 2], ['bor-ghat', 'naneghat', 'road', 3],
  // region B
  ['pune', 'sinhagad', 'road', 1], ['pune', 'purandar', 'road', 1.5], ['pune', 'rajgad', 'road', 2], ['rajgad', 'torna', 'ghat', 0.5], ['varandha-ghat', 'rajgad', 'road', 1.5],
  ['mahad', 'pratapgad', 'ghat', 1.5], ['pratapgad', 'wai', 'road', 1.5], ['wai', 'satara', 'road', 1], ['satara', 'karad', 'road', 1.5], ['karad', 'kumbharli-ghat', 'road', 1],
  ['karad', 'kolhapur', 'road', 2.5], ['kolhapur', 'panhala', 'road', 0.5], ['kolhapur', 'amba-ghat', 'road', 1.5], ['bor-ghat', 'lohagad', 'road', 0.5],
  ['pune', 'junnar', 'road', 2.5], ['junnar', 'shivneri', 'road', 0.2], ['junnar', 'naneghat', 'ghat', 1], ['pune', 'ahmednagar', 'road', 3.5], ['junnar', 'ahmednagar', 'road', 3],
  ['ahmednagar', 'aurangabad', 'road', 3.5], ['aurangabad', 'daulatabad', 'road', 0.5], ['daulatabad', 'salher', 'road', 5],
];
export const SEASON_RULES = {
  sea: { monsoon: Infinity, note: 'The Konkan coast is closed to sailing in the south-west monsoon, June to September.', ev: 'documented' },
  'sea-e': { monsoon: 1, note: 'The Coromandel coast is dangerous in the north-east monsoon, October to December.', ev: 'documented' },
  ferry: { monsoon: 3, note: 'Creek crossings are rough in the rains.', ev: 'inferred' },
  road: { monsoon: 2, note: 'Coastal roads turn to mud; rivers are in spate.', ev: 'inferred' },
  ghat: { monsoon: 3, note: 'The ghat roads are slippery and washed out in the rains.', ev: 'inferred' },
};
export function ownerAt(node, year) { const p = node.phases.find((q) => year >= q.from && (q.to == null || year < q.to)); return p ? p : null; }
export function existsAt(node, year) { return node.phases.length && year >= node.phases[0].from; }

// sites that open as playable forts
for (const n of NODES) if (['raigad', 'rajgad', 'pratapgad', 'shivneri', 'lohagad', 'salher', 'panhala', 'khanderi', 'suvarnadurg', 'vijaydurg', 'torna', 'sinhagad', 'purandar'].includes(n.id)) n.playable = n.id;
