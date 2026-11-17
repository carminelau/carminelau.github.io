---
name: Carmine Laudato
description: A bold scientific atlas connecting data, code and matter.
colors:
  paper: "#fff9ee"
  ink: "#231c17"
  orange: "#ff6b26"
  yellow: "#ffd43b"
  secondary: "#675445"
  line: "#d8caba"
  rust: "#b83e08"
  peach: "#ffe1c9"
  warm-practice: "#ffd7ba"
  muted-on-ink: "#e5d7c5"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(60px, 6.55vw, 94px)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.04em"
  display-en:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(64px, 5.55vw, 80px)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(29px, 3.2vw, 44px)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Manrope, sans-serif"
    fontSize: "17px"
    fontWeight: 600
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
  panel: "0px"
  button: "4px"
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
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.button}"
    padding: "12px 19px"
  button-contact-hover:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
  button-mode:
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "8px 19px"
  button-mode-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.yellow}"
  tag:
    rounded: "{rounded.tag}"
    padding: "4px 10px"
  hero-field:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.ink}"
  hero-highlight:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
  feature-panel:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.panel}"
  practice-sense:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
  practice-adivo:
    backgroundColor: "{colors.warm-practice}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
  contact-panel:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
---

# Design System: Carmine Laudato

## Overview

**Creative North Star: "A bold scientific atlas of connections"**

Saturated orange, sunny yellow and warm black make the scientific atlas direct and unmistakable. Heavy headlines and mathematical contours connect data, software and physical making.

Warm paper supports longer reading. Angular panels, fine rules and generous space organize verified work. Supporting serif italics retain a human editorial voice.

**Key Characteristics:**
- Saturated orange and yellow with warm black and paper.
- Heavy Manrope headlines and selective serif italic emphasis.
- Angular content panels, fine rules and compact rounded controls.
- Asymmetric desktop compositions that stack cleanly on mobile.
- Mathematical imagery with user-controlled motion.

## Colors

### Primary
Orange defines the opening field. Yellow marks the rotated hero highlight, the Sense Square panel, the portrait and the contact field.

### Secondary
Rust marks focus, publication years and supporting editorial emphasis. Warm practice supplies the ADIVO panel; peach remains a supporting warm token.

### Neutral
Warm black carries text, buttons and the featured research field. Paper supports reading sections and control groups. Secondary and muted-on-ink supply readable metadata; line supplies fine dividers.

**The Warm Identity Rule.** Build the identity from orange, yellow, warm black and paper; keep supporting tones within the same warm family.

## Typography

Manrope is locally hosted in regular, medium, semibold and bold weights. The hero and contact statement use weight 800; section headings use 700. Publication titles use 600 and wrap naturally. Navigation is 13px and semibold on desktop; micro metadata stays at 11px.

The frontmatter records desktop roles. The English hero uses display-en only from 1051px upward so its longer first line clears the sculpture. The highlighted hero word inherits the bold upright display face, sits on yellow and rotates (-3deg). Supporting research and about emphasis use locally hosted Instrument Serif italic; the portrait signature uses the same italic voice. Body copy is 14–15px with generous leading.

**The Strong Voice Rule.** Keep the hero and contact statement in heavy upright Manrope; reserve serif italics for supporting editorial moments.

## Layout

Content has a maximum inner width (1280px) with fluid side gutters (clamp(22px, 5.6vw, 88px)). The orange hero spans the main container without an inset margin. Its desktop grid pairs the statement and introduction with a large contour sculpture. Mode controls belong inside the artwork, beneath its caption.

Desktop sections use 108px vertical spacing. At 1050px and below, gutters become 40px and section spacing 85px. At 760px and below, gutters become 25px and section spacing 65px; the hero, project panels and portrait section stack. At 380px and below, gutters become 20px, a compact menu replaces the header action, practice titles wrap and the contact arrow moves below its statement. At 1600px and above, the hero gains height.

**The Reading First Rule.** Stack complex compositions on narrow screens and let scientific titles wrap naturally.

## Elevation & Depth

The system uses no box shadows. Depth comes from saturated fields, thin rules, contour intersections, the rotated yellow highlight and the cropped portrait. Hover states change tone or move a small directional icon.

## Shapes

Research, practice and contact panels are square-cornered. Primary buttons have gently softened corners (4px). Technology tags and mode controls use capsules; pause and contact-arrow controls use circles. Fine dividers organize publication and repository rows. The portrait keeps a rectangular crop.

## Components

- **Primary actions:** warm black with paper text and small corner rounding; yellow with ink text on hover. Keyboard focus uses a rust outline (2px, 6px offset).
- **Hero highlight:** bold upright type on a yellow patch, rotated slightly; preserve its visible space from the sculpture in both languages.
- **Mode control:** paper capsule inside the artwork. The selected button uses ink with yellow text and exposes aria-pressed; unselected buttons turn yellow on hover.
- **Text links:** compact bold text with inline SVG arrows that shift on hover.
- **Tags:** small outlined capsules on the research field; use for project technologies.
- **Project panels:** warm black for featured research, yellow for Sense Square and warm practice for ADIVO. Internal spacing reduces on mobile.
- **Publication and repository rows:** hairline dividers, warm hover tint and external-link arrows. Publication years use rust and bold numerals.
- **Navigation:** compact Manrope links with animated underlines. Narrowest screens expose a labeled menu button and a paper disclosure.
- **Contact field:** yellow with warm black text and a heavy upright statement. The outlined arrow circle inverts to ink on hover.
- **Contour sculpture:** continuous motion can be paused and defaults to paused for reduced-motion preferences. Mode buttons still select a static shape. Offscreen and hidden-tab animation stops.
- **Portrait signature:** dark italic text on a yellow patch over the yellow-tinted photograph.

**The Motion Has Controls Rule.** Preserve pause controls, reduced-motion behavior and keyboard-visible focus when extending animated surfaces.

## Do's and Don'ts

### Do:
- Do use saturated orange and yellow as defining identity fields.
- Do check hero text and artwork separation in Italian and English.
- Do keep long research titles readable and allow them to wrap.
- Do preserve local fonts, inline SVG icons, visible focus and motion controls.

### Don't:
- Don't replace the warm identity with unrelated hues.
- Don't introduce shadows into the flat panel vocabulary.
- Don't use serif italics for the hero, contact statement, navigation or long body copy.
- Don't present illustrative diagrams as live measurements.

