# Half Bastion 9 of Ulm Fortress

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `half-bastion-9-of-ulm-fortress-q69653693` |
| Coordinates | 48.39184, 9.98926 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.39184/9.98926)) |
| Wikidata | [Q69653693](https://www.wikidata.org/wiki/Q69653693) (CC0) |
| Wikidata class | fort |
| Types | bastion\|defence work |
| Administrative area | Neu-Ulm |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 255 elements (outline 1, road 158, water 1, waterway 2, building 71, wall 22, zone 4, retaining-wall 4).

Evidence: documented 0, mapped 255, inferred 0, derived 0; heights documented 5, inferred 0, unknown 92.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/164670780 historic=yes Q69653693 11 m from ledger point
- roads capped: kept the 150 longest of 158 mapped (trace size budget); minor lanes are not drawn
- origin moved 9 m from the ledger point to the centre of the mapped site
- 1681 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.39184/9.98926) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; bastion\|defence work; sitelinks=1; wikidata:Q69653693 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 394 elements); data/traces/half-bastion-9-of-ulm-fortress-q69653693.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 255 elements; outline osm:way/164670780 historic=yes Q69653693 11 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
