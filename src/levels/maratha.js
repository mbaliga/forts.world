// The ten further components of the Maratha Military Landscapes of India (UNESCO World Heritage, inscribed 2025),
// built with the fort generator. The history in the notes is drawn from standard accounts; plan shapes, dimensions
// and the positions of buildings are inferred (not surveyed) and the plans are compressed (planScale) with heights
// reduced (vScale). Replace the sheets' numbers with surveyed plans when available (see HANDOFF.md, 4.3).
import { makeFort } from './gen.js';
const U = { planScale: 4, vScale: 10 };
const today = (summary) => ({ id: 'today', year: 'Today', label: 'World Heritage site', short: 'World Heritage', lens: 'none', summary,
  basis: 'Inscribed by UNESCO in 2025 as a component of the Maratha Military Landscapes of India.', conjecture: 'Plan, buildings and paths are inferred, not surveyed.' });

export const raigad = makeFort({ id: 'raigad', name: 'Raigad', native: { text: 'रायगड', lang: 'mr', script: 'deva' }, region: 'Raigad · Maharashtra', typeLabel: 'Hill fort and capital', coords: [18.236111, 73.444444],
  siteReference: { source: 'UNESCO component map 1739-005', kind: 'component reference coordinate; not a boundary vertex or fort-wall centre', propertyAreaHa: 340.77, previousCataloguePoint: [18.234, 73.440] },
  type: 'hill', seed: 11, units: U, size: { rx: 160, ry: 108, rot: 20 }, hill: { h: 56, cliff: 12, skirt: 62 }, bastionStep: 40, people: 16,
  gates: [{ a: 60, name: 'Maha Darwaja', main: true }, { a: 245, name: 'Wagh Darwaja' }, { a: 150, name: 'Chit Darwaja' }],
  buildings: [{ name: 'Raj Bhavan (the palace)', x: -15, y: 15, w: 40, d: 26, storeys: 2, kind: 'palace' }, { name: 'Raj Sadar (the court)', x: 34, y: 26, w: 22, d: 15, kind: 'palace' },
    { name: 'Bazaar (Holicha Mal)', x: 52, y: -26, w: 56, d: 6, rot: 10, kind: 'house' }, { name: 'Bazaar (Holicha Mal)', x: 50, y: -37, w: 56, d: 6, rot: 10, kind: 'house' }],
  temples: [{ x: 98, y: -12, w: 6, h: 9, rot: 90 }, { x: 108, y: -26, w: 3, h: 3.5 }], tanks: [{ name: 'Ganga Sagar', x: -34, y: -30, rx: 17, ry: 10, rot: 15 }, { name: 'Kushavarta tank', x: -88, y: 26, rx: 8, ry: 6 }],
  eras: [{ id: '1674', year: '1674', label: 'Shivaji\'s coronation', short: 'Coronation', lens: 'engraving', summary: 'June 1674: Shivaji is crowned Chhatrapati at his capital; the court, the bazaar and the garrison fill the plateau.',
    basis: 'The coronation (Rajyabhishek) of 6 June 1674 at Raigad, recorded in contemporary accounts including that of the English envoy Henry Oxenden.', conjecture: 'The plan, the palace and court layout and the bazaar rows are inferred.' },
    today('Ruins of the palace and the bazaar on the plateau, reached by a long stair and a ropeway; Shivaji\'s samadhi near the Jagadishwar temple.')],
  pois: [
    { id: 'rajsadar', at: [34, 14], title: 'Raj Sadar', text: 'The court where Shivaji held audience; his coronation as Chhatrapati took place at Raigad on 6 June 1674.', ev: 'documented' },
    { id: 'bazaar', at: [52, -31], title: 'The bazaar (Holicha Mal)', text: 'A long street of shop plinths running across the plateau, the market of the capital.', ev: 'documented' },
    { id: 'jagadishwar', at: [98, -4], title: 'Jagadishwar temple and the samadhi', text: 'The temple of the capital; Shivaji died at Raigad in April 1680, and his samadhi stands near it.', ev: 'documented' },
    { id: 'gangasagar', at: [-34, -18], title: 'Ganga Sagar', text: 'The principal tank of the plateau, said to have been filled with water from many rivers for the coronation.', ev: 'inferred' },
    { id: 'takmak', at: [-120, -22], title: 'Takmak Tok', text: 'A sheer cliff at the end of the plateau, from which, by tradition, condemned prisoners were thrown.', ev: 'inferred' },
    { id: 'history', at: [-15, -2], title: 'The capital and its fall', text: 'Shivaji took the fort (then Rairi) in 1656 and made it his capital. The Mughals took it in 1689; the British bombarded and took it in 1818.', ev: 'documented' }] });

