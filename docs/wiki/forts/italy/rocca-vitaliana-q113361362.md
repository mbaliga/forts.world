# Rocca Vitaliana

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rocca-vitaliana-q113361362` |
| Coordinates | 46.02368, 8.70502 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.02368/8.70502)) |
| Wikidata | [Q113361362](https://www.wikidata.org/wiki/Q113361362) (CC0) |
| Wikidata class | fortification |
| Types | rocca |
| Administrative area | Cannero Riviera |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `description` | I castelli di Cannero emergono dalle acque del lago Maggiore, e ci appaiono suggestivamente come edifici galleggianti. Furono abitati dall’inizio del 1400 da cinque fratelli della famiglia Mazzardi, che avevano conquistato e razziato il territorio circost |
| OSM `website` | https://terreborromeo.it/castelli-di-cannero |

## What the model contains

Tier **T1**, status `outline+walls`, 30 elements (outline 1, road 15, zone 2, building 9, wall 3).

Evidence: documented 0, mapped 30, inferred 0, derived 0; heights documented 0, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1419690196 historic=castle Q1048781 28 m from ledger point
- origin moved 29 m from the ledger point to the centre of the mapped site
- 28 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.02368/8.70502) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; rocca; sitelinks=0; wikidata:Q113361362 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 30 elements); data/traces/rocca-vitaliana-q113361362.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
