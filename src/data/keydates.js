// Key dates for the subcontinent, between the world dataset's dates. Each power is given by the seats and strongholds it
// is well known to have held at that date (lat, lon, weight: a capital counts more); the atlas fills its zone of control
// out from them. These are INFERRED zones from general historical knowledge, not mapped borders: replace any entry with
// a traced polygon from a source (set `poly: [[lon, lat], ...]` and `ev: 'documented'`) and it is drawn instead.
const C = { delhi: [28.65, 77.23], agra: [27.18, 78.02], lahore: [31.55, 74.34], kabul: [34.53, 69.17], kandahar: [31.61, 65.71], herat: [34.34, 62.2], peshawar: [34.01, 71.58], multan: [30.2, 71.47], thatta: [24.75, 67.92], hydSindh: [25.39, 68.37], karachi: [24.86, 67.0],
  ahmedabad: [23.03, 72.58], champaner: [22.49, 73.53], surat: [21.17, 72.83], baroda: [22.31, 73.18], junagadh: [21.52, 70.46], mandu: [22.34, 75.4], ujjain: [23.18, 75.78], indore: [22.72, 75.86], bhopal: [23.26, 77.41], gwalior: [26.23, 78.17],
  chittor: [24.89, 74.65], udaipur: [24.58, 73.71], jodhpur: [26.29, 73.02], amer: [26.92, 75.82], bikaner: [28.02, 73.31], jaisalmer: [26.91, 70.91], bharatpur: [27.22, 77.49], lucknow: [26.85, 80.95], faizabad: [26.78, 82.14], allahabad: [25.44, 81.85],
  patna: [25.59, 85.14], gaur: [24.87, 88.13], murshidabad: [24.18, 88.27], dhaka: [23.81, 90.41], calcutta: [22.57, 88.36], cuttack: [20.46, 85.88], burhanpur: [21.31, 76.23], ellichpur: [21.26, 77.51], nagpur: [21.15, 79.09],
  aurangabad: [19.88, 75.34], daulatabad: [19.94, 75.21], ahmadnagar: [19.1, 74.75], junnar: [19.21, 73.88], pune: [18.52, 73.86], raigad: [18.23, 73.44], satara: [17.68, 74.0], kolhapur: [16.7, 74.24], bijapur: [16.83, 75.71], bidar: [17.91, 77.52],
  gulbarga: [17.33, 76.83], golconda: [17.38, 78.47], warangal: [17.97, 79.59], hampi: [15.33, 76.46], penukonda: [14.08, 77.59], chandragiri: [13.59, 79.32], vellore: [12.92, 79.13], gingee: [12.25, 79.4], arcot: [12.9, 79.32], madras: [13.08, 80.27],
  pondicherry: [11.93, 79.83], thanjavur: [10.79, 79.14], madurai: [9.93, 78.12], trichy: [10.8, 78.69], mysore: [12.3, 76.64], srirangapatna: [12.42, 76.69], ikkeri: [14.0, 75.0], calicut: [11.25, 75.78], kochi: [9.97, 76.27], trivandrum: [8.52, 76.94],
  goa: [15.5, 73.83], bombay: [18.94, 72.84], bassein: [19.33, 72.81], diu: [20.71, 70.99], daman: [20.41, 72.83], janjira: [18.3, 72.96], srinagar: [34.08, 74.8], jammu: [32.73, 74.86], kathmandu: [27.7, 85.32], gorkha: [28.0, 84.63],
  garhgaon: [26.93, 94.73], coochbehar: [26.32, 89.45], bareilly: [28.37, 79.43], amritsar: [31.63, 74.87], patiala: [30.34, 76.39], colombo: [6.93, 79.85], kandy: [7.29, 80.63], jaffna: [9.66, 80.02], punakha: [27.58, 89.86], ava: [21.85, 96.0], quetta: [30.18, 67.0] };
