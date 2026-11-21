# Kulchuk Settlement

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kulchuk-settlement-q25421638` |
| Coordinates | 45.36667, 32.86389 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.36667/32.86389)) |
| Wikidata | [Q25421638](https://www.wikidata.org/wiki/Q25421638) (CC0) |
| Wikidata class | fort |
| Types | archaeological site\|hillfort\|cultural property\|ancient city |
| Administrative area | Gromove |
| Inception | -0400 |
| Designations | State Register of Immovable Monuments of Ukraine\|federal cultural heritage site in Russia\|architectural monument of local significance of Ukraine |
| Wikipedia language editions | 3 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 17 elements (outline 1, marker 1, zone 2, road 2, wall 9, coastline 1, water 1).

Evidence: documented 0, mapped 17, inferred 0, derived 1; heights documented 0, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/385123735 historic=archaeological_site 28 m from ledger point
- origin moved 21 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":194,"medianInside":1.5,"medianOutside":7.8}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.36667/32.86389) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; archaeological site\|hillfort\|cultural property\|ancient city; sitelinks=3; wikidata:Q25421638 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 17 elements); data/traces/kulchuk-settlement-q25421638.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
