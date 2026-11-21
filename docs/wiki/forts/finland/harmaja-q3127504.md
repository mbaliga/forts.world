# Harmaja

> Finland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `harmaja-q3127504` |
| Coordinates | 60.10444, 24.97444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/60.10444/24.97444)) |
| Wikidata | [Q3127504](https://www.wikidata.org/wiki/Q3127504) (CC0) |
| Wikidata class | fort |
| Types | island\|fortress island |
| Administrative area | Helsinki |
| Inception | 1883 |
| Wikipedia language editions | 6 |

## What the model contains

Tier **T1**, status `outline+walls`, 23 elements (outline 1, coastline 2, building 4, wall 1, zone 5, road 10).

Evidence: documented 0, mapped 23, inferred 0, derived 0; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/203713854 historic=(none; chosen by its Wikidata id) Q3127504 89 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 89 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/60.10444/24.97444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; island\|fortress island; sitelinks=6; wikidata:Q3127504 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 27 elements); data/traces/harmaja-q3127504.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 23 elements; outline osm:way/203713854 historic=(none; chosen by its Wikidata id) Q3127504 89 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/finland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
