# Wasserburg Friedrichsgrün

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wasserburg-friedrichsgrun-q2550815` |
| Coordinates | 50.683, 12.5685 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.683/12.5685)) |
| Wikidata | [Q2550815](https://www.wikidata.org/wiki/Q2550815) (CC0) |
| Wikidata class | castle |
| Types | water castle\|deserted castle site |
| Administrative area | Reinsdorf |
| Inception | 1200 |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |
| OSM `description` | Wegverbindung; auch Garnstraße, genutzt von den Webern und Garnwicklern aus Textilfabriken auch aus Reinsdorf-Mülsengrund, Silberstraße und Wilkau-Haßlau, historischer Wegverlauf mit besonderer Bedeutung für die Orts- und Regionalgeschichte |
| OSM `website` | https://denkmalliste.denkmalpflege.sachsen.de/CardoMap/Denkmalliste_Report.aspx?HIDA_Nr=09238925 |

## What the model contains

Tier **T1**, status `location-only`, 290 elements (marker 2, road 184, water 2, building 306, zone 16).

Evidence: documented 0, mapped 290, inferred 0, derived 0; heights documented 34, inferred 0, unknown 86.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/16030361 historic=yes 686 m from ledger point
- site is a route relation of 8 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (745 x 2748 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 306 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 184 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.683/12.5685) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; water castle\|deserted castle site; sitelinks=1; wikidata:Q2550815 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 290 elements); data/traces/wasserburg-friedrichsgrun-q2550815.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
