# Forts of the World page

`index.html` is the page published as the "Forts of the World" artifact: a zoomable world map of every fort, castle,
fortification and fortified ruin in the world table, with search, filters, record details and a 3D viewer for every
site that has a trace.

The data bundle is generated, not committed:

    node tools/world/build-atlas.mjs web/forts-of-the-world

That writes `data/` next to the page (core list, 30-degree map cells, detail buckets, 3D model shards and the Natural
Earth basemap, each stored as base64 of gzipped JSON in a .txt file, plus meta.json). Serve the folder over HTTP to try it locally; the page fetches only its own files plus
three.js r128 from cdnjs. Licences and attribution: `docs/wiki/SOURCES.md`.

`ten-forts.html` sits beside the page and holds the ten hand-built, walkable reconstructions of the first Ten Forts of
India (Murud-Janjira, Sindhudurg, Daulatabad, Golconda, Gingee, Gwalior, Chittorgarh, Kumbhalgarh, Mehrangarh, Jaisalmer),
each at three or four moments in its history. Those ten records link to it (`ten-forts.html?fort=<level id>`). It is
built from the game, not committed:

    node tools/world/build-reconstructions.mjs web/forts-of-the-world/ten-forts.html

Animals and people are the game's own figures (forts.world ships no 0 A.D. models; see `LICENSES.md`), and the
strategic map, campaign and historical atlas are hidden on this page.
