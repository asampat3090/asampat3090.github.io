# AGENTS.md

## Cursor Cloud specific instructions

This is a **static HTML/CSS/JS personal portfolio website** (no build tools, no package manager, no backend). It uses a GitHub Pages + Jekyll theme (`jekyll-theme-minimal`) for deployment, but Jekyll templating features are not used — the site is a single hand-crafted `index.html`.

### Running locally

Serve with any static HTTP server from the repository root:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000/` in a browser.

### Key notes

- **No dependencies to install.** There is no `package.json`, `Gemfile`, `requirements.txt`, or similar.
- **No build step.** The compiled CSS (`assets/css/main.css`) is already committed. SASS sources are in `assets/sass/` but compilation is only needed if modifying styles.
- **No automated tests or linter** configured in the repository.
- The contact form submits to Formspree (`formspree.io`) — it renders locally but submissions require a live internet connection and a valid Formspree endpoint.
- `<md-block>` web component is loaded from an external CDN (`md-block.verou.me`); without internet, markdown sections (Work History, Inventions) show raw markdown text instead of rendered HTML.
