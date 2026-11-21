# Revision R3 — Murud-Janjira

This source tree matches `Ten-Forts-Revised-R3.html`. (The `game/source` in the R2 delivery was older than the
R2 page; the R2 changes have been carried into it.) Build with `node build.mjs`; three.js is now inlined from
`node_modules`, so the page works offline. `build/land.json` (the India outline on the fort map) is restored.

Engine (used only by levels that opt in, so the other nine forts are unchanged apart from the sea and boats):
- `def.masonry` — dressed-stone shader for walls, bastions, gates, stairs, landings and `mason: true` buildings/ruins:
  coursed blocks, lime joints, weathering, wet tide band. `World.mason` is the mesh layer.
- `wall({ courses: [h...] })` string courses; `merlon: { slit: true }` loopholed merlons.
- `bastion({ embrasures: {...}, embrasureGuns: {...} })` arched gun ports through the parapet, one gun per port.
- `cannon({ lying: true })` dismounted barrels; new two-cheek garrison carriages.
- `def.surf` — breaking surf band from a distance field round the walls, surge and spray synced to the swell.
- `src/game/fx.js` — sea, masonry, surf and a GPU particle system (`World.particles`).
- `boat({ ferry: { path, dock, step, dwell, away, speed } })` scheduled ferries that dock with a gangplank;
  `npc({ ferry, group, queue })` passengers who disembark, walk in, and later queue and board.
- `src/core/camp.js` — tents, tent lines, sacks, grain bins, haystacks, pots, shot piles, kegs, arms racks,
  livestock pens, troughs, cookfires, smoke, gunfire with muzzle flash, smoke and splashes.
- `def.defaultEra` — the era a fort opens in.
- `tools/shoot.py` — headless screenshots with Playwright (see the top of the file).

# Revision R4

Look (all forts):
- Smooth, indexed terrain with per-vertex colour and normals; soft paint edges; procedural ground detail.
- Crease-angle smoothing (`smoothGeometry` in `core/mesher.js`) for trees, rocks, people and animals; rounder figures.
- `game/atmo.js`: a drifting cloud deck with matching cloud shadows on every lit surface, mist over water, aerial haze (`Fog`).
  Per level: `def.atmo = { clouds: 0..1, mist: 0..1 }`, `def.light.fogNear/fogFar`.
- Smooth-normal sea.

Flora and fauna:
- Tree types: coconut (`palm`), `banyan`, `peepal`, `tamarind`, `mango`, `neem`, `screwpine`, `bush`, `grass`, `reed`, `flowers`.
- `W.groundCover({ poly, spacing, threshold, types, max })` dense cheap scatter; hidden when zoomed far out.
- Animals: `dog`, `cat`, `sheep`, `goat`, `cow`, `buffalo`, `horse`, `chicken`, `rooster`, `chick`, `rabbit`; traits in `ANIMAL_TRAITS` (`game/people.js`).
- `W.birds({ x, y, h, r, n, kind: 'gull'|'crow'|'kite' })`. Forts without `def.ownFauna` get birds and dogs by default.

Play (`game/play.js`): click a gun, animal, soldier, pen, garrison post or settlement sign for a menu beside it.
- Guns: `cannon({ dynamic: true, arc })` (or `embrasureGuns.dynamic`) makes an operable, instanced gun: fire by hand,
  crew on order, automatic, turn, move (level rampart/bastion/terrace only, ±0.8 m, ≤45 m). Enemy boats: `boat({ enemy: true })`.
- Animals: tame and ride horses, befriend dogs, lead flocks, catch fowl and hares; pens (`W.pen({ kind })`) breed,
  lay eggs, give milk and wool.
- Garrisons: `bastion({ garrison: { name, cap } })`, `W.garrisonSpot({ name, at, cap })`.
- Settlements: `W.settlement({ name, poly, from: [x, y, h], plots })` (Golconda 1880s outer town).
- `W.onFinish.push(fn)` runs level code after `finish()` (e.g. crews placed beside dynamic guns).
- `People.spawnAgent` / `despawn`; `W.reserve[kind]` reserves figure capacity for births and arrivals.

Camp props (`core/camp.js`): `armourHeap`, `armourStand`, `spearStack`, `shieldStack`, `akhara`, `butts`,
`mallakhamb`, `pells`, `garden({ crop: 'veg'|'banana'|'millet' })`, `drawWell`.

# Revision R5

- Sea: depth-tinted from a seabed texture (shallow, mid, deep and silt colours per level: `def.water.{deep,mid,shallow,silt}`),
  smooth normals from the swell, sky reflection on wave slopes; wet tidal band on shore terrain. Surf field smoothed.
- Flags: rippling cloth with borders, stripes, `shape: 'pennant'|'swallow'`, finials; `noFlag` for a bare staff.
- Walls: `coping: true` (parapet coping course), `spouts: { every }` (drain spouts with rain streaks).
- Stairs: dressed treads and risers with nosing shadows; side walls with sloped coping.
- Guns: `barrelGeometry` (cast Deccan-type barrel: rings, swelling muzzle, trunnions, cascabel); iron-strapped
  carriages with tyred trucks; operable guns tinted iron or bronze; shot piles of smooth balls on timber frames;
  `W.gunTools` (rammer, sponge, bucket, linstock).
- Dock: `W.pier` (timber stage on piles with bracing, posts, ladder), `W.cargo`, `W.torchStand`.
- Grain: `W.grainShed`, `W.grainHeap`, `W.grainPit`, `W.tula`.
- Horses: new model with coats (`horse`, `horse-grey`, `horse-chestnut`, `horse-black`) and `horse-war` with tack;
  `W.picketLine`.
