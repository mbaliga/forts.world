# Surat Castle

> India · Gujarat · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `surat-castle-q28153959` |
| Coordinates | 21.196266, 72.817782 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/21.196266/72.817782)) |
| Wikidata | [Q28153959](https://www.wikidata.org/wiki/Q28153959) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Inception | 1540 |
| Designations | monument of local significance\|Monument of National Importance |
| Wikipedia language editions | 4 |
| Programme catalogue | confidence high, significance rank 515; sources wikidata:Q28153959;smith-newton:r709 |
| OSM `historic` | castle |
| OSM `website` | https://www.suratmunicipal.gov.in/Services/SuratFortHome |

## What the model contains

Tier **T1**, status `outline-only`, 111 elements (outline 1, road 34, building 75, waterway 1).

Evidence: documented 0, mapped 111, inferred 0, derived 0; heights documented 71, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/553850674 historic=castle Q28153959 7 m from ledger point
- origin moved 7 m from the ledger point to the outline centroid
- 11 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/21.196266/72.817782) | 2026-11-16 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-16 |

## Ledger note

Alpha-J batch (2026-11-14): 10 forts across A-Z starting at J, work order 5/10; distinct from batch 0 and every other alpha set. type=fort; confidence=high; rank=515; sources=2 \| 2026-11-16: auto-T1 by the model-all pipeline run directly (outline-only, 111 elements); data/traces/surat-castle-q28153959.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
