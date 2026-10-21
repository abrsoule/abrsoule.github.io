# Personal academic website

Plain HTML/CSS — no Hugo, Jekyll, or build step. Upload it and it works.

## Put it online with GitHub Pages (≈5 minutes)

1. Create a GitHub account if you don't have one.
2. Click **New repository** and name it exactly `YOUR-USERNAME.github.io`
   (e.g. `abbeysoule.github.io`). Make it **Public**.
3. In the new repo, click **Add file → Upload files**, then drag in **everything
   inside this folder** (the `.html` files plus the `css`, `js`, `images`, and `files`
   folders). Click **Commit changes**.
4. Go to **Settings → Pages**. Under "Build and deployment", set Source to
   **Deploy from a branch**, branch **main**, folder **/ (root)**. Save.
5. After a minute or two your site is live at `https://YOUR-USERNAME.github.io`.

To update later: open a file on GitHub, click the pencil icon, edit, and commit.
Changes go live in about a minute.

## What to edit

| What | Where |
|---|---|
| Your name, menu, footer icons (email, Scholar, ORCID, CV…) | `js/site.js` (top block) |
| Page text | each `.html` file — look for `EDIT` comments |
| Your photo | replace `images/me.jpg` (keep the name, or change it in `index.html`) |
| Research photos | `images/research1.jpg`, etc. |
| CV and paper PDFs | put them in `files/` (`files/CV.pdf` is already linked) |
| Colors / fonts | `css/style.css` (top `:root` block) |

**Removing a page:** delete the `.html` file and its line in `js/site.js`.
**Adding a page:** copy any page, rename it, change the text, add a line in `js/site.js`.

Preview locally by double-clicking `index.html`.
