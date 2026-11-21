# La Castiglia

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `la-castiglia-q19365785` |
| Coordinates | 44.64231, 7.48709 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.64231/7.48709)) |
| Wikidata | [Q19365785](https://www.wikidata.org/wiki/Q19365785) (CC0) |
| Wikidata class | castle |
| Types | castle\|palazzo museum\|specialized museum\|museum of a public entity\|history museum\|art museum |
| Administrative area | Saluzzo |
| Inception | 1271 |
| Designations | Italian national heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 137 elements (outline 1, road 50, building 71, wall 7, zone 5, retaining-wall 2).

Evidence: documented 0, mapped 137, inferred 0, derived 0; heights documented 1, inferred 0, unknown 80.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/302223409 historic=castle Q19365785 5 m from ledger point
- origin moved 7 m from the ledger point to the centre of the mapped site
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.64231/7.48709) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palazzo museum\|specialized museum\|museum of a public entity\|history museum\|art museum; sitelinks=2; wikidata:Q19365785 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 137 elements); data/traces/la-castiglia-q19365785.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
