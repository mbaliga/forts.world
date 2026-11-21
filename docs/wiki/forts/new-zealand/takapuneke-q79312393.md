# Takapūneke

> New Zealand · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `takapuneke-q79312393` |
| Coordinates | -43.81738, 172.94903 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-43.81738/172.94903)) |
| Wikidata | [Q79312393](https://www.wikidata.org/wiki/Q79312393) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|pa\|kāinga |
| Administrative area | Christchurch City |
| Designations | Wāhi Tapu Area |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `heritage` | yes |
| OSM `description` | A sacred area to Ngāi Tahu and a site of national significance. In recognition of its tapu status, food and drink, bicycles, horses and recreational activities are not allowed in this area. It contains the site of the former Takapūneke village. |
| OSM `website` | https://ngaitahu.iwi.nz/opportunities-and-resources/publications/te-karaka/takapuneke/ |

## What the model contains

Tier **T1**, status `outline-only`, 171 elements (outline 1, marker 3, road 45, coastline 1, zone 3, building 117, water 1).

Evidence: documented 0, mapped 171, inferred 0, derived 1; heights documented 0, inferred 0, unknown 117.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/21093718 historic=yes 101 m from ledger point
- origin moved 103 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":563,"medianInside":0.9,"medianOutside":53.1}
- 17 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-43.81738/172.94903) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|pa\|kāinga; sitelinks=2; wikidata:Q79312393 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 171 elements); data/traces/takapuneke-q79312393.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/new-zealand.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
