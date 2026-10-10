# Sarosh Alam Ghausi — Academic Website

Responsive academic portfolio with five main navigation tabs:
1. PI
2. Research Areas
3. Research Group
4. Blogs and Media
5. Gallery

Built with plain HTML, CSS, and JavaScript. No build tools or paid hosting required.

## Publish on GitHub Pages

1. Repository: `https://github.com/sghausi/sghausi.github.io`
2. Upload the contents of this folder to the repository root. `index.html`, `styles.css`, and `script.js` must sit at the root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/(root)`, then click **Save**.
6. After deployment, visit `https://sghausi.github.io/`.

Official guide: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Important content review before launch

- Verify every biography detail, title, institutional affiliation, email address, and publication metadata.
- Replace the generic Google Scholar URL with the exact profile link.
- The Research Group section intentionally contains placeholders; add current group member names, roles, photographs, and opportunities only after confirming details.
- Blogs and Media cards are suggested topics/placeholders, not claims that those posts or appearances exist. Replace with real links or remove.
- Gallery images are original CSS illustrations, not your Google Sites photos. To add your photos, put image files in `assets/` and replace the illustration divs in `index.html` with `<img src="assets/your-photo.jpg" alt="Descriptive text">`.
- I could not fetch your Google Sites page to import its exact text, photos, blogs, or gallery. Keep that site live until you verify this replacement.
- Replace the email address if it is not your preferred public contact.

## Files

- `index.html` — content and navigation
- `styles.css` — design and responsive layout
- `script.js` — mobile menu, active navigation state
- `.nojekyll` — GitHub Pages configuration
