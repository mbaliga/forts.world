# Agra Fort

> India · Uttar Pradesh · evidence: **T2 (partial)** · status: `plan-traced`

## Identity

| Field | Value |
|---|---|
| Site id | `agra-fort` |
| Coordinates | 27.183308, 78.0191 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/27.183308/78.0191)) |
| Wikidata | [Q171857](https://www.wikidata.org/wiki/Q171857) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Agra |
| Inception | 1565 |
| Designations | Monument of National Importance\|World Heritage Site |
| UNESCO WHC id | 251 |
| Wikipedia language editions | 78 |
| Programme catalogue | confidence high, significance rank 1; sources catalogue:agra-fort;wikidata:Q4693674;wikidata:Q171857;unesco:251;smith-newton:r61 |
| OSM `historic` | fort |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 170 elements (outline 1, marker 2, road 70, waterway 2, building 48, wall 17, water 2, zone 27).

Evidence: documented 0, mapped 170, inferred 0, derived 0; heights documented 0, inferred 0, unknown 66.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/310318567 historic=fort Q171857 466 m from ledger point
- origin moved 464 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/27.183308/78.0191) | 2026-11-14 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-14 |

## Research notes

- [docs/research/agra-fort-pass.md](../../../research/agra-fort-pass.md)

## Ledger note

coords from wikidata (was 27.18,78.021) \| 2026-11-16: src/levels/agra-fort.trace.js (curation tools/trace/curation/agra-fort.mjs), level src/levels/agra-fort.js; old generated scene kept as agra-fort-hand.js. T2 partial: 4 gates (Delhi, Elephant, Amar Singh, Water), Moti Masjid, Diwan-i-Amm court, Jahangiri block and 5 numbered palace label positions from the 1901 Stanford plan (public domain, data/plans/agra-fort/), one similarity fit to the OSM wall, +-25 m (registration.json). Eras 1901/today plus ~built (schematic wall 21 m, Britannica secondary). Smoke 4 scenes 0 failures. MISSING: wall/gate/palace heights, gate forms, bastion shapes beyond the OSM bumps, moat, Yamuna on the east (OSM Yamuna way sits on the SW ravine side and was dropped), Diwan-i-Khas/Anguri Bagh/Naginah Masjid footprints, any ASI measured drawing (Commons ASI site-plan photo CC BY 3.0 fetched but not traced), earlier eras (Akbar 1565-73, 1803, 1857). docs/research/agra-fort-pass.md

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
