# Aspire Success NY design language

This playbook summarizes the shared tokens, layout primitives, and reusable components introduced in this update. Use it as a quick reference when shipping new dashboards, list/detail pages, or marketing content.

## Tokens

- **Typography**: Inter + Manrope. Base size `16px`; scale `14/16/18/20/24/30/36` with line-height `1.5`. Headings use tight `1.2` line-height and sentence case.
- **Spacing**: 8px grid (`4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80`). Apply `--space-*` tokens to padding, gaps, and margins.
- **Radius**: `8/12/16/24` with pill chips (`999px`). Cards, inputs, and buttons default to `12–16px`.
- **Shadows**: `--shadow-xs/sm/md/lg`. Use xs for inputs/toasts, sm for cards, md for hover, lg for modals.
- **Color**:
  - Light: background `--bg-app`, surface `--bg-surface`, accent `--accent-primary` (`#198595`), ink `--text-primary`.
  - Dark: background `#0f1418`, surface `#141b20`, accent `#5bd5e6`.
  - Status: success `#1f9e68`, warning `#c56a1d`, error `#c23b3b`, info `#1f6fc1`.
- **Transitions**: `120–180ms ease`, reduce-motion respected.

## Layout

- **Shell**: `.app-shell` sets a Header / Sidebar / Main / Footer grid with max-width 1400px. Sidebar becomes stacked below main on <960px.
- **Sections**: `.section` for feature blocks, `.section--muted` for alternate backgrounds, `.surface` for supporting content. Keep primary action bars aligned to the right.
- **Hero**: Use `.hero` with CTA group; pair with metrics on the right for dashboards or with imagery for marketing.
- **Content width**: `--content-max` (1200px) for inner layouts; avoid full-bleed text blocks.

## Components

- **Buttons**: primary (solid), secondary (tonal), ghost (bordered). Sizes: default and `button--small`. Focus-visible outlines use accent color; disabled lowers opacity.
- **Inputs**: labels always visible, helper text optional, error text in red. Full width on mobile. Icons align left using 12–16px inset padding.
- **Tabs**: use for sibling content only; border-bottom container and raised active tab.
- **Cards**: radius 16px, border 1px, shadow xs. Hover lifts 3px with md shadow; disabled in reduced-motion.
- **Badges**: `success/warning/error/info` tokens with soft backgrounds; pair with icons in tables.
- **Modals**: centered `.modal__dialog` with title, description, content, and footer actions; provide secondary “Close”.
- **Toasts**: bottom-right stack, shadow md, optional icon/tag to signal status. Dismissible.

## Patterns and guidance

- **Hierarchy**: One `title-lg` per page, then `title-md` for sections. Support with `lead` text (16–18px).
- **Action bars**: Keep primary CTA on the right; cluster filters + search on the left/top for list pages.
- **Status color pairing**: Success+green, Warning+amber, Error+red, Info+blue. Ensure contrast AA+ in light/dark.
- **Grid spacing**: Use `.grid--2/3` utilities for cards and responsive lists; they collapse to one column under 640px.
- **Navigation**: Top bar uses `.nav-link` with active state; sidebar hosts quick anchors for long pages.
- **Accessibility**: `:focus-visible` outlines enabled, 44px minimum hit areas, keyboard-friendly modals (close button, dismissible toasts). Respect `prefers-reduced-motion`.

## Do / Don’t

- **Do**: Keep copy concise; group related controls; use helper text to guide forms; mirror the 8px rhythm across padding and gaps.
- **Do**: Use `.section--muted` to break long pages; add breadcrumbs or action bars when context is complex.
- **Don’t**: Nest tabs, overload cards with more than two actions, or apply heavy shadows on dark surfaces.
- **Don’t**: Mix more than two accent colors in a single view or reduce body text below 14px.

## Quick snippet (layout)

```jsx
<section className="section">
  <div className="section__header">
    <p className="eyebrow">Heading</p>
    <h2 className="title-md">Clear, descriptive title</h2>
    <p className="lead">Supporting copy.</p>
  </div>
  <div className="grid grid--3">…cards…</div>
</section>
```

Adopt these patterns to keep Aspire Success NY pages cohesive, responsive, and accessible. Review tokens before adding new colors or sizes.
