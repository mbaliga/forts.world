# Benni Cuml, mound, Housebay, Stronsay

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `benni-cuml-mound-housebay-stronsay-q56666877` |
| Coordinates | 59.07833, -2.5749 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.07833/-2.5749)) |
| Wikidata | [Q56666877](https://www.wikidata.org/wiki/Q56666877) (CC0) |
| Wikidata class | fortification |
| Types | broch |
| Administrative area | Orkney Islands |
| Designations | scheduled monument |
| Wikipedia language editions | 0 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | broch |

## What the model contains

Tier **T1**, status `outline+walls`, 25 elements (outline 1, building 5, road 3, wall 10, coastline 1, zone 4, water 1).

Evidence: documented 0, mapped 25, inferred 0, derived 1; heights documented 0, inferred 0, unknown 15.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1384802183 historic=archaeological_site Q56666877 3 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":153,"medianInside":2,"medianOutside":6.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.07833/-2.5749) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; broch; sitelinks=0; wikidata:Q56666877 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 25 elements); data/traces/benni-cuml-mound-housebay-stronsay-q56666877.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
