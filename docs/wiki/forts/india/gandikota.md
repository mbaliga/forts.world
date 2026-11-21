# Gandikota

> India · Andhra Pradesh · evidence: **T1** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gandikota` |
| Coordinates | 14.813, 78.286 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/14.813/78.286)) |
| Programme catalogue | confidence high, significance rank 270; sources catalogue:gandikota;wikidata:Q17351034;smith-newton:r158 |
| OSM `historic` | ruins |
| OSM `ruins` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 69 elements (outline 1, marker 1, waterway 2, wall 11, road 27, water 5, building 12, zone 10).

Evidence: documented 0, mapped 69, inferred 0, derived 0; heights documented 10, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1501113060 historic=ruins 593 m from ledger point
- origin moved 592 m from the ledger point to the outline centroid
- 204 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/14.813/78.286) | 2026-11-11 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-11 |

## Research notes

- [docs/research/gandikota-pass.md](../../../research/gandikota-pass.md)

## Ledger note

src/levels/gandikota.trace.js (curation tools/trace/curation/gandikota.mjs), level src/levels/gandikota.js replaces the generated scene by id; build option gandikota in data/traces/build-options.json (1.8 km window, 8 m grid); TIME_SCALE gandikota 3. The builder's outline was the 29 x 35 m Rani Mahal ruin, so the scene has no outline element; the 11 mapped wall ways (barrier=city_wall) do not close (16 dangling ends) and are drawn as fragments. No dated extent exists, so no earlier era. No gate or height drawn. T2 needs: a plan of the fort circuit, gate and tower positions, dated phases. docs/research/gandikota-pass.md Alpha-U batch (2026-11-11): 10 forts across A-Z starting at U, work order 4/10; distinct from batch 0 and alpha-I/K/L/T/V/X.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
