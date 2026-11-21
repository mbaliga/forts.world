# Maputo Fortress

> Mozambique · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `maputo-fortress-q10283622` |
| Coordinates | -25.97493, 32.57066 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-25.97493/32.57066)) |
| Wikidata | [Q10283622](https://www.wikidata.org/wiki/Q10283622) (CC0) |
| Wikidata class | fort |
| Types | fortress\|cultural heritage |
| Administrative area | KaMpfumo district |
| Designations | Heritage of Portuguese Influence |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 191 elements (outline 1, marker 3, road 99, building 84, zone 1, coastline 1, water 2).

Evidence: documented 0, mapped 191, inferred 0, derived 2; heights documented 21, inferred 0, unknown 63.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/81244527 historic=fort Q10283622 8 m from ledger point
- origin moved 11 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":5,"medianInside":3.2,"medianOutside":11}
- sea-1: DEM check ok {"cells":42,"medianInside":3.8,"medianOutside":11.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-25.97493/32.57066) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|cultural heritage; sitelinks=4; wikidata:Q10283622 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 191 elements); data/traces/maputo-fortress-q10283622.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/mozambique.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
