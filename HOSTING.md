# Publish the first draft

This website is static: it needs no server, secrets, or database. The research-preview notices remain visible in the hosted version.

## Quickest: Netlify Drop

1. Download `ai-atlas-hosting.zip` from this workspace and extract it.
2. Open https://app.netlify.com/drop and sign in or create a Netlify account.
3. Drag the extracted folder containing `index.html`, `app.js`, `style.css`, and `data/` into the upload area.
4. Netlify deploys it and displays an HTTPS website address. Open that address to review the draft.

Review the plan and terms offered by Netlify before accepting any paid services. No account or hosting plan has been created by Codex.

For updates, run `npm run build` and upload `dist/` to the same site's deployment area. Alternatively, connect the GitHub repository to Netlify after committing and pushing the project: `netlify.toml` sets the build command and publish directory.

## Verify after upload

- The map shows 25 companies and the preview notice.
- Search for OpenAI; select the company to see its details and connections.
- Reset filters and open Company directory.
- Check on a phone; the map scrolls sideways.

The ZIP contains only public website assets. It excludes Git metadata, tests, environment settings, and development server code. Publishing makes its company dataset publicly readable. The values and connections are preliminary research, as disclosed on the website.
