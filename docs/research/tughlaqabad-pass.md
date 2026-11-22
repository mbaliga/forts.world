# Tughlaqabad Fort: mapped site with an ASI-based wall reconstruction

## Sources

- [ASI protected-monument inventory, entry 138](https://ignca.gov.in/Asi_data/87960.pdf) describes Tughluqabad's citadel, palace area and city; its scarped Aravalli outcrop; a roughly octagonal 6.5 km perimeter; and 10–15 m rubble-built walls with bastions and gates at intervals. Its entry includes a site plan, but it has not been registered to the OSM trace.
- [Delhi District Gazetteer](https://ignca.gov.in/Asi_data/30582.pdf) describes the long southern wall as averaging 40 ft with a 7 ft parapet, a second wall 15 ft high behind it, and more than 90 ft of total relief above the plain. Those dimensions are not assigned to a particular mapped segment in this scene.
- [IGNCA architectural description of the Delhi style](https://ignca.gov.in/Asi_data/18429.pdf) describes Tughlaqabad's irregular wall trace following rocky outcrops, frequent round bastions and sloping stone walls.
- OpenStreetMap way 102684251 supplies the current outline and the mapped internal features; Terrarium z15 terrain is about 30 m SRTM-derived resolution.

## Reconstruction

`tools/trace/curation/tughlaqabad.mjs` adds a separate `today~built` layer. It raises the mapped outer perimeter to 12.5 m, the midpoint of the ASI's 10–15 m written range, and distributes round bastions at 240 m intervals as a schematic interpretation of frequent bastions. The wall batter follows the description of sloping masonry. No gates are created from road crossings or from unregistered plan symbols. The map-derived water and mapped internal wall lines remain visible.

## Limits

The wall height varies in the written sources and is not a surveyed height for every section. The 12.5 m uniform curtain, batter, bastion spacing and bastion sizes are schematic. The southern double-wall/scarp description is not applied to specific mapped lines until the ASI plan is registered. The current scene is not a full reconstruction of the citadel, palace, city streets or gates. No external models or textures are used.
