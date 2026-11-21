# Castle ruin Altlengbach

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-ruin-altlengbach-q133307463` |
| Coordinates | 48.1522, 15.91595 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.1522/15.91595)) |
| Wikidata | [Q133307463](https://www.wikidata.org/wiki/Q133307463) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Altlengbach |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |
| OSM `ruins` | wall |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 89 elements (outline 1, marker 1, road 30, waterway 2, zone 4, building 47, wall 3).

Evidence: documented 0, mapped 89, inferred 0, derived 0; heights documented 1, inferred 0, unknown 50.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/151535819 historic=ruins 7 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.1522/15.91595) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=1; wikidata:Q133307463 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 89 elements); data/traces/castle-ruin-altlengbach-q133307463.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
