# Homepage illustration provenance

The homepage uses two original AI-generated editorial illustrations, created for CSE Compass with the built-in ImageGen tool during the August 2026 visual revision. They are fictional characters, not portraits of real mentors, testimonials or endorsements. `themes-sample.png` informed the visual mood; its artwork was not copied into the site. The existing compass logo and social-sharing card remain separate assets.

| Source asset                                    | Purpose                                                                                | Source dimensions | Delivery                                                  |
| ----------------------------------------------- | -------------------------------------------------------------------------------------- | ----------------- | --------------------------------------------------------- |
| `src/assets/illustrations/mentor-guide.png`     | Friendly South Asian hoodie-and-laptop mentor/student; hero encouragement              | 1536 × 1024       | Responsive WebP widths 400, 640, 900; eager/high priority |
| `src/assets/illustrations/ai-study-partner.png` | AI partner checking a result; illustrates verification rather than replacement anxiety | 1254 × 1254       | Responsive WebP widths 180, 300, 480; lazy loading        |

Both sources have real alpha transparency. Their light contours and color separation allow the same identity in cool off-white and midnight-navy themes. Astro reserves width/height to prevent image-driven layout shifts. English and Bangla alt text is authored in the shared homepage component. These images add no browser JavaScript and no external image-host dependency.

## Mentor generation prompt

Use case: illustration-story. Create an original transparent-background PNG illustration for the CSE Compass homepage hero: a friendly South Asian young adult male computing mentor/student wearing a navy hoodie and glasses, sitting with a silver laptop, notebook and coffee cup at a simple desk. Warm, encouraging expression. Genuine alpha transparency—no opaque background or checkerboard. Polished editorial cartoon, clean dark ink contours, softly textured shading, natural young-adult proportions; academic and approachable, not photorealistic or a stock mascot. Waist-up 3:2 composition with the complete silhouette, arms, laptop and desk objects uncropped and transparent padding. A pale rim should separate dark hair/hoodie from midnight navy as well as off-white. Academic blue, navy, teal and amber; brown skin, silver laptop. No text, logos, watermark, other people, background scene or floating UI.

## AI study-partner generation prompt

Use case: illustration-story. Create an original transparent-background PNG illustration supporting AI literacy, not a logo: an approachable white/navy robot beside a floating code/check panel, thoughtfully checking a result, one hand at its chin and the other at the panel. Genuine alpha transparency, no opaque backdrop. Match the editorial cartoon language: clean ink contours and soft textured shading. Square composition, full robot and panel uncropped. Pale contour against dark backgrounds, ink contour against white. White/navy with academic blue, teal and tiny amber accents. Abstract strokes and a check only, no legible code. No words, letters, numbers, logos, watermarks, extra objects or background. Original design, not a known character.

## Maintenance

- Keep the transparent PNG masters; do not replace them with screenshots containing a baked-in background.
- Generate edits through ImageGen and inspect the complete silhouette in both themes.
- Import through `astro:assets`, not public raw PNG URLs. Update responsive sizes if the rendered layout changes.
- Keep the robot supporting the verification lesson; do not turn it into the core brand mascot.
- Recheck mobile crop, image loading, layout stability and bilingual alt text after any replacement.
