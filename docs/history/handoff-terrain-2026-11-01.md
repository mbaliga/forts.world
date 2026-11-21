# Terrain and fort-world handoff — 1 November 2026

This package preserves the current project and uncommitted work. The requested direction is a connected historical world: a national relief overview, regional terrain, and detailed, period-specific fort scenes with surrounding landscape. Current implementations are prototypes, not completed faithful reconstructions.

## Start here

- `dist/south-asia-detail.html`: regional viewer, with national relief, streamed detailed terrain, fort search, project-catalogue markers and supplementary study markers. Select an available local scene to open it in an in-page panel; use **Back to terrain** to return. It requires an internet connection for the external map style, fonts, map tiles and terrain tiles. Local-file and embedded-frame behavior depends on browser security settings.
- `dist/index.html`: the local fort-scene application, including research reconstructions. `?fort=reis-magos` opens a registered scene directly. Scenes are incomplete and not surveyed fort models.
- `dist/goa-terrain.html`: the separate coarse Goa terrain/land-cover prototype.
- `dist/south-asia-terrain.html`: offline coarse South Asia overview.
- `docs/research/south-asia-3d-terrain-prototype.md` and `docs/research/goa-regional-terrain-prototype.md`: sources, methods, boundaries, data quality and limitations.
- `docs/handoff-2026-11-01.md`: earlier handoff for the strategic atlas, campaign and related work. This newer note describes subsequent terrain-view changes.

## Current behavior and limitations

- The national terrain view uses colour bands and interpolated contours from a 0.25° elevation grid. Closer views stream modern Mapterhorn elevation and the OpenFreeMap/OpenStreetMap basemap. Data is not a historical landscape or a measured survey. Heights are exaggerated.
- The local scene opens inside the same interface but is a separate application: there is no geometrically continuous, registered transition from regional terrain to an accurate fort. Surroundings and fort structures remain incomplete.
- Modern transportation, transportation labels, airports, buildings and residential land-use layers are hidden in the detailed regional map. No dated historical-road layer is implemented. Some separate local research scenes still show modern mapped approaches, and need period-specific review.
- The supplementary Smith–Newton dataset contains 3,863 rows; 3,697 have numeric coordinates inside the regional viewer's bounding box. They are research records, may duplicate other records and are not verified terrain-ready sites. Records without usable coordinates remain in the source dataset.
- Local fort models and fort-specific terrain are not approved as complete. Do not claim historical accuracy from a marker, rough terrain, a navigable scene, or passing software tests.
- The archive excludes `.git`, `node_modules`, transient build/cache directories and other zip files; it includes the lockfile, working-tree source, untracked project work, research notes, generated data and built HTML previews. It is not a Git clone and does not include local commit history or secrets from `.git`.

## Rebuild and test

From the repository root, install the dependencies in `package.json` using the included pnpm lockfile. Then run:

```
node build-south-asia-detail.mjs
node build-south-asia-3d.mjs
node build-goa.mjs
node build.mjs --min
```

From the project root:

```
node --test tests/fort-world/south-asia-detail.test.mjs tests/fort-world/south-asia-terrain-view.test.mjs tests/fort-world/goa-regional-terrain.test.mjs
```

The data for the existing Goa build is included in `src/goa/terrain.json`. To regenerate that data rather than simply rebuild the viewer, `tools/build-goa-data.py` also needs rasterio, NumPy, Pillow, network access to elevation tiles and the two ESA WorldCover 2021 source GeoTIFFs at the temporary paths documented in the script. Those downloaded GeoTIFFs and temporary Python dependencies are not included. Check the relevant data licences and retain attribution before redistribution.

Software tests cover registration, filtering, basic location data, contour interpolation and scene-link routing; they do not verify rendering, geography or historical fidelity. The in-app browser security policy blocked automated inspection of local `file:` pages in the previous session, so the latest visual behavior still needs a human browser check, especially markers, in-page fort loading and back navigation.
