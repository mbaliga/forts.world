// Curation for Edinburgh Castle (batch world-curation). Evidence and conflicts: docs/research/edinburgh-castle-q212065-pass.md.
// No plan or survey drawing was read (data/plans/search was empty); the mapped OSM outline, buildings, wall lines and gun positions are the position evidence,
// and the written record (Historic Environment Scotland, Canmore, castle site) supplies the dates. Everything drawn in the constructed layer is schematic.
import { carryOver } from './_common.mjs';
import { rectAt } from './_common.mjs';

export const TIER = 'T1';
export const STATUS = 'needs-plan';
export const HEADER = [
  'Edinburgh Castle, Scotland. Hand-curated trace, tier T1 (OSM-mapped outline, wall lines, 40 building footprints, gun positions; no plan, no heights) plus a schematic constructed layer for three dates.',
  'Base: data/traces/edinburgh-castle-q212065.trace.json (OSM ODbL; Terrarium z15 every 10 m, ~30 m SRTM-derived: the rock reads about 90-100 m, so its cliffs are heavily smoothed).',
  'Eras: 1550 (before the Lang Siege; Spur of 1548 and David\'s Tower standing), 1573 (after the siege; David\'s Tower down, Half Moon Battery begun), today.',
  'The constructed layer follows OSM footprints and the OSM wall line (which includes the curve of the Half Moon Battery) with assumed heights, each with its rule. Documented heights: none.',
];

