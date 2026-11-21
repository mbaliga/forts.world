import PALGHAR_INVENTORY from './palghar-inventory.js';
import MAHARASHTRA_ASI from './maharashtra-asi-inventory.js';
import KOLABA_INVENTORY from './kolaba-inventory.js';
import KARNATAKA_INVENTORY from './karnataka-inventory.js';
import KONKAN_INVENTORY from './konkan-inventory.js';
// The fort catalogue: the major forts of India and its neighbours, in sets of ten (set 1 is playable now).
// Coordinates are approximate (to about 0.02–0.1°), compiled from general knowledge, not surveyed: check each fort's
// position when its set is built. The full count of forts runs to thousands; tools/osm2forts.mjs imports every fort
// tagged in OpenStreetMap to extend this list.
// type: hill · sea · coast · land · desert · river · citadel · palace-fort · dzong · rock
export const SETS = [
  { n: 1, title: 'The first ten', note: 'Playable now: sea, hill, desert, plateau and citadel forts across India.' },
  { n: 2, title: 'Maratha forts of the Sahyadri', note: 'Shivaji\'s hill forts and sea forts of the Western Ghats and Konkan.' },
  { n: 3, title: 'Rajput forts of Rajasthan', note: 'Hill forts and palace-forts of the Kachhwaha, Hada, Rathore and Jat states.' },
  { n: 4, title: 'Mughal and Delhi Sultanate forts', note: 'The red sandstone citadels of the Mughals and the walled capitals before them.' },
  { n: 5, title: 'Forts of the Deccan sultanates', note: 'Bahmani, Bijapur, Ahmednagar and Bidar strongholds of the plateau.' },
  { n: 6, title: 'Forts of the far South', note: 'Vijayanagara, Nayaka, Mysore and colonial forts of Karnataka, Kerala and Tamil Nadu.' },
  { n: 7, title: 'Central India and Bundelkhand', note: 'Chandela, Bundela, Malwa and Mughal forts of the Vindhyas.' },
  { n: 8, title: 'The East and Northeast', note: 'Bengal, Bihar, Odisha and Ahom forts, and the Mughal forts of Bangladesh.' },
  { n: 9, title: 'Punjab, Jammu, Kashmir and the Himalaya', note: 'Sikh, Dogra, Katoch and Mughal forts of the north-west.' },
  { n: 10, title: 'Pakistan and Afghanistan', note: 'Desert, river and mountain forts from Sindh to Bamiyan.' },
  { n: 11, title: 'Nepal, Bhutan and Sri Lanka', note: 'Gorkha gadhis, Bhutanese dzongs and Sri Lanka\'s rock and colonial forts.' },
  { n: 12, title: 'Gujarat and the western coast', note: 'Sultanate, Portuguese and princely forts from Kutch to Goa.' },
  { n: 13, title: 'Telangana, Andhra and Odisha', note: 'Kakatiya, Vijayanagara and Qutb Shahi hill forts of the eastern Deccan.' },
  { n: 14, title: 'Connected additions', note: 'Sites added for the connected campaign regions: Konkan sea forts, the northern Sahyadri, the Goa estuaries, Kanara, Malabar and the Tamil interior.' },
];
// Campaign regions: the world grows outward through connected regions rather than by sets.
export const REGIONS = [
  { id: 'A', name: 'Janjira and the Konkan', order: 1, note: 'Sea forts, creeks and ports from Bombay to Malvan; the first campaign region.' },
  { id: 'B', name: 'The Sahyadri passes and the Deccan', order: 2, note: 'The ghats behind the coast and the plateau forts beyond them.' },
  { id: 'C', name: 'Goa, Kanara and Malabar', order: 3, note: 'Estuary forts, pepper ports and fortified trading posts down the west coast.' },
  { id: 'D', name: 'The eastern Deccan and the Tamil coast', order: 4, note: 'Golconda, the Kakatiya and Vijayanagara forts, and the Coromandel.' },
  { id: 'E', name: 'Sri Lanka', order: 5, note: 'Connects across the Palk Strait.' },
  { id: 'F', name: 'The northern approaches', order: 6, note: 'Rajasthan, the Gangetic plain and the north-west.' },
];
// campaign region of each catalogue entry (anything not listed falls back by state: see regionOf)
const REGION_OF = { 'murud-janjira': 'A', sindhudurg: 'A', vijaydurg: 'A', khanderi: 'A', suvarnadurg: 'A', revdanda: 'A', korlai: 'A', vasai: 'A',
  raigad: 'B', rajgad: 'B', torna: 'B', sinhagad: 'B', pratapgad: 'B', shivneri: 'B', purandar: 'B', panhala: 'B', lohagad: 'B', salher: 'B', daulatabad: 'B', ahmednagar: 'B', parenda: 'B', naldurg: 'B', udgir: 'B', 'kandhar-nanded': 'B',
  aguada: 'C', 'cabo-de-rama': 'C', 'reis-magos': 'C', chapora: 'C', mirjan: 'C', 'st-angelo': 'C', bekal: 'C', palakkad: 'C',
  golconda: 'D', gingee: 'D', thirumayam: 'D' };
