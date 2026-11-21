# Torre de Son Ganxo

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-son-ganxo-q9088920` |
| Coordinates | 39.81111, 4.27583 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.81111/4.27583)) |
| Wikidata | [Q9088920](https://www.wikidata.org/wiki/Q9088920) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Sant Lluís |
| Designations | bien de interés cultural |
| Wikipedia language editions | 6 |
| OSM `historic` | martello_tower |
| OSM `heritage` | 2 |
| OSM `description` | Torre de Son Ganxo o Torre de Punta Prima. Construida por los españoles en 1787. |

## What the model contains

Tier **T1**, status `outline+walls`, 100 elements (outline 1, road 24, building 58, wall 14, coastline 2, water 1).

Evidence: documented 0, mapped 100, inferred 0, derived 1; heights documented 58, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/261583338 historic=martello_tower Q9088920 13 m from ledger point
- origin moved 14 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":65,"medianInside":0.4,"medianOutside":15.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.81111/4.27583) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=6; wikidata:Q9088920 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 101 elements); data/traces/torre-de-son-ganxo-q9088920.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 100 elements; outline osm:way/261583338 historic=martello_tower Q9088920 13 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
