# Tarp Bunkermuseum

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tarp-bunkermuseum-q29169706` |
| Coordinates | 55.51796, 8.4848 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.51796/8.4848)) |
| Wikidata | [Q29169706](https://www.wikidata.org/wiki/Q29169706) (CC0) |
| Wikidata class | fortification |
| Types | bunker\|military museum |
| Administrative area | Esbjerg Municipality |
| Inception | 1943 |
| Wikipedia language editions | 2 |
| OSM `historic` | building |
| OSM `description` | WW2 bunker #75665 of Stützpunktgruppe Flugplatz Esbjerg. Personnel bunker type Regelbau 622 with an extended wall width of 3m. See also http://www.atlantikwall.dk/atlantikwall_forsvarsenheder_75esbjerg.asp. |

## What the model contains

Tier **T1**, status `outline+walls`, 55 elements (outline 1, road 21, building 25, zone 5, wall 3).

Evidence: documented 0, mapped 55, inferred 0, derived 0; heights documented 0, inferred 0, unknown 28.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/420045224 historic=building Q29169706 2 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.51796/8.4848) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker\|military museum; sitelinks=2; wikidata:Q29169706 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 55 elements); data/traces/tarp-bunkermuseum-q29169706.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
