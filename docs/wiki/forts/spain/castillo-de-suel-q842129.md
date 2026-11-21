# Castillo de Suel

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-suel-q842129` |
| Coordinates | 36.52534, -4.62898 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.52534/-4.62898)) |
| Wikidata | [Q842129](https://www.wikidata.org/wiki/Q842129) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Fuengirola |
| Inception | 0956 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 13 |
| OSM `historic` | castle |
| OSM `description` | Built by Abd-ar-Rahman III to strengthen the coastal defenses.[1] In 2000 the Town of Fuengirola renovated the ruins of the castle turning it into a tourist attraction and functioning space used for concerts and other festivals. Source: Wikipedia.en |
| OSM `ruins` | no |

## What the model contains

Tier **T1**, status `outline+walls`, 114 elements (outline 1, marker 4, road 84, water 2, waterway 1, coastline 1, building 17, wall 2, zone 2).

Evidence: documented 0, mapped 114, inferred 0, derived 1; heights documented 6, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1136804889 historic=castle Q842129 5 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":52,"medianInside":-0.1,"medianOutside":8.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.52534/-4.62898) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=13; wikidata:Q842129 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 114 elements); data/traces/castillo-de-suel-q842129.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
