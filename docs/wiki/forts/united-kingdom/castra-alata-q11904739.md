# Castra Alata

> United Kingdom · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castra-alata-q11904739` |
| Coordinates | 57.70166, -3.48213 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.70166/-3.48213)) |
| Wikidata | [Q11904739](https://www.wikidata.org/wiki/Q11904739) (CC0) |
| Wikidata class | fortification |
| Types | castrum\|ancient Roman structure |
| Administrative area | Roman Britain |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 148 elements (coastline 2, road 31, building 112, retaining-wall 1, zone 1, water 1).

Evidence: documented 0, mapped 148, inferred 0, derived 1; heights documented 0, inferred 0, unknown 113.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":105,"medianInside":4,"medianOutside":11.5}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.70166/-3.48213) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castrum\|ancient Roman structure; sitelinks=3; wikidata:Q11904739 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 148 elements); data/traces/castra-alata-q11904739.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
