# Saint Mary's Redoubt

> Malta · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `saint-mary-s-redoubt-q20949713` |
| Coordinates | 36.01833, 14.33933 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.01833/14.33933)) |
| Wikidata | [Q20949713](https://www.wikidata.org/wiki/Q20949713) (CC0) |
| Wikidata class | fort |
| Types | redoubt |
| Administrative area | Għajnsielem |
| Inception | 1716 |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 10 elements (coastline 3, road 3, cliff 1, zone 2, water 1).

Evidence: documented 0, mapped 10, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":216,"medianInside":0,"medianOutside":5.2}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.01833/14.33933) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; redoubt; sitelinks=2; wikidata:Q20949713 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 10 elements); data/traces/saint-mary-s-redoubt-q20949713.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
