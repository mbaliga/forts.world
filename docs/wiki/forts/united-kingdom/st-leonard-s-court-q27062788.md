# St Leonard's Court

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `st-leonard-s-court-q27062788` |
| Coordinates | 51.4674, -0.2695 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.4674/-0.2695)) |
| Wikidata | [Q27062788](https://www.wikidata.org/wiki/Q27062788) (CC0) |
| Wikidata class | fortification |
| Types | air-raid shelter\|revenue house |
| Administrative area | London Borough of Richmond upon Thames |
| Inception | 1938 |
| Wikipedia language editions | 2 |
| OSM `historic` | tomb |
| OSM `description` | Grade II* listed mausoleum in the form of a Bedouin tent carved to resemble draping canvas. Houses the coffins of Sir Richard and Lady Isabel Burton. The interior is painted with religious imagery and decorated with camel bells, lamps, and dried flowers. |

## What the model contains

Tier **T1**, status `outline+walls`, 193 elements (outline 1, road 70, building 527, zone 1, wall 1).

Evidence: documented 0, mapped 193, inferred 0, derived 0; heights documented 119, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1315932976 historic=tomb Q125057 570 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 527 mapped (trace size budget); the rest of the town is not drawn
- origin moved 571 m from the ledger point to the outline centroid
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.4674/-0.2695) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; air-raid shelter\|revenue house; sitelinks=2; wikidata:Q27062788 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 193 elements); data/traces/st-leonard-s-court-q27062788.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
