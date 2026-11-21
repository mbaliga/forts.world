# Forte Santa Caterina

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-santa-caterina-q3748627` |
| Coordinates | 42.39812, 11.2109 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.39812/11.2109)) |
| Wikidata | [Q3748627](https://www.wikidata.org/wiki/Q3748627) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Monte Argentario |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `description` | Potente fortificazione costruita dagli spagnoli nel 1558. La sua pianta quadrangolare è irregolare con bastioni. Il Forte Filippo è un tipico esempio delle costruzioni militari dell'epoca sotto il regno del re Filippo II di Spagna, da cui prende il nome. |
| OSM `website` | https://www.argentarioturismo.it/esplora-argentario-maremma-toscana/esperienze-da-vivere-maremma/le-fortezze-argentario/forte-filippo/ |

## What the model contains

Tier **T1**, status `outline+walls`, 69 elements (outline 1, road 17, coastline 1, wall 12, building 37, waterway 1).

Evidence: documented 0, mapped 69, inferred 0, derived 0; heights documented 37, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/166892411 historic=castle Q3748554 414 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 412 m from the ledger point to the centre of the mapped site
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.39812/11.2109) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q3748627 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 69 elements); data/traces/forte-santa-caterina-q3748627.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
