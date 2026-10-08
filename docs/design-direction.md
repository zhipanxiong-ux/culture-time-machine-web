# Design direction

[Three visual sketches](prototypes.html) compare a cinematic observatory, editorial atlas and contemporary museum at desktop and mobile sizes using the same 750 CE content. The chosen release combines the cinematic globe with an editorial paper reading panel. It keeps the accepted space-inspired feel and makes source-heavy comparison comfortable. The museum option needs a cleared image set before use.

## Compact specification

- **Type:** Georgia/Times for historical headings and reflective reading; system sans for controls, source links and small labels. No bundled font.
- **Color:** deep navy `#081722`, luminous blue globe, warm paper `#e8e2d5`, copper `#e7b78d` for time and Chang’an, pale jade `#a6d9c2` for Heijō-kyō. Reading text uses dark ink `#182a2e`.
- **Layout:** globe and time controls on the left of a 1440px view, editorial comparison on the right. Below 1000px the globe stacks above the story; below 600px each place's comparison text becomes a full-width block.
- **Spacing:** main page side padding 4vw on desktop and 18px on mobile. Reading measure stays within the paper panel. Topic navigation can scroll on narrow screens.
- **Controls:** text-first buttons, no decorative icon font; arrows are ordinary glyphs. Hover and selected states use copper lines. `:focus-visible` uses a 3px light-gold outline. The place buttons are keyboard and touch alternatives to canvas markers.
- **Motion:** globe rotation follows pointer movement directly. Topic and date updates are immediate; no cinematic transition hides the result. Reduced-motion users get no forced motion.
- **Imagery:** only a map mask with modern coastline disclosure. Any future historical image needs item-level rights, period, attribution and explicit reconstruction status.