- Garrisons: bastion garrisons stand guard on the bastion; badges over held posts.
- Minimap: live layer (soldiers, animals, guns by state, boats, enemy boats, garrisons, pens, settlements, selection),
  north arrow, scale bar, key.
- Interface dressed by period (`body[data-chrome]`): printed survey (engraving), photograph album (albumen), modern;
  each with a dark variant.

# Revision R6

- Buildings: wall parapets are capped where they start and stop; bastion parapets are capped at the gorge and carry
  whole merlons only; Janjira's bastion tops are level with the wall-walk; stair treads are plain single stones (no
  paving pattern), side walls keep the masonry.
- Masonry shader: top surfaces are irregular flagstones (Voronoi cells) instead of a world-aligned grid; wall joints
  are recessed and shadowed rather than bright. Distant surf bands fade instead of shimmering.
- `game/climate.js`: sun from latitude, season and hour (solar time); dawn, day, dusk, moonlit night with stars;
  seasons (summer, monsoon, after the rains, winter) tint grass and trees; weather (clear, hazy, overcast, rain, storm
  with lightning, fog, dust, or chosen by the season); solar and lunar eclipses. Shared uniforms in `ATMO`:
  `uWet`, `uDry`, `uLush`, `uSeaAmp`, `uCloudDark`, `uMistBoost`, `uSkyLight`. Particle emitters with `nightOnly`.
  The page gets `data-sky="night"` when the scene is dark, switching the interface to its dark colours.
- Sky & weather panel (toolbar sun-and-cloud button) with a sun/moon dial.
- Minimap: an octagon standing on a point, framed by period: engraved compass card, brass bezel, or plain ring;
  compass rose; paper grain on period panels.

# Revision R7

- Animals from 0 A.D. (CC BY-SA 3.0, Wildfire Games; see CREDITS.md): Marwari horse in five coats (war horse with
  saddle cloth), Asian elephant (state elephant with caparison and howdah), zebu, dromedary, wild boar, Indian wolf,
  all skinned and animated (walk, run, idle) and scaled to real size. `game/fauna3d.js`, assets in `assets/fauna/`,
  embedded by `build.mjs` as `src/game/fauna-data.js`. People records poses through proxy frames and drives a rig per
  animal. 0 A.D.'s goat, sheep, chicken, hare and peacock skeletons are scaled wrongly in the source files, so those
  stay procedural, as do dogs, cats and buffalo.
- New procedural animals: Hanuman langur, rhesus macaque, Indian peafowl. `W.wildlife({ kinds, walls })` places wild
  animals by fort (wolves at Kumbhalgarh, macaques at Gwalior and Gingee, langurs on walls, peafowl, boar).
- Footprints (`game/prints.js`): people, horses, cattle, dogs, birds, elephants and camels leave prints only on
  ground that takes them (sand; mud, garden and field soil; tracks and natural ground when wet; the wet sand by the
  sea); depth follows wetness; the swash erases the tide line within seconds, wind fills dry sand, rain softens.
- Ground (`core/ground.js`, all forts): pebbles and gravel on unpaved tracks, fieldstones on slopes and rock;
  paths worn into the grass along the routes between the approach, gates and places (new paint `worn`), with the
  ground cover cleared from them.
- Dunes: `W.duneField` builds barchan dunes (slip face at the angle of repose, horns downwind) with wind ripples;
  placed in the Thar round Jaisalmer.
- Regional place markers (`game/markers.js`): samai lamp (Maharashtra), chhatri (Rajasthan), Qutb Shahi minaret top
  (Golconda), jharokha (Gwalior), stepped Kalyana Mahal tower (Gingee).
- Backdrops: `W.backdropSettlement` (instanced houses with period roofs and coconut groves); Rajapuri village,
  its beach and beached boats opposite Janjira; smoother backdrop hills.

# Revision R8

- True scale: people are 1.65 m (men) and 1.52 m (women) to the crown, the 18th–19th-century Indian averages (they
  were about 2.0 m); dogs and goats reduced to real size. Figures stay true scale close up and are enlarged up to
  1.75× as the view zooms out so troops stay readable; `state.trueScale` turns this off.
- Battles (`game/battle.js`): companies with standards, company cards and an orders bar; formations (line,
  column, square, open order); orders: move, attack, hold, charge, fall back; matchlock volleys (about 80 m,
  26 s reload), bows (120 m), hand-to-hand; cover on walls; morale, rout and retreat; enemy companies act for
  themselves and make for an objective. Each figure stands for about five men. Scenarios are defined per period in
  `def.battles[era]` (own, enemy, objective, objectivePoly, texts).
- Janjira c. 1760: "A landing at the Mahadarwaza", a Maratha storming party ashore at the landing (labelled as a
  scenario, with the historical context).
- New kind `musketeer-maratha`; the fallen lie where they fall (`a.lie`).

# Revision R9

- Wild-animal encounters (`game/encounter.js`): boar, wolves, peafowl, langurs and macaques can be approached with a
  capture attempt (alone or with up to six nearby men) and, for boar and wolves, a hunt. The menu shows what may be
  tried and the odds, worked out from the species, the size and arms of the party, darkness and rain. The party runs
  in, the animal turns at bay, there is a struggle, and the outcome is rolled: taken alive (it can be led, tied or
  let go), escaped, or killed; men (or the player) can be injured, and boar and wolves can kill. Injured men lie
  down, get up and limp; the player moves slowly while hurt. Boar meat and wolf pelts are counted.
