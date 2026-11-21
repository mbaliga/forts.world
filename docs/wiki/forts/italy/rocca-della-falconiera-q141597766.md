# Rocca della Falconiera

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rocca-della-falconiera-q141597766` |
| Coordinates | 38.71119, 13.19685 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.71119/13.19685)) |
| Wikidata | [Q141597766](https://www.wikidata.org/wiki/Q141597766) (CC0) |
| Wikidata class | fortification |
| Types | archaeological site\|rocca |
| Administrative area | Ustica |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `description` | fortificazione borbonica |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 91 elements (outline 1, marker 2, road 21, coastline 2, cliff 2, building 61, wall 1, water 1).

Evidence: documented 0, mapped 91, inferred 0, derived 1; heights documented 0, inferred 0, unknown 62.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/515291122 historic=castle Q141597766 13 m from ledger point
- origin moved 8 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":36,"medianInside":0,"medianOutside":42.5}
- 165 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.71119/13.19685) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological site\|rocca; sitelinks=1; wikidata:Q141597766 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 91 elements); data/traces/rocca-della-falconiera-q141597766.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
