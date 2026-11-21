# Hel Fortified Region

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hel-fortified-region-q30650195` |
| Coordinates | 54.59999, 18.81712 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.59999/18.81712)) |
| Wikidata | [Q30650195](https://www.wikidata.org/wiki/Q30650195) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Hel |
| Inception | 1939 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 0 |
| OSM `historic` | yes |
| OSM `description` | GPKO z dalmierzem. |

## What the model contains

Tier **T1**, status `outline-only`, 53 elements (outline 1, marker 5, coastline 1, road 30, zone 1, building 15).

Evidence: documented 0, mapped 53, inferred 0, derived 0; heights documented 3, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/281211413 historic=yes 271 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 271 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.59999/18.81712) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=0; wikidata:Q30650195 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 53 elements); data/traces/hel-fortified-region-q30650195.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
