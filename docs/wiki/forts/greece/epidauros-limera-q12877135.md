# Epidauros Limera

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `epidauros-limera-q12877135` |
| Coordinates | 36.73129, 23.02629 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.73129/23.02629)) |
| Wikidata | [Q12877135](https://www.wikidata.org/wiki/Q12877135) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|yes\|polis\|ancient city |
| Administrative area | Monemvasia Municipality |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 6 |
| OSM `historic` | archaeological_site |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 7 elements (outline 1, zone 1, coastline 1, road 2, waterway 1, water 1).

Evidence: documented 0, mapped 7, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/559272987 historic=archaeological_site Q12877135 3 m from ledger point
- origin moved 17 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":52,"medianInside":0,"medianOutside":28.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.73129/23.02629) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|yes\|polis\|ancient city; sitelinks=6; wikidata:Q12877135 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 7 elements); data/traces/epidauros-limera-q12877135.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
