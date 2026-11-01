# GitHub Pages

Production URL: https://jyfoo213.github.io/vibecode/

The existing GitHub Pages Actions workflow runs on pushes to main and manual dispatch. It installs the lockfile, runs Node tests, builds all public HTML/CSS/JS and JSON into dist/, and uploads only dist/. Tests, server code, scratch work and Git metadata are excluded.

Repository Settings → Pages should use GitHub Actions. Deployment status is in the Actions tab under Deploy static content to Pages. The environment is github-pages. A failed test prevents publication.

Local verification: npm test && npm run build. Run npm start for a local HTTP preview. Validate the homepage, search and tracks, lesson expansion, saved progress after reload, calculator totals and invalid input, mobile overflow, and industry map. Browser interaction checks can be rerun with a standard Chromium DevTools client; no browser package is required by the website.
