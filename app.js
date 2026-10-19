// Renders the page from window.SITE (defined in content.js).
// You shouldn't need to edit this file to update your content.
(function () {
  var S = window.SITE || {};
  var $ = function (id) { return document.getElementById(id); };

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  var ICONS = {
    email: '<path d="M4 6h16v12H4z"/><path d="m4 7 8 6 8-6"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v6M8 7.5v.01M12 16v-3.5a2 2 0 0 1 4 0V16M12 10v6"/>',
    github: '<path d="M9 19c-4 1.5-4-2-6-2.5m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
    location: '<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
    resume: '<path d="M14 3H6v18h12V7z"/><path d="M14 3v4h4M9 13h6M9 17h6"/>',
    link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>'
  };
  function icon(name) {
    return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[name] || ICONS.link) + "</svg>";
  }

  function linkBtn(c, primary) {
    var label = esc(c.label);
    if (!c.url) return '<span class="btn">' + icon(c.icon) + label + "</span>";
    var ext = /^https?:/.test(c.url) ? ' target="_blank" rel="noopener"' : "";
    return '<a class="btn' + (primary ? " primary" : "") + '" href="' + esc(c.url) + '"' + ext + ">" + icon(c.icon) + label + "</a>";
  }

  function tags(list) {
    if (!list || !list.length) return "";
    return '<div class="tags">' + list.map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("") + "</div>";
  }

  function card(p, showStatus) {
    var meta = [p.role, p.org, p.dates].filter(Boolean).map(esc).join(" · ");
    return '<article class="card">' +
      (p.image ? '<img class="thumb" src="' + esc(p.image) + '" alt="" loading="lazy">' : "") +
      (showStatus && p.status ? '<span class="status">' + esc(p.status) + "</span>" : "") +
      "<h3>" + esc(p.title) + "</h3>" +
      (meta ? '<div class="meta">' + meta + "</div>" : "") +
      (p.description ? "<p>" + esc(p.description) + "</p>" : "") +
      tags(p.tags) +
      (p.link ? '<a class="card-link" href="' + esc(p.link) + '" target="_blank" rel="noopener">' + esc(p.linkLabel || "Learn more") + " →</a>" : "") +
      "</article>";
  }

  function list(el, items, render, emptyText) {
    el.innerHTML = items && items.length ? items.map(render).join("") : '<p class="empty">' + esc(emptyText) + "</p>";
  }

  // ----- Header & hero -----
  document.title = S.name ? S.name + " | Portfolio" : "Portfolio";
  $("brand").textContent = S.name || "";
  $("heroName").textContent = S.name || "";
  $("heroTitle").textContent = S.title || "";
  $("heroSummary").textContent = S.summary || "";

  // url: "" means "not ready yet" and is hidden; no url at all shows as plain text.
  var contact = (S.contact || []).filter(function (c) { return c.url !== ""; });
  $("heroLinks").innerHTML = contact.filter(function (c) { return c.url; }).slice(0, 3)
    .map(function (c, i) { return linkBtn(c, i === 0); }).join("");

  if (S.photo) {
    $("heroPhoto").innerHTML = '<img src="' + esc(S.photo) + '" alt="Photo of ' + esc(S.name) + '">';
  } else if (S.name) {
    var initials = S.name.split(/\s+/).map(function (w) { return w[0]; }).join("").slice(0, 2).toUpperCase();
    $("heroPhoto").innerHTML = '<div class="initials" aria-hidden="true">' + esc(initials) + "</div>";
  }

  // ----- Current & past projects -----
  list($("currentList"), S.current, function (p) { return card(p, true); }, "Nothing listed yet.");

  var past = S.past || [];
  var allTags = [];
  past.forEach(function (p) { (p.tags || []).forEach(function (t) { if (allTags.indexOf(t) < 0) allTags.push(t); }); });

  function renderPast(filter) {
    var shown = filter ? past.filter(function (p) { return (p.tags || []).indexOf(filter) >= 0; }) : past;
    list($("pastList"), shown, function (p) { return card(p, false); }, "Nothing listed yet.");
  }
  if (allTags.length > 1) {
    var fEl = $("filters");
    fEl.innerHTML = ['<button class="filter active" data-tag="">All</button>']
      .concat(allTags.map(function (t) { return '<button class="filter" data-tag="' + esc(t) + '">' + esc(t) + "</button>"; })).join("");
    fEl.addEventListener("click", function (e) {
      var b = e.target.closest(".filter");
      if (!b) return;
      fEl.querySelectorAll(".filter").forEach(function (x) { x.classList.toggle("active", x === b); });
      renderPast(b.getAttribute("data-tag"));
    });
  }
  renderPast("");

  // ----- About -----
  var bio = S.bio || [];
  $("bio").innerHTML = (typeof bio === "string" ? [bio] : bio).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
  $("skills").innerHTML = (S.skills || []).map(function (s) { return '<span class="tag">' + esc(s) + "</span>"; }).join("");

  list($("education"), S.education, function (e) {
    return "<li><strong>" + esc(e.degree) + "</strong>" + esc(e.school) +
      (e.year ? '<div class="small">' + esc(e.year) + "</div>" : "") +
      (e.details ? '<div class="small">' + esc(e.details) + "</div>" : "") + "</li>";
  }, "Coming soon.");

  list($("certs"), S.certifications, function (c) {
    var dates = [c.date && "Earned " + c.date, c.expires && "Expires " + c.expires].filter(Boolean).join(" · ");
    return "<li><strong>" + esc(c.name) + "</strong>" +
      '<div class="small">' + esc(c.issuer) + (dates ? " · " + esc(dates) : "") + "</div>" +
      (c.url ? '<a class="small" href="' + esc(c.url) + '" target="_blank" rel="noopener">Verify →</a>' : "") + "</li>";
  }, "Coming soon.");

  // ----- Contact & footer -----
  $("contactBlurb").textContent = S.contactBlurb || "";
  $("contactList").innerHTML = contact.map(function (c) { return linkBtn(c, false); }).join("");
  $("footer").textContent = "© " + new Date().getFullYear() + " " + (S.name || "");

  // ----- Light / dark mode -----
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.setAttribute("data-theme", saved || (prefersDark ? "dark" : "light"));
  $("themeToggle").addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
})();