- Peafowl (protected in the Rajput and Maratha states, sacred to many) and the langur (Hanuman's monkey) are never
  hunted, and the menu says why. Macaques are not hunted either.
- Checked by simulation: outcomes over 500–600 trials match the odds shown.

# Revision R10

- Garrison capacity for every building (`W.registerShelter` in `core/arch.js`): men by usable floor area and use
  (barracks 4 m² a man, house 8, palace 10, temple or mosque 6; roofless ruins half; granaries a small guard), shown
  in fives as figures. Buildings are selected by clicking them (ray cast to the footprint). In battles, men garrisoned
  in buildings and towers fire from windows and loopholes at enemies within about 70 m.
- A calendar (`Climate.day`): while time passes, ten calendar days to a game day; seasons follow the date
  (summer Mar–May, monsoon Jun–Sep, after the rains Oct–Nov, winter Dec–Feb); "Seasons turn / hold" in the panel.
- Farming and husbandry (`game/farm.js`): fields (`W.garden` registers them) go fallow → ploughed → sown → growing →
  ripe → harvested by season, water and the farmers working them; untended fields grow weedy and lose yield; ripe
  crops spoil if not cut. Yields per hectare: finger millet 650 kg, vegetables 7,000, plantains 12,000. Harvests go
  to the granary (porters carry them). Plants grow, ripen to straw and are cut to stubble on screen.
- Stores: grain, produce, milk, eggs, wool, meat; opening stocks by period; everyone eats about 0.9 kg of grain a day;
  "grain for N days" on screen. Tended pens give milk and eggs daily, sheep wool twice a year. Supply boats land grain
  (`def.supply[era]`): Janjira 900 kg a boat in 1774, 1,500 in wartime. Janjira gets a nachni plot.

# Revision R11

- Stairs: every flight that starts on open ground gets a flagged apron at its foot. Wall stairs (`wallStairs` in
  `levels/kit.js`) are built against the wall with a parapet only on their open side (`stairs({ side: ±1 })`) and a
  landing at the top, level with the wall-walk and reaching across to the wall's inner face, with a low parapet on
  its open edges.
- Minimap: the octagon rests on a flat edge; the degree scale follows the edges; the viewport marker is the true
  footprint of the view (the four screen corners cast onto the ground at the view's centre), drawn as a
  parallelogram with a dot at its centre.
- Fields from painted farmland (`W.fieldsFromPaint` in `core/ground.js`) at Chittorgarh, Kumbhalgarh, Gwalior and
  Mehrangarh (and any fort with field paint), each with its region's crop: bajra in Rajasthan, jowar in the Deccan,
  wheat at Gwalior, paddy in Tamil Nadu (new crops in `game/farm.js` with their seasons and yields), farmers working
  them. Large fields are planted with fewer, larger clumps (about 1,600 a field).
- Time passes by default at one game hour a real minute, so seasons, crops, herds and stores move without having to
  find the switch.

# Revision R12

- Janjira: the invented fields are gone (the sources record tanks and cisterns, no cultivation; the island was
  victualled by boat). The walls traced from the drone photograph are now low rubble compound and terrace walls,
  broken where they have fallen in the ruined periods. Fields elsewhere are split into irregular parcels with their
  own row directions; crop clumps are lighter and capped at about 4,000 a fort.
- Figures (`game/figures.js`): people rebuilt as jointed parts with proper proportions (tapered limbs, pelvis, chest,
  neck, nose, ears, moustache; dhoti, flared jama, sari with pallu; Maratha pagdi, Rajput safa, wound turban, cap,
  veil) and animated on the graphics card: a continuous walk cycle and, at rest, breathing, weight shifting, looking
  about, and idle actions (hand to the head or turban, stretching, looking round, shifting stance, hand on hip).
  Dogs, cats, goats, sheep, buffalo, fowl, peafowl, hares and monkeys are jointed the same way (legs, head, tail).
  Only slots in use are drawn.
- Chrome (`game/chrome.js`): a resource bar (grain, produce, milk, eggs, wool, meat, people, days of provisions,
  sound) dressed by period, with the page menus in it; a sun-and-moon orb (sky colour, sun or moon on its arc,
  stars, clouds, rain, eclipses; hour, phase and date); a console for the selection with a live 3D portrait,
  properties, an action grid and Learn more (`game/lore.js`); alerts with a drumbeat and pings on the minimap when
  your companies are hit.
- Sound (`game/audio.js`), synthesised with Web Audio: wind, surf, rain, birds by day, crickets by night, thunder,
  guns, matchlock volleys, splashes, a nagara drum for alarms, interface clicks.

# Revision R13

- The canonical character (`src/game/characters.js`, `assets/characters/`): three skinned 0 A.D. bodies (long coat,
  bare body, dress; CC BY-SA 3.0) with walk and idle variants, dressed by a nine-region palette read from the skin
  weights, with the head, face, headwear and props of `figures.js` riding on the `head` and `weapon_R` bones. Used for
  people up to a budget of 240 (soldiers first); the rest use the jointed figures. `CHARACTER_KIT.md` explains how to
  extend it to other peoples; `characters.json` lists the current kinds.
- Town life (`W.townLife` in `core/ground.js`): each cluster of houses gets a market square with stalls, goods and
  vendors, townspeople, porters and women about the lanes by day (indoors at night; `dayOnly`/`nightOnly` specs),
  watchmen at night, lanterns at doors and stalls, cooking smoke; worn lanes run from the markets to the gates.
- Real street plans: `tools/osm2level.mjs` prints an Overpass query and turns an OpenStreetMap GeoJSON export into
  `src/levels/<id>.osm.js`; `W.applyOSM(osm)` paints its roads and places houses on its building footprints.

# Revision R14

- Siege warfare: `W.ladder({ foot, top, rope })` registers scaling ladders and rope ladders drawn as their own objects;
  `Battle.scale(company)` sends men up a scenario's ladder chain one behind another; defenders near a ladder's top can
  throw it down (it falls away from the wall; men on it fall); "Man the wall" spreads a company along the nearest
  wall-walk; scenarios can start at an hour, season and weather, with garrison companies asleep and sentries awake;
  sentries raise the alarm by chance at short range (about 8 m on a dark night, less in rain, men on ladders harder to
  see) or at the first shot; a surprise attack holds its fire until the alarm or the order; attackers win by holding
  an objective with no awake enemy near.
- Gwalior 1780: "The escalade of Gwalior", the night assault up the rock and over the wall by Bruce's storming party,
  a grenadier company and Popham's battalion, labelled as a reconstruction of a recorded event.
- Night is readable: moonlight dimmed but not blacked out by cloud, more blue fill.
- Firelight: eight flickering point lights on the flames nearest the view at dusk and night (lanterns, torches, fires).
- Trees: broadleaf crowns and shrubs get several hundred small leaves over a shaded inner mass (ragged silhouettes,
  lighter towards the sky); foliage drawn double-sided.

# Revision R15

- The map of forts (`game/fortmap.js`, Map button in the top bar): India, Pakistan, Afghanistan, Bangladesh, Nepal,
  Bhutan and Sri Lanka, with Natural Earth borders in India's official view, state and province lines and rivers
  (`src/data/basemap.js`, public domain); 130 forts from `src/data/forts.js` in thirteen sets of ten (set 1 playable:
  gold, opens the fort); search, set filters, zoom and pan, a card per fort.
- `src/data/forts.js`: the catalogue (name, country, region, approximate position, type, builder, period, set).
- `tools/osm2forts.mjs`: an Overpass query for every fort tagged in OpenStreetMap across the region, and a converter
  into `src/data/forts-osm.js`, drawn as grey dots on the map.

# Revision R17

- Reconciled with R16 (ChatGPT): R16 was built from an older base without R14–R15 (siege, Gwalior battle, map of
  forts, catalogue). Its Copernicus GLO-30 elevation grid for Janjira (101 x 101 at 20 m) is carried over with its
  provenance as `src/data/dem-janjira.js`; its circular regional view is superseded by the campaign below.
- Campaign world, region A (Janjira and the Konkan): `src/data/konkan.js` (25 sites: forts, ports, towns, ghat passes,
  each with dated ownership phases and an evidence grade per fact: measured, documented, inferred, unknown; 30 routes:
  sea lanes, ferries, roads, ghat roads; monsoon rules) and `src/game/campaign.js` (Campaign button): the real coastline
  (Natural Earth) under a hex grid (about 6 km), terrain inferred by distance inland; sites appear only from their
  first dated phase; a week a turn; fleets and armies with men, ships and food (0.9 kg a man a day, restock at friendly
  sites, starvation); the monsoon closes the sea lanes and slows roads and ghats; gales at sea; assault by stated odds,
  siege, or the real-time battle at playable forts, whose losses and outcome come back to the campaign; state saved.
- Catalogue: 8 additions (Salher, Khanderi, Suvarnadurg, Reis Magos, Chapora, Mirjan, St Angelo's, Thirumayam) with
  proposed gameplay roles; campaign regions A–F; the twelve UNESCO Maratha Military Landscapes components (2025);
  an evidence record on every entry (position inferred until verified).

# Revision R18

- Janjira c. 1760 now has two scenarios: defend the landing (Siddis) or storm the Mahadarwaza (Marathas), with
  scaling ladders against both gate towers (hidden until the assault; defenders can throw them down). Periods can
  hold several scenarios (`def.battles[era]` as a list with `playerSide`); the campaign fights the one for your side.
- Campaign region B, the Sahyadri passes and the Deccan: 16 more sites (Torna, Rajgad, Sinhagad, Purandar, Lohagad,
  Pratapgad, Shivneri, Panhala, Ahmednagar, Daulatabad, Satara, Kolhapur, Wai, Junnar, Karad, Aurangabad) with dated
  owners (Yadavas, Delhi Sultanate, Bahmanis, Nizams added) and 22 more routes; the map runs to Daulatabad.
- Economy: towns and ports feed themselves and lay by a surplus (most at the harvest after the rains), ports trade
  while the sea is open, forts eat from stores and are fed from friendly neighbours; a siege cuts this off and a
  starving garrison shrinks. Population and resources on each place (inferred).
- The other side acts: relieves sieges, strikes weaker forces, falls back to restock. Forces meeting fight at stated
  odds (ships count at sea); the loser falls back.
- Evidence: a report of every fact by grade, a CSV checklist export, and an import of verified rows (positions and
  phases, with sources) that updates the campaign and catalogue and is kept.

# Revision R19

- Atlas (`game/atlas.js`, Atlas button in the top bar): the subcontinent, Asia and the world through time. Empires and
  states at 27 dates from 500 BCE to 2010 from historical-basemaps (André Ourednik, GPL-3.0), simplified (finer over
  South Asia) and delta-encoded (`src/data/atlas-data.js`, 1.5 MB). A stable colour per polity across dates, vassals
  tinted after their overlord, approximate borders dashed; time slider and play-through; scopes Subcontinent, Asia,
  World with zoom and pan; tooltips with overlord and border precision; the forts appearing from their first dates
  (playable forts open from the atlas); India's official boundary (Natural Earth, India's view) as an overlay.

# Revision R20

- Key dates in the atlas: 1526, 1605, 1674, 1761, 1799, 1857, 1947 (`src/data/keydates.js`). Each lists the powers of
  the subcontinent by the seats and strongholds they are well known to have held; the atlas fills each zone of control
  out from them (weighted by importance, within about 450 km, soft-edged) over South Asia, with the dataset's borders
  for the nearest earlier date elsewhere. Marked INFERRED; any power can be given a traced polygon (`poly`, `ev`) to
  replace its zone.
- Atlas and campaign linked: the campaign's "Show in atlas" opens the atlas at the nearest date over the Konkan and
  Deccan, with the campaign's sites in their current owners' colours and its forces; the atlas offers "Campaign here"
  for the region in the middle of the view (A and B built; C–F named as not yet built).

# Revision R21

- Campaign regions C (Goa, Kanara and Malabar: 20 sites, 24 routes) and D (the eastern Deccan and the Tamil coast:
  21 sites, 24 routes) in `src/data/south.js`, with dated owners (Portuguese, Dutch, Danish, French and English
  companies; Vijayanagara, Keladi, Gerusoppa, Soonda, Mysore, the Zamorins, Kochi, Arakkal, the Qutb Shahis, Kakatiyas,
  Reddys, Nayaks of Madurai and Thanjavur, Nawabs of the Carnatic, Sethupathis of Ramnad).
- The campaign is multi-region (tabs A–B, C, D), each with its own map, sites, routes and saved game. Starting
  scenarios: C 1765, Hyder Ali turning towards Malabar; D 1751, the siege of Trichinopoly and Clive at Madras.
- Seasons follow the coast: the west closes to shipping and its roads slow in the south-west monsoon (June–September);
  the Coromandel closes and its roads slow in the north-east monsoon (October–December). East-coast terrain is a broad
  coastal plain rising to the plateau. Allies count as friendly (e.g. the French and the Nawab of Arcot in 1751).
- The atlas launches all four built regions; its campaign overlay follows the open region.

# Revision R22

- Ten more playable forts: the rest of the Maratha Military Landscapes of India (UNESCO, 2025): Raigad, Rajgad,
  Pratapgad, Shivneri, Lohagad, Salher, Panhala (hill forts), Khanderi, Suvarnadurg (island forts) and Vijaydurg
  (coastal fort), each with a documented historic period and today, buildings, temples, tanks, places of interest
  with notes, people and wildlife. 51 periods across 20 forts, every place reachable on foot.
- The fort generator (`src/levels/gen.js`) builds a level from a data sheet (`src/levels/maratha.js`): hill forts as
  an irregular mesa with scarp and talus, a wall a fixed distance inside the rim, gates facing the wall's own normal,
  bastions, an approach path spiralling round the hill at a steady walkable gradient, an inner citadel wall with its
  own gate; sea forts as a walled island with a landing; coastal forts joined to the shore. Paths and gate landings
  are kept clear. Plans are inferred and compressed; every place card says so.
- The ten are playable from the map of forts and from the campaign.
- Engine fix: the terrain's highest point is found with a loop (spreading a large terrain into Math.max overflowed).

## R22.2 — 2026-10-29

Imported R22 editable source and assets into IN-RTS. Recovered its embedded bibliography to remove the missing external build input. Added direct searchable fort/period selection, serialized loading and frame suspension during transitions. Added Underi (1680/present) as an explicitly inferred connected Konkan prototype using existing Siddi units. Added 25 sourced Ratnagiri inventory candidates without fabricated coordinates; kept their research state distinct from playable scenes. Retained the preceding 130/150-record research datasets in the repository. Preserved source links and position caveats on generated landmarks. Browser verification and full regional coverage remain outstanding.

## R22.3 — 2026-10-29

Restricted campaign battle launch to matching year, attacking faction and authored scenario. Added encounter tokens, captured casualty reports, failure rollback, pre-battle cancellation and regional/scene locks during unresolved encounters. Fort grain transfers into local play and returns on resolution. Added tests for wrong-date/faction rejection, casualty validation, idempotent reporting and failed loads. Tactical saves and roster-level persistence remain unfinished.

## R22.4 — 2026-10-29

Recorded the gazetteer's 37 historic Kolaba forts with historical talukas, aliases, source links, and unknown positions; matched existing site IDs without upgrading their evidence. Added alias search and in-game source links. This does not establish complete Raigad coverage.

## R22.5 — 2026-10-29

Recorded 46 fortification entries from the 2016 Maharashtra central monument list with source rows and historical district names; matched 22 existing records and added 24 unlocated candidates. Campaign site exploration now excludes future and undated scenes and identifies the selected scene date. Regional coverage and browser validation remain incomplete.

## R22.6 — 2026-10-29

Added schematic Padmadurg scenes and linked its existing campaign site; the inherited 1676 date conflict is explicitly retained. Added ten Palghar tourism inventory names, matching two and adding eight unlocated candidates. Browser validation and regional coverage remain incomplete.

## Standalone study map — 2026-10-29

Imported Smith and Newton (2024) Supplementary Material 1 into the standalone and game maps: 3,863 records, 3,696 numeric coordinate pairs, one recovered pair, and 166 searchable unlocated records. Preserved the workbook, original source cells, attribution and uncertainty. Added country filters, study toggle and temporary spreadsheet import; retained the existing project catalogue and research entries.

## Map navigation — 2026-10-29

Added state/province filtering, an accessible search-result list with map focus, and exact-ID links from game-map cards to existing campaign sites. Study records remain independent; no automatic identity matching or coordinate upgrades are implied.

## Catalogue reconciliation — 2026-10-29

Added review-only project/study match suggestions based on normalized names and country, with a 15 km threshold where both coordinates are available. Unlocated candidates are explicitly name-only; alternatives remain separate and no evidence is upgraded.

## Original-fort priority — 2026-10-29

Added schematic Torna and Sinhagad historical and present-day scenes with source links, inferred plans and existing campaign-node links. Preserved the 138 original R22 site IDs as an explicit reconstruction baseline (22 with scenes). Campaign battle companies now reflect the engaged force strengths rather than a fixed five people per figure. Browser verification and surveyed plans remain outstanding.

## Original-fort priority, continued — 2026-10-29

Added schematic Purandar (1665 and present) and Vasai (1738 and present) prototypes with attributed landmarks and explicit reconstruction caveats. Purandar links to its existing campaign site; Vasai does not yet have one. Portuguese guard appearance is an unverified placeholder. The baseline now has 24 of 138 original sites with scenes, not completed surveys.

## Original-fort priority, Goa — 2026-10-29

Added schematic Reis Magos (c.1710 and present) and Chapora (c.1730 and present) scenes linked to existing Goa campaign nodes. Updated Chapora's ownership phases against the Goa government account, retaining the inherited 1683/1684 discrepancy, and split Reis Magos at its documented 1707 rebuilding. Local estuaries and tunnels remain unmodeled. 26 of 138 baseline sites now have scenes.

## R22.10

Added schematic Mirjan and St Angelo scenes in two periods, linked to their existing Kanara and Malabar campaign nodes. Mirjan's water is an illustrative moat; the river and drainage are not mapped. Government tourism accounts differ on its construction. St Angelo's rounded prototype does not reproduce its documented triangular plan; the 1772 Arakkal sale date remains provisional. Both locations remain approximate. 28 of 138 baseline sites now have scenes; 110 remain.

## R22.11

Added schematic Bekal and Palakkad scenes linked to their existing campaign nodes. Palakkad uses an inferred square and illustrative moat; actual dimensions, orientation and gateway are unsurveyed. Official accounts differ on Bekal’s origin and whether Palakkad was built or rebuilt in 1766. The campaign does not yet represent a reported 1784 capture. 30 of 138 baseline sites now have scenes; 108 remain.

## R22.12

Added schematic Aguada and Cabo de Rama scenes linked to the existing Goa coastal route. Their coastlines and headland elevations are illustrative, not surveys. Aguada’s nineteenth-century lighthouse is absent; Cabo de Rama’s dry moat and church are not reconstructed. 32 of 138 original sites now have scenes; 106 remain.

## R22.13

Added schematic Gooty and Vellore scenes linked to existing eastern Deccan campaign nodes. Gooty’s complex of hills and reservoirs is not represented, and its inherited early ownership phase conflicts with district history. Vellore’s rectangular moat scene is inferred and omits its temple and later church. 34 of 138 original sites now have scenes; 104 remain.

## R22.14

Campaign exploration now limits dated local scenes to the same recorded ownership phase and hides them after an alternate-history capture. The standalone fort explorer still offers all authored periods. Campaign phases include inferred dates and are not proof of architectural continuity; unavailable phases need their own scenes.

## R22.15

Added schematic Gandikota and Chandragiri scenes linked to existing eastern Deccan campaign nodes. Gandikota’s gorge and temples and Chandragiri’s palaces and temples are not modeled. Gandikota’s inherited broad 1123–1652 ownership interval needs research. 36 of 138 original sites now have scenes; 102 remain.

## R22.16

Replaced St Angelo’s rounded placeholder with a schematic triangular footprint and three bastions based on Kerala Tourism’s description of the present fort. Orientation, dimensions and shoreline remain inferred; its form in 1510 is not established.

## R22.17

Added schematic Srirangapatna and Tiruchirappalli scenes linked to existing campaign nodes; the latter uses the original catalogue ID trichy-rock. The Kaveri channels and island town, Tiruchirappalli’s rock temples and actual terrain are not reconstructed. 38 of 138 original sites now have scenes; 100 remain.

## R22.18

Added schematic Ahmednagar and Naldurg scenes. Ahmednagar connects to the existing Deccan campaign node; Naldurg remains in the fort explorer until a regional campaign connection is researched. Both river systems and Naldurg’s dam and water palace remain unmodeled. 40 of 138 original sites now have scenes; 98 remain.

## R22.19

Added schematic Bidar and Gulbarga explorer scenes with historical and present views. The palace and mosque complexes are not modeled; Gulbarga’s double walls and water are illustrative. Neither site has a campaign connection yet. 42 of 138 original sites now have scenes; 96 remain.

## R22.20

The playable-fort selector now searches names, regions, types and native names, filters map markers and reports result counts. Failed scene loads return to the selector with an error. The catalogue map still holds research-only entries separately.

## R22.21

Added schematic Paranda and Kandhar explorer scenes. Kandhar’s 1600 phase is provisional; Paranda’s 1660 scene follows the district’s 1657 Mughal capture. Neither has a researched campaign connection. The terrain, fort plans, moat and present conditions remain inferred. 44 of 138 original sites now have scenes; 94 remain.

## R22.22

Added schematic Raichur and Mudgal scenes. District sources disagree about aspects of their earliest history, and Mudgal’s sixteenth-century ownership is provisional. The fort plans, town, terrain and inscription are not reconstructed. Neither site has a researched campaign connection. 46 of 138 original sites now have scenes; 92 remain.

## R22.23

Added schematic Bijapur Arkilla and Udgir explorer scenes. The citadel palaces, fort plans and surroundings are not reconstructed; Udgir’s possible underground connection is unverified. Neither has a researched campaign connection. 48 of 138 original sites now have scenes; 90 remain.

## R22.24

Added schematic Chitradurga and Bangalore explorer scenes. Chitradurga’s actual circuits, waterworks and temples and Bangalore’s palace and city are not reconstructed. Neither has a researched campaign connection. 50 of 138 original sites now have scenes; 88 remain.

## R22.25

Added schematic Warangal and Bhongir explorer scenes and disabled generic cannon in their early interpretations. Their real stone gateways, monolith, terrain and layouts are not reconstructed; neither has a researched campaign connection. 52 of 138 original sites now have scenes; 86 remain.

## R22.26

Generated fort place cards now show separate evidence for the descriptive claim and marker position. Existing explicit grades are preserved; descriptions without a grade are unknown, even when they have a source link. Generated marker positions are inferred. Older authored scenes retain their existing notes until individually assessed.

## R22.27

Added schematic Revdanda and Korlai scenes linked to existing Chaul estuary campaign nodes. The actual estuary, Korlai ridge, towns and fort plans are not modeled. The Gazetteer reports a 1592/1594 chronology disagreement. 54 of 138 original sites now have scenes; 84 remain.

## R22.28

Added schematic Medak and Kondapalli scenes. Kondapalli links to an existing campaign node whose later ownership phase remains provisional; Medak has no campaign connection yet. Actual hill terrain, fortifications and dated phases are not reconstructed. 56 of 138 original sites now have scenes; 82 remain.

## R22.29

Added schematic Penukonda and Nellore Udayagiri scenes. Penukonda’s inherited approximate marker differs from the district tourism coordinate and needs verification. Neither has a researched campaign connection, and actual terrain and architecture remain unmodeled. 58 of 138 original sites now have scenes; 80 remain.

## R22.30

Added schematic Dindigul and Sankagiri explorer scenes. Dindigul links to an existing campaign node; its inherited ownership phase dates conflict with district history and are flagged. Sankagiri remains unconnected. Actual rock terrain, lower fort, buildings and wall phases are not modeled. 60 of 138 original sites now have scenes; 78 remain.

## R22.31

Added schematic Thirumayam and Fort St George scenes linked to existing eastern campaign nodes. Thirumayam’s long ownership phase needs review; the fort’s temples and Fort St George’s church, town and actual plans are not reconstructed. 62 of 138 original sites now have scenes; 76 remain.

## R22.32

Added schematic Diu and Moti Daman explorer scenes. Their actual coastline, canal, moat, town and monuments are not reconstructed, and neither has a campaign connection yet. 64 of 138 original sites now have scenes; 74 remain.

## R22.33

Added schematic Uparkot and Champaner–Pavagadh explorer scenes. Uparkot’s stepwells and caves and Pavagadh’s temples, city and waterworks are not reconstructed. The Uparkot period is provisional and neither site has a campaign connection. 66 of 138 original sites now have scenes; 72 remain.

## R22.34

Added an illustrative rock-cut stair and shaft to Uparkot’s present-day scene, inspired by the district’s description of Adi Kadi Vav. It is not to scale or positioned from a survey, and is omitted from 1460 because the exact fifteenth-century construction date is not established. Navghan Kuvo remains unmodeled.

## R22.35

Scene changes construct the next world and view before removing the current view. Failed loads uncover the existing scene or selector and report an error; failed initial loads open the selector. Period changes also report errors. This improves recovery from construction failures but does not guarantee rollback after a failure during final scene installation.

## R22.36

Added schematic Mandu and Raisen explorer scenes. Mandu’s city and monuments and Raisen’s actual fort are not reconstructed; neither site has a campaign connection. Mandu’s UNESCO listing is a tentative-list entry. 68 of 138 original sites now have scenes; 70 remain.

## R22.37

Added separate schematic Amer and Jaigarh scenes. Their actual ridge, passage, lake and monuments are not modeled, and neither has a campaign connection. 70 of 138 original sites now have scenes; 68 remain.

## R22.38

Added schematic Ranthambore and Gagron scenes. Their real forest, rivers and fort plans are not reconstructed; neither has a campaign connection. Their early interpretations omit generic cannons. 72 of 138 original sites now have scenes; 66 remain.

## R22.39

Added schematic Nahargarh and Junagarh explorer scenes. The later Nahargarh palace and expansion are not modeled in the earlier scene; both actual fort plans and cities remain unmodeled and have no campaign connection. 74 of 138 original sites now have scenes; 64 remain.

## R22.40

Added separate schematic Taragarh scenes for Bundi and Ajmer. Their real fort plans, cities and landscape are not surveyed, and neither has a campaign connection. 76 of 138 original sites have scenes; 62 remain.

## R22.41

Added a schematic Lohagarh scene, with a rectangular fort, eight bastions, two gates and an illustrative surrounding moat based on an ASI inventory. The plan is not traced and the town, present water and architectural phases remain unverified. The site has no campaign connection. 77 of 138 original sites have scenes; 61 remain.

## R22.42

Added an illustrative Bhatner scene with a skewed fort outline and existing figures. The ASI plan has not been traced; the fort’s precise outline, bastions, Ghaggar River, town and architectural phases remain unmodeled. The site has no campaign connection. 78 of 138 original sites have scenes; 60 remain.

## R22.43

Added schematic Red Fort, Delhi and Agra Fort scenes with approximate octagonal and semicircular outlines. The palaces, Yamuna, cities, precise plans and phases remain unmodeled; neither site has a campaign connection. 80 of 138 original sites have scenes; 58 remain.

## R22.44

The atlas opens an available dated fort snapshot at or before its selected year and respects authored campaign ownership phases. Undated sites remain visible as uncertain research markers; century ranges use the first century rather than the last. Approximate catalogue dates and snapshots are not evidence of a fort’s state in every year.

## R22.45

Added illustrative Salimgarh and Purana Qila scenes. The river, bridge, modern surroundings and exact plans and phases remain unmodeled; the Salimgarh historical guard is a placeholder. Neither site has a campaign connection. 82 of 138 original sites have scenes; 56 remain.

## R22.46

Added illustrative Tughlaqabad and Fatehpur Sikri scenes. The cities, monuments, fort plans, Fatehpur Sikri lake and historical architectural phases are not reconstructed. Tughlaqabad’s figures are placeholders; neither site has a campaign connection. 84 of 138 original sites have scenes; 54 remain.

## R22.47

Fatehpur Sikri’s present-day prototype now includes a five-storey columned pavilion inspired by Panch Mahal and a square pool with four walks inspired by Anup Talao. Its placement, size and details are inferred; it is omitted from the 1580 scene until a construction date is verified. The city and its layout remain unmodeled.

## R22.48

Added schematic Allahabad Fort and Lahore Fort scenes, with separate Akbar and Jahangir interpretations at Lahore. The rivers, cities, fort plans and palace architecture remain unmodeled; a generic pavilion represents no measured building. Neither site has a campaign connection. 86 of 138 original sites have scenes; 52 remain.

## R22.49

Added illustrative Rohtas and Attock scenes. Rohtas has a schematic inner wall and stepwell only in the present interpretation; their dates and locations are not established. Attock’s current military facilities and access are not modeled. The actual fort plans and rivers remain unmodeled and neither site is connected to the campaign. 88 of 138 original sites have scenes; 50 remain.

## R22.50

Added illustrative Kalinjar and Orchha scenes. Kalinjar’s Chandela and Mughal snapshots use different placeholder figures; the temple, actual fort and terrain are not modeled. Orchha’s river, palaces and town remain schematic. Neither site is connected to the campaign. 90 of 138 original sites have scenes; 48 remain.

## R22.51

Added illustrative Jhansi and Asirgarh scenes, including distinct Jhansi periods and a generic mosque cue at Asirgarh. Real fort plans, town, routes, garrisons and Asirgarh’s three levels remain unmodeled. Neither site is connected to the campaign; the 1857 scene is not a siege reconstruction. 92 of 138 original sites have scenes; 46 remain.

## R22.52

Added illustrative Chanderi and Ajaigarh scenes. Ajaigarh’s present-day scene includes an inferred water feature, omitted from the earlier scene pending evidence. The actual fort plans, city, lake, temples, approaches and historical phases remain unmodeled; neither site has a campaign connection. 94 of 138 original sites have scenes; 44 remain.

## R22.53

Added illustrative Narwar and Garh Kundar scenes. Garh Kundar has separate Khangar and Bundela snapshots; its inner wall is a present-only illustrative cue. Real fort plans, palaces, settlements, landscape, connecting routes and architectural phases remain unmodeled. Neither site is connected to the campaign. 96 of 138 original sites have scenes; 42 remain.

## R22.54

Added illustrative Fort William and Barabati scenes. The older and newer Fort William sites are distinguished; no modern military facilities are modeled. Barabati’s present-only moat is schematic, and the different published origin accounts remain unresolved. The rivers, city, fort plans and architectural phases are unmodeled; neither site has a campaign connection. 98 of 138 original sites have scenes; 40 remain.

## R22.55

Added illustrative Rohtasgarh, Bihar and Chunar scenes. The former is distinct from Rohtas Fort, Pakistan. The real plateau, waterworks, river, approaches, buildings and political phases remain unmodeled; neither site is connected to the campaign. 100 of 138 original sites have scenes; 38 remain.

## R22.56

Added illustrative Idrakpur and Lalbagh scenes. Idrakpur’s present-only platform uses UNESCO’s nominal diameter; its position and height are inferred. The preserved catalogue coordinate differs from UNESCO’s listed location and needs reconciliation. The actual fort plans, rivers, Dhaka and architectural phases remain unmodeled; neither site is connected to the campaign. 102 of 138 original sites have scenes; 36 remain.

## R22.57

Added illustrative Sonakanda and Hajiganj scenes. Sonakanda’s present-only platform follows UNESCO’s nominal outer diameter and height; its placement and details remain inferred. UNESCO coordinates differ from both preserved catalogue markers. The actual plans, river courses, surrounding sites and campaign connections remain unmodeled. 104 of 138 original sites have scenes; 34 remain.

## R22.58

Added separate schematic Kareng Ghar, Garhgaon and Talatal Ghar, Rangpur scenes, distinguishing the overlapping names. Their palace massing and placeholder figures are generic; the real architecture, terrain, reported tunnels, underground floors, magazines and routes remain unmodeled. Neither site is connected to the campaign. 106 of 138 original sites have scenes; 32 remain.

## R22.59

Added illustrative Kangra and Nurpur scenes with generic temple cues. Kangra’s Katoch and Mughal snapshots use different placeholder figures; real fort plans, temples, terrain, rivers and earthquake damage are not reconstructed. Neither site is connected to the campaign. 108 of 138 original sites have scenes; 30 remain.
