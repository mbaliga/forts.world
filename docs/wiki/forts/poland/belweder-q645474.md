# Belweder

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `belweder-q645474` |
| Coordinates | 52.21313, 21.02742 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.21313/21.02742)) |
| Wikidata | [Q645474](https://www.wikidata.org/wiki/Q645474) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|no\|palace\|architectural heritage monument |
| Administrative area | Śródmieście |
| Inception | 1660 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 23 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |
| OSM `description` | Belweder, jeden z najsłynnejszych polskich zabytków, to miejsce ważnych dla kraju wydarzeń, przez które przewinęło się szereg postaci historycznych. Pałac łączy z Łazienkami nie tylko bezpośrednie sąsiedztwo, lecz także kilkusetletnia historia. |
| OSM `ruins` | no |
| OSM `website` | https://www.prezydent.pl/kancelaria/rezydencje-kprp/rezydencja-prezydenta-rp-belweder |

## What the model contains

Tier **T1**, status `outline+walls`, 345 elements (outline 1, marker 5, road 389, water 6, building 44, waterway 13, zone 70, cliff 7, wall 46, retaining-wall 3).

Evidence: documented 0, mapped 345, inferred 0, derived 0; heights documented 73, inferred 0, unknown 20.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/25748432 historic=castle Q645474 7 m from ledger point
- roads capped: kept the 150 longest of 389 mapped (trace size budget); minor lanes are not drawn
- origin moved 7 m from the ledger point to the outline centroid
- 57 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.21313/21.02742) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|no\|palace\|architectural heritage monument; sitelinks=23; wikidata:Q645474 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 345 elements); data/traces/belweder-q645474.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
