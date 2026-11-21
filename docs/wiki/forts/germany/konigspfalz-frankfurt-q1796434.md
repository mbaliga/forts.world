# Königspfalz Frankfurt

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `konigspfalz-frankfurt-q1796434` |
| Coordinates | 50.1106, 8.68444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.1106/8.68444)) |
| Wikidata | [Q1796434](https://www.wikidata.org/wiki/Q1796434) (CC0) |
| Wikidata class | fortification |
| Types | kaiserpfalz |
| Administrative area | Frankfurt |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | 1748 Hauptverwaltung Kaiserliche Reichspost. 1805 - 1813 Residenz des Fürstprimas und Großherzogs von Frankfurt Karl Theodor von Dalberg. 1816 - 1866 Bundestag des Deutschen Bundes. 1895 Reichspost. 1908 Völkerkundemuseum. 2009 Geschäftsräume. |

## What the model contains

Tier **T1**, status `outline+walls`, 293 elements (outline 1, marker 2, road 357, building 131, wall 8, retaining-wall 12).

Evidence: documented 0, mapped 293, inferred 0, derived 0; heights documented 43, inferred 0, unknown 97.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1688621 historic=castle Q282656 602 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 131 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 357 mapped (trace size budget); minor lanes are not drawn
- origin moved 602 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.1106/8.68444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; kaiserpfalz; sitelinks=3; wikidata:Q1796434 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 293 elements); data/traces/konigspfalz-frankfurt-q1796434.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
