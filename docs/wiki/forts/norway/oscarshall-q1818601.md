# Oscarshall

> Norway · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `oscarshall-q1818601` |
| Coordinates | 59.91027, 10.69226 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.91027/10.69226)) |
| Wikidata | [Q1818601](https://www.wikidata.org/wiki/Q1818601) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|palace |
| Administrative area | Oslo Municipality |
| Inception | 1852 |
| Wikipedia language editions | 14 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `description` | Royal summer palace. Built by Oscar I 1847 - 1852 and is "finest example of Neo-Gothic architecture in Norway." Open as a museum since 1881. |
| OSM `website` | https://www.kongehuset.no/c79771/seksjonstekst/vis.html?tid=79776 |

## What the model contains

Tier **T1**, status `outline-only`, 143 elements (outline 1, zone 15, road 91, building 31, coastline 2, water 3).

Evidence: documented 0, mapped 143, inferred 0, derived 1; heights documented 2, inferred 0, unknown 29.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/150542667 historic=castle Q1818601 6 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":119,"medianInside":0,"medianOutside":14.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.91027/10.69226) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|palace; sitelinks=14; wikidata:Q1818601 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 143 elements); data/traces/oscarshall-q1818601.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/norway.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
