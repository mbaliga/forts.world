# Villa Maresi

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `villa-maresi-q112172691` |
| Coordinates | 46.00092, 9.23351 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.00092/9.23351)) |
| Wikidata | [Q112172691](https://www.wikidata.org/wiki/Q112172691) (CC0) |
| Wikidata class | castle |
| Types | villa\|castle\|architectural ensemble |
| Administrative area | Griante |
| Inception | 1800 |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | manor |

## What the model contains

Tier **T1**, status `outline+walls`, 70 elements (outline 1, road 19, waterway 3, building 45, wall 2).

Evidence: documented 0, mapped 70, inferred 0, derived 0; heights documented 0, inferred 0, unknown 47.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/289030724 historic=manor Q112172691 4 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.00092/9.23351) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; villa\|castle\|architectural ensemble; sitelinks=1; wikidata:Q112172691 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 71 elements); data/traces/villa-maresi-q112172691.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 70 elements; outline osm:way/289030724 historic=manor Q112172691 4 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
