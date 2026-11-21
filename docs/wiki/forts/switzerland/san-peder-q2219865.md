# San Peder

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `san-peder-q2219865` |
| Coordinates | 46.81611, 10.33288 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.81611/10.33288)) |
| Wikidata | [Q2219865](https://www.wikidata.org/wiki/Q2219865) (CC0) |
| Wikidata class | castle |
| Types | church building\|hill castle |
| Administrative area | Canton of the Grisons |
| Designations | class B Swiss cultural property of regional significance |
| Wikipedia language editions | 3 |
| OSM `historic` | church |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 214 elements (outline 1, road 53, waterway 1, building 146, zone 9, water 1, wall 1, retaining-wall 2).

Evidence: documented 0, mapped 214, inferred 0, derived 0; heights documented 0, inferred 0, unknown 149.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/426082741 historic=church Q2219865 9 m from ledger point
- origin moved 10 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.81611/10.33288) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; church building\|hill castle; sitelinks=3; wikidata:Q2219865 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 213 elements); data/traces/san-peder-q2219865.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 214 elements; outline osm:way/426082741 historic=church Q2219865 9 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
