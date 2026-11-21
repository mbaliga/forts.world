# United States Bullion Depository

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `united-states-bullion-depository-q1798266` |
| Coordinates | 37.8832, -85.9652 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.8832/-85.9652)) |
| Wikidata | [Q1798266](https://www.wikidata.org/wiki/Q1798266) (CC0) |
| Wikidata class | fort |
| Types | fortification\|bank vault |
| Administrative area | Kentucky |
| Inception | 1936 |
| Designations | National Register of Historic Places listed place |
| Wikipedia language editions | 17 |
| OSM `description` | gold warehouse |
| OSM `website` | https://www.usmint.gov/about/tours-and-locations/fort-knox |

## What the model contains

Tier **T1**, status `outline+walls`, 22 elements (outline 1, road 14, wall 1, building 2, zone 4).

Evidence: documented 0, mapped 22, inferred 0, derived 0; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/783765842 historic=(none; chosen by its Wikidata id) Q1798266 11 m from ledger point
- origin moved 11 m from the ledger point to the centre of the mapped site
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.8832/-85.9652) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|bank vault; sitelinks=17; wikidata:Q1798266 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 23 elements); data/traces/united-states-bullion-depository-q1798266.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 22 elements; outline osm:way/783765842 historic=(none; chosen by its Wikidata id) Q1798266 11 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
