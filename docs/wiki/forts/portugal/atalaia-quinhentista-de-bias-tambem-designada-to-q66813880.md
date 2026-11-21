# Atalaia quinhentista de Bias, também designada Torre de Bias

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `atalaia-quinhentista-de-bias-tambem-designada-to-q66813880` |
| Coordinates | 37.04966, -7.76036 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.04966/-7.76036)) |
| Wikidata | [Q66813880](https://www.wikidata.org/wiki/Q66813880) (CC0) |
| Wikidata class | fortification |
| Types | cultural heritage\|watchtower |
| Administrative area | Moncarapacho e Fuseta |
| Designations | Monument of Public Interest |
| Wikipedia language editions | 2 |
| OSM `historic` | watchtower |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |
| OSM `website` | https://www.olhaocubista.pt/Fortalezas.htm |

## What the model contains

Tier **T1**, status `outline-only`, 28 elements (outline 1, coastline 1, road 17, building 5, zone 4).

Evidence: documented 0, mapped 28, inferred 0, derived 0; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/736599876 historic=watchtower Q66813880 5 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.04966/-7.76036) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; cultural heritage\|watchtower; sitelinks=2; wikidata:Q66813880 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 29 elements); data/traces/atalaia-quinhentista-de-bias-tambem-designada-to-q66813880.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 28 elements; outline osm:way/736599876 historic=watchtower Q66813880 5 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
