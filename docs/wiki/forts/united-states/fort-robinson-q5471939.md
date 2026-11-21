# Fort Robinson

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-robinson-q5471939` |
| Coordinates | 42.66889, -103.46722 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.66889/-103.46722)) |
| Wikidata | [Q5471939](https://www.wikidata.org/wiki/Q5471939) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Dawes County |
| Designations | National Register of Historic Places listed place\|National Historic Landmark |
| Wikipedia language editions | 7 |
| OSM `historic` | heritage |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 79 elements (outline 1, road 36, zone 1, waterway 3, building 38).

Evidence: documented 0, mapped 79, inferred 0, derived 0; heights documented 0, inferred 0, unknown 38.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/721922600 historic=heritage Q5471939 323 m from ledger point
- origin moved 208 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.66889/-103.46722) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=7; wikidata:Q5471939 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 21 elements); data/traces/fort-robinson-q5471939.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 79 elements; outline osm:way/721922600 historic=heritage Q5471939 323 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
