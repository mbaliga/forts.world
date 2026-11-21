# Castle of Avô

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-avo-q66943766` |
| Coordinates | 40.29313, -7.90442 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.29313/-7.90442)) |
| Wikidata | [Q66943766](https://www.wikidata.org/wiki/Q66943766) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage |
| Administrative area | Avô |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `description` | Castelo de Avô, incluindo as ruínas da Ermida de São Miguel situada no âmbito do Castelo |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 191 elements (outline 1, marker 4, road 87, waterway 6, building 90, wall 1, zone 1).

Evidence: documented 0, mapped 191, inferred 0, derived 0; heights documented 2, inferred 0, unknown 90.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/181087219 historic=castle Q66943766 9 m from ledger point
- origin moved 11 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.29313/-7.90442) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage; sitelinks=3; wikidata:Q66943766 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 191 elements); data/traces/castle-of-avo-q66943766.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