export const rajgad = makeFort({ id: 'rajgad', name: 'Rajgad', native: { text: 'राजगड', lang: 'mr', script: 'deva' }, region: 'Pune · Maharashtra', typeLabel: 'Hill fort, first capital', coords: [18.246111, 73.682500],
  siteReference: { source: 'UNESCO component map 1739-006', kind: 'component reference coordinate; not a boundary vertex or fort-wall centre', propertyAreaHa: 269.26, previousCataloguePoint: [18.246, 73.682], researchSurvey: { wallPerimeterM: 8032, mappedAreaAcres: 87.5, resolutionCmPerPixel: 10, controlPointCaveat: 'Study reports no DGPS ground control; these mapped quantities are not interchangeable with UNESCO property area.' } },
  type: 'hill', seed: 13, units: U, size: { rx: 140, ry: 85, rot: -30 }, hill: { h: 52, cliff: 12, skirt: 62 }, innerWall: { k: 0.32, h: 4.5 }, people: 12,
  gates: [{ a: 300, name: 'Pali Darwaja', main: true }, { a: 120, name: 'Gunjavane Darwaja' }],
  buildings: [{ name: 'Sadar', x: 12, y: -6, w: 16, d: 12, kind: 'palace' }, { name: 'Balekilla quarters', x: -6, y: 10, w: 10, d: 8, kind: 'barracks' }, { name: 'Padmavati Machi houses', x: -75, y: 32, w: 18, d: 8, rot: -30, kind: 'house' }],
  temples: [{ x: -62, y: 44, w: 4.5, h: 6, rot: 60 }], tanks: [{ name: 'Padmavati tank', x: -88, y: 20, rx: 10, ry: 7, rot: -30 }],
  eras: [{ id: '1665', year: '1665', label: 'Shivaji\'s first capital', short: 'First capital', lens: 'engraving', summary: 'The 1660s: Rajgad is Shivaji\'s seat of government, its three machis (spurs) and the Balekilla citadel garrisoned.',
    basis: 'Rajgad served as Shivaji\'s capital for about 25 years before Raigad (standard accounts; UNESCO nomination).', conjecture: 'The three machis are folded into one plateau in this model; buildings and paths are inferred.' },
    today('A long climb to the Balekilla; the machis, gates and tank survive.')],
  pois: [
    { id: 'balekilla', at: [0, 0], title: 'The Balekilla', text: 'The citadel on the highest knob of the fort, walled within the plateau.', ev: 'documented' },
    { id: 'padmavati', at: [-80, 36], title: 'Padmavati Machi', text: 'One of the three spurs (machis) of the fort, with its tank and temple; Shivaji\'s queen Saibai, who died in 1659, is commemorated here.', ev: 'documented' },
    { id: 'suvela', at: [92, -32], title: 'Suvela Machi', text: 'The eastern spur, with its walls and a natural rock arch.', ev: 'inferred' },
    { id: 'sanjeevani', at: [40, 52], title: 'Sanjeevani Machi', text: 'The long south-western spur, fortified in tiers of walls.', ev: 'inferred' },
    { id: 'capital', at: [12, -20], title: 'The first capital', text: 'For about twenty-five years Rajgad was Shivaji\'s capital, until the court moved to Raigad.', ev: 'documented' }] });

