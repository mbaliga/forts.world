# Paleokastro of Malevizio

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `paleokastro-of-malevizio-q106510402` |
| Coordinates | 35.36562, 25.03952 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.36562/25.03952)) |
| Wikidata | [Q106510402](https://www.wikidata.org/wiki/Q106510402) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress |
| Administrative area | Malevizi Municipality |
| Inception | 1206 |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `description` | Το φρούριο του Παλαιόκαστρου αποτελείται από τρία ανισόπεδα επίπεδα.. Η είσοδος γίνεται από την κεντρική πύλη που βρίσκεται νότια και είναι η μοναδική πύλη σε κάστρο της Κρήτης που είναι σκαλισμένη κατά το ήμισυ πάνω στον βράχο. |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 22 elements (outline 1, marker 1, road 18, coastline 1, water 1).

Evidence: documented 0, mapped 22, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/695041736 historic=castle Q106510402 6 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":234,"medianInside":0,"medianOutside":19}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.36562/25.03952) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress; sitelinks=2; wikidata:Q106510402 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 22 elements); data/traces/paleokastro-of-malevizio-q106510402.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
