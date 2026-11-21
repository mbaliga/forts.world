# Batterie de Cornouaille

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `batterie-de-cornouaille-q2891699` |
| Coordinates | 48.33049, -4.57009 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.33049/-4.57009)) |
| Wikidata | [Q2891699](https://www.wikidata.org/wiki/Q2891699) (CC0) |
| Wikidata class | fort |
| Types | fort\|building |
| Administrative area | Roscanvel |
| Designations | classified historical monument |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 36 elements (outline 1, marker 4, coastline 2, wall 1, road 15, retaining-wall 9, zone 2, building 1, water 1).

Evidence: documented 0, mapped 36, inferred 0, derived 1; heights documented 0, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/254993408 historic=fort 2 m from ledger point
- island ring (876 m2) cut out of sea-0
- origin moved 1 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":235,"medianInside":0,"medianOutside":22.6}
- 40 DEM cells below -3 m (bathymetry) clamped to -3 m
- 18 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.33049/-4.57009) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|building; sitelinks=2; wikidata:Q2891699 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 36 elements); data/traces/batterie-de-cornouaille-q2891699.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
