# Fernandine Wall (Lisbon)

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fernandine-wall-lisbon-q25430529` |
| Coordinates | 38.71398, -9.13358 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.71398/-9.13358)) |
| Wikidata | [Q25430529](https://www.wikidata.org/wiki/Q25430529) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall\|city walls |
| Administrative area | Lisbon |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `description` | A colina onde se ergue o Castelo de S. Jorge foi das primeiras áreas ocupadas de Lisboa.Durante a Idade do Ferro e o período romano desempenhou um papel estratégico na defesa do povoado.Ocupado pelos árabes,foi conquistado em 1147 por D. Afonso... |
| OSM `website` | https://www.castelodesaojorge.pt/ |

## What the model contains

Tier **T1**, status `outline+walls`, 340 elements (outline 1, marker 13, road 238, wall 28, building 402, retaining-wall 22, zone 4, coastline 1, waterway 1).

Evidence: documented 0, mapped 340, inferred 0, derived 0; heights documented 45, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1382432568 historic=castle Q636780 3 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 402 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 238 mapped (trace size budget); minor lanes are not drawn
- origin moved 2 m from the ledger point to the outline centroid
- 14 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.71398/-9.13358) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall\|city walls; sitelinks=1; wikidata:Q25430529 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 340 elements); data/traces/fernandine-wall-lisbon-q25430529.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