export const pratapgad = makeFort({ id: 'pratapgad', name: 'Pratapgad', native: { text: 'प्रतापगड', lang: 'mr', script: 'deva' }, region: 'Satara · Maharashtra', typeLabel: 'Hill fort', coords: [17.935833, 73.578611],
  siteReference: { source: 'UNESCO component map 1739-007', kind: 'component reference coordinate; not a boundary vertex or fort-wall centre', propertyAreaHa: 79.30, previousCataloguePoint: [17.936, 73.578] },
  type: 'hill', seed: 17, units: U, size: { rx: 95, ry: 62, rot: 15 }, hill: { h: 48, cliff: 12, skirt: 80 }, innerWall: { k: 0.55, h: 5 }, bastionStep: 28, people: 10,
  gates: [{ a: 200, name: 'Maha Darwaja', main: true }],
  buildings: [{ name: 'Upper fort quarters', x: 8, y: 6, w: 14, d: 9, kind: 'barracks' }],
  temples: [{ x: -38, y: -8, w: 5, h: 7, rot: 0 }],
  eras: [{ id: '1659', year: '1659', label: 'Afzal Khan\'s campaign', short: 'Afzal Khan', lens: 'engraving', summary: 'November 1659: Afzal Khan of Bijapur is encamped below; Shivaji meets and kills him at the foot of the fort, and the Bijapur army is routed.',
    basis: 'The meeting of 10 November 1659 below Pratapgad, in standard accounts.', conjecture: 'Plan and buildings inferred.' },
    today('The fort with the Bhavani temple, and an equestrian statue of Shivaji unveiled in 1957.')],
  pois: [
    { id: 'bhavani', at: [-38, 0], title: 'Bhavani temple', text: 'The temple of the goddess Bhavani in the lower fort, installed by Shivaji.', ev: 'documented' },
    { id: 'upper', at: [8, 18], title: 'The upper fort', text: 'The citadel, walled within the fort; built in 1656 for Shivaji.', ev: 'documented' },
    { id: 'afzal', at: [-55, -36], title: 'The meeting of 1659', text: 'Afzal Khan, the Bijapur general, was killed by Shivaji at their meeting below the fort on 10 November 1659; his tomb is below the fort.', ev: 'documented' },
    { id: 'gate', at: [-60, -20], title: 'Maha Darwaja', text: 'The main gate, approached by a stepped path round the hillside.', ev: 'inferred' },
    { id: 'statue', at: [20, 0], title: 'The statue', text: 'An equestrian statue of Shivaji, unveiled in 1957.', ev: 'documented', eraNote: { '1659': 'Not yet: the statue was unveiled in 1957.' } }] });

export const shivneri = makeFort({ id: 'shivneri', name: 'Shivneri', native: { text: 'शिवनेरी', lang: 'mr', script: 'deva' }, region: 'Junnar, Pune · Maharashtra', typeLabel: 'Hill fort', coords: [19.199, 73.859],
  type: 'hill', seed: 19, units: U, size: { rx: 120, ry: 48, rot: 10 }, hill: { h: 40, cliff: 12, skirt: 58 }, bastionStep: 30, people: 10,
  gates: [{ a: 280, name: 'Maha Darwaja (after six lower gates)', main: true }],
  buildings: [{ name: 'Shivkunj', x: 15, y: 4, w: 9, d: 7, kind: 'house', stands: true }, { name: 'Ambarkhana (granary)', x: -40, y: -10, w: 30, d: 10, kind: 'granary' }],
  temples: [{ x: -66, y: 5, w: 4, h: 5.5, rot: 90 }], tanks: [{ name: 'Badami tank', x: 46, y: -6, rx: 10, ry: 6 }],
  eras: [{ id: '1630', year: '1630', label: 'Shivaji\'s birth', short: 'Birth of Shivaji', lens: 'engraving', summary: 'The 1630s: an Ahmadnagar hill fort above Junnar, where Shivaji is born to Jijabai.',
    basis: 'Shivaji\'s birth at Shivneri (1630 is the date adopted by the Government of Maharashtra; other dates are argued).', conjecture: 'Plan and buildings inferred.' },
    today('The birthplace building, the Shivai temple, the granary and the tanks, after a climb through seven gates.')],
  pois: [
    { id: 'birth', at: [15, 10], title: 'Shivaji\'s birthplace', text: 'Shivaji was born here; 1630 is the date adopted by the Government of Maharashtra, though other dates are argued.', ev: 'documented' },
    { id: 'shivai', at: [-66, 13], title: 'Shivai Devi temple', text: 'The temple of the fort\'s goddess, after whom Shivaji is said to have been named.', ev: 'documented' },
    { id: 'ambarkhana', at: [-40, 0], title: 'Ambarkhana', text: 'The granary of the fort.', ev: 'documented' },
    { id: 'gates', at: [-88, -8], title: 'The seven gates', text: 'The approach climbs through a sequence of gates before the main gate of the summit.', ev: 'documented' },
    { id: 'badami', at: [46, 4], title: 'Badami tank', text: 'One of the fort\'s rock-cut tanks.', ev: 'inferred' }] });

