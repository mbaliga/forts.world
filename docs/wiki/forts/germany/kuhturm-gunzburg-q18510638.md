# Kuhturm (Günzburg)

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kuhturm-gunzburg-q18510638` |
| Coordinates | 48.45646, 10.27555 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.45646/10.27555)) |
| Wikidata | [Q18510638](https://www.wikidata.org/wiki/Q18510638) (CC0) |
| Wikidata class | fortification |
| Types | gate tower |
| Administrative area | Günzburg |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 2 |
| OSM `historic` | heritage |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 281 elements (outline 1, marker 2, road 147, building 303, waterway 2, zone 3, wall 6).

Evidence: documented 0, mapped 281, inferred 0, derived 0; heights documented 22, inferred 0, unknown 104.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/274857817 historic=heritage Q18510638 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 303 mapped (trace size budget); the rest of the town is not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site
- 9 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.45646/10.27555) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gate tower; sitelinks=2; wikidata:Q18510638 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 282 elements); data/traces/kuhturm-gunzburg-q18510638.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 281 elements; outline osm:way/274857817 historic=heritage Q18510638 2 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
