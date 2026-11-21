# Bastion Museum

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bastion-museum-q15196997` |
| Coordinates | 43.77479, 7.50846 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.77479/7.50846)) |
| Wikidata | [Q15196997](https://www.wikidata.org/wiki/Q15196997) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|art museum |
| Administrative area | Menton |
| Inception | 1966 |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | https://www.menton.fr/Musee-Jean-Cocteau-le-Bastion.html |

## What the model contains

Tier **T1**, status `outline+walls`, 293 elements (outline 1, marker 8, road 95, coastline 2, wall 2, building 180, zone 1, retaining-wall 2, water 2).

Evidence: documented 0, mapped 293, inferred 0, derived 2; heights documented 0, inferred 0, unknown 184.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/61995896 historic=castle Q15196997 2 m from ledger point
- origin moved 1 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":156,"medianInside":0,"medianOutside":3.7}
- sea-1: DEM check ok {"cells":39,"medianInside":0,"medianOutside":1}
- 9 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.77479/7.50846) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|art museum; sitelinks=1; wikidata:Q15196997 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 293 elements); data/traces/bastion-museum-q15196997.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
