---
title: Palette
tabName: Design
---

@## Description

Variables allow us to use color names and not to remember their HEX values. The same color gradations have a number
at the end (for example, for `css` files you should use `var(--gray40)`, for our components you should use
`propName="gray40"`).

> To enable CSS variables, use `@import '~@semcore/utils/style/var.css';`

@## Main palette

### Bright

The main semantic colors that attract attention, mark a status, and highlight main interactive elements on a page.

@import color-group {"group": "bright"}

### Dim

Gray colors, diluted with blue. Suitable for icons, statuses, and block borders.

@import color-group {"group": "dim"}

### Shades of gray

"Clean" gray colors for text, titles, and hints.

@import color-group {"group": "gray"}

### Pastel

Faded colors for block backgrounds, subsurfaces, accordions, table caps.

@import color-group {"group": "pastel"}

### Additional

Brand colors of services (the data can be found in Semrush interface).

@import color-group {"group": "additional"}

@## Chart palette

See detailed guide in the [Color palette for charts](/data-display/color-palette/).

@page palette-a11y
@page palette-code
