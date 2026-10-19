# Portfolio site

Personal portfolio hosted on GitHub Pages at **https://greggnickel-collab.github.io**.

## Updating content

Everything on the page comes from **`content.js`**. To make a change:

1. Open `content.js` (on GitHub, click the file, then the pencil icon to edit in the browser).
2. Edit the text inside the quotes, or copy an existing `{ ... },` block to add a new project, certification, etc.
3. Commit the change. The live site updates within a minute or two.

To preview locally, just double-click `index.html`.

### Adding images or files
- Put photos in the `images/` folder and reference them like `"images/headshot.jpg"`.
- Put a résumé PDF in `files/` and set the Résumé contact url to `"files/resume.pdf"`.

### Moving a project from "current" to "past"
Cut its `{ ... },` block from the `current:` list and paste it into the `past:` list. Remove the `status` line (or leave it, it's ignored there).

## Changing colors

The color palette is at the top of `styles.css` under `:root` (light mode) and `:root[data-theme="dark"]` (dark mode). Change `--accent` (teal) and `--accent-2` (terracotta) to re-theme the site.

## Files

| File | Purpose |
| --- | --- |
| `content.js` | All your text, links, and lists. **Edit this.** |
| `styles.css` | Colors, fonts, layout |
| `index.html` | Page structure |
| `app.js` | Builds the page from `content.js` |
