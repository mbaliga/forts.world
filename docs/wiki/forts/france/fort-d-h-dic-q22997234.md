# Fort d'Hœdic

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-d-h-dic-q22997234` |
| Coordinates | 47.33833, -2.87333 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.33833/-2.87333)) |
| Wikidata | [Q22997234](https://www.wikidata.org/wiki/Q22997234) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Hœdic |
| Designations | monument historique inscrit |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |
| OSM `heritage` | 3 |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 60 elements (outline 1, marker 1, coastline 1, building 22, road 24, retaining-wall 1, zone 4, wall 4, water 1).

Evidence: documented 0, mapped 60, inferred 0, derived 0; heights documented 0, inferred 0, unknown 28.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/123592324 historic=fort Q22997234 36 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 33 m from the ledger point to the centre of the mapped site
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.33833/-2.87333) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q22997234 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 60 elements); data/traces/fort-d-h-dic-q22997234.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