export function regionOf(f) {
  if (f.campaign_region) return f.campaign_region;
  if (REGION_OF[f.id]) return REGION_OF[f.id];
  if (f.country === 'Sri Lanka') return 'E';
  if (/Telangana|Andhra|Tamil|Odisha/.test(f.region)) return 'D';
  if (/Karnataka|Kerala|Goa/.test(f.region)) return /Bijapur|Bidar|Gulbarga|Raichur|Mudgal/.test(f.name) ? 'B' : 'C';
  if (/Maharashtra/.test(f.region)) return 'B';
  return 'F';
}
// every entry also carries an evidence record: position 'inferred' (from memory) until verified against a survey
const F = (set, id, name, country, region, lat, lon, type, builder, cent, playable = false) => ({ set, id, name, country, region, lat, lon, type, builder, cent, playable, ev: { position: 'inferred', footprint: 'unknown', phases: 'inferred' } });
export const FORTS = [
  // ---- set 1: playable
  F(1, 'murud-janjira', 'Murud-Janjira', 'India', 'Maharashtra', 18.300, 72.964, 'sea', 'Siddis of Janjira', '15th–17th c.', true),
  F(1, 'sindhudurg', 'Sindhudurg', 'India', 'Maharashtra', 16.042, 73.462, 'sea', 'Shivaji', '1664–67', true),
  F(1, 'golconda', 'Golconda', 'India', 'Telangana', 17.383, 78.401, 'citadel', 'Kakatiyas, Qutb Shahis', '13th–17th c.', true),
  F(1, 'gwalior', 'Gwalior', 'India', 'Madhya Pradesh', 26.230, 78.169, 'hill', 'Tomars, Mughals, Scindias', '8th–19th c.', true),
  F(1, 'chittorgarh', 'Chittorgarh', 'India', 'Rajasthan', 24.887222, 74.646944, 'hill', 'Guhilas, Sisodias of Mewar', '7th–16th c.', true),
  F(1, 'kumbhalgarh', 'Kumbhalgarh', 'India', 'Rajasthan', 25.149167, 73.581111, 'hill', 'Rana Kumbha', '15th c.', true),
  F(1, 'mehrangarh', 'Mehrangarh', 'India', 'Rajasthan', 26.298, 73.018, 'rock', 'Rathores of Marwar', '1459 onwards', true),
  F(1, 'jaisalmer', 'Jaisalmer', 'India', 'Rajasthan', 26.913, 70.912, 'desert', 'Bhatis', '1156 onwards', true),
  F(1, 'daulatabad', 'Daulatabad (Devagiri)', 'India', 'Maharashtra', 19.942, 75.213, 'hill', 'Yadavas, Tughluqs, Nizam Shahis', '12th–17th c.', true),
  F(1, 'gingee', 'Gingee', 'India', 'Tamil Nadu', 12.252, 79.397, 'hill', 'Konar chiefs, Nayakas, Marathas', '13th–17th c.', true),
  // ---- set 2: Maratha forts of the Sahyadri
  F(2, 'raigad', 'Raigad', 'India', 'Maharashtra', 18.234, 73.440, 'hill', 'Shivaji (capital)', '1656 onwards'),
  F(2, 'rajgad', 'Rajgad', 'India', 'Maharashtra', 18.246, 73.682, 'hill', 'Shivaji (first capital)', '17th c.'),
  F(2, 'torna', 'Torna (Prachandagad)', 'India', 'Maharashtra', 18.276, 73.622, 'hill', 'Shivaji (first conquest, 1646)', '13th–17th c.'),
  F(2, 'sinhagad', 'Sinhagad (Kondhana)', 'India', 'Maharashtra', 18.366, 73.755, 'hill', 'Yadavas, Marathas', '14th–17th c.'),
  F(2, 'pratapgad', 'Pratapgad', 'India', 'Maharashtra', 17.936, 73.578, 'hill', 'Shivaji', '1656'),
  F(2, 'shivneri', 'Shivneri', 'India', 'Maharashtra', 19.199, 73.859, 'hill', 'Yadavas; Shivaji\'s birthplace', '16th–17th c.'),
  F(2, 'purandar', 'Purandar', 'India', 'Maharashtra', 18.282, 73.974, 'hill', 'Bahmanis, Marathas', '15th–17th c.'),
  F(2, 'panhala', 'Panhala', 'India', 'Maharashtra', 16.812, 74.110, 'hill', 'Shilaharas, Bijapur, Marathas', '12th–17th c.'),
  F(2, 'vijaydurg', 'Vijaydurg', 'India', 'Maharashtra', 16.560833, 73.333333, 'coast', 'Shilaharas, Shivaji, Angres', '12th–18th c.'),
  F(2, 'lohagad', 'Lohagad', 'India', 'Maharashtra', 18.709, 73.476, 'hill', 'Yadavas, Marathas', '14th–17th c.'),
  // ---- set 3: Rajput forts of Rajasthan
  F(3, 'amer', 'Amer', 'India', 'Rajasthan', 26.985, 75.851, 'palace-fort', 'Kachhwahas', '16th c.'),
  F(3, 'jaigarh', 'Jaigarh', 'India', 'Rajasthan', 26.985, 75.846, 'hill', 'Kachhwahas (Jai Singh II)', '1726'),
  F(3, 'nahargarh', 'Nahargarh', 'India', 'Rajasthan', 26.937, 75.815, 'hill', 'Jai Singh II', '1734'),
  F(3, 'ranthambore', 'Ranthambore', 'India', 'Rajasthan', 26.020278, 76.455000, 'hill', 'Chauhans', '10th–13th c.'),
  F(3, 'junagarh-bikaner', 'Junagarh, Bikaner', 'India', 'Rajasthan', 28.022, 73.318, 'land', 'Rathores of Bikaner', '1589–94'),
  F(3, 'taragarh-bundi', 'Taragarh, Bundi', 'India', 'Rajasthan', 25.451, 75.6375, 'hill', 'Hadas of Bundi', '1354'),
  F(3, 'taragarh-ajmer', 'Taragarh, Ajmer', 'India', 'Rajasthan', 26.443597, 74.616686, 'hill', 'Chauhans', '7th c. / later phases disputed'),
  F(3, 'bhatner', 'Bhatner, Hanumangarh', 'India', 'Rajasthan', 29.58605, 74.325322, 'desert', 'Bhatis', '3rd c. onwards'),
  F(3, 'gagron', 'Gagron', 'India', 'Rajasthan', 24.626389, 76.187222, 'river', 'Khichi Chauhans', '12th–15th c.'),
  F(3, 'lohagarh', 'Lohagarh, Bharatpur', 'India', 'Rajasthan', 27.2206, 77.4955, 'land', 'Jats (Suraj Mal)', '1730s'),
  // ---- set 4: Mughal and Delhi Sultanate
  F(4, 'red-fort', 'Red Fort (Lal Qila), Delhi', 'India', 'Delhi', 28.656, 77.241, 'citadel', 'Shah Jahan', '1639–48'),
  F(4, 'agra-fort', 'Agra Fort', 'India', 'Uttar Pradesh', 27.180, 78.021, 'citadel', 'Akbar', '1565–73'),
  F(4, 'purana-qila', 'Purana Qila, Delhi', 'India', 'Delhi', 28.610, 77.243, 'citadel', 'Humayun, Sher Shah Suri', '1530s–40s'),
  F(4, 'tughlaqabad', 'Tughlaqabad', 'India', 'Delhi', 28.513, 77.262, 'citadel', 'Ghiyath al-Din Tughluq', '1321–25'),
  F(4, 'fatehpur-sikri', 'Fatehpur Sikri', 'India', 'Uttar Pradesh', 27.094, 77.661, 'citadel', 'Akbar', '1571–85'),
  F(4, 'allahabad-fort', 'Allahabad Fort', 'India', 'Uttar Pradesh', 25.430, 81.876, 'river', 'Akbar', '1583'),
  F(4, 'salimgarh', 'Salimgarh, Delhi', 'India', 'Delhi', 28.659, 77.245, 'river', 'Islam Shah Suri', '1546'),
  F(4, 'lahore-fort', 'Lahore Fort (Shahi Qila)', 'Pakistan', 'Punjab', 31.588, 74.315, 'citadel', 'Akbar to Aurangzeb', '16th–17th c.'),
  F(4, 'rohtas-pk', 'Rohtas Fort', 'Pakistan', 'Punjab', 32.964, 73.577, 'land', 'Sher Shah Suri', '1541'),
  F(4, 'attock', 'Attock Fort', 'Pakistan', 'Punjab', 33.894, 72.247, 'river', 'Akbar', '1581–83'),
  // ---- set 5: Deccan sultanates
  F(5, 'bidar', 'Bidar', 'India', 'Karnataka', 17.924, 77.528, 'citadel', 'Bahmanis', '1429 onwards'),
  F(5, 'gulbarga', 'Gulbarga (Kalaburagi)', 'India', 'Karnataka', 17.336, 76.832, 'citadel', 'Bahmanis', '14th c.'),
  F(5, 'bijapur-arkilla', 'Bijapur Arkilla', 'India', 'Karnataka', 16.830, 75.712, 'citadel', 'Adil Shahis', '16th c.'),
  F(5, 'raichur', 'Raichur', 'India', 'Karnataka', 16.208, 77.355, 'hill', 'Kakatiyas, Bahmanis', '13th–16th c.'),
  F(5, 'naldurg', 'Naldurg', 'India', 'Maharashtra', 17.817, 76.292, 'river', 'Bahmanis, Adil Shahis', '16th c.'),
  F(5, 'parenda', 'Parenda', 'India', 'Maharashtra', 18.267, 75.450, 'land', 'Bahmanis', '15th c.'),
  F(5, 'ahmednagar', 'Ahmednagar', 'India', 'Maharashtra', 19.100, 74.756, 'land', 'Nizam Shahis', '1490s, 1559'),
  F(5, 'udgir', 'Udgir', 'India', 'Maharashtra', 18.393, 77.112, 'land', 'Bahmanis', '15th c.'),
  F(5, 'kandhar-nanded', 'Kandhar', 'India', 'Maharashtra', 18.880, 77.200, 'land', 'Rashtrakutas, Bahmanis', '10th–16th c.'),
  F(5, 'mudgal', 'Mudgal', 'India', 'Karnataka', 16.012, 76.442, 'land', 'Yadavas, Bahmanis, Adil Shahis', '13th–16th c.'),
  // ---- set 6: the far South
  F(6, 'srirangapatna', 'Srirangapatna', 'India', 'Karnataka', 12.422, 76.689, 'river', 'Vijayanagara, Tipu Sultan', '15th–18th c.'),
  F(6, 'chitradurga', 'Chitradurga', 'India', 'Karnataka', 14.221, 76.398, 'hill', 'Nayakas of Chitradurga', '17th–18th c.'),
  F(6, 'bekal', 'Bekal', 'India', 'Kerala', 12.3926, 75.033, 'coast', 'Keladi Nayakas', '1650'),
  F(6, 'vellore', 'Vellore', 'India', 'Tamil Nadu', 12.921, 79.130, 'land', 'Vijayanagara Nayakas', '16th c.'),
  F(6, 'trichy-rock', 'Tiruchirappalli Rock Fort', 'India', 'Tamil Nadu', 10.828, 78.697, 'rock', 'Pallavas, Nayakas of Madurai', '7th–17th c.'),
  F(6, 'fort-st-george', 'Fort St George, Chennai', 'India', 'Tamil Nadu', 13.080, 80.287, 'coast', 'English East India Company', '1644'),
  F(6, 'dindigul', 'Dindigul', 'India', 'Tamil Nadu', 10.363, 77.963, 'rock', 'Madurai Nayakas, Mysore', '17th c.'),
  F(6, 'sankagiri', 'Sankagiri', 'India', 'Tamil Nadu', 11.471, 77.866, 'hill', 'Vijayanagara, Mysore', '16th–18th c.'),
  F(6, 'palakkad', 'Palakkad (Tipu\'s Fort)', 'India', 'Kerala', 10.7637, 76.6567, 'land', 'Hyder Ali', '1766'),
  F(6, 'bangalore-fort', 'Bangalore Fort', 'India', 'Karnataka', 12.963, 77.576, 'land', 'Kempe Gowda, Hyder Ali', '1537, 1761'),
  // ---- set 7: Central India and Bundelkhand
  F(7, 'kalinjar', 'Kalinjar', 'India', 'Uttar Pradesh', 25.006, 80.485, 'hill', 'Chandelas', '9th–13th c.'),
  F(7, 'orchha', 'Orchha', 'India', 'Madhya Pradesh', 25.351, 78.640, 'river', 'Bundelas', '16th–17th c.'),
  F(7, 'jhansi', 'Jhansi', 'India', 'Uttar Pradesh', 25.461, 78.576, 'hill', 'Bir Singh Deo Bundela', '1613'),
  F(7, 'mandu', 'Mandu', 'India', 'Madhya Pradesh', 22.336, 75.396, 'hill', 'Paramaras, Malwa sultans', '11th–16th c.'),
  F(7, 'asirgarh', 'Asirgarh', 'India', 'Madhya Pradesh', 21.471, 76.293, 'hill', 'Faruqis of Khandesh', '15th c.'),
  F(7, 'raisen', 'Raisen', 'India', 'Madhya Pradesh', 23.330, 77.788, 'hill', 'Paramaras, Malwa', '11th–16th c.'),
  F(7, 'chanderi', 'Chanderi', 'India', 'Madhya Pradesh', 24.718, 78.135, 'hill', 'Pratiharas, Malwa', '11th–16th c.'),
  F(7, 'ajaigarh', 'Ajaigarh', 'India', 'Madhya Pradesh', 24.894, 80.264, 'hill', 'Chandelas', '9th–13th c.'),
  F(7, 'narwar', 'Narwar', 'India', 'Madhya Pradesh', 25.648, 77.910, 'hill', 'Kachhwahas, Mughals', '12th–17th c.'),
  F(7, 'garh-kundar', 'Garh Kundar', 'India', 'Madhya Pradesh', 25.431, 78.940, 'hill', 'Khangars, Bundelas', '13th–16th c.'),
  // ---- set 8: the East and Northeast
  F(8, 'fort-william', 'Fort William, Kolkata', 'India', 'West Bengal', 22.555, 88.338, 'river', 'English East India Company', '1758–81'),
  F(8, 'barabati', 'Barabati, Cuttack', 'India', 'Odisha', 20.484, 85.866, 'river', 'Eastern Gangas', '14th c.'),
  F(8, 'rohtasgarh', 'Rohtasgarh', 'India', 'Bihar', 24.629, 83.910, 'hill', 'Sher Shah Suri, Man Singh', '16th c.'),
  F(8, 'chunar', 'Chunar', 'India', 'Uttar Pradesh', 25.125, 82.879, 'river', 'Sher Shah Suri, Mughals', '11th–16th c.'),
  F(8, 'lalbagh', 'Lalbagh Fort, Dhaka', 'Bangladesh', 'Dhaka', 23.719, 90.388, 'citadel', 'Prince Muhammad Azam, Shaista Khan', '1678'),
  F(8, 'idrakpur', 'Idrakpur Fort', 'Bangladesh', 'Munshiganj', 23.543, 90.509, 'river', 'Mir Jumla II', '1660'),
  F(8, 'sonakanda', 'Sonakanda Fort', 'Bangladesh', 'Narayanganj', 23.616, 90.511, 'river', 'Mughals', '17th c.'),
  F(8, 'hajiganj', 'Hajiganj Fort', 'Bangladesh', 'Narayanganj', 23.627, 90.519, 'river', 'Mughals', '17th c.'),
  F(8, 'kareng-ghar', 'Kareng Ghar, Garhgaon', 'India', 'Assam', 26.928, 94.738, 'palace-fort', 'Ahoms', '1752'),
  F(8, 'talatal-ghar', 'Talatal Ghar, Sivasagar', 'India', 'Assam', 26.974, 94.632, 'palace-fort', 'Ahoms', '18th c.'),
  // ---- set 9: Punjab, Jammu, Kashmir and the Himalaya
  F(9, 'kangra', 'Kangra', 'India', 'Himachal Pradesh', 32.082, 76.270, 'hill', 'Katoch kings', 'ancient–19th c.'),
  F(9, 'bahu', 'Bahu Fort, Jammu', 'India', 'Jammu and Kashmir', 32.721, 74.882, 'river', 'Raja Bahulochan; Dogras', '18th c. rebuild'),
  F(9, 'nurpur', 'Nurpur', 'India', 'Himachal Pradesh', 32.300, 75.889, 'hill', 'Pathania rajas', '16th–17th c.'),
  F(9, 'gobindgarh', 'Gobindgarh, Amritsar', 'India', 'Punjab', 31.632, 74.856, 'land', 'Bhangi misl, Ranjit Singh', '18th–19th c.'),
  F(9, 'qila-mubarak-bathinda', 'Qila Mubarak, Bathinda', 'India', 'Punjab', 30.211, 74.946, 'land', 'early medieval; Sikh rulers', '1st mill.–19th c.'),
  F(9, 'qila-mubarak-patiala', 'Qila Mubarak, Patiala', 'India', 'Punjab', 30.329, 76.400, 'palace-fort', 'Ala Singh', '1763'),
  F(9, 'hari-parbat', 'Hari Parbat, Srinagar', 'India', 'Jammu and Kashmir', 34.104, 74.812, 'hill', 'Akbar; Durrani governors', '1590s, 1808'),
  F(9, 'zorawar', 'Zorawar Fort, Leh', 'India', 'Ladakh', 34.160, 77.580, 'land', 'Zorawar Singh', '1836'),
  F(9, 'ramnagar-jk', 'Ramnagar Fort', 'India', 'Jammu and Kashmir', 32.810, 75.310, 'hill', 'Dogras', '19th c.'),
  F(9, 'kamru', 'Kamru Fort, Sangla', 'India', 'Himachal Pradesh', 31.420, 78.250, 'hill', 'Bushahr rajas', 'medieval'),
  // ---- set 10: Pakistan and Afghanistan
  F(10, 'derawar', 'Derawar', 'Pakistan', 'Punjab (Cholistan)', 28.766, 71.334, 'desert', 'Bhatis; Abbasis of Bahawalpur', '9th–18th c.'),
  F(10, 'ranikot', 'Ranikot', 'Pakistan', 'Sindh', 25.900, 67.900, 'hill', 'Talpurs (walls of disputed date)', '19th c. (core)'),
  F(10, 'kot-diji', 'Kot Diji Fort', 'Pakistan', 'Sindh', 27.340, 68.710, 'hill', 'Talpurs', '1785–95'),
  F(10, 'bala-hisar-peshawar', 'Bala Hisar, Peshawar', 'Pakistan', 'Khyber Pakhtunkhwa', 34.010, 71.570, 'citadel', 'Durranis, Sikhs', '16th–19th c.'),
  F(10, 'baltit', 'Baltit Fort, Hunza', 'Pakistan', 'Gilgit-Baltistan', 36.326, 74.669, 'hill', 'Mirs of Hunza', '13th c. onwards'),
  F(10, 'altit', 'Altit Fort, Hunza', 'Pakistan', 'Gilgit-Baltistan', 36.317, 74.680, 'hill', 'Mirs of Hunza', '11th c. onwards'),
  F(10, 'umerkot', 'Umerkot', 'Pakistan', 'Sindh', 25.360, 69.740, 'desert', 'Sodha Rajputs; Akbar\'s birthplace', '11th–16th c.'),
  F(10, 'bala-hissar-kabul', 'Bala Hissar, Kabul', 'Afghanistan', 'Kabul', 34.502, 69.193, 'citadel', 'from the 5th c.; Mughals, Durranis', '5th–19th c.'),
  F(10, 'herat-citadel', 'Citadel of Herat (Qala Ikhtiyaruddin)', 'Afghanistan', 'Herat', 34.347, 62.193, 'citadel', 'Kartids, Timurids', '14th–15th c.'),
  F(10, 'shahr-e-gholghola', 'Shahr-e Gholghola, Bamiyan', 'Afghanistan', 'Bamiyan', 34.820, 67.840, 'hill', 'Shansabani (Ghurid) kings', '6th–13th c.'),
  // ---- set 11: Nepal, Bhutan and Sri Lanka
  F(11, 'nuwakot', 'Nuwakot Durbar', 'Nepal', 'Bagmati', 27.913, 85.164, 'hill', 'Prithvi Narayan Shah', '1762'),
  F(11, 'gorkha', 'Gorkha Durbar', 'Nepal', 'Gandaki', 28.007, 84.629, 'hill', 'Shah kings of Gorkha', '17th c.'),
  F(11, 'makwanpur', 'Makwanpur Gadhi', 'Nepal', 'Bagmati', 27.450, 85.030, 'hill', 'Sen kings', '18th c.'),
  F(11, 'sindhuli', 'Sindhuli Gadhi', 'Nepal', 'Bagmati', 27.270, 85.970, 'hill', 'Gorkha kingdom', '18th c.'),
  F(11, 'punakha', 'Punakha Dzong', 'Bhutan', 'Punakha', 27.582, 89.863, 'dzong', 'Zhabdrung Ngawang Namgyal', '1637–38'),
  F(11, 'paro-rinpung', 'Rinpung Dzong, Paro', 'Bhutan', 'Paro', 27.428, 89.420, 'dzong', 'Zhabdrung Ngawang Namgyal', '1644'),
  F(11, 'trongsa', 'Trongsa Dzong', 'Bhutan', 'Trongsa', 27.500, 90.508, 'dzong', 'Chogyal Minjur Tenpa', '1647'),
  F(11, 'galle', 'Galle Fort', 'Sri Lanka', 'Southern', 6.027, 80.217, 'coast', 'Portuguese, Dutch', '16th–17th c.'),
  F(11, 'sigiriya', 'Sigiriya', 'Sri Lanka', 'Central', 7.957, 80.760, 'rock', 'King Kashyapa', '5th c.'),
  F(11, 'jaffna', 'Jaffna Fort', 'Sri Lanka', 'Northern', 9.662, 80.009, 'coast', 'Portuguese, Dutch', '1618, 1680'),
  // ---- set 12: Gujarat and the western coast
  F(12, 'uparkot', 'Uparkot, Junagadh', 'India', 'Gujarat', 21.524, 70.471, 'hill', 'Chudasamas', '4th c. BCE (trad.) – 15th c.'),
  F(12, 'pavagadh', 'Champaner-Pavagadh', 'India', 'Gujarat', 22.486, 73.530, 'hill', 'Khichi Chauhans, Mahmud Begada', '15th c.'),
  F(12, 'bhujia', 'Bhujia Fort, Bhuj', 'India', 'Gujarat', 23.250, 69.680, 'hill', 'Jadejas of Kutch', '1715–41'),
  F(12, 'diu', 'Diu Fort', 'India', 'Dadra and Nagar Haveli and Daman and Diu', 20.715, 70.995, 'sea', 'Portuguese', '1535'),
  F(12, 'moti-daman', 'Moti Daman Fort', 'India', 'Dadra and Nagar Haveli and Daman and Diu', 20.413, 72.833, 'coast', 'Portuguese', '1559'),
  F(12, 'vasai', 'Vasai (Bassein) Fort', 'India', 'Maharashtra', 19.330, 72.815, 'coast', 'Gujarat sultans, Portuguese', '1536'),
  F(12, 'revdanda', 'Revdanda (Chaul)', 'India', 'Maharashtra', 18.5474, 72.9268, 'coast', 'Portuguese', '1524'),
  F(12, 'korlai', 'Korlai', 'India', 'Maharashtra', 18.5377, 72.9074, 'coast', 'Ahmadnagar sultans, Portuguese', '1521–94'),
  F(12, 'aguada', 'Fort Aguada, Goa', 'India', 'Goa', 15.492, 73.774, 'coast', 'Portuguese', '1612'),
  F(12, 'cabo-de-rama', 'Cabo de Rama, Goa', 'India', 'Goa', 15.088631, 73.921643, 'coast', 'Soonda rajas, Portuguese', '17th–18th c.'),
  // ---- set 13: Telangana, Andhra and Odisha
  F(13, 'warangal', 'Warangal Fort', 'India', 'Telangana', 17.957, 79.613, 'citadel', 'Kakatiyas', '13th c.'),
  F(13, 'bhongir', 'Bhongir', 'India', 'Telangana', 17.511, 78.889, 'rock', 'Western Chalukyas', '11th c.'),
  F(13, 'medak', 'Medak Fort', 'India', 'Telangana', 18.035, 78.264, 'hill', 'Kakatiyas, Qutb Shahis', '12th–17th c.'),
  F(13, 'kondapalli', 'Kondapalli', 'India', 'Andhra Pradesh', 16.615, 80.540, 'hill', 'Reddy kings', '14th c.'),
  F(13, 'gandikota', 'Gandikota', 'India', 'Andhra Pradesh', 14.813, 78.286, 'river', 'Western Chalukyas, Pemmasani Nayakas', '12th–16th c.'),
  F(13, 'chandragiri', 'Chandragiri', 'India', 'Andhra Pradesh', 13.585, 79.317, 'hill', 'Yadava Nayakas, Vijayanagara', '11th–17th c.'),
  F(13, 'penukonda', 'Penukonda', 'India', 'Andhra Pradesh', 14.080, 77.590, 'hill', 'Vijayanagara', '14th–16th c.'),
  F(13, 'gooty', 'Gooty', 'India', 'Andhra Pradesh', 15.110, 77.640, 'rock', 'Vijayanagara, Murari Rao Ghorpade', '16th–18th c.'),
  F(13, 'udayagiri-nellore', 'Udayagiri, Nellore', 'India', 'Andhra Pradesh', 14.870, 79.310, 'hill', 'Gajapatis, Vijayanagara', '14th–16th c.'),
  F(13, 'sisupalgarh', 'Sisupalgarh', 'India', 'Odisha', 20.230, 85.860, 'land', 'early historic (Kalinga)', '3rd c. BCE – 4th c. CE'),
  // ---- set 14: connected additions (gameplay roles are design proposals; positions inferred until verified)
  F(14, 'salher', 'Salher', 'India', 'Maharashtra', 20.722, 73.942, 'hill', 'Baglana chiefs, Mughals, Marathas', '17th c.; battle of 1672'),
  F(14, 'khanderi', 'Khanderi', 'India', 'Maharashtra', 18.7043, 72.8133, 'sea', 'Shivaji', '1679'),
  F(14, 'suvarnadurg', 'Suvarnadurg', 'India', 'Maharashtra', 17.816389, 73.084444, 'sea', 'Bijapur; Shivaji from 1660; Angres', '16th–18th c.'),
  F(14, 'reis-magos', 'Reis Magos', 'India', 'Goa', 15.4965, 73.80913, 'coast', 'Portuguese', '1551; rebuilt 1707'),
  F(14, 'chapora', 'Chapora', 'India', 'Goa', 15.6059263, 73.7360558, 'coast', 'Adil Shahis; Portuguese', '1617'),
  F(14, 'mirjan', 'Mirjan', 'India', 'Karnataka', 14.4893, 74.4177, 'river', 'Queen Chennabhairadevi of Gerusoppa (attrib.)', '16th c.'),
  F(14, 'st-angelo', 'St Angelo\'s Fort, Kannur', 'India', 'Kerala', 11.8538, 75.3718, 'coast', 'Portuguese (Almeida); Dutch; Arakkal; British', '1505'),
  F(14, 'thirumayam', 'Thirumayam', 'India', 'Tamil Nadu', 10.2477, 78.7512, 'hill', 'Sethupathis of Ramnad', '1687'),
];
// gameplay roles proposed for the additions (design, not history)
export const ROLES = { salher: 'Mountain approaches', khanderi: 'Island defence and naval supply', suvarnadurg: 'Island defence and naval supply', 'reis-magos': 'Estuary defence', chapora: 'Coastal campaigns', mirjan: 'Coastal trade and supply', 'st-angelo': 'Fortified port and maritime conflict', thirumayam: 'Inland defence' };
// the twelve components of the Maratha Military Landscapes of India (UNESCO World Heritage, inscribed 2025)
export const UNESCO_MARATHA = ['salher', 'shivneri', 'lohagad', 'khanderi', 'raigad', 'rajgad', 'pratapgad', 'suvarnadurg', 'panhala', 'vijaydurg', 'sindhudurg', 'gingee'];

