# Son Marroig

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `son-marroig-q2300784` |
| Coordinates | 39.75131, 2.62886 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.75131/2.62886)) |
| Wikidata | [Q2300784](https://www.wikidata.org/wiki/Q2300784) (CC0) |
| Wikidata class | fort |
| Types | fortified house\|posessió |
| Administrative area | Deià |
| Designations | bien de interés cultural |
| Wikipedia language editions | 4 |
| OSM `website` | https://sonmarroig.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 57 elements (outline 1, marker 1, road 19, zone 4, coastline 1, building 9, cliff 3, retaining-wall 16, wall 3).

Evidence: documented 0, mapped 57, inferred 0, derived 0; heights documented 0, inferred 0, unknown 28.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/52646678 historic=(none; chosen by its Wikidata id) Q2300784 26 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 26 m from the ledger point to the centre of the mapped site
- 13 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.75131/2.62886) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified house\|posessió; sitelinks=4; wikidata:Q2300784 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 56 elements); data/traces/son-marroig-q2300784.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 57 elements; outline osm:way/52646678 historic=(none; chosen by its Wikidata id) Q2300784 26 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
