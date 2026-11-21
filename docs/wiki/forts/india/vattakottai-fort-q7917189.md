# Vattakottai Fort

> India · Kanniyakumari district · evidence: **T1** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vattakottai-fort-q7917189` |
| Coordinates | 8.125673, 77.564907 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/8.125673/77.564907)) |
| Wikidata | [Q7917189](https://www.wikidata.org/wiki/Q7917189) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Kanniyakumari district |
| Designations | Monument of National Importance |
| Wikipedia language editions | 6 |
| Programme catalogue | confidence high, significance rank 423; sources wikidata:Q7917189;smith-newton:r153 |
| OSM `historic` | fort |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 23 elements (outline 1, coastline 1, road 15, zone 1, water 3, waterway 1).

Evidence: documented 0, mapped 23, inferred 0, derived 1; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/157804925 historic=fort Q7917189 22 m from ledger point
- origin moved 23 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1056,"medianInside":2.2,"medianOutside":11.3}
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/8.125673/77.564907) | 2026-11-11 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-11 |

## Ledger note

src/levels/vattakottai-fort-q7917189.trace.js (curation tools/trace/curation/vattakottai-fort-q7917189.mjs), level src/levels/vattakottai.js; eras c.1750 (outline, wall line, coast carried back, inferred) and today. Constructed layer: perimeter wall 7.9 m high, 5.5 m thick (tourism page: 25-26 ft; 29/18/6 ft thick), sealed. Mapped area 3.4 acres matches the page (3.5) but the shape is irregular, not rectangular. No sourced heights. T2 needs: ASI/TN Archaeology plan or survey, a dated view, a primary source for the dimensions. t1.js: derived-sea POI now passes unreachableOk. docs/research/vattakottai-pass.md. Batch alpha-T #2.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
