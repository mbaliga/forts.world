# Camp de César

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `camp-de-cesar-q97366463` |
| Coordinates | 49.93964, 1.13347 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.93964/1.13347)) |
| Wikidata | [Q97366463](https://www.wikidata.org/wiki/Q97366463) (CC0) |
| Wikidata class | fortification |
| Types | oppidum\|archaeological site |
| Administrative area | Bracquemont |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline-only`, 32 elements (outline 1, road 9, building 20, cliff 1, coastline 1).

Evidence: documented 0, mapped 32, inferred 0, derived 0; heights documented 0, inferred 0, unknown 20.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/207941001 historic=archaeological_site 921 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 926 m from the ledger point to the centre of the mapped site
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.93964/1.13347) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; oppidum\|archaeological site; sitelinks=1; wikidata:Q97366463 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 32 elements); data/traces/camp-de-cesar-q97366463.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