export const lohagad = makeFort({ id: 'lohagad', name: 'Lohagad', native: { text: 'लोहगड', lang: 'mr', script: 'deva' }, region: 'Pune · Maharashtra', typeLabel: 'Sahyadri hill fort · documentary blockout', coords: [18.709, 73.476],
  siteReference: { source: 'Maharashtra State Gazetteer and Maharashtra Tourism', kind: 'approximate discovery coordinate; ridge, wall and gates not georeferenced' },
  type: 'hill', seed: 23, units: U, size: { rx: 100, ry: 48, rot: -20 }, hill: { h: 46, cliff: 12, skirt: 60 }, bastionStep: 30, people: 10,
  gates: [{ a: 100, name: 'Maha Darwaja · final gate in four-gate sequence; bearing inferred', main: true }],
  buildings: [{ name: 'Garrison quarters · schematic', x: 10, y: 0, w: 14, d: 8, kind: 'barracks' }], temples: [{ x: -30, y: 12, w: 4, h: 5 }], tanks: [{ name: 'Lohagad tank · position schematic', x: 40, y: -6, rx: 10, ry: 6 }],
  additionalWalls: [{ path: [[-90,31],[-80,23],[-72,17],[-62,13]], h: 4.8, thick: 2.5, label: 'Vinchukata spur wall cue · course schematic' }],
  extraBuild: (W,{era,H}) => {
    // State tourism identifies a Jain cave sanctuary on the southern face;
    // the entry marker is illustrative because no cave survey is registered.
    const x=-48,y=-48;
    W.tunnel({path:[[x,y,W.ground(x,y)-0.2],[x,y+3,W.ground(x,y)-0.2]],w:2.2,height:2.5,name:'Southern Jain cave sanctuary · location and form schematic',portals:true});
    W.zone([[x-5,y-4],[x+5,y-4],[x+5,y+4],[x-5,y+4]],'Jain cave inscription, palaeographically dated 2nd–1st century BCE by Maharashtra Tourism; exact cave not registered');
  },
  eras: [{ id: '1670', year: '1670', label: 'Retaken by the Marathas', short: 'Retaken', lens: 'engraving', summary: '1670: after cession in 1665, Lohagad returned to Maratha control, guarding the Bor Ghat route.',
    basis: 'The Maharashtra State Gazetteer records four successive gates, separate outer and inner defenses, a broad summit plateau and the 1648/1665/1670 control sequence.', conjecture: 'The summit outline, defensive walls, gate bearings, Vinchukata alignment, cistern positions, buildings and approach are not traced from a measured plan.' },
    today('A popular climb above Malavli, with its four gates and the Vinchu Kata (scorpion\'s tail) spur.')],
  pois: [
    { id: 'vinchu', at: [-78, 22], title: 'Vinchukata spur', text: 'Maharashtra Tourism describes a long fortified spur extending from the main hill. A wall cue is included, but the spur and wall course are not mapped.', ev: 'documented', source: 'https://maharashtratourism.gov.in/fort/lohagad/' },
    { id: 'gates', at: [62, 22], title: 'Four successive gateways', text: 'The State Gazetteer names Ganesa, Narayana, Hanumana and Maha gates in succession. The scene identifies the sequence, but does not claim their plan positions or approach alignment.', ev: 'documented', source: 'https://gazetteers.maharashtra.gov.in/cultural.maharashtra.gov.in/english/gazetteer/Poona/PART%20VI/Chap%20%2820%29/Lohagad-2.html' },
    { id: 'tank', at: [40, 6], title: 'Summit cisterns', text: 'The State Gazetteer records plentiful cisterns and water on the plateau. This tank is a schematic cue, not a measured cistern.', ev: 'documented' },
    { id: 'road', at: [10, 12], title: 'Watching the Bor Ghat', text: 'Lohagad and its twin Visapur overlook the old road from the Konkan up the Bor Ghat to Pune.', ev: 'documented' },
    { id: 'purandar', at: [-30, 0], title: 'Ceded and retaken', text: 'Lohagad was among the forts ceded to the Mughals by the treaty of Purandar in 1665, and was retaken in 1670.', ev: 'documented' }] });

