# Nahargarh fort-and-wall corridor geometry pass

This is a site-specific geometry improvement, not a verified reconstruction. It replaces the circular hill footprint with the 15 GPS vertices published in the 2022 Government of India georeferenced map titled “Map showing digital map of required forest land and coordinates of layout plan of Nahargarh Fort with wall alignment.” The sheet identifies a 100 m-wide corridor, a stated applied area of 21.255 ha, a stated length of 2,125.5 m, a 1:6,000 scale, habitation, existing roads, water bodies, forest and sanctuary boundaries.

The scene is recentered on the calculated centroid of those vertices and uses the polygon as a site-area/landform envelope. A 50 m inward offset supplies a working wall path because the sheet gives a corridor around the fort and wall, not a separate surveyed wall-centreline. The engine keeps the outline and offset separate so the scene does not label the corridor perimeter as the defensive wall itself.

## Checks and limits

- The projected GPS polygon is about 19.5 ha with a 3.14 km perimeter. The source table instead states 21.255 ha and 2,125.5 m by 100 m. These are not identical measurements; retain the discrepancy rather than silently scaling the polygon to the table.
- The 50 m inward path is an inferred centerline. Its computed perimeter is about 2.60 km, so its length also differs from the table’s 2.1255 km. The wall path therefore remains **inferred**, not measured or verified.
- The map documents the current applied-land corridor. It does not date each section of wall, gate, bastion, repair or rebuilding, and it does not supply a DEM. The same alignment across the 1734, 1868 and present states is a provisional location hypothesis; period-specific wall changes remain unknown.
- The Madhavendra Bhawan footprint and queen-suite positions are still schematic. Rajasthan Tourism describes twelve queen’s suites, while the 2023 JDA/Forest Department description gives nine. The model retains the conflict instead of presenting the suite count as settled.
- Current Google Maps aerial imagery was previously reviewed for broad ridge-to-city context, but its capture date is unknown and it has not been orthorectified or registered to the government plan.

## Source

- [Government of India / Rajasthan: georeferenced Nahargarh Fort with Wall plan, 2022](https://forestsclearance.nic.in/DownloadPdfFile.aspx?FileName=411271232121463W04DigitalMap.pdf&FilePath=..%2Fwritereaddata%2FFormA%2FDetailsOfMaps%2F)
- [Rajasthan Tourism: Nahargarh Fort](https://www.tourism.rajasthan.gov.in/nahargarh-fort.html)
- [JDA and Rajasthan Forest Department: Nahargarh ESZ Tourism Master Plan (2023)](https://environment.rajasthan.gov.in/content/dam/environment/Env/PDF_Files_II/Final%20Report%20Tourism%20Matserplan%20Nahargarh%20ESZ%2003-07-2023.pdf)

The Jaipur ridge group—Amer, Jaigarh and Nahargarh—still needs a common georeferenced landscape model for ridge relief, walls, roads, settlements and the Amer–Jaigarh passage. The local fort scenes remain encounter-scale slices of that connected city landscape.
