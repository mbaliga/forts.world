# Mistra Battery

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mistra-battery-q18920460` |
| Coordinates | 35.95847, 14.39496 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.95847/14.39496)) |
| Wikidata | [Q18920460](https://www.wikidata.org/wiki/Q18920460) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | Mellieħa |
| Inception | 1761 |
| Designations | Grade 1 |
| Wikipedia language editions | 5 |
| OSM `historic` | bunker |

## What the model contains

Tier **T1**, status `outline+walls`, 17 elements (outline 1, road 5, cliff 1, coastline 2, wall 3, building 3, zone 1, water 1).

Evidence: documented 0, mapped 17, inferred 0, derived 1; heights documented 0, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/368937071 historic=bunker Q18920460 6 m from ledger point
- origin moved 8 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":217,"medianInside":0,"medianOutside":10.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.95847/14.39496) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=5; wikidata:Q18920460 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 17 elements); data/traces/mistra-battery-q18920460.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 17 elements; outline osm:way/368937071 historic=bunker Q18920460 6 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
