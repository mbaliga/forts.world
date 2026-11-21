# Mandu coordinate registration pass 2

Reviewed 1 November 2026. This pass fixes the relationship between the modeled central monuments and the official point coordinates already plotted in the scene. It does not certify full monument models or the plateau landscape.

## Evidence used

- The 2025 National Monuments Authority draft prepared with the Archaeological Survey of India lists GPS positions for protected monuments and reproduces ASI plans in its annexures. The Hoshang Shah’s Tomb coordinate is 22°20′54.39″N, 75°23′47.54″E; Jama Masjid is 22°20′54.27″N, 75°23′49.27″E; Hindola Mahal is 22°21′24.63″N, 75°23′35.01″E; Jahaz Mahal is 22°21′20.51″N, 75°23′35.72″E; Dilawar Khan Mosque is 22°21′28.16″N, 75°23′32.17″E; and Ashrafi Mahal is 22°20′53.99″N, 75°23′55.31″E. See the official draft’s monument inventory and coordinate table (printed page 10).
- The draft gives the monument chronology (printed page 13) and includes an ASI survey plan of the Hoshang Tomb, Jama Masjid, Dharamshala, Tripolia Gate, Tower of Victory, Ashrafi Mahal and Mahmud’s Tomb in Annexure I (printed page 59). The coordinates anchor named sites; they do not supply georeferenced footprint vertices or prove each point is a building centroid.
- ASI’s site description states that Jahaz Mahal sits between Munj and Kapur tanks and describes Hindola Mahal’s T-shaped plan. Those relationships inform the blockouts but do not establish their precise orientation or dimensions.

## Scene changes

- Set Hoshang Shah’s Tomb’s published point as the local projection origin. This removes the prior several-hundred-map-unit mismatch between the point layer and central modeled features.
- Repositioned the central blockouts for Hoshang Shah’s Tomb, Jama Masjid, Ashrafi Mahal, Jahaz Mahal, Hindola Mahal, and Dilawar Khan Mosque from their own published coordinates. Their locations are point-anchored; dimensions, orientation and exact footprint registration remain inferred unless separately supported by measured dimensions.
- Kept Jahaz Mahal’s two tank offsets and Hindola Mahal’s cross-bar offset explicitly schematic. The ASI record supports the relational descriptions and T-plan, not these precise offsets.
- Site-anchored structures outside the small generated fort-core ellipse now render on local terrain instead of being silently omitted. This is a visualization allowance, not evidence that the generated hill or wall outline represents Mandu’s plateau.
- Kept source-coordinate map markers at their exact published coordinates. The Jami Masjid and Ashrafi Mahal markers use a wider nearby interaction radius so they remain discoverable without moving the documented points.

## Remaining evidence gaps

The Annexure-I survey sheet has not been digitized or registered to a modern control network in this pass. No measured building polygons, façade elevations, material-condition survey, orthophoto fit, DEM, settlement parcels, route network, seasonal access model, or full fort-wall/plateau geometry has been produced. The current aerial reference in the source catalogue was viewed previously, but its capture date is unknown and it was not orthorectified against the ASI sheet here. Consequently, Mandu remains an improved schematic, not a faithful completed reconstruction.

## Verification

The Mandu level tests confirm all 37 official point markers remain within the scene bounds and that the six point-anchored blockouts render at their respective published positions in the 1510 scene. All six Mandu periods pass the reachability smoke check with no unreachable places.

## Official references

- [ASI/NMA 2025 draft Heritage Bye-Laws for Mandu](https://asi.nic.in/admin/whatsnew/download/840)
- [NMA draft with GPS positions and ASI plan annexures](https://www.nma.gov.in/showfile.php?lang=2&level=1&lid=1909&ls_id=1551)
- [ASI description of Mandu monuments and plans](https://ignca.gov.in/Asi_data/37526.pdf)
