// Curation for Talagad (alpha-U batch, 2026-11-15). Evidence and conflicts: docs/research/talagad-pass.md.
// No plan or survey was read. The OSM outline (way 902551410) is a strip 247 x 48 m (min rectangle), 7,248 m2, about 29 m wide on average. Wikipedia says "about 20 m wide" (uncited): the same narrow-spur form, not an exact match.
// Wikipedia gives 1,000 ft (cited to the Raigad gazetteer) and says the builder is unknown; Shivaji took it in 1648 (cited to a trekking site). No wall height, gate or cistern position is given.
import { carryOver } from './_common.mjs';

export const TIER = 'T1';
export const STATUS = 'needs-plan';
export const HEADER = [
  'Talagad (Talgad), Raigad district, Maharashtra. Hand-curated trace, tier T1 (OSM-mapped outline only; no plan or survey was found, so T2 is blocked).',
  'Base: data/traces/talagad-q19807538.trace.json (OSM ODbL; Terrarium z15, ~30 m SRTM-derived: the spur and its scarps are smoothed).',
  'The outline is OSM way 902551410. Wikipedia describes a double wall, rock-cut cisterns on Balekilla, four tanks and a main gate with a Veer Maruti idol; none has a mapped position, so none is drawn.',
];

export default function curate(T, h) {
  h.byId('outline').name = 'Fort outline · mapped (OSM way 902551410)';
  const c = h.ground(0, 0);
  console.error(`talagad: DEM ground at the outline centroid ${Number.isFinite(c) ? c.toFixed(1) : 'n/a'} m (Wikipedia gives about 304 m)`);

  carryOver(T, '1648', ['outline'], { note: 'the present mapped outline is assumed to match the fort Shivaji took in 1648; the builder is unknown and no plan was found' });

  T.eras = [
    { id: '1648', year: '1648', label: 'Shivaji takes the fort', short: '1648', lens: 'none',
      summary: 'Talagad when Shivaji captured it in 1648 (Wikipedia, cited to a trekking website), shown as the present mapped outline carried back.',
      basis: 'Wikipedia: the builder is unknown; Ahmadnagar then Bijapur held it; Shivaji took it in 1648 (cited); the Siddis later regained it and the Peshwa retook it in 1735; the British captured it in 1818 (all uncited).',
      conjecture: 'No plan or dated image was found. The two-layer wall, cisterns, tanks and main gate are described but not placed, so none is drawn.',
      sources: [],
      facts: ['Wikipedia: about 1,000 ft (304 m), the text cited to the Raigad gazetteer; "narrow strip about 20 m wide" uncited. The mapped strip averages about 29 m.', 'Wikipedia: Ghosalgad is visible from the fort; the clothes of Shivaji\'s coronation are said to have come from here (citation needed).'] },
    { id: 'today', year: 'Today', label: 'Ruined spur fort', short: 'Ruin', lens: 'none',
      summary: 'The ruined fort on its narrow spur above the Tala valley, with the mapped outline and two tracks.',
      basis: 'The OSM outline and two mapped tracks.',
      conjecture: 'Heights are unknown (kerb-high); the terrain is smoothed SRTM and the real scarps are steeper. Nothing else is mapped here.',
      sources: [],
      facts: ['Wikipedia: owned by the Government of India and open to the public; the trek to the main entrance takes about 45 minutes (uncited).'] },
  ];
}
