# Torre de Aspa

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-aspa-q7826980` |
| Coordinates | 37.08551, -8.95186 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.08551/-8.95186)) |
| Wikidata | [Q7826980](https://www.wikidata.org/wiki/Q7826980) (CC0) |
| Wikidata class | fortification |
| Types | cultural heritage\|triangulation station\|watchtower |
| Administrative area | Vila do Bispo e Raposeira |
| Designations | heritage without legal protection |
| Wikipedia language editions | 1 |
| OSM `description` | Vértice geodésico de 1ª ordem; pilar prismático sobre terreno. |
| OSM `website` | https://www.cm-viladobispo.pt/pt/199/militar.aspx |

## What the model contains

Tier **T1**, status `outline-only`, 9 elements (outline 1, road 7, coastline 1).

Evidence: documented 0, mapped 9, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/964296212 historic=(none; chosen by its Wikidata id) Q7826980 5 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 6 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.08551/-8.95186) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; cultural heritage\|triangulation station\|watchtower; sitelinks=1; wikidata:Q7826980 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 9 elements); data/traces/torre-de-aspa-q7826980.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 9 elements; outline osm:way/964296212 historic=(none; chosen by its Wikidata id) Q7826980 5 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
