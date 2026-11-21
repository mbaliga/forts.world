# Metadata schema

Where each field on a fort page comes from. Fields with no value are omitted, never guessed.

| Field | Source | Meaning |
|---|---|---|
| `site_id` | ledger | Stable id: `<slug>-q<wikidata>` (Wikidata sites), `<slug>-sn<n>` (programme catalogue), `<slug>-n<osm node>` (hand-added OSM sites), or a hand name. |
| name, country, region | ledger / Wikidata `admin` | As recorded; English where available. |
| lat, lon | ledger | Marker point. The trace `origin` may move to the outline centroid; the shift is printed in the build notes. |
| Wikidata class, Types, Inception, Designations, WHC id, sitelinks | `data/world/sites.csv.gz` (CC0) | Class and heritage context; sitelinks (Wikipedia editions) are a rough notability signal. |
| OSM `historic`, `castle_type`, `fortification_type`, `heritage`, `ruins`, `barrier`, `description`, `website` | OSM tags on the matched site object (ODbL) | Tags as mapped by contributors; may be wrong or missing. |
| Evidence level | ledger `tier_reached` | T2, T1 (plan-validated), T1, T1 (auto, outline), T1 (location-only), generic schematic. |
| Status | ledger `status` | `todo`, `needs-plan` (auto model exists, a plan is wanted), others per `docs/fort-fidelity/WORKFLOW.md`. |
| Elements | trace | Counts by kind: outline, wall, building, road, waterway, water, zone, cliff, marker. |
| Evidence counts | trace `evidence` | documented / mapped / inferred / derived elements; heights documented / inferred / unknown. |
| Sources used | trace `sources` | Each dataset used for that model, with licence, link and fetch time. |
| Units | trace `units` | Metres, x east, y north, heights above Terrarium datum; GLB exports are +Y up, -Z north. |

Flat catalogue: [data/forts.csv](data/forts.csv).