export default function curate(T, h) {
  const S = (id, title, url) => h.source({ id, kind: 'web', title, url, licence: 'read for facts only; no text or images shipped', fetched: '2026-11-27' });
  S('hes-sm90130', 'Historic Environment Scotland scheduling record SM90130, Edinburgh Castle', 'https://portal.historicenvironment.scot/designation/SM90130');
  S('canmore-52068', 'Canmore: Edinburgh Castle (site 52068)', 'https://canmore.org.uk/site/52068');
  S('canmore-52070', 'Canmore: Edinburgh Castle, Half Moon Battery (site 52070)', 'https://canmore.org.uk/site/52070/edinburgh-castle-half-moon-battery');
  S('canmore-52072', 'Canmore: Edinburgh Castle, Wellhouse Tower (site 52072)', 'https://canmore.org.uk/site/52072');
  S('hes-sos', 'HES Statement of Significance, Edinburgh Castle: the Defences (PIC222)', 'https://app-hes-pubs-prod-neu-01.azurewebsites.net/api/file/1419eaf2-a97a-4ee7-aa1f-b00a00ebbb79');
  S('oec-palace', 'Book of the Old Edinburgh Club NS4 (1997), The Palace at Edinburgh Castle', 'https://oldedinburghclub.org.uk/wp-content/uploads/2022/10/BOEC_NS4_1997_The_Palace_at_Edinburgh_Castle.pdf');

  // ---- documented layer: names and notes on mapped features (no heights are mapped) --------------------------------------
  const nm = (id, name, note) => { const e = h.byId(id); e.name = name; if (note) e.note = note; };
  nm('outline', 'Castle outline · mapped (OSM way 4301292)');
  nm('wall-146', 'South and east perimeter wall incl. the curve of the Half Moon Battery · mapped (OSM way 41299993), elevation unknown', 'The mapped line follows the south face of the Upper Ward and then curves round the Half Moon Battery on the east side; Canmore gives the battery\'s south breast wall a maximum height of 80 ft (about 24 m, 1951 account), not mapped.');
  nm('building-142', 'St Margaret\'s Chapel · mapped (OSM way 41299985)', 'Canmore and HES: the oldest upstanding building, c.1130 (David I), nave with chancel arch and apse; restored 1850s and 1880s.');
  nm('building-597', 'The Great Hall (1509-11) · mapped (OSM way 467503846)', 'HES: built 1509-11 over earlier vaults; barracks from 1650; restored by Hippolyte Blanc 1887-91.');
  nm('building-360', 'Royal Palace block · mapped (OSM way 290611982)', 'HES: 15th-century fabric on the site of the King\'s Great Chamber (1434-35), largely rebuilt 1615-17 by Sir James Murray of Kilbaberton.');
  nm('building-596', 'Queen Anne Building (1708-13) · mapped (OSM way 467503845)', 'HES: built 1708-13 as officers\' and gunners\' quarters on the site of a late medieval range.');
  nm('building-622', 'Scottish National War Memorial (1924-27) · mapped (OSM way 511343921)', 'HES: Lorimer, built 1924-27 on the site of the North Barracks (1755).');
  nm('building-175', 'David\'s Tower ruin · mapped (OSM way 53532874)', 'The stump of David II\'s tower (begun 1367-68) inside the Half Moon Battery, found in 1912-13; the mapped polygon is the surveyed wall lines of the stump, not the tower\'s full plan.');
  nm('building-722', 'Wellhouse Tower ruin (1362) · mapped (OSM way 1025631685)', 'Canmore: built 1362 at the north base of the rock, main block about 38 x 30 ft, a 10 ft square well wing; ruinous by the late 17th century.');
  nm('building-134', 'New Barracks (1796-99) · mapped (OSM way 41294347)', 'HES: six storeys, the largest structure in the castle; verandah added 1893.');
  nm('building-140', 'Governor\'s House (1740-42) · mapped (OSM way 41299983)', 'HES: Dugal Campbell; five-bay main block with three-bay pavilions.');
  nm('building-136', 'Hospital (1753-54 storehouses, hospital 1893-97) · mapped (OSM way 41299976)');
  nm('building-137', 'Mills Mount cart sheds (1746) · mapped (OSM way 41299978)', 'HES: single-storey open-fronted shed beside the late-17th-century Mills Mount Battery.');
  nm('building-595', 'Military Prison (1840-42) · mapped (OSM way 467503844)', 'HES: 1840-42, heightened and extended 1880.');
  nm('building-143', 'Portcullis Gate (1574) and Argyle Tower (1887) · mapped (OSM way 41299987)', 'Canmore: lower part erected by Regent Morton in 1574 on the site of the wrecked Constable\'s Tower; Blanc\'s Argyle Tower upper part 1886-87.');
  nm('building-145', 'Gatehouse (1886-88) · mapped (OSM way 41299992)', 'HES: Scots Baronial, replacing a plainer 17th-century gate.');

  Object.assign(h.byId('marker-13'), { unreachableOk: true, unreachableNote: 'the mapped node lies inside the palace footprint in a room the walk mesh does not open; the position is the OSM node.' });

  // ---- documented layer for dated eras: only what the record says stood, carried back and marked inferred ---------------------
  const nature = [...h.all('cliff').map((c) => c.id), ...h.all('zone').filter((z) => z.zone === 'bare_rock').map((z) => z.id)];
  const keepOld = ['outline', ...nature, 'building-142', 'building-597', 'building-360', 'building-175', 'building-722', 'marker-51'];
  carryOver(T, '1550', keepOld, { note: 'the present mapped footprint is assumed to mark a building that stood before 1573 (chapel c.1130, Great Hall 1509-11, Wellhouse Tower 1362, David\'s Tower 1367-68, Fore Well, the palace fabric); no plan of that date was found and the footprints of the palace and tower are not known to match the present ones',
    modify: { 'building-175': { name: 'David\'s Tower footprint · carried back from the mapped stump, inferred' }, 'building-360': { name: 'Palace block (15th-century fabric, rebuilt 1615-17) · footprint carried back, inferred' } } });
  carryOver(T, '1573', keepOld, { note: 'as 1550; after the siege the tower is a ruin and the Great Hall and chapel are assumed to have stood on today\'s footprints',
    modify: { 'building-175': { name: 'David\'s Tower ruin (collapsed 1573) · mapped stump carried back, inferred' } } });

  // ---- constructed (schematic) layer -------------------------------------------------------------------------------------
  const ring = h.byId('outline').poly, W = h.byId('wall-146').path;
  const E50 = '1550', E73 = '1573', ET = 'today', ALL = [E50, E73, ET];
  const hm = (v, note) => ({ v, src: 'inferred', note });
  const b = (t) => t;
  const poly = (id) => h.byId(id).poly;
  const cannon = (n) => h.byId(`marker-${n}`).at;
  // Half Moon Battery curve: the mapped wall vertices from the north junction round to the south, so the left-hand (outer) side is the east.
  const iN = W.findIndex((p) => Math.abs(p[0] - 92.53) < 0.1 && Math.abs(p[1] + 15.78) < 0.1), iS = W.findIndex((p) => Math.abs(p[0] - 105.57) < 0.1 && Math.abs(p[1] + 54.74) < 0.1);
  const hmbPath = W.slice(iS, iN + 1).reverse();
  const forePath = [33, 34, 35, 36, 37, 38].map(cannon);
  const dtRect = rectAt([87, -32], 13, 9, -38);
  T.constructed = [
    { id: 'c-curtain', kind: 'wall', path: ring, closed: true, thick: 2.4, merlon: true, src: h.byId('outline').src, ev: 'schematic', conf: 0.2, eras: ALL,
      name: 'Curtain wall on the rock edge · schematic, 5 m assumed',
      basis: 'Drawn on the mapped castle outline, which follows the rock edge. HES: by the early 15th century the upper rock was enclosed by a curtain wall with towers; Canmore records a 12 ft (3.7 m) wall scaled in 1313 and fragments surviving to near full height beside David\'s Tower. The present line is carried back, so its 1550 course is inferred.',
      h: hm(5, '12 ft (3.7 m) wall of 1313 plus the later heightening HES records; no surveyed height read') },
    { id: 'c-gate-east', kind: 'gate', wall: 'c-curtain', at: [130.4, -13], w: 4, src: 'inferred', ev: 'schematic', conf: 0.15, eras: ALL,
      name: 'Outer entrance from the Esplanade · schematic opening',
      basis: 'An opening is cut where the present Gatehouse (1886-88) stands, the only road in; the earlier Inner Barrier (c.1450-1573, Canmore) and the Spur gate lay on this approach but their lines are not known.' },
    { id: 'c-davids-tower', kind: 'building', poly: dtRect, roof: 'flat', merlon: true, unreachableOk: true, unreachableNote: 'a solid schematic tower mass with no stair or door drawn; look at it from the rampart.', replaces: ['building-175'], src: h.byId('building-175').src, ev: 'schematic', conf: 0.15, eras: [E50],
      name: 'David\'s Tower (begun 1367-68) · schematic mass, 25 m assumed',
      basis: 'Canmore and the Old Edinburgh Club (1997): an enormous L-plan tower house begun 1367-68, several storeys above every other building on the rock; a castle-site page says about 30 m; the stump still stands almost 15 m. Centred on the mapped stump; plan size (13 x 9 m) is assumed, the L-shaped wing is not drawn.',
      h: hm(25, 'between the 15 m stump that survives and the 30 m a visitor page gives; neither is a survey') },
    { id: 'c-davids-stump', kind: 'building', poly: dtRect, roof: 'flat', unreachableOk: true, unreachableNote: 'a solid schematic ruin mass with no stair drawn.', replaces: ['building-175'], src: h.byId('building-175').src, ev: 'schematic', conf: 0.15, eras: [E73],
      name: 'David\'s Tower ruin after the siege · schematic, 9 m assumed',
      basis: 'The tower collapsed in the bombardment of May 1573, destroying the last well (Scotsman; Canmore; castle-site blog); its stump was sealed in the Half Moon Battery. How much stood in 1573 is not recorded.',
      h: hm(9, 'about 60% of the 15 m stump found in 1912; an illustration only') },
    { id: 'c-constable', kind: 'tower', at: [58, 18], r: 6.5, top: undefined, src: h.byId('building-143').src, ev: 'schematic', conf: 0.12, eras: [E50],
      name: 'Constable\'s Tower (1375-79) · schematic round tower, 16 m assumed',
      basis: 'Traditionally on the site of the Portcullis Gate (Canmore, Old Edinburgh Club); the Club\'s author argues a large round tower of the 1544-73 drawings was the true tower; HES says it may live on in the round bastion that now holds the Dog Cemetery (mapped arc, OSM way 305011952, near 47,24). Wrecked in the Lang Siege. Round plan and 6.5 m radius assumed.',
      h: hm(16, 'a gate tower about two thirds of David\'s Tower\'s assumed height; no source gives it') },
    { id: 'c-spur', kind: 'wall', path: [[146, 12], [186, -16], [146, -46]], closed: false, thick: 3, src: 'inferred', ev: 'schematic', conf: 0.1, eras: [E50],
      name: 'The Spur, angle-bastioned forework (1548) · schematic salient, 4 m assumed',
      basis: 'HES: an innovative angle-bastioned forework on Castle Hill, the "forte of the castle hill", built 1548 with Italian help; a fragment was found beneath the Esplanade in 2010. Its size, outline and position are not published in anything read, so only an arrow-head salient east of the entrance is drawn, in the right place and orientation to within tens of metres.',
      h: hm(4, 'a low earth-and-stone rampart; no height is recorded') },
    { id: 'c-forewall', kind: 'wall', path: forePath, closed: false, thick: 3.5, src: 'osm:node/12571369819', ev: 'schematic', conf: 0.2, eras: ALL,
      name: 'Forewall Battery · schematic, 6 m assumed',
      basis: 'HES: the Forewall Battery and the Half Moon Battery were the main artillery platforms; guns here originate in the 1540s and the present embrasured parapet is of 1695. Drawn along the mapped gun positions (OSM nodes 12571369819-824), on the north side of the Half Moon Battery.',
      h: hm(6, 'a gun platform parapet; no height read') },
    { id: 'c-hmb-begun', kind: 'wall', path: hmbPath, closed: false, thick: 5, src: h.byId('wall-146').src, ev: 'schematic', conf: 0.2, eras: [E73],
      name: 'Half Moon Battery, begun (1573-74) · schematic, 5 m assumed',
      basis: 'Canmore and HES: built after the Lang Siege by Regent Morton, around and over the ruin of David\'s Tower (1573-1610; 1574 in the 1951 account). Drawn as the curve of the mapped wall; the 1573 stage reached is not recorded.',
      h: hm(5, 'half the height of the finished curved wall, an illustration of work in progress') },
    { id: 'c-hmb', kind: 'wall', path: hmbPath, closed: false, thick: 6, merlon: true, src: h.byId('wall-146').src, ev: 'schematic', conf: 0.2, eras: [ET],
      name: 'Half Moon Battery · schematic curved wall, 10 m assumed',
      basis: 'Canmore: a platform founded partly on David\'s Tower and partly on old water-tank vaults, girded by a massive curved wall, nine guns, south breast wall 80 ft (24 m) at most in four receding tiers; the embrasured parapet is of 1695. The curve follows the mapped OSM wall (fit radius about 27 m, centre about 85,-42, +-5 m).',
      h: hm(10, 'the 24 m breast wall is measured from the foot of the rock, which the 30 m DEM smooths away; 10 m of wall above the Esplanade-side ground is assumed') },
    { id: 'c-chapel', kind: 'building', poly: poly('building-142'), roof: 'gable', unreachableOk: true, unreachableNote: 'a small schematic mass with no door drawn.', replaces: ['building-142'], src: h.byId('building-142').src, ev: 'schematic', conf: 0.2, eras: ALL,
      name: 'St Margaret\'s Chapel (c.1130) · schematic mass, 6 m assumed',
      basis: 'Canmore and HES: nave with a barrel vault, a chancel arch and a rounded apse, the oldest upstanding building. Drawn on the mapped footprint; the vault and apse are not modelled.',
      h: hm(6, 'single-storey vaulted nave with a pitched roof; no height read') },
    { id: 'c-great-hall', kind: 'building', poly: poly('building-597'), roof: 'gable', unreachableOk: true, unreachableNote: 'a solid schematic hall mass with no door drawn.', replaces: ['building-597'], src: h.byId('building-597').src, ev: 'schematic', conf: 0.2, eras: ALL,
      name: 'The Great Hall (1509-11) · schematic mass, 13 m assumed',
      basis: 'HES: built 1509-11 over earlier vaults on the south side of Crown Square, with a hammer-beam roof that is largely original; the eastern gable is thicker than the rest. Drawn on the mapped footprint.',
      h: hm(13, 'a tall single-volume hall with vaults below and a steep roof; no height read') },
    { id: 'c-palace', kind: 'building', poly: poly('building-360'), roof: 'flat', unreachableOk: true, unreachableNote: 'a solid schematic palace mass with no door drawn.', replaces: ['building-360'], src: h.byId('building-360').src, ev: 'schematic', conf: 0.15, eras: ALL,
      name: 'Royal Palace block · schematic mass, 14 m assumed',
      basis: 'Old Edinburgh Club (1997) and HES: a double-pile block with apartments in three storeys and service rooms in four to the west, 15th-century fabric rebuilt 1615-17. The 1550 and 1573 forms differ from the 1617 block and are not known; the present footprint is carried back.',
      h: hm(14, '4 storeys at 3.5 m on the high side; no height read') },
    { id: 'c-wellhouse', kind: 'building', poly: poly('building-722'), roof: 'flat', unreachableOk: true, unreachableNote: 'a solid schematic tower mass outside the walls with no door drawn.', replaces: ['building-722'], src: h.byId('building-722').src, ev: 'schematic', conf: 0.25, eras: [E50, E73],
      name: 'Wellhouse Tower (1362) · schematic mass, 9 m assumed',
      basis: 'Canmore: built 1362 at the north base of the rock, main block about 38 x 30 ft (11.6 x 9.1 m) plus a 10 ft well wing; a 2005 analysis suggests at least three storeys; fed by St Margaret\'s Well and linked to the summit by cranes (castle-site talk).',
      h: hm(9, 'three storeys at 3 m, the 2005 minimum') },
    { id: 'c-portcullis', kind: 'building', poly: poly('building-143'), roof: 'flat', merlon: true, unreachableOk: true, unreachableNote: 'a solid schematic gatehouse mass; the passage through the portcullis is not drawn.', src: h.byId('building-143').src, ev: 'schematic', conf: 0.2, eras: [ET],
      name: 'Portcullis Gate and Argyle Tower · schematic mass, 12 m assumed',
      basis: 'Canmore: lower part of 1574 on the site of the Constable\'s Tower, a vaulted passage with a portcullis; an upper storey added 1610-1780; Blanc\'s Argyle Tower of 1886-87 above. The passage and the Lang Stair beside it are not drawn.',
      h: hm(12, 'two to three storeys at about 4.5 m; no height read') },
    { id: 'c-queen-anne', kind: 'building', poly: poly('building-596'), roof: 'flat', unreachableOk: true, unreachableNote: 'a solid schematic block with no door drawn.', src: h.byId('building-596').src, ev: 'schematic', conf: 0.2, eras: [ET],
      name: 'Queen Anne Building (1708-13) · schematic mass, 11 m assumed',
      basis: 'HES: 1708-13 officers\' and gunners\' quarters on the west side of Crown Square, its southern part with gun-ports.', h: hm(11, '3 storeys at 3.6 m; no height read') },
    { id: 'c-war-memorial', kind: 'building', poly: poly('building-622'), roof: 'flat', unreachableOk: true, unreachableNote: 'a solid schematic block with no door drawn.', src: h.byId('building-622').src, ev: 'schematic', conf: 0.2, eras: [ET],
      name: 'Scottish National War Memorial (1924-27) · schematic mass, 12 m assumed',
      basis: 'HES: Lorimer, built 1924-27 on the site of the North Barracks (1755), north side of Crown Square.', h: hm(12, 'a two-storey hall with a high roof; no height read') },
    { id: 'c-new-barracks', kind: 'building', poly: poly('building-134'), roof: 'flat', unreachableOk: true, unreachableNote: 'a solid schematic block with no door drawn.', src: h.byId('building-134').src, ev: 'schematic', conf: 0.25, eras: [ET],
      name: 'New Barracks (1796-99) · schematic mass, 19 m assumed',
      basis: 'HES: six storeys, by far the largest structure in the castle, reading as three storeys from the east.', h: hm(19, '6 storeys at 3.2 m') },
    { id: 'c-governor', kind: 'building', poly: poly('building-140'), roof: 'flat', unreachableOk: true, unreachableNote: 'a solid schematic block with no door drawn.', src: h.byId('building-140').src, ev: 'schematic', conf: 0.2, eras: [ET],
      name: 'Governor\'s House (1740-42) · schematic mass, 9 m assumed',
      basis: 'HES: five-bay main block flanked by three-bay pavilions, wings raised a storey later in the 18th century.', h: hm(9, '2 storeys and an attic at about 3.2 m') },
    { id: 'c-hospital', kind: 'building', poly: poly('building-136'), roof: 'flat', unreachableOk: true, unreachableNote: 'a solid schematic block with no door drawn.', src: h.byId('building-136').src, ev: 'schematic', conf: 0.15, eras: [ET],
      name: 'Hospital Square storehouses (1753-54) · schematic mass, 8 m assumed',
      basis: 'HES: two storehouses of 1753-54 converted to a military hospital 1893-97.', h: hm(8, '2 storeys at 4 m; no height read') },
    { id: 'c-prison', kind: 'building', poly: poly('building-595'), roof: 'flat', unreachableOk: true, unreachableNote: 'a solid schematic block with no door drawn.', src: h.byId('building-595').src, ev: 'schematic', conf: 0.15, eras: [ET],
      name: 'Military Prison (1840-42) · schematic mass, 9 m assumed',
      basis: 'HES: 1840-42 with solitary cells, heightened and extended in 1880.', h: hm(9, '3 storeys at 3 m; no height read') },
  ];

  T.eras = [
    { id: E50, year: 'c. 1550', label: 'Before the Lang Siege', short: 'c. 1550', lens: 'none',
      summary: 'The royal castle as it stood before the Lang Siege: David II\'s great tower on the east, the Constable\'s Tower guarding the climb, the Great Hall of James IV, the palace on Crown Square and the Spur thrown up on Castle Hill in 1548.',
      basis: 'HES scheduling record and Statement of Significance, Canmore, and the Old Edinburgh Club (1997). The drawn mapped layer is the present OSM footprints of the chapel, Great Hall, palace block, David\'s Tower stump and Wellhouse Tower carried back, marked inferred.',
      conjecture: 'No plan of this date was found open (the 1544, 1547 and 1573 drawings the Old Edinburgh Club cites were not seen). The Spur is placed to within tens of metres and its outline is not known; the Constable\'s Tower\'s site is disputed; the earlier curtain-wall towers, the Inner Barrier and the upper battery between the Munition House and St Margaret\'s Chapel are not drawn. The era is c. 1550 and not 1540 because the Spur dates from 1548 (HES); the curtain wall beside David\'s Tower was already remodelled for guns by 1546.',
      sources: ['EDI-01', 'EDI-02', 'EDI-04', 'EDI-05', 'EDI-06'],
      facts: ['HES: c.1540s refortification remodelled the curtain wall between David\'s and the Constable\'s Tower for gunpowder artillery (gunhole of 1546); the defences held at least 25 bronze guns in 1566; the Spur is an angle-bastioned forework built 1548.', 'Old Edinburgh Club: David\'s Tower was begun 1367-68 and was higher than any other building on the rock; the palace was a three-tower group of David\'s Tower, the Register Tower and James I\'s Great Chamber.', 'Canmore: Fore Well tower built between c.1450 and 1573; the Inner Barrier was made in the same period; the Great Hall was built early in the 16th century.'] },
    { id: E73, year: '1573', label: 'After the Lang Siege', short: '1573', lens: 'none',
      summary: 'After the 18-month siege and the ten-day English bombardment of May 1573: David\'s Tower down, the Constable\'s Tower wrecked, the east defences broken, and Regent Morton\'s Half Moon Battery just begun.',
      basis: 'The Scotsman (Lang Siege), Canmore (Half Moon Battery 1573-1610, Portcullis Gate 1574), HES Statement of Significance. The mapped layer is the same carried-back set as 1550, with the tower a ruin.',
      conjecture: 'How far the battery had risen in 1573 is not recorded; a 5 m stage is illustrated. The Spur is not drawn: it was damaged and Morton ordered its rebuilding, but no description of its state was read. The Portcullis Gate (1574) is left out as it postdates the surrender. Damage to the curtain wall is not drawn.',
      sources: ['EDI-01', 'EDI-03', 'EDI-04', 'EDI-05', 'EDI-07', 'EDI-08'],
      facts: ['The Scotsman: the siege began May 1571; English guns battered the castle for ten days from 17 May 1573; Kirkaldy surrendered on 28 May; David\'s Tower collapsed and destroyed the last well; the Constable\'s Tower was wrecked.', 'Castle-site blog: the tower\'s ruins were sealed inside the new Half Moon Battery and rediscovered in 1912; a castle talk says two tiers of guns faced the town in 1573, one along the line of the later battery about 5 m lower.'] },
    { id: ET, year: 'Today', label: 'Historic Scotland monument', short: 'Monument', lens: 'none',
      summary: 'The castle as mapped today, with the Half Moon Battery curve, the Great Hall, palace and Crown Square buildings, and the barracks of the 18th and 19th centuries.',
      basis: 'OpenStreetMap footprints, wall lines and gun positions, with dates from the HES scheduling record.',
      conjecture: 'Every height is unknown in the evidence layer (kerb-high); see the constructed layer. Foog\'s Gate, the Mills Mount, Argyle and Dury\'s batteries, the Dry Ditch, Lang Stair and the Esplanade wall are not drawn: no position was read for them beyond the mapped gun nodes. The 30 m DEM smooths the rock\'s cliffs.',
      sources: ['EDI-01', 'EDI-02', 'EDI-03', 'EDI-04', 'EDI-06', 'EDI-07'],
      facts: ['HES: the Esplanade took its present form in 1816-20; the Spur was demolished in the 1650 and later works and levelled in the 1750s, a fragment surviving beneath the Esplanade.', 'The Half Moon Battery carries nine guns (Canmore) and 1810 18-pounders (castle site).'] },
  ];
}
