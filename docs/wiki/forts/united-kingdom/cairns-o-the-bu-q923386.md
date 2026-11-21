# Cairns O' The Bu

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cairns-o-the-bu-q923386` |
| Coordinates | 58.76607, -2.94525 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.76607/-2.94525)) |
| Wikidata | [Q923386](https://www.wikidata.org/wiki/Q923386) (CC0) |
| Wikidata class | fortification |
| Types | broch\|archaeological site |
| Administrative area | Orkney Islands |
| Wikipedia language editions | 2 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | broch |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 14 elements (outline 1, road 4, building 2, zone 2, waterway 4, coastline 1).

Evidence: documented 0, mapped 14, inferred 0, derived 0; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1385962568 historic=archaeological_site Q923386 4 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.76607/-2.94525) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; broch\|archaeological site; sitelinks=2; wikidata:Q923386 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 14 elements); data/traces/cairns-o-the-bu-q923386.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
