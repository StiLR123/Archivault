# ArchiVault Building Instructions — editable source

This is the exact HTML & CSS used to generate the PDF, so you can edit the
text or design directly and re-export it yourself.

## Files

```
ArchiVault_Building_Instructions.html   <- all content: cover + Part 1/2/3
style.css                               <- every color, font, and component style
assets/blueprint.jpg                    <- your suspension-system blueprint image
```

Open the `.html` file in any browser to view it as one continuous page —
double-click it, no software needed. Open it in any text/code editor
(VS Code, Notepad++, Sublime, even Notepad) to edit the wording or design.

## Editing

- **Wording:** find the text in the `.html` file and change it directly —
  it's plain readable markup (`<li>`, `<p>`, `<strong>`, etc.).
- **Colors / fonts / spacing:** all defined once at the top of `style.css`
  under `:root { --red: #C41E2A; ... }` — change a value there and it
  updates everywhere that color is used.
- **Fonts** load from Google Fonts automatically via the `<link>` tags in
  the HTML `<head>` (Boldonse, Big Shoulders, Poppins, JetBrains Mono — all
  free, open-license fonts), so nothing needs installing locally as long as
  you have an internet connection when you open/print the file.

## Exporting to PDF (free options)

**Easiest — your browser's built-in "Print to PDF":**
1. Open `ArchiVault_Building_Instructions.html` in Chrome or Edge.
2. Press `Ctrl+P` / `Cmd+P` → Destination: "Save as PDF".
3. Set margins to "None" or "Default" and turn off the browser's own
   headers/footers option (they'd otherwise add a plain URL/date footer
   on top of the designed one).
4. Save.

This reproduces the cover, colors, icons, and page breaks between Part
1/2/3 essentially exactly.

**One thing it won't reproduce automatically:** the slim repeating
colored bar + page number at the very top/bottom of every content page in
the PDF I gave you. Browsers don't support custom repeating headers out of
the box. Two ways to get that back:
- Send me your edited HTML and I'll re-run the same finishing step to add
  it back in.
- Or use **[Paged.js](https://pagedjs.org)** (free, open-source) — a
  script built specifically for this kind of repeating-header/footer,
  multi-page HTML-to-print layout. I haven't tested this exact file
  against it, so treat it as a starting point rather than a guarantee.

## Editing the PDF directly instead

If you'd rather tweak the PDF itself (not the HTML source), the best free
tool is **Inkscape** — it imports PDF pages as editable vector objects
(text stays as text) far better than most free PDF editors.
