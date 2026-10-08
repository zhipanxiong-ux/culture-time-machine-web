# Public content model

`public/content.js` is the release's version-controlled content source. It defines a stable journey ID, a reviewed year, two stable place IDs with coordinates and regional labels, four topic IDs with paired claims, qualifications and source IDs, and a source register with institution, title, URL and scope. Editing a label does not change a shared URL if IDs stay fixed. Future additions should include source passage/page and review status per claim when practical.

The place coordinates locate Chang’an and Heijō-kyō against modern coastlines. `Tang China` and `Nara Japan` are period-specific political/cultural context, while modern-country terms in explanatory text only locate geography. The UI does not draw exact historic borders or show modern flags before their applicable context.

The public date encoding is astronomical for transport: integer `0` displays as **1 BCE**, `-1` as **2 BCE**, `1` as **1 CE**. No year zero appears to visitors. The slider spans 500 BCE to the parent research endpoint of 2025 CE. Only 750 CE is marked reviewed in this edition; every other selected year displays a transparent unavailable state. A continuous slider does not imply continuous historical coverage.

Use sources to support the narrowest claim they can. The Nara 745–747 tablets are near-period evidence about some administrative activity, not all meals, homes or social classes in exactly 750. The Met Tang essay gives a broad dynasty picture, not a street census. Future records should state whose experience is described, what is approximate, and what the source cannot show. Myth, epic, sacred story and oral tradition require explicit labeling.

No third-party images are bundled. `data/land.png` derives from Natural Earth's public-domain 1:110m land polygons; the global outline is spatial context only.
