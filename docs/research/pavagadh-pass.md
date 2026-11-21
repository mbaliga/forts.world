# Champaner–Pavagadh: reconstruction from the 1847 plan

## Evidence used

- [J. Ramsay's plan of Pavagadh](https://commons.wikimedia.org/wiki/File:Pavagadh_plan_1847_by_J_Ramsay.jpg), prepared in 1847 and reproduced in the British Library's *Gazetteer of the Bombay Presidency* collection. The local scan is `data/plans/pavagadh/Pavagadh_plan_1847_by_J_Ramsay.jpg`; the Commons record identifies the British Library Mechanical Curator and marks the image as having no known copyright restrictions. The map labels multiple wall circuits, gates, tanks, palaces and Bhadra Kali Temple.
- UNESCO's Champaner–Pavagadh Archaeological Park page describes the broader fort, settlement and waterworks landscape, including the 1484 capture and Sultanate capital phase.

## Reconstruction

`src/levels/gujarat-forts.js` uses the 1847 plan as its own local coordinate frame. Positions are hand-traced from the image, with an approximate 1.73 m per pixel scale derived from the plan's 500-yards-per-inch scale bar and the scan dimensions. The sheet is not georeferenced, so no latitude/longitude alignment is claimed. Three wall circuits are shown as low, unraised linework in the plan era. Named gate positions and selected tanks, palaces and Bhadra Kali Temple are identified from the plan. A separate amber-tinted `1847~built` era shows the walls, gates and selected structures as schematic 3D massing.

The British Library plan is the only source used to lay out the fort. Contemporary photographs of the surviving gateways, including [Sahapedia's Atak Gate photo and article](https://www.sahapedia.org/champaner-pavagadh-archeological-park-world-heritage-site), are visual references only; no image pixels are used in the model or as textures. They support the general gateway form but supply no measured elevations. The constructed view uses an 8.5 m rampart height as a clearly labeled visual assumption; gate, bastion, palace, temple and tank forms and elevations are likewise schematic.

## Limits

Wall traces and site locations are approximate hand-traces, potentially tens of metres off. The local scale is approximate; the map has not been registered to ground control. Heights, thicknesses, gate forms, detailed building footprints, relief, and current survival are schematic or absent. The relief is left flat because the plan's contours carry no elevations. The model reconstructs what the 1847 plan depicts; it is not a present-day survey or a dated architectural phase model.