// forts playable now beyond the first ten: the rest of the Maratha Military Landscapes (built by the fort generator)
export const PLAYABLE = new Set(['raigad', 'rajgad', 'pratapgad', 'shivneri', 'lohagad', 'salher', 'panhala', 'khanderi', 'suvarnadurg', 'vijaydurg', 'torna', 'sinhagad', 'purandar', 'vasai', 'reis-magos', 'chapora', 'mirjan', 'st-angelo', 'bekal', 'palakkad', 'aguada', 'cabo-de-rama', 'gooty', 'vellore', 'gandikota', 'chandragiri', 'srirangapatna', 'trichy-rock', 'ahmednagar', 'naldurg', 'bidar', 'gulbarga', 'parenda', 'kandhar-nanded', 'raichur', 'mudgal', 'bijapur-arkilla', 'udgir', 'chitradurga', 'bangalore-fort', 'warangal', 'bhongir', 'revdanda', 'korlai', 'medak', 'kondapalli', 'penukonda', 'udayagiri-nellore', 'dindigul', 'sankagiri', 'thirumayam', 'fort-st-george', 'diu', 'moti-daman', 'uparkot', 'pavagadh', 'mandu', 'raisen', 'amer', 'jaigarh', 'ranthambore', 'gagron', 'nahargarh', 'junagarh-bikaner', 'taragarh-bundi', 'taragarh-ajmer', 'lohagarh', 'bhatner', 'red-fort', 'agra-fort', 'salimgarh', 'purana-qila', 'tughlaqabad', 'fatehpur-sikri', 'allahabad-fort', 'lahore-fort', 'rohtas-pk', 'attock', 'kalinjar', 'orchha', 'jhansi', 'asirgarh', 'chanderi', 'ajaigarh', 'narwar', 'garh-kundar', 'fort-william', 'barabati', 'rohtasgarh', 'chunar', 'idrakpur', 'lalbagh', 'sonakanda', 'hajiganj', 'kareng-ghar', 'talatal-ghar', 'kangra', 'nurpur', 'bahu', 'gobindgarh', 'qila-mubarak-bathinda', 'qila-mubarak-patiala', 'hari-parbat']);
for (const f of FORTS) if (PLAYABLE.has(f.id)) f.playable = true;

