# Site illustration provenance

The site uses original AI-generated editorial illustrations created for CSE-Pothik with the built-in ImageGen tool. They are fictional characters, not portraits of real mentors, testimonials or endorsements. `themes-sample.png` informed the visual mood; its artwork was not copied into the site. The code-native path identity and social-sharing card remain separate assets.

| Source asset                                    | Purpose                                                                                | Source dimensions | Delivery                                                   |
| ----------------------------------------------- | -------------------------------------------------------------------------------------- | ----------------- | ---------------------------------------------------------- |
| `src/assets/illustrations/study-partners.png`   | Three computing peers: a Chakma QA teammate with a tablet between two laptop users     | 1536 × 1024       | Responsive WebP widths 400, 640, 900; eager/high priority  |
| `src/assets/illustrations/ai-study-partner.png` | AI partner checking a result; illustrates verification rather than replacement anxiety | 1254 × 1254       | Responsive WebP widths 180, 300, 480; lazy loading         |
| `src/assets/illustrations/lost-route-guide.png` | A robot uses a compass to guide a map-confused student home on the 404 page            | 1536 × 1024       | Responsive WebP widths 480, 768, 1024; eager/high priority |

The study-partners scene has an intentional solid blue-gray editorial background, framed by a semantic theme-aware border. The supporting AI image retains alpha transparency. The same artwork is used in light/dark themes and both languages; no gender or ethnicity is deferred to another slide or selected from a user preference. Proportional sizing with `object-fit: contain` keeps all three teammates, both laptops and the QA tablet visible on narrow screens. Astro reserves width/height to prevent image-driven layout shifts. English and Bangla alt text is authored in the shared homepage component. These images add no browser JavaScript and no external image-host dependency.

## Three-person team with a Chakma QA teammate — current artwork

The user approved a three-person product-team scene and named the Chakma community (interpreting “Chakba” in context). One built-in ImageGen edit added an original fictional young adult Chakma Bangladeshi woman standing between the existing seated teammates. She participates visibly with a test-checklist tablet and stylus; she is neither a decorative observer nor a supervisor. All three look toward the visitor with relaxed smiles and retain personal space. The seated woman's teal hoodie and fully hair-covering ivory orna, the man's navy hoodie/glasses, both silver laptops, notebook diagram, coffee, water bottle and plant are preserved.

Selected output: `exec-a05bd7fc-2df1-4e1b-864c-00cdde7a61a9.png`, copied into `src/assets/illustrations/study-partners.png`. The opaque PNG master is 1536 × 1024 and 2,637,070 bytes. The original generated output and superseded two-person artwork remain in the ImageGen output directory; only the selected current master is used by the site. No layout, image-pipeline, dependency, language-route or AI-partner changes were needed.

### Clothing reference and limits

