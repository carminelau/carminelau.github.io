---
name: Carmine Laudato
description: A scientific atlas connecting data, code and matter.
colors:
  paper: "#f4f3ec"
  ink: "#173a2c"
  secondary: "#576658"
  line: "#d4d8cc"
  lime: "#dceaa7"
  terracotta: "#a6472e"
  peach: "#f0e1d4"
  sage: "#e3e8da"
  inverse-secondary: "#bdcbbf"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(60px, 7.1vw, 96px)"
    fontWeight: 500
    lineHeight: 1.06
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(29px, 3.2vw, 44px)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Manrope, sans-serif"
    fontSize: "17px"
    fontWeight: 500
    lineHeight: 1.55
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "11px"
    fontWeight: 400
  expressive:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontWeight: 400
    letterSpacing: "-0.015em"
rounded:
  panel: "4px"
  tag: "20px"
  control: "24px"
  pill: "30px"
  circle: "50%"
spacing:
  compact: "10px"
  control: "20px"
  cluster: "22px"
  panel: "28px"
  desktop-panel: "48px"
  section: "108px"
components:
  button-contact:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "10px 17px"
  button-contact-hover:
    backgroundColor: "{colors.lime}"
  button-mode:
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "8px 19px"
  button-mode-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  tag:
    rounded: "{rounded.tag}"
    padding: "4px 10px"
  feature-panel:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.panel}"
  practice-sense:
    backgroundColor: "{colors.sage}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
  practice-adivo:
    backgroundColor: "{colors.peach}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
---

# Design System: Carmine Laudato

## Overview

**Creative North Star: "A scientific atlas of connections"**

Warm paper and forest ink make technical work approachable. Large typography, generous empty space and contour geometry connect research, software and physical making.

The system is editorial and precise. A restrained italic voice adds personality while Manrope keeps navigation, reading and interaction clear.

**Key Characteristics:**
- Warm paper with forest ink and selective mineral accents.
- Large asymmetric compositions balanced by hairline rules.
- Manrope structure with Instrument Serif italic emphasis.
- Flat tonal panels and readable, compact controls.
- Mathematical imagery with user-controlled motion.

## Colors

### Primary
Forest ink carries primary text and the large research and contact panels. Lime marks selected details and emphasized text on ink.

### Secondary
Terracotta gives the expressive headline and interaction focus a warm accent. Peach and pale sage distinguish practice panels.

### Neutral
Paper is the page canvas. Secondary text uses muted green on paper and the lighter inverse secondary on ink. Line supplies fine dividers.

**The Ground and Contrast Rule.** Keep paper and ink as the structural pair; use lime and terracotta to mark emphasis and interaction.

## Typography

Manrope is locally hosted in regular, medium, semibold and bold weights. Instrument Serif is locally hosted in italic and is reserved for expressive words and the portrait signature.

The frontmatter records the main desktop hierarchy. Hero emphasis is larger than its surrounding line (1.16em); featured research emphasis uses 1.2em. Body copy varies from 14px to 15px with generous leading (1.85–1.9). Compact labels are 11px; navigation is 12px and semibold. Publication titles use the title role and allow long scientific names to wrap.

**The Two Voices Rule.** Use Manrope for structure and reading; use Instrument Serif italic for short, meaningful emphasis.

## Layout

Content has a maximum inner width (1280px) and fluid side gutters (clamp(22px, 5.6vw, 88px)). Desktop sections use a generous vertical interval (108px). Main projects form a featured two-column panel followed by two practice panels. Publications and repositories use ruled rows.

At 1050px and below, gutters become 40px and section spacing becomes 85px. At 760px and below, gutters become 25px, sections use 65px spacing, and the hero, project panels and portrait section stack. At 380px and below, gutters become 20px and a compact menu replaces the header contact action. At 1600px and above, the hero gains height.

**The Reading First Rule.** Stack complex compositions on narrow screens and let scientific titles wrap naturally.

## Elevation & Depth

The system uses no box shadows. Depth comes from ink, sage and peach fields, thin rules, overlapping contour imagery and photographic cropping. Hover states change tone or move a small directional icon.

## Shapes

Content panels have subtly softened corners (4px). Tags and compact controls use capsules; pause and contact-arrow controls use circles. Fine borders separate information without turning every item into a card. The portrait keeps a rectangular crop.

## Components

- **Contact button:** outlined paper-toned capsule; lime fill on hover. Keyboard focus uses a terracotta outline (2px, 6px offset).
- **Text links:** compact bold text with an inline SVG arrow; the arrow shifts on hover.
- **Mode control:** grouped capsule with three buttons. The selected button uses ink with paper text and exposes its state through aria-pressed.
- **Tags:** small outlined capsules on ink; use for project technologies.
- **Project panels:** ink for featured research, sage and peach for practice. Content defines height; internal space reduces on mobile.
- **Publication and repository rows:** hairline dividers and external-link arrows. Publications tint on hover; repository rows gain horizontal inset on desktop.
- **Navigation:** compact Manrope links with an animated underline. Narrowest screens expose a labeled menu button and a paper-colored disclosure.
- **Contour sculpture:** continuous motion can be paused and defaults to paused for reduced-motion preferences. Mode buttons still select a static shape. Offscreen and hidden-tab animation stops.
- **Portrait signature:** dark italic text on a paper patch, preserving contrast over the photograph.

**The Motion Has Controls Rule.** Preserve pause controls, reduced-motion behavior and keyboard-visible focus when extending animated surfaces.

## Do's and Don'ts

### Do:
- Do use paper and ink to organize the page before adding accents.
- Do keep long research titles readable and allow them to wrap.
- Do use local fonts and inline SVG icons.
- Do preserve visible focus and user control of motion.

### Don't:
- Don't introduce shadows into the existing flat panel vocabulary.
- Don't use Instrument Serif for navigation or long body copy.
- Don't present illustrative diagrams as live measurements.

