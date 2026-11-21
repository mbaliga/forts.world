# Eburodunum

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `eburodunum-q3046892` |
| Coordinates | 46.77444, 6.64159 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.77444/6.64159)) |
| Wikidata | [Q3046892](https://www.wikidata.org/wiki/Q3046892) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|castrum\|yes\|archaeological site |
| Administrative area | Yverdon-les-Bains |
| Designations | class A Swiss cultural property of national significance |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |
| OSM `castle_type` | castrum |
| OSM `description` | Restes de l'ancien castrum romain, construit en 325/26 (d) à côté du vicus romain (80 av. J.-C). Fouilles depuis 1903. (Source: Burgenverein.ch) |
| OSM `ruins` | yes |
| OSM `website` | https://castrum-yverdon.ch/ |

## What the model contains

Tier **T1**, status `outline+walls`, 355 elements (outline 1, marker 2, road 268, waterway 3, water 1, building 198, zone 66, wall 12).

Evidence: documented 0, mapped 355, inferred 0, derived 0; heights documented 2, inferred 0, unknown 130.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/507051358 historic=ruins Q3046892 6 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 198 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 268 mapped (trace size budget); minor lanes are not drawn
- origin moved 7 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.77444/6.64159) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|castrum\|yes\|archaeological site; sitelinks=2; wikidata:Q3046892 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 355 elements); data/traces/eburodunum-q3046892.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
