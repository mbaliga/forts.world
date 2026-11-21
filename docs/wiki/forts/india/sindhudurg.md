# Sindhudurg

> India · Maharashtra · evidence: **T2 (partial)** · status: `plan-traced`

## Identity

| Field | Value |
|---|---|
| Site id | `sindhudurg` |
| Coordinates | 16.041997, 73.459859 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/16.041997/73.459859)) |
| Programme catalogue | confidence high, significance rank 215; sources catalogue:sindhudurg;wikidata:Q13413791;smith-newton:r68 |

## What the model contains

Tier **T1**, status `location-only`, 32 elements (marker 1, coastline 2, wall 2, building 20, road 3, zone 3, water 1).

Evidence: documented 0, mapped 32, inferred 0, derived 1; heights documented 0, inferred 0, unknown 22.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- island ring (191864 m2) cut out of sea-0
- sea-0: DEM check ok {"cells":6175,"medianInside":0.4,"medianOutside":4.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/16.041997/73.459859) | 2026-11-11 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-11 |

## Research notes

- [docs/research/sindhudurg-pass.md](../../../research/sindhudurg-pass.md)

## Ledger note

src/levels/sindhudurg.trace.js (curation tools/trace/curation/sindhudurg.mjs), level src/levels/sindhudurg.js; eras 1667/1765/today plus sibling ~built eras (schematic: rampart 9.1 m high 3.7 m thick from Wikipedia, one concealed gate at an assumed NE position; all heights assumed and labelled). Plan is a hydrographic chart (fort ~1 cm across): wall outline registered to the OSM island coast by silhouette fit (IoU 0.91, one clear peak, scale bar within 8%, OSM wall fragment 0-11 m away); blocks +-40 m and only one corroborated. No bastions, gates or heights on the chart. NOT traced: 42 bastions, real gate, temples, wells, ~30 small blocks. Old hand level kept as src/levels/sindhudurg-hand.js (its ENE-WSW 705x375 m outline was wrong). T2 complete needs a survey plan, a source for the gate, photographs for heights, finer DEM. docs/research/sindhudurg-pass.md \| 2026-11-19: the original hand-built constructed level (sindhudurg-hand, one of the first Ten Forts of India) is listed again in the game as "Sindhudurg (constructed)" beside the traced level, and the Forts of the World page links to it (ten-forts.html?fort=sindhudurg-hand).

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
