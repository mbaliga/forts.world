# Fort Ethan Allen

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-ethan-allen-q8564728` |
| Coordinates | 38.92444, -77.12361 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.92444/-77.12361)) |
| Wikidata | [Q8564728](https://www.wikidata.org/wiki/Q8564728) (CC0) |
| Wikidata class | fort |
| Types | fort\|urban park |
| Administrative area | Arlington County |
| Inception | 1861 |
| Designations | National Register of Historic Places listed place |
| Wikipedia language editions | 3 |
| OSM `historic` | heritage |
| OSM `heritage` | 2 |
| OSM `website` | https://www.arlingtonva.us/Government/Departments/Parks-Recreation/Locations/Parks/Fort-Ethan-Allen-Park |

## What the model contains

Tier **T1**, status `outline-only`, 268 elements (outline 1, marker 1, road 113, zone 4, building 149).

Evidence: documented 0, mapped 268, inferred 0, derived 0; heights documented 0, inferred 0, unknown 149.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/14920162 historic=heritage Q8564728 163 m from ledger point
- origin moved 104 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.92444/-77.12361) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|urban park; sitelinks=3; wikidata:Q8564728 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 142 elements); data/traces/fort-ethan-allen-q8564728.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 268 elements; outline osm:relation/14920162 historic=heritage Q8564728 163 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
