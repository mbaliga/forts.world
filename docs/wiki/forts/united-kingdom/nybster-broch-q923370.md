# Nybster Broch

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nybster-broch-q923370` |
| Coordinates | 58.55175, -3.08389 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.55175/-3.08389)) |
| Wikidata | [Q923370](https://www.wikidata.org/wiki/Q923370) (CC0) |
| Wikidata class | fort |
| Types | broch\|promontory fort\|multiple enclosure hillfort |
| Administrative area | Highland |
| Designations | scheduled monument |
| Wikipedia language editions | 3 |
| OSM `historic` | archaeological_site |
| OSM `website` | http://www.brochs.co.uk/articles.php?article_id=33 |

## What the model contains

Tier **T1**, status `outline+walls`, 14 elements (outline 1, marker 1, coastline 2, road 4, waterway 3, wall 2, water 1).

Evidence: documented 0, mapped 14, inferred 0, derived 1; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/496422609 historic=archaeological_site Q923370 1 m from ledger point
- origin moved 1 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":168,"medianInside":3.4,"medianOutside":18.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.55175/-3.08389) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; broch\|promontory fort\|multiple enclosure hillfort; sitelinks=3; wikidata:Q923370 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 14 elements); data/traces/nybster-broch-q923370.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