The [World Crafts Council–Asia Pacific entry on ethnic textiles](https://encyclocraftsapr.com/ethnic-textiles/) describes community-specific weaving, Chakma pinon borders and contemporary shawl production. [Banglapedia's dress reference](https://en.banglapedia.org/index.php/Dress) describes Chakma pinon/khadi and their use with blouses. Both were consulted on 31 August 2026. The cream blouse and restrained red/dark-blue patterned shoulder cloth are an original contemporary textile-inspired interpretation, not an exact reproduction of a named traditional motif, a complete pinon/khadi outfit or a ceremonial costume. No reference portrait was copied.

The character's intended identity comes from the user-approved creative brief, not an inference from facial features. Her QA activity is illustrative and does not associate a career with any ethnicity or gender. This change adds representation, not Chakma-language support; English and Bangla remain the only site languages. Cultural authenticity has not been independently certified by a community reviewer.

### Final built-in edit prompt

```text
Use case: precise-object-edit
Asset type: CSE-Pothik homepage hero, original editorial illustration.
Input image 1: EDIT TARGET, existing two-student computing workspace.
Primary request: evolve this exact scene into a welcoming THREE-person product-development team by adding one young adult Chakma Bangladeshi woman BETWEEN the existing woman and man, standing slightly behind the shared desk as an equal QA engineering teammate. Exactly two women and one man. Keep all three heads, shoulders, working hands and devices clearly visible with equal visual importance and personal space.
New centre teammate: attractive, smart, approachable young adult, naturally individual features without ethnic caricature, straight dark hair neatly worn loose behind shoulders. Relaxed friendly smile and gaze toward the viewer like the other two. Contemporary professional cream blouse with a tasteful handwoven Chakma-textile-inspired red/dark-blue shoulder cloth with restrained fine woven bands and a small patterned border; it is a modern personal styling detail, not a ceremonial costume. No head ornament or exotic accessories. She holds a tablet securely with one hand and a stylus with the other near its display, showing a simple software test checklist of three clear rows with check symbols and one small outlined bug icon, NO written words. Angle tablet so checklist is visible and the device is physically coherent. Make her face similar in scale to the other two, not tiny in the background or towering over them.
Existing woman on left: preserve identity, casual viewer-facing smile, teal hoodie and elegant ivory orna with ivory inner layer covering ALL her hair including hairline. Existing man on right: preserve identity, navy hoodie, glasses, smile and viewer-facing gaze. Both keep hands naturally on their own laptop keyboards.
Composition: redistribute the two existing seated students slightly outward to make clear space for the centre teammate, while retaining BOTH complete silver laptops within frame. The laptops have plain silver exterior lid backs toward viewer, actual screens toward students. Keep the flow-diagram notebook, pen, coffee mug, water bottle and small indoor plant resting visibly on the shared wooden tabletop; arrange modestly so hands and devices are not obscured. Table extends to bottom of frame so no props float off its edge.
Preserve the polished ink-outlined, softly textured editorial art style, opaque pale blue-gray backdrop, warm wood and navy/teal palette. Full 3:2 landscape composition, balanced readable silhouettes at mobile size, modest padding above heads and around devices, no crop hiding any teammate.
Avoid extra people, mutual romantic gaze, touching or couple-like poses, role hierarchies, ethnic stereotypes, ceremonial headdress, unnecessary props, floating UI, words, labels, logos and watermarks.
```

## Welcoming two-person computing workspace — superseded artwork

The latest user direction replaces the serious downward gaze with relaxed smiles toward the visitor, not toward each other. The woman now wears a teal hoodie and an ivory orna with a matching inner layer covering all her hair. Both students retain their own laptops, keyboard hands, equal prominence and personal space. Coffee, a water bottle and a small indoor plant sit on the wooden desk beside the open technical-diagram notebook.

Two edits used built-in ImageGen (not the CLI). The first introduced the requested clothing, gaze and props but left visible hair at the forehead and props beyond the desk edge. It was rejected. A targeted correction covered the hair and extended the wooden tabletop under every prop. The selected output `exec-1ce57c4b-fe0a-43bf-8c39-c72fc1058c00.png` is saved as `src/assets/illustrations/study-partners.png`: 1536 × 1024, 2,475,523 bytes, opaque PNG. The original generated output remains in the ImageGen output directory. Source inspection confirmed hair coverage, casual viewer-facing smiles, grounded props, coherent silver laptop backs and the notebook diagram before integration.

Layout, the responsive WebP pipeline, the AI partner and the brand are unchanged. English and Bangla alt text describe the new scene. The earlier prompts below are historical only; their downward-gaze/no-camera-smile requirements no longer apply.

### Initial edit prompt

```text
Use case: precise-object-edit
Asset type: CSE-Pothik homepage editorial illustration.
Input image 1: EDIT TARGET, the existing two computing students at a shared desk.
Primary request: change the woman's clothing, both expressions/gaze, and add three desk props; preserve the established artwork otherwise.
Woman: replace her teal overshirt with a teal hoodie. A neatly and stylishly draped soft ivory orna covers her head and ALL her hair including the hairline, draping naturally over her shoulders; face remains fully visible. The hoodie body and cuffs are clearly recognizable. No exposed hair strands.
Both students: look directly toward the viewer, each with a relaxed, casual, friendly smile. Heads upright, natural shoulders, clearly separate personal space. Keep their hands naturally resting on their own laptop keyboards, like a brief welcoming glance up from technology work. They do NOT look at or lean into each other.
Desk: preserve the open notebook with its technical flow diagram. Add a coffee mug, a water bottle and one small indoor plant in a simple pot beside the notebook, spaced naturally across free desk surface. Keep both laptops, hands and notebook unobstructed; props must not float or merge.
Invariants: same two South Asian young adults with equal visual prominence; same man in navy hoodie and glasses; same polished ink-outlined, softly textured editorial illustration style, wood desktop, opaque pale blue-gray background and navy/teal palette. Preserve 3:2 landscape full composition. Two functional silver laptops: plain exterior lid backs face viewer, screens face students; never draw code on exterior lids.
Avoid: mutual gaze, romantic couple posing, hearts, added people, clutter, floating interface graphics, text, logos or watermarks.
```

### Final correction prompt

```text
Use case: precise-object-edit
Input image 1: EDIT TARGET, the smiling two-student desk illustration.
Make exactly TWO corrections:
1. The woman's ivory orna MUST cover ALL hair. Replace the visible black hair patch above her forehead with a neatly fitted ivory undercap/inner layer continuous with the orna. The fabric edge should follow the top of her forehead, with absolutely no black hair visible. Preserve her face, casual viewer-facing smile, teal hoodie, and the elegant outer orna drape.
2. The coffee mug, potted plant and water bottle currently float beyond the wooden tabletop's front edge. Extend the existing wooden desktop forward to the BOTTOM OF THE IMAGE so it forms a continuous full-width wooden surface underneath ALL three objects and their shadows. They must visibly rest on wood, not the pale blue-gray background. Do not move the objects onto the laptops or notebook.
Preserve everything else: both relaxed smiles looking directly at viewer, same characters, man in navy hoodie/glasses, two functional silver laptops with plain backs toward viewer and hands on keyboards, flow-diagram notebook and pen, personal space, opaque blue-gray upper background, proportions, 3:2 framing, original polished textured ink illustration style. No additional objects, no text, no logos, no romantic mutual gaze.
```

## Focused computing revision — superseded artwork

The user found the first mixed-gender scene's mutual gaze and smiles romantic. The replacement keeps equal participation but directs each student's attention to their own laptop, with neutral concentrated expressions, active keyboard hands and clear personal space. A small system flow diagram in the notebook reinforces the technical context. The real laptop displays face the students; the viewer sees physically consistent silver lid backs. There is no mutual gaze, inward leaning or couple-like posing.

Two built-in ImageGen edits were made for this correction. The first successfully changed the gaze/posture but incorrectly rendered screen content on the outer laptop lids; that intermediate is not shipped. A targeted second edit corrected the lids and added the notebook diagram. Final output `exec-9c2bdcfa-c753-4e38-8606-8fd4852263a1.png` replaces `src/assets/illustrations/study-partners.png`. The illustration was visually inspected before integration; it remains a 1536 × 1024 opaque PNG with the established blue-gray backdrop. No changes to the static image pipeline, layout, AI partner or brand were required.

Initial edit brief: preserve the two original South Asian characters, navy hoodie/glasses and teal overshirt, shared desk/notebook, illustration style and matte blue-gray palette. Direct both neutral, closed-mouth faces down at their own laptops; give their shoulders/chairs personal space and keep each actively typing. Avoid mutual eye contact, inward leaning, smiles at each other/camera, romantic cues, extra people, logos or floating UI. Show technical work with physically coherent laptops. The attempted visible IDE screens were rejected because they faced the wrong direction.

Final built-in edit prompt:

```text
Use case: precise-object-edit.
Input images: Image 1 is the EDIT TARGET.
Primary request: Correct ONLY the two camera-facing laptop lid surfaces and add a tiny diagram to the existing notebook. The camera must see PLAIN SOLID SILVER EXTERIOR BACKS of BOTH laptop lids, NOT screens. Remove ALL displayed code, IDE interface, text, diagrams, screen bezels and screen content from those two outer lid faces and replace them with clean unbranded silver metal surfaces matching the existing laptop bodies. The laptops' actual displays face their respective students and are naturally hidden from this camera viewpoint. Keep the existing hinges, keyboard geometry, laptop positions and dimensions.
Notebook: On the existing open notebook, add one small simple hand-drawn system flow diagram made of plain boxes connected by arrows, with NO words or labels. This notebook drawing is the technology cue.
Invariants: Keep the successful focused faces and downward gaze EXACTLY; each person remains concentrating on their own laptop with closed mouths and neutral expressions. Preserve the personal space, the same two characters, clothes, South Asian appearance, hands, body poses, desk, notebook shape, full 3:2 composition, established polished editorial illustration style and all other detail. Preserve the same opaque cool blue-gray matte backdrop and palette.
Constraints: Change ONLY the laptop lid surface content and the drawing on the existing notebook. No new objects, no extra people, no extra text, no logos, no floating UI, no mutual eye contact or smiles, no romantic cues, no checkerboard.
```

## Initial inclusive study-partners revision — superseded artwork

The following records the first mixed-gender scene and its prompts for provenance; the current three-person-team direction above takes priority.

The original lone-male hero is replaced by a shared learning scene. The woman and man have their own laptops, equal visual prominence and a peer relationship. A single static scene gives immediate representation without carousel motion, extra controls, hidden slides or more downloads. The existing future-self encouragement remains inclusive; no fictional testimonial is introduced.

Built-in ImageGen was used for one generation and two targeted edits. The initial generation and alpha-extraction retry returned an opaque simulated checkerboard, not genuine transparency; those rejected images are not shipped. The final edit uses a deliberate solid backdrop instead. Only the final selected `study-partners.png` is imported by the homepage. The obsolete original `mentor-guide.png` was removed from the working tree on 1 September 2026 after confirming that no source imported it. Its historical prompt below and the asset in Git history preserve provenance; it was already excluded from production output.

### Initial composition prompt

Use case: illustration-story. Asset type: transparent raster homepage hero illustration for CSE-Pothik. Create an original welcoming mixed-gender learning scene: exactly two young adult South Asian computing students, one woman and one man, collaborating as equals at one shared simple desk. Each student is actively using their own silver laptop, with hands naturally on their respective laptop keyboard or trackpad. Both students must be equally large and visible at the same eye level, neither a teacher nor an assistant. The woman wears a teal casual cardigan or overshirt; the man wears a navy hoodie and glasses. Their natural engaged expressions turn slightly toward one another, friendly and approachable, not romantic. Use the original mentor image as a style reference only: polished editorial cartoon ink outlines, soft textured shading and natural young-adult proportions; do not preserve its lone-character composition, scenery, glow, plant or coffee cup. Landscape 3:2 canvas, balanced shared scene, full upper-body silhouettes, heads, arms, hands, both laptops and simple shared desktop uncropped, with at least 5% transparent padding. A small open notebook is the only additional desk prop. Blue, navy, teal, amber accents, warm brown skin tones; silver laptops. Subtle pale contour separation on dark hair/clothing for off-white and midnight-navy backgrounds. Exactly two people and two laptops; no text, logos, watermarks, floating UI or unnecessary props. Request genuine transparent alpha, not a checkerboard.

### Final backdrop correction

Selected built-in output: `exec-21146a62-0f44-4a01-b9b1-662bdef9bd14.png`, copied into the project as `src/assets/illustrations/study-partners.png`. The full composition was visually inspected before integration.

Use case: precise-object-edit. Asset type: intentional editorial illustration panel with a solid matte background, not a cutout. Image 1 is the edit target. Replace only the entire gray-and-white checkerboard background with one perfectly uniform solid cool blue-gray matte color, hexadecimal #dce6ef (RGB 220, 230, 239). Every part of the existing checkerboard, including all canvas edges, corners and spaces between the silhouettes, must become this same flat opaque color. Preserve exactly both students, the shared desk, both laptops and the notebook; preserve their placement, clothing and colors, expressions, poses, anatomy, hair, ink outlines, textured shading and all detail. Do not restyle or move any subject. Keep the full original 3:2 landscape composition and framing with no crops. The background must be flat, uniform and opaque. No checkerboards, patterns, gradient, glow, scenery, texture or additional props. No text, logos or watermarks. Change only the background.

## Historical mentor generation prompt (no longer displayed)

Use case: illustration-story. Create an original transparent-background PNG illustration for the CSE-Pothik homepage hero: a friendly South Asian young adult male computing mentor/student wearing a navy hoodie and glasses, sitting with a silver laptop, notebook and coffee cup at a simple desk. Warm, encouraging expression. Genuine alpha transparency—no opaque background or checkerboard. Polished editorial cartoon, clean dark ink contours, softly textured shading, natural young-adult proportions; academic and approachable, not photorealistic or a stock mascot. Waist-up 3:2 composition with the complete silhouette, arms, laptop and desk objects uncropped and transparent padding. A pale rim should separate dark hair/hoodie from midnight navy as well as off-white. Academic blue, navy, teal and amber; brown skin, silver laptop. No text, logos, watermark, other people, background scene or floating UI.

## AI study-partner generation prompt

Use case: illustration-story. Create an original transparent-background PNG illustration supporting AI literacy, not a logo: an approachable white/navy robot beside a floating code/check panel, thoughtfully checking a result, one hand at its chin and the other at the panel. Genuine alpha transparency, no opaque backdrop. Match the editorial cartoon language: clean ink contours and soft textured shading. Square composition, full robot and panel uncropped. Pale contour against dark backgrounds, ink contour against white. White/navy with academic blue, teal and tiny amber accents. Abstract strokes and a check only, no legible code. No words, letters, numbers, logos, watermarks, extra objects or background. Original design, not a known character.

## CSE-Pothik identity and social preview — 9 September 2026

The website mark is an original code-native SVG: an open circular C surrounds a decisive directional needle. `Logo.astro` and `public/favicon.svg` share its geometry. It is not a generated bitmap or an external icon. Semantic navy/teal colors keep the mark usable at small sizes and in both themes; CSE-Pothik remains the visible wordmark.

`public/social/cse-pothik-og.png` is the replacement original title card, generated once with the built-in ImageGen tool and visually inspected for exact text. It uses navy typography on cool off-white with blue/teal branching directions; it does not introduce a competing logo or character. Source dimensions: 1730 × 909. It is used for social metadata, not loaded in the homepage body.

Generation prompt: Use case: text-localization. Asset type: replacement social sharing preview card for the same website. Input image: the supplied image is the edit target and visual reference. Primary request: preserve the existing cool off-white editorial background, generous whitespace, deep navy typography, restrained blue/teal branching route linework on the right, layout, proportions, and professional visual tone. Replace only the large brand title text with the exact text “CSE-Pothik”. Keep the smaller tagline exactly “Find your direction in CSE.” Text (verbatim): large title “CSE-Pothik”; smaller tagline “Find your direction in CSE.” Composition: landscape approximately 1.9:1, all text fully visible with generous safe margins, branch linework stays on the right and never overlaps text. Constraints: render each exact string once; exact capitalization and hyphen; no other text; no old CSE Compass wording; no new icons, characters, logos, badges, watermarks, gradients, fake UI, or decorative clutter.

## Lost-route 404 illustration — 14 September 2026

The custom 404 page uses one transparent, text-free illustration so its joke works beside both the English recovery message and the concise Bangla reassurance. A student holds a map upside down after following a route that loops in a circle; a friendly robot uses a compass and points toward home. The robot is a scene character, not the product identity or an assertion that AI always knows the way. The built-in ImageGen output `exec-002bca7d-c196-455b-a639-88c46cbfdc24.png` was copied to `src/assets/illustrations/lost-route-guide.png`. The 1536 × 1024 PNG has genuine alpha transparency and is optimized by Astro at build time.

Final generation prompt:

```text
Use case: illustration-story
Asset type: responsive 404 error-page illustration for the CSE-Pothik educational website
Primary request: A friendly small AI robot humorously guiding one lost and visibly confused young adult pedestrian back toward home. The pedestrian is holding a paper map upside down with a sheepish, amused expression; the robot confidently points toward a welcoming glowing home icon while its other hand holds a tiny compass. A harmless dotted route has looped in a silly circle behind them before finally heading home, making the joke immediately readable without words.
Scene/backdrop: minimal abstract navigation setting with a few subtle path markers; genuinely transparent background so it works in light and dark themes
Subject: full-body robot and pedestrian, inclusive gender-neutral casual student styling, warm and reassuring rather than distressed
Style/medium: polished friendly editorial digital illustration matching the site's existing white, navy, cyan and small amber-accent AI robot artwork; crisp outlines, subtle hand-painted texture, professional rather than childish
Composition/framing: wide landscape grouping, both characters and the home symbol fully visible, balanced silhouette, generous transparent padding, readable when displayed around 520px wide
Lighting/mood: optimistic, playful, calm
Color palette: deep navy, bright blue, cyan/teal, white and restrained amber accents
Constraints: no written text, no letters, no numbers, no logos, no trademarks, no watermark; transparent background; no romance; no danger; clear visual storytelling and gentle humor; hands and limbs anatomically coherent
```

## Asset maintenance

- Keep the active original PNG masters, including the study-partners' intentional backdrop and the AI partner's real alpha. Superseded unused masters can be removed after checking references and preserving provenance/history. Do not substitute screenshots or simulated-transparency checkerboards.
- Preserve all three teammates' equal agency and visibility, the central QA tablet, the seated woman's hair-covering orna and the current clothing-reference limits. Do not reintroduce a lone-male default or rotating gender/ethnicity-specific slides.
- Generate edits through ImageGen and inspect the complete silhouette in both themes.
- Import through `astro:assets`, not public raw PNG URLs. Update responsive sizes if the rendered layout changes.
- Keep robots as supporting scene characters for the verification lesson and lost-route recovery; do not turn them into the core brand mascot.
- Recheck mobile crop, image loading, layout stability and bilingual alt text after any replacement.
