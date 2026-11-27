# web/home

The front page of forts.world and the time map (`#map`, `#map-<viewpoint>`). One self-contained page: d3 7.9.0 and
topojson 3.0.2 from cdnjs, fonts from Google Fonts.

Build its data, then serve the folder over HTTP:

```sh
node tools/world/build-home.mjs          # writes web/home/data/sites.json, undated.json, land-110m.json, countries-110m.json
python3 -m http.server -d web/home 8777
```

- `sites.json`: sites with a founding year (Wikidata inception, parsed by `parseYear` in the build script; centuries
  become mid-century and are marked approximate). They appear on the timeline from that year.
- `undated.json`: every other site. Most Indian forts are here (about 2,100 of 2,200), so the map shows them at every
  year rather than leaving India empty. Adding founding years to Wikidata moves sites from this file to the first.
- `dem10.png`, `dem30.png` (committed): relief grids for the contours, ETOPO1 via Fatiando a Terra (CC BY 4.0, see
  `LICENSES.md`). Rows run north to south from 90° to -90°, columns west to east from -180° to 180°, both ends
  included; each pixel holds metres + 32768 as red (high byte) and green (low byte).

What the page does not have yet: historical borders or empires (no openly licensed dataset; historical-basemaps is
GPL and excluded), portraits for the viewpoints, and checked citations for each viewpoint's place names and for the
period texts in `SNAPS`.