export const salher = makeFort({ id: 'salher', name: 'Salher', native: { text: 'साल्हेर', lang: 'mr', script: 'deva' }, region: 'Nashik · Maharashtra', typeLabel: 'Hill fort', coords: [20.722500, 73.942500],
  siteReference: { source: 'UNESCO component map 1739-001', kind: 'component reference coordinate; not a boundary vertex or fort-wall centre', propertyAreaHa: 335.96, previousCataloguePoint: [20.722, 73.942] },
  type: 'hill', seed: 29, units: U, size: { rx: 100, ry: 74, rot: 0 }, hill: { h: 66, cliff: 14, skirt: 75 }, bastionStep: 36, people: 10,
  gates: [{ a: 230, name: 'Salher gate', main: true }, { a: 60, name: 'Salota gate' }],
  buildings: [{ name: 'Garrison quarters', x: -20, y: -20, w: 16, d: 8, kind: 'barracks' }], temples: [{ x: 24, y: 24, w: 4, h: 5 }],
  tanks: [{ name: 'Rock-cut cisterns', x: -40, y: 8, rx: 6, ry: 4 }, { name: 'Gangasagar tank', x: 8, y: -24, rx: 10, ry: 7 }],
  eras: [{ id: '1672', year: '1672', label: 'The battle of Salher', short: 'Battle of Salher', lens: 'engraving', summary: '1672: Maratha armies defeat a Mughal force besieging Salher, one of the largest open-field Maratha victories over the Mughals.',
    basis: 'The battle of Salher (1672), in standard accounts and the UNESCO nomination.', conjecture: 'Plan, cisterns and buildings inferred; the battle was fought in the plains below.' },
    today('One of the highest forts in the Sahyadri, with the Parshuram temple on its summit and rock-cut cisterns.')],
  pois: [
    { id: 'battle', at: [-46, -30], title: 'The battle of 1672', text: 'In 1672 Maratha armies relieved the fort and defeated a Mughal army in the plain below, capturing its leaders.', ev: 'documented' },
    { id: 'parshuram', at: [24, 32], title: 'Parshuram temple', text: 'A small temple to Parashurama on the summit, linked by tradition with his penance here.', ev: 'documented' },
    { id: 'cisterns', at: [-40, 16], title: 'Rock-cut cisterns', text: 'Water cut into the rock of the summit sustained the garrison.', ev: 'documented' },
    { id: 'height', at: [0, 0], title: 'The summit', text: 'Salher is among the highest forts of the Sahyadri, commanding the Baglan country and the routes to Gujarat.', ev: 'documented' },
    { id: 'gate', at: [-58, -44], title: 'Salher gate', text: 'The western approach, cut through the rock.', ev: 'inferred' }] });

