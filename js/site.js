/* ===========================================================
   SITE SETTINGS — edit this block once; it updates every page
   =========================================================== */
const SITE = {
  name: "Abrianna (Abbey) Soule",

  // Menu items: [label, file]
  pages: [
    ["Home", "index.html"],
    ["Research", "research.html"],
    ["Teaching", "teaching.html"],
    ["Mentorship", "mentorship.html"],
    ["Outreach", "outreach.html"],
    ["Publications", "publications.html"],
    ["Contact", "contact.html"],
  ],

  // Footer icons — delete any line you don't want, fill in your links
  // icon classes come from Font Awesome / Academicons
  socials: [
    ["Email",          "fa-solid fa-envelope",   "mailto:you@umich.edu"],
    ["Google Scholar", "ai ai-google-scholar",   "https://scholar.google.com/citations?user=YOUR_ID"],
    ["ORCID",          "ai ai-orcid",            "https://orcid.org/0000-0000-0000-0000"],
    ["CV",             "ai ai-cv",               "files/CV.pdf"],
    ["GitHub",         "fa-brands fa-github",    "https://github.com/YOUR_USERNAME"],
    ["Bluesky",        "fa-brands fa-bluesky",   "https://bsky.app/profile/YOUR_HANDLE"],
  ],
};

/* ---------- You shouldn't need to edit below this line ---------- */
(function () {
  const here = location.pathname.split("/").pop() || "index.html";

  const links = SITE.pages
    .map(([label, href]) =>
      `<li><a href="${href}"${href === here ? ' class="active"' : ""}>${label}</a></li>`)
    .join("");

  const nav = document.createElement("nav");
  nav.className = "nav";
  nav.innerHTML = `
    <div class="nav-inner">
      <a class="brand" href="index.html">${SITE.name}</a>
      <button class="nav-toggle" aria-label="Toggle navigation">&#9776;</button>
      <ul class="nav-links">${links}</ul>
    </div>`;
  document.body.prepend(nav);

  nav.querySelector(".nav-toggle").addEventListener("click", () =>
    nav.querySelector(".nav-links").classList.toggle("open"));

  const icons = SITE.socials
    .map(([title, icon, href]) =>
      `<li><a href="${href}" title="${title}" aria-label="${title}" target="_blank" rel="noopener"><i class="${icon}"></i></a></li>`)
    .join("");

  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `
    <ul class="socials">${icons}</ul>
    <div>Copyright &copy; ${SITE.name} ${new Date().getFullYear()}</div>`;
  document.body.append(footer);
})();
