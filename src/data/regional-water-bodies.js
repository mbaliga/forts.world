// Modern Bhopal waterbody inventory from the Central Ground Water Board.
// Source coordinates are displayed as point anchors, never as shorelines.
export const BHOPAL_WATER_BODIES = [
  ['upper-lake','Upper Lake · Bhojtal','lake',23.249722,77.339722,31,36.817],
  ['lower-lake','Lower Lake · Chhota Talab','lake',23.247778,77.406944,1.29,0.714],
  ['shahpura-lake','Shahpura Lake','lake',23.203889,77.421667,0.96,0.553],
  ['motia-tank','Motia Tank','tank',23.265556,77.392500,0.0189,0.062],
  ['siddiqui-hussain-tank','Siddiqui Hussain Tank','tank',23.265556,77.395000,0.01,0.081],
  ['munsi-hussain-tank','Munsi Hussain Tank','tank',23.265556,77.395000,0.012,0.021],
  ['lendiya-talab','Lendiya Talab','tank',23.275000,77.391389,0.015,0.022],
  ['sarangpani-lake','Sarangpani Lake','lake',23.243611,77.472222,0.042,0.038],
  ['char-imli-pond','Char Imli Pond','pond',23.225278,77.421389,0.012,0.03],
  ['laharpur-reservoir','Laharpur Reservoir','reservoir',23.196200,77.479100,3.5,0.071],
  ['hathaikheda-reservoir','Hathaikheda Reservoir','reservoir',23.270556,77.495000,1.13,3.9],
  ['kerwa-reservoir','Kerwa Reservoir','reservoir',23.165278,77.361111,5.24,4.041],
  ['kaliasot-reservoir','Kaliasot Reservoir','reservoir',23.197500,77.399722,1.2,4.509],
].map(([id,name,kind,lat,lon,areaBefore2010Km2,area2019Km2]) => ({
  id,name,kind,lat,lon,areaBefore2010Km2,area2019Km2,
  source:'https://cgwb.gov.in/cgwbpnm/public/uploads/documents/17514136921720986469file.pdf',
  positionEvidence:'CGWB listed coordinate; point anchor only, no shoreline polygon',
  areaEvidence:'CGWB table 2.4 reports pre-2010 and 2019 water-spread areas; extent changes, not a static historical footprint',
}));

export const BHOPAL_HYDROLOGY_RELATIONS = [
  {
    label:'Upper Lake → Bhadbhada spill gate → Kaliasot Reservoir',
    evidence:'CGWB describes Kaliasot Reservoir as storing excess Upper Lake discharge through the Bhadbhada spill gate.',
    source:'https://cgwb.gov.in/cgwbpnm/public/uploads/documents/17514136921720986469file.pdf',
  },
  {
    label:'Kaliasot Reservoir → Kaliasot River → Betwa near Bhojpur',
    evidence:'MPPCB describes an approximately 29 km southeast-flowing course from the dam to the Betwa; its report says flow is meagre outside monsoon and the lower stretch can be dry for 8–9 months.',
    source:'https://mppcb.mp.gov.in/proc/KALIYASOTE%2023.5.19.pdf',
  },
  {
    label:'Northeast Bhopal → Patra Nallah → Halali system → Betwa downstream of Vidisha',
    evidence:'Bhopal Development Plan 1991 describes the north-east drainage relationship. Its line geometry has not been digitized here.',
    source:'https://www.mptownplan.gov.in/LU-panel/Bhopal/Bhopal%20Master%20Plan%201991%20English.pdf',
  },
];