// District inventory candidates have no invented map coordinates or playable scenes.
SETS.push({n:15,title:'Ratnagiri district inventory',note:'Government-listed candidates; identity, positions and dates need verification.'});
for (const candidate of KONKAN_INVENTORY) {
  candidate.campaign_region = 'A'; // design grouping, not historical administration
  if (!FORTS.some(f => f.id === candidate.id || f.name.toLowerCase() === candidate.name.toLowerCase())) FORTS.push({...candidate});
}

FORTS.push({set:14,id:'underi',name:'Underi',country:'India',region:'Maharashtra',lat:18.700,lon:72.830,type:'sea',builder:'Siddis; later ownership requires dated review',cent:'Fortification begun 1680',playable:true,ev:{position:'inferred',footprint:'inferred',phases:'documented'},source:'https://gazetteers.maharashtra.gov.in/cultural.maharashtra.gov.in/english/gazetteer/KOLABA/places_Underi.html'});

SETS.push({n:16,title:'Karnataka fort inventory',note:'2011 Ministry of Culture inventory; current status and terrain need verification.'});
for (const candidate of KARNATAKA_INVENTORY) {
  candidate.campaign_region = /Kanara/.test(candidate.source_district) ? 'C' : 'B'; // proposed campaign grouping
  const existing = FORTS.find(f => f.id === candidate.id);
  if (existing) {
    (existing.inventory_references ||= []).push({url:candidate.source,date:candidate.source_date,rows:candidate.source_rows,scope:candidate.source_scope});
  } else FORTS.push({...candidate});
}

