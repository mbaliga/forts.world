# Fort Forge: a generative fort-siege game (brief for a new session)

Working name. Owner: Madhav Baliga. Written 2026-11-27 at the hand-off from the forts.world reconstruction session,
to be developed in its own session (Fable suggested for design and architecture; Sonnet workers for iteration).

## The idea

Every level is a new fort, generated, with a playable scenario. The player picks a side, attacker or defender, and
plays that fort's siege: take it, or hold it. What the reconstruction programme has learned about how real forts are
built (sites, plans, walls, gates, bastions, water, approaches, by type and period) becomes the grammar of the
generator, so a generated fort is plausible for its kind, region and century without being a copy of any real one.

## What already exists to build on (all in this repository)

| Piece | Where | Use for |
|---|---|---|
| Fort generator from a data sheet: hill forts (mesa, cliff, talus, rim wall, gates with towers, bastions, switchback path), sea forts, coastal forts | `src/levels/gen.js`, sheets in `src/levels/maratha.js`, `src/data/forts.js` | The seed of the generator; extend it into a grammar |
| Schematic element kit: walls with merlons, bastions and towers (chhatri tops), buildings (roofs, domes, chhatris, arches), gates cut in walls | `src/levels/t1.js`, helpers `tools/trace/curation/_common.mjs` (`bastionRing`, `gateTowers`, `rectAt`, `sampleAlong`) | Assembling generated forts from parts |
| Terrain, ground, meshing, navigation and reachability | `src/core/terrain.js`, `ground.js`, `mesher.js`, `nav.js`, `world.js` | Generated sites must be walkable; `tools/smoke.mjs` already checks every place can be reached |
| Real-time company battles (formations, volleys, melee, morale, ladders and escalade) | `src/game/battle.js`, `battle-strength.js`, `campaign-battle.js` | The attack and defence play |
| Existing scenarios: Janjira c. 1760 (defend as the Siddis or assault as the Marathas), Gwalior 1780 night escalade | `src/levels/janjira*.js`, `gwalior*.js`; headless tests in `tools/sim.py` | Templates for scenario scripting and for headless balance tests |
| Turn-based campaign with economy, seasons and siege state | `src/game/campaign.js` | Later: a run of generated levels as a campaign |
| About 60 hand-curated real forts with research passes (documented vs inferred) | `tools/trace/curation/*.mjs`, `docs/research/*-pass.md`, the ledger | Training material for the grammar: proportions, gate counts, bastion spacing, wall heights by type and period |
| Characters, people, fauna, weather, day and night | `src/game/` | Atmosphere |

## Suggested shape

1. **Typology first.** From the curated forts, extract per-type distributions (hill fort, sea fort, island fort,
   star fort, desert ksar, concentric castle, walled town): enclosure size, wall length and height, tower spacing,
   number of gates and their defences (bent entrances, barbicans), water sources, approaches. Record where each
   number came from; this is the generator's evidence.
2. **Grammar and seed.** A deterministic generator: seed + type + region + century -> site (terrain), outline,
   walls, towers, gates, inner buildings, water, approaches. Same seed, same fort.
3. **Scenario generator.** From the fort and the side chosen: forces and arms for the century, objectives (breach
   and take the citadel; hold until relief arrives; cut the water; night escalade), a time limit or turn count,
   weather and time of day. Balance by headless simulation (`tools/sim.py` style) before a level ships.
4. **Play loop.** Choose attack or defend, play, score, next fort. Difficulty rises with fort strength and odds.
5. **Honesty.** Generated forts are fiction and must be labelled so; they never enter the ledger, the atlas or the
   wiki as real sites. Real forts stay on the documented and constructed layers.

## Constraints that carry over

- Licences (`LICENSES.md`): code Apache-2.0; textures and models CC0 only; no CC BY-SA or NC assets, nothing from
  Unsplash or Pexels; no 0 A.D. models.
- Branches: work on a branch off `dev` (for example `feat/fort-forge`) or a new repository, as the owner decides.
  Never push to `main`; it changes only by pull request from `dev`.
- The repository is about 4 GB (mostly `data/traces`): use a shallow or sparse checkout.
- Phone and iPad matter: the owner tests on an iPad.

## Opening prompt for the new session

> Read `docs/game/fort-forge-brief.md` in mbaliga/forts.world, then `src/levels/gen.js`, `src/levels/t1.js`,
> `src/game/battle.js` and `docs/game/HANDOFF.md`. Propose the architecture for Fort Forge: the typology data and
> where it comes from, the generator's grammar, the scenario generator, the play loop and how it ships on
> forts.world. Ask me the decisions that are mine (repository, art direction, first fort types, first scenarios),
> then build a first playable vertical slice: one fort type, both sides, one scenario, on a branch off `dev`.