const A = (...ks) => ks.map((k) => { const [n, w] = Array.isArray(k) ? k : [k, 1]; return [C[n][0], C[n][1], w]; });
export const KEYDATES = [
  { year: 1526, title: 'Panipat: Babur defeats Ibrahim Lodi', polities: [
    { name: 'Mughal Empire', a: A(['delhi', 2], ['agra', 2], 'lahore', 'kabul'), note: 'Babur\'s new kingdom after Panipat (April 1526).' },
    { name: 'Mewar (Rana Sanga)', a: A(['chittor', 2], 'udaipur') }, { name: 'Marwar', a: A(['jodhpur', 2]) }, { name: 'Jaisalmer', a: A('jaisalmer') },
    { name: 'Gujarat Sultanate', a: A(['ahmedabad', 2], 'champaner', 'diu', 'surat', 'junagadh') }, { name: 'Malwa Sultanate', a: A(['mandu', 2], 'ujjain') },
    { name: 'Bengal Sultanate', a: A(['gaur', 2], 'dhaka') }, { name: 'Gajapati kingdom (Odisha)', a: A(['cuttack', 2]) }, { name: 'Khandesh (Faruqi)', a: A(['burhanpur', 1.4]) },
    { name: 'Ahmadnagar Sultanate', a: A(['ahmadnagar', 2], 'daulatabad', 'junnar') }, { name: 'Bijapur Sultanate', a: A(['bijapur', 2], 'goa', 'kolhapur') }, { name: 'Golconda Sultanate', a: A(['golconda', 2], 'warangal') },
    { name: 'Berar (Imad Shahi)', a: A('ellichpur') }, { name: 'Bidar (Barid Shahi)', a: A('bidar') }, { name: 'Vijayanagara Empire', a: A(['hampi', 2.4], 'penukonda', 'chandragiri', 'vellore', 'madurai', 'thanjavur', 'mysore', 'ikkeri') },
    { name: 'Portuguese Estado da India', a: A(['goa', 0.5]) }, { name: 'Zamorin of Calicut', a: A('calicut') }, { name: 'Kochi', a: A(['kochi', 0.6]) }, { name: 'Kashmir Sultanate', a: A(['srinagar', 1.5]) },
    { name: 'Ahom kingdom', a: A(['garhgaon', 1.6]) }, { name: 'Sindh (Arghun)', a: A(['thatta', 1.6]) }, { name: 'Multan (Langah)', a: A('multan') } ] },
  { year: 1605, title: 'The death of Akbar', polities: [
    { name: 'Mughal Empire', a: A(['agra', 2.4], ['delhi', 2], ['lahore', 2], 'kabul', 'kandahar', 'multan', 'thatta', 'ahmedabad', 'mandu', 'allahabad', 'patna', 'gaur', 'dhaka', 'cuttack', 'burhanpur', 'srinagar', 'amer', 'jodhpur', 'bikaner', 'jaisalmer'), note: 'Most Rajput states as Mughal allies.' },
    { name: 'Mewar', a: A(['udaipur', 1.2]), note: 'Unsubmitted until 1615.' }, { name: 'Ahmadnagar Sultanate', a: A('junnar', 'daulatabad'), note: 'Malik Ambar\'s resistance after the fall of Ahmadnagar (1600).' },
    { name: 'Bijapur Sultanate', a: A(['bijapur', 2], 'kolhapur', 'gulbarga') }, { name: 'Golconda Sultanate', a: A(['golconda', 2], 'warangal') }, { name: 'Vijayanagara (Aravidu)', a: A(['chandragiri', 1.6], 'penukonda', 'vellore') },
    { name: 'Madurai Nayaks', a: A(['madurai', 1.4], 'trichy') }, { name: 'Thanjavur Nayaks', a: A('thanjavur') }, { name: 'Mysore (Wodeyar)', a: A('srirangapatna') }, { name: 'Keladi Nayakas', a: A('ikkeri') },
    { name: 'Portuguese Estado da India', a: A(['goa', 0.5], ['bassein', 0.4], ['daman', 0.3], ['diu', 0.3]) }, { name: 'Zamorin of Calicut', a: A('calicut') }, { name: 'Ahom kingdom', a: A(['garhgaon', 1.6]) }, { name: 'Siddis of Janjira', a: A(['janjira', 0.3]) } ] },
  { year: 1674, title: 'Shivaji crowned at Raigad', polities: [
    { name: 'Mughal Empire', a: A(['delhi', 2.4], ['agra', 2], ['lahore', 2], 'kabul', 'multan', 'thatta', 'ahmedabad', 'mandu', 'allahabad', 'patna', 'dhaka', 'cuttack', 'burhanpur', 'aurangabad', 'srinagar', 'amer', 'jodhpur', 'gwalior') },
    { name: 'Maratha kingdom', a: A(['raigad', 1.6], 'pune', 'satara', 'kolhapur'), note: 'Shivaji\'s coronation, June 1674.' }, { name: 'Bijapur Sultanate', a: A(['bijapur', 1.8], 'gulbarga') }, { name: 'Golconda Sultanate', a: A(['golconda', 2], 'warangal', 'gingee') },
    { name: 'Siddis of Janjira', a: A(['janjira', 0.3]) }, { name: 'Portuguese Estado da India', a: A(['goa', 0.5], ['bassein', 0.4], ['daman', 0.3], ['diu', 0.3]) }, { name: 'English East India Company', a: A(['bombay', 0.25], ['madras', 0.25]) },
    { name: 'Madurai Nayaks', a: A(['madurai', 1.4], 'trichy') }, { name: 'Thanjavur', a: A('thanjavur') }, { name: 'Mysore (Wodeyar)', a: A('srirangapatna') }, { name: 'Keladi Nayakas', a: A('ikkeri') },
    { name: 'Zamorin of Calicut', a: A('calicut') }, { name: 'Ahom kingdom', a: A(['garhgaon', 1.6]) }, { name: 'Mewar', a: A(['udaipur', 1.1]) }, { name: 'Cooch Behar', a: A(['coochbehar', 0.6]) } ] },
  { year: 1761, title: 'The third battle of Panipat', polities: [
    { name: 'Maratha Confederacy', a: A(['pune', 2.2], 'satara', 'ahmadnagar', ['gwalior', 1.4], ['indore', 1.4], 'ujjain', ['nagpur', 1.6], 'baroda', 'cuttack', 'raigad', 'jhansi' in C ? 'jhansi' : 'gwalior'), note: 'Peshwa, Scindia, Holkar, Bhonsle and Gaekwad.' },
    { name: 'Mughal Empire', a: A(['delhi', 0.9]), note: 'Reduced to the country round Delhi.' }, { name: 'Durrani Empire', a: A(['kandahar', 2], ['kabul', 2], 'peshawar', 'lahore', 'multan', 'herat'), note: 'Ahmad Shah Durrani, the victor of Panipat (January 1761).' },
    { name: 'Hyderabad (Nizam)', a: A(['golconda', 1.8], 'aurangabad', 'bidar', 'gulbarga') }, { name: 'Mysore (Hyder Ali)', a: A(['srirangapatna', 1.5]) }, { name: 'Awadh', a: A(['faizabad', 1.6], 'lucknow', 'allahabad') },
    { name: 'Bengal (Nawab, under Company influence)', a: A(['murshidabad', 1.8], 'patna', 'dhaka') }, { name: 'English East India Company', a: A(['calcutta', 0.6], ['madras', 0.6], ['bombay', 0.3]) },
    { name: 'Carnatic (Arcot)', a: A(['arcot', 1.3], 'trichy') }, { name: 'Travancore', a: A(['trivandrum', 1.2]) }, { name: 'Jaipur', a: A('amer') }, { name: 'Marwar', a: A(['jodhpur', 1.2]) }, { name: 'Mewar', a: A('udaipur') }, { name: 'Bikaner', a: A('bikaner') }, { name: 'Jaisalmer', a: A('jaisalmer') },
    { name: 'Jats of Bharatpur', a: A(['bharatpur', 0.8]) }, { name: 'Rohillas', a: A(['bareilly', 0.8]) }, { name: 'Sikh misls', a: A(['amritsar', 0.9]) }, { name: 'Portuguese Estado da India', a: A(['goa', 0.5], ['daman', 0.3], ['diu', 0.3]) },
    { name: 'Siddis of Janjira', a: A(['janjira', 0.3]) }, { name: 'Ahom kingdom', a: A(['garhgaon', 1.6]) }, { name: 'Kashmir (Durrani governors)', a: A(['srinagar', 1.2]) }, { name: 'Sindh (Kalhora)', a: A(['thatta', 1.4]) } ] },
  { year: 1799, title: 'The fall of Srirangapatna', polities: [
    { name: 'East India Company', a: A(['calcutta', 2.2], 'patna', 'dhaka', 'cuttack', ['madras', 1.8], 'arcot', 'trichy', 'srirangapatna', 'calicut', ['bombay', 0.6], 'surat'), note: 'Bengal and Madras presidencies; Tipu Sultan killed at Srirangapatna, May 1799.' },
    { name: 'Maratha Confederacy', a: A(['pune', 2], 'satara', 'ahmadnagar', ['gwalior', 1.6], ['indore', 1.4], 'ujjain', ['nagpur', 1.6], 'baroda', 'raigad') },
    { name: 'Hyderabad (Nizam)', a: A(['golconda', 1.8], 'aurangabad', 'bidar', 'gulbarga') }, { name: 'Mysore (Wodeyar, under the Company)', a: A(['mysore', 0.9]) }, { name: 'Awadh', a: A(['lucknow', 1.5], 'faizabad') },
    { name: 'Sikh Empire', a: A(['lahore', 1.5], 'amritsar'), note: 'Ranjit Singh takes Lahore in 1799.' }, { name: 'Durrani Empire', a: A(['kabul', 2], 'kandahar', 'peshawar', 'multan', 'herat', 'srinagar') }, { name: 'Sindh (Talpur)', a: A(['hydSindh', 1.4]) },
    { name: 'Nepal (Gorkha)', a: A(['kathmandu', 1.6], 'gorkha') }, { name: 'Travancore', a: A(['trivandrum', 1.1]) }, { name: 'Rajput states', a: A('amer', 'jodhpur', 'udaipur', 'bikaner', 'jaisalmer') }, { name: 'Mughal Empire', a: A(['delhi', 0.5]) },
    { name: 'Portuguese Estado da India', a: A(['goa', 0.5], ['daman', 0.3], ['diu', 0.3]) }, { name: 'Ahom kingdom', a: A(['garhgaon', 1.4]) } ] },
  { year: 1857, title: 'The rising of 1857', polities: [
    { name: 'British India (Company rule)', a: A(['calcutta', 2.2], ['delhi', 1.6], 'lahore', 'allahabad', 'lucknow', 'patna', 'dhaka', 'cuttack', ['madras', 1.8], ['bombay', 1.8], 'pune', 'nagpur', 'karachi', 'hydSindh', 'multan', 'ahmedabad', 'surat', 'calicut', 'trichy', 'arcot'), note: 'Delhi, Lucknow, Kanpur and Jhansi are centres of the rising.' },
    { name: 'Hyderabad', a: A(['golconda', 1.6], 'aurangabad') }, { name: 'Mysore', a: A(['mysore', 0.9]) }, { name: 'Gwalior (Scindia)', a: A(['gwalior', 1.1]) }, { name: 'Indore (Holkar)', a: A(['indore', 0.9]) }, { name: 'Baroda (Gaekwad)', a: A(['baroda', 0.8]) },
    { name: 'Rajputana states', a: A('amer', 'jodhpur', 'udaipur', 'bikaner', 'jaisalmer') }, { name: 'Jammu and Kashmir (Dogra)', a: A(['srinagar', 1.4], 'jammu') }, { name: 'Travancore', a: A(['trivandrum', 1]) }, { name: 'Bhopal', a: A(['bhopal', 0.8]) },
    { name: 'Nepal', a: A(['kathmandu', 1.6]) }, { name: 'Afghanistan (Barakzai)', a: A(['kabul', 2], 'kandahar', 'herat') }, { name: 'Portuguese India', a: A(['goa', 0.5], ['daman', 0.3], ['diu', 0.3]) }, { name: 'French India', a: A(['pondicherry', 0.15]) } ] },
  { year: 1947, title: 'Independence and Partition (August 1947)', polities: [
    { name: 'India', a: A(['delhi', 2.4], 'bombay', 'calcutta', 'madras', 'lucknow', 'patna', 'nagpur', 'ahmedabad', 'pune', 'amer', 'jodhpur', 'udaipur', 'bikaner', 'mysore', 'trivandrum', 'cuttack', 'gwalior', 'indore', 'bhopal', 'amritsar', 'patiala', 'allahabad', 'garhgaon') },
    { name: 'Pakistan', a: A(['karachi', 1.6], ['lahore', 1.6], 'multan', 'peshawar', 'hydSindh', 'quetta', ['dhaka', 1.6]), note: 'West and East Pakistan.' },
    { name: 'Hyderabad (not yet acceded)', a: A(['golconda', 1.5], 'aurangabad') }, { name: 'Jammu and Kashmir (not yet acceded)', a: A(['srinagar', 1.3], 'jammu') }, { name: 'Junagadh (not yet acceded)', a: A(['junagadh', 0.5]) },
    { name: 'Portuguese India', a: A(['goa', 0.5], ['daman', 0.3], ['diu', 0.3]) }, { name: 'French India', a: A(['pondicherry', 0.15]) }, { name: 'Nepal', a: A(['kathmandu', 1.6]) }, { name: 'Bhutan', a: A(['punakha', 0.9]) },
    { name: 'Ceylon', a: A(['colombo', 1.2], 'kandy', 'jaffna') }, { name: 'Afghanistan', a: A(['kabul', 2], 'kandahar', 'herat') } ] },
];
