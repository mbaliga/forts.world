# Atami Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `atami-castle-q11257168` |
| Coordinates | 35.08639, 139.07861 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.08639/139.07861)) |
| Wikidata | [Q11257168](https://www.wikidata.org/wiki/Q11257168) (CC0) |
| Wikidata class | fortification |
| Types | museum\|tenshu |
| Administrative area | Atami |
| Inception | 1959 |
| Wikipedia language editions | 5 |
| OSM `website` | https://atamijyo.com/ |

## What the model contains

Tier **T1**, status `outline-only`, 38 elements (outline 1, marker 1, road 17, coastline 2, building 14, zone 2, water 1).

Evidence: documented 0, mapped 38, inferred 0, derived 1; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/564247122 historic=(none; chosen by its Wikidata id) Q11257168 6 m from ledger point
- origin moved 8 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":7,"medianInside":20.3,"medianOutside":88.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.08639/139.07861) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; museum\|tenshu; sitelinks=5; wikidata:Q11257168 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 38 elements); data/traces/atami-castle-q11257168.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 38 elements; outline osm:way/564247122 historic=(none; chosen by its Wikidata id) Q11257168 6 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
