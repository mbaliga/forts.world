# Forte Altavilla di Ancona

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-altavilla-di-ancona-q3748509` |
| Coordinates | 43.6026, 13.5426 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.6026/13.5426)) |
| Wikidata | [Q3748509](https://www.wikidata.org/wiki/Q3748509) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Ancona |
| Inception | 1860 |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |
| OSM `barrier` | retaining_wall |

## What the model contains

Tier **T1**, status `outline-only`, 95 elements (outline 1, road 42, retaining-wall 3, zone 2, coastline 1, cliff 1, building 45).

Evidence: documented 0, mapped 95, inferred 0, derived 0; heights documented 4, inferred 0, unknown 44.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/69282916 historic=fort Q3748509 23 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 21 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.6026/13.5426) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q3748509 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 95 elements); data/traces/forte-altavilla-di-ancona-q3748509.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
