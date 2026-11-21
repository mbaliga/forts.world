# Castillo de Aracena

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-aracena-q5757083` |
| Coordinates | 37.88982, -6.56259 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.88982/-6.56259)) |
| Wikidata | [Q5757083](https://www.wikidata.org/wiki/Q5757083) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|castle\|castle\|aljibe\|alcázar |
| Administrative area | Aracena |
| Inception | C13 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |
| OSM `ruins` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 340 elements (outline 1, road 109, building 168, wall 56, retaining-wall 5, zone 1).

Evidence: documented 0, mapped 340, inferred 0, derived 0; heights documented 3, inferred 0, unknown 226.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/112758208 historic=ruins Q5757083 10 m from ledger point
- origin moved 10 m from the ledger point to the centre of the mapped site
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.88982/-6.56259) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|castle\|castle\|aljibe\|alcázar; sitelinks=2; wikidata:Q5757083 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 340 elements); data/traces/castillo-de-aracena-q5757083.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
