# Schloss Ralswiek

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-ralswiek-q642210` |
| Coordinates | 54.47679, 13.44164 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.47679/13.44164)) |
| Wikidata | [Q642210](https://www.wikidata.org/wiki/Q642210) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Ralswiek |
| Designations | architectural heritage monument in Mecklenburg-Vorpommern |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://www.schlosshotel-ralswiek.de/ |

## What the model contains

Tier **T1**, status `outline-only`, 67 elements (outline 1, road 48, zone 6, building 9, coastline 1, retaining-wall 2).

Evidence: documented 0, mapped 67, inferred 0, derived 0; heights documented 0, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/357402255 historic=castle Q642210 22 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 22 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.47679/13.44164) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=3; wikidata:Q642210 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 67 elements); data/traces/schloss-ralswiek-q642210.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