export const panhala = makeFort({ id: 'panhala', name: 'Panhala', native: { text: 'पन्हाळा', lang: 'mr', script: 'deva' }, region: 'Kolhapur · Maharashtra', typeLabel: 'Plateau fort', coords: [16.812, 74.110],
  type: 'hill', seed: 31, units: U, size: { rx: 195, ry: 104, rot: 25 }, hill: { h: 34, cliff: 12, skirt: 45 }, bastionStep: 46, people: 18,
  gates: [{ a: 190, name: 'Teen Darwaja', main: true }, { a: 20, name: 'Char Darwaja' }, { a: 300, name: 'Raj Dindi' }],
  buildings: [{ name: 'Sajja Kothi', x: 120, y: 38, w: 12, d: 10, storeys: 2, kind: 'pavilion', stands: true }, { name: 'Ganga granary', x: -60, y: -30, w: 32, d: 14, kind: 'granary', stands: true },
    { name: 'Yamuna granary', x: -20, y: -36, w: 26, d: 12, kind: 'granary', stands: true }, { name: 'Saraswati granary', x: 14, y: -40, w: 22, d: 11, kind: 'granary', stands: true }, { name: 'Palace', x: 60, y: 20, w: 24, d: 16, kind: 'palace' }],
  temples: [{ x: -95, y: 24, w: 4.5, h: 6 }], tanks: [{ name: 'Andhar Bavdi', x: -115, y: -14, rx: 6, ry: 6 }, { name: 'Somala tank', x: 76, y: -44, rx: 18, ry: 11, rot: 20 }],
  eras: [{ id: '1660', year: '1660', label: 'The siege of Panhala', short: 'Siege of 1660', lens: 'engraving', summary: 'Summer 1660: Siddi Jauhar\'s Bijapur army besieges Shivaji in Panhala; on a monsoon night Shivaji slips out towards Vishalgad.',
    basis: 'The siege of 1660 and Shivaji\'s escape, with Baji Prabhu Deshpande\'s rearguard at the pass, in standard accounts.', conjecture: 'Plan and building positions inferred.' },
    today('A hill town on the plateau, with the triple gate, the three granaries and the Sajja Kothi still standing.')],
  pois: [
    { id: 'teen', at: [-78, -58], title: 'Teen Darwaja', text: 'The triple gate, the principal entrance of the fort.', ev: 'documented' },
    { id: 'ambarkhana', at: [-20, -20], title: 'The granaries', text: 'Three great granaries, named Ganga, Yamuna and Saraswati, which could feed a garrison through a long siege.', ev: 'documented' },
    { id: 'sajja', at: [120, 52], title: 'Sajja Kothi', text: 'A pavilion overlooking the cliff, associated with Sambhaji.', ev: 'documented' },
    { id: 'escape', at: [110, -24], title: 'The escape of 1660', text: 'Besieged by Siddi Jauhar in 1660, Shivaji escaped by night; Baji Prabhu Deshpande held the pass behind him (Pavan Khind) until Shivaji reached Vishalgad.', ev: 'documented' },
    { id: 'bavdi', at: [-115, 0], title: 'Andhar Bavdi', text: 'A hidden, three-storeyed well that could not easily be poisoned by besiegers.', ev: 'documented' },
    { id: 'somala', at: [76, -30], title: 'Somala tank', text: 'A large tank on the plateau.', ev: 'inferred' }] });

import khanderi from './khanderi.js';
export {khanderi};

import suvarnadurg from './suvarnadurg.js';
export {suvarnadurg};

import vijaydurg from './vijaydurg.js';
export {vijaydurg};

export const MARATHA_FORTS = [raigad, rajgad, pratapgad, shivneri, lohagad, salher, panhala, khanderi, suvarnadurg, vijaydurg];