SETS.push({n:17,title:'Historic Kolaba fort inventory',note:'37 coastal and inland names from the Kolaba gazetteer; aliases and locations require review.'});
for (const candidate of KOLABA_INVENTORY) {
  const existing = FORTS.find(f => f.id === candidate.id);
  if (existing) {
    (existing.inventory_references ||= []).push({url:candidate.source,scope:candidate.source_scope,aliases:candidate.aliases});
  } else FORTS.push({...candidate});
}

SETS.push({n:18,title:'Maharashtra central inventory (2016)',note:'Named fortification records and remains; current status and locations need verification.'});
for (const candidate of MAHARASHTRA_ASI) {
  const existing = FORTS.find(f => f.id === candidate.id);
  if (existing) {
    (existing.inventory_references ||= []).push({url:candidate.source,date:candidate.source_date,rows:candidate.source_rows,scope:candidate.source_scope,aliases:candidate.aliases});
  } else FORTS.push({...candidate});
}

// A local prototype is available; the catalogue position is still unknown.
const padmadurgCatalogue = FORTS.find(f => f.id === 'padmadurg');
if (padmadurgCatalogue) padmadurgCatalogue.playable = true;

SETS.push({n:19,title:'Palghar fort inventory',note:'District tourism candidates; identity and coordinates need verification.'});
for (const candidate of PALGHAR_INVENTORY) {
  const existing=FORTS.find(f=>f.id===candidate.id);
  if (existing) (existing.inventory_references ||= []).push({url:candidate.source,scope:candidate.source_scope,aliases:candidate.aliases});
  else FORTS.push({...candidate});
}

