# Revdanda (Chaul)

> India · Maharashtra · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `revdanda` |
| Coordinates | 18.546867, 72.924679 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/18.546867/72.924679)) |
| Wikidata | [Q24909257](https://www.wikidata.org/wiki/Q24909257) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Raigad district |
| Inception | 1524 |
| Designations | Heritage of Portuguese Influence |
| Wikipedia language editions | 5 |
| Programme catalogue | confidence high, significance rank 310; sources catalogue:revdanda;wikidata:Q24909257;smith-newton:r220 |
| OSM `historic` | fort |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 7 elements (outline 1, road 3, coastline 1, water 1).

Evidence: documented 0, mapped 7, inferred 0, derived 1; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/658563498 historic=fort Q24909257 236 m from ledger point
- origin moved 246 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":382,"medianInside":0.8,"medianOutside":11.3}
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/18.546867/72.924679) | 2026-11-14 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-14 |

## Research notes

- [docs/research/revdanda-mapped-town-pass.md](../../../research/revdanda-mapped-town-pass.md)

## Ledger note

coords from wikidata (was 18.5474,72.9268) \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 0 elements); data/traces/revdanda.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: the first OSM fetch (2026-11-14) had returned nothing; OSM re-fetched with the same query and 900 m radius (8 elements), terrain tiles unchanged, auto-T1 rebuilt (outline+walls, 7 elements). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