// Source-backed register additions for neighbouring countries. These are
// research records, not playable fort scenes; the point is the cited register
// coordinate, not a surveyed footprint. Dates remain as reported by each source.
SETS.push({n:20,title:'Pakistan and Afghanistan register additions',note:'Pakistan federal register points plus Afghan ministry-reported sites with approximate anchors; no surveyed footprints. Gupis identity needs reconciliation.'});
SETS.push({n:21,title:'Alamut fortification network · Iran',note:'Seven components of the UNESCO-inscribed serial property (2026); exact component coordinates, fort footprints not modeled.'});
const registerFort = (id,name,country,region,lat,lon,cent,type,url,positionEvidence='DOAM register coordinate') => ({
  set:20,id,name,country,region,lat,lon,cent,type,builder:'',playable:false,source:url,
  positionEvidence,ev:{position:'registered',footprint:'unknown',phases:'source-recorded'}
});
const PAKISTAN_REGISTER = [
  registerFort('bakhar-sukkur','Bakhar Fort','Pakistan','Sindh',27.696536111,68.887477778,'Early 8th–11th c.','river','https://doam.gov.pk/public/sites/5101'),
  registerFort('naukot','Naukot Fort','Pakistan','Sindh',24.844722222,69.450102778,'18th–19th c.','desert','https://doam.gov.pk/public/sites/5504'),
  registerFort('nand-kot','Nand Kot Fort','Pakistan','Sindh',24.4292,68.73445,'Sultanate–Mughal periods','land','https://doam.gov.pk/public/sites/9979'),
  registerFort('sehwan-fort','Fort at Sehwan','Pakistan','Sindh',26.433255556,67.86125,'5th–6th c. CE (register attribution)','citadel','https://doam.gov.pk/public/sites/5180'),
  registerFort('sheikhupura-fort','Sheikhupura Fort','Pakistan','Punjab',31.706944444,73.991666667,'Jahangir-era; later phases','land','https://doam.gov.pk/public/sites/9164'),
  registerFort('shigar-fort','Shigar Fort Palace','Pakistan','Gilgit-Baltistan',35.422980209,75.742294524,'17th c.','palace-fort','https://doam.gov.pk/public/sites/7998'),
  registerFort('kharan-fort','Kharan Fort','Pakistan','Balochistan',28.713333333,65.653333333,'18th–19th c.','land','https://doam.gov.pk/public/sites/8587'),
  registerFort('khaplu-fort','Khaplu Fort','Pakistan','Gilgit-Baltistan',35.15215,76.335442,'19th c.','palace-fort','https://doam.gov.pk/public/sites/7974'),
  registerFort('hatchi-khar','Hatchi Khar Fort','Pakistan','Gilgit-Baltistan',35.15169569,76.341809662,'20th c.','palace-fort','https://doam.gov.pk/public/sites/8225'),
  registerFort('keris-khar','Keris Khar Fort','Pakistan','Gilgit-Baltistan',35.232883005,75.940771752,'19th c.','palace-fort','https://doam.gov.pk/public/sites/8226'),
  registerFort('kharmang-fort','Kharmang Fort (Boti Khar)','Pakistan','Gilgit-Baltistan',34.938927,76.2300264,'16th c. attribution','land','https://doam.gov.pk/public/sites/7978'),
  registerFort('kharphocho','Kharphocho Fort','Pakistan','Gilgit-Baltistan',35.301817,75.643133,'14th–15th c.','hill','https://doam.gov.pk/public/sites/8178'),
  registerFort('damkot','Damkot Fort','Pakistan','Khyber Pakhtunkhwa',34.6485,72.0186,'7th–early 11th c.','hill','https://doam.gov.pk/public/sites/3643'),
  registerFort('ramkot','Ramkot Fort','Pakistan','Azad Jammu and Kashmir',33.223485,73.641752778,'16th–17th c.; Sikh refortification','hill','https://doam.gov.pk/public/sites/6676'),
  registerFort('gupis-1894','Gupis Fort (1894 record)','Pakistan','Gilgit-Baltistan',36.222167,73.453,'1894; staging camp on Chitral–Gilgit route','land','https://doam.gov.pk/public/sites/7797','DOAM register coordinate; neighbouring Gupis record may be duplicate or distinct site'),
  registerFort('gupis-other-record','Gupis Fort (second register record)','Pakistan','Gilgit-Baltistan',36.22747,73.45614,'20th c. register attribution','land','https://doam.gov.pk/public/sites/8248','DOAM register coordinate; identity with nearby 1894 record unresolved'),
];
FORTS.push(...PAKISTAN_REGISTER);
FORTS.push(
  {set:20,id:'bost-fortress',name:'Fortress of Bost (Qala-e-Bost)',country:'Afghanistan',region:'Helmand',lat:31.508889,lon:64.363333,type:'citadel',builder:'Ghaznavid and later phases',cent:'Medieval; restoration ongoing',playable:false,source:'https://www.moic.gov.af/en/restoration-historic-structures-bost-castle-helmand-45-complete',positionEvidence:'Approximate populated-place gazetteer anchor; ministry confirms the monument, not this exact point',ev:{position:'approximate',footprint:'unknown',phases:'ministry-reported'}},
  {set:20,id:'shahr-e-zuhak','name':'Shahr-e Zuhak (Red City)','country':'Afghanistan',region:'Bamiyan',lat:34.827258,lon:67.983436,type:'citadel',builder:'Ghurid and earlier phases',cent:'12th–13th c. fortifications',playable:false,source:'https://whc.unesco.org/en/list/208/',positionEvidence:'Approximate geotagged monument point; UNESCO map coordinate conflicts with its own description',ev:{position:'approximate',footprint:'unknown',phases:'documented'}}
);
SETS.push({n:22,title:'Bhopal · fortified town and palace landscape',note:'Fatehgarh and Islamnagar fort records connect to separately mapped waterworks, palace and urban heritage; point accuracy varies.'});
FORTS.push(
  {set:22,id:'fatehgarh-bhopal',name:'Fatehgarh Fort and Bhopal town walls',country:'India',region:'Madhya Pradesh',lat:23.260,lon:77.400,type:'citadel',builder:'Dost Mohammad Khan; later Bhopal rulers',cent:'1720s onward',playable:false,source:'https://mptownplan.gov.in/LU-panel/Bhopal/Amrut/ENGLISH/VOL1.pdf',positionEvidence:'Approximate old-city anchor; no surviving perimeter traced',ev:{position:'approximate',footprint:'unmapped historic fort and wall system',phases:'planning history'}},
  {set:22,id:'islamnagar-fort','name':'Islamnagar (Jagdishpur) Fortification','country':'India',region:'Madhya Pradesh',lat:23.35596,lon:77.41701,type:'citadel',builder:'Dost Mohammad Khan and Bhopal rulers',cent:'Early 18th c.; Scindia occupation 1806–17',playable:false,source:'https://indiacinehub.gov.in/location/bhopal',positionEvidence:'Approximate modern mapped anchor at the separately listed historic fort wall',ev:{position:'mapped site anchor',footprint:'wall geometry unknown',phases:'source-described'}}
);

const irn = (id,name,lat,lon,url='https://whc.unesco.org/en/list/1770/maps/') => FORTS.push({
  set:21,id,name,country:'Iran',region:'Alamut, Qazvin Province',lat,lon,type:/Castle/.test(name)?'hill':'land',
  builder:'Nizari Ismaili network',cent:'11th–13th c. core phases',playable:false,source:url,
  positionEvidence:'UNESCO serial-property component coordinate',ev:{position:'registered',footprint:'property component; fort footprint unknown',phases:'documented'}
});
irn('alamut-castle','Alamut Castle',36.4447083,50.5861806);
irn('lambesar-castle','Lambesar Castle',36.5468056,50.2280639);
irn('navizarsah-castle','Navizarshah Castle',36.3906472,50.726375);
irn('shams-kelaye-fortification','Shams Kelaye Fortification',36.4706278,50.485375);
irn('qostinlar-fortification','Qostinlar Fortification',36.4194583,50.2535417);
irn('shirkouh-fortification','Shirkouh Fortification',36.3912889,50.4158056);
irn('ilan-fortification','Ilan Fortification',36.4239528,50.6515611);
