/*!
 * EARTH//TRACE widget · NASA Space Apps Challenge 2026
 * Uso:
 *   <div class="earthtrace" data-country="DO" data-lang="es"></div>
 *   <script src="https://z4el5.github.io/earth-trace/widget/earthtrace-widget.js" defer></script>
 */
(function () {
  var script = document.currentScript;
  var API = new URL("../api/v1/", script ? script.src : location.href).href;
  var CATS = {
    ice: { es: "Hielo y nieve", en: "Ice and snow", ico: "\u2744" },
    drought: { es: "Calor y sequía", en: "Heat and drought", ico: "\u2600" },
    fire: { es: "Incendios", en: "Wildfires", ico: "\uD83D\uDD25" },
    flood: { es: "Inundaciones", en: "Floods", ico: "\uD83C\uDF0A" },
    coast: { es: "Costas y nivel del mar", en: "Coasts and sea level", ico: "\uD83C\uDFDD" },
    water: { es: "Lagos, ríos y embalses", en: "Lakes, rivers and reservoirs", ico: "\uD83D\uDCA7" },
    forest: { es: "Bosques y vegetación", en: "Forests and vegetation", ico: "\uD83C\uDF33" }
  };
  var CSS =
    ".etw{font-family:system-ui,-apple-system,'Segoe UI',sans-serif;background:#F4F9E6;color:#0B3D1F;border:1px solid #B0C9A5;border-radius:18px;padding:16px;max-width:380px;box-shadow:0 12px 28px -18px rgba(11,61,31,.5);line-height:1.45}" +
    ".etw-h{display:flex;gap:12px;align-items:center}.etw-f{font-size:36px;line-height:1}" +
    ".etw-h b{display:block;font-size:20px}.etw-h small{color:#3E5E3E}" +
    ".etw-q{font-weight:700;margin:10px 0 6px;font-size:15px}.etw ul{margin:0;padding-left:18px;font-size:14px}" +
    ".etw-ft{display:flex;justify-content:space-between;gap:10px;margin-top:12px;padding-top:10px;border-top:1px dashed #B0C9A5;font-size:12px;color:#3E5E3E}" +
    ".etw-ft a{color:#2E7D32;font-weight:800;text-decoration:none}";
  function flag(code) {
    return String.fromCodePoint.apply(null, code.split("").map(function (c) { return 127397 + c.charCodeAt(0); }));
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
  }
  var cache = null;
  function loadProfiles() {
    if (!cache) cache = fetch(API + "profiles.json").then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); });
    return cache;
  }
  function render(el) {
    var code = (el.getAttribute("data-country") || "").toUpperCase();
    var lang = el.getAttribute("data-lang") === "en" ? "en" : "es";
    if (!/^[A-Z]{2}$/.test(code)) { el.textContent = "EARTH//TRACE: data-country inválido"; return; }
    loadProfiles()
      .then(function (all) {
        var p = all.profiles[code];
        if (!p) throw new Error("not found");
        var cat = CATS[p.category] || { es: p.category, en: p.category, ico: "" };
        var home = API.replace(/api\/v1\/$/, "") + "#explorer-" + code.toLowerCase();
        el.innerHTML =
          '<div class="etw"><div class="etw-h"><span class="etw-f">' + flag(code) + "</span><div><b>" +
          esc(lang === "es" ? p.name_es : p.name_en) + "</b><small>" + cat.ico + " " + esc(cat[lang]) + "</small></div></div>" +
          '<p class="etw-q">\uD83C\uDFAF ' + esc(p.research_question[lang]) + "</p><ul>" +
          p.phenomena[lang].map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" +
          '<div class="etw-ft"><span>\uD83D\uDCE1 ' + esc(p.nasa_datasets.slice(0, 3).map(function (d) { return d.name; }).join(" · ")) +
          '</span><a href="' + home + '" target="_blank" rel="noopener">EARTH//TRACE</a></div></div>';
      })
      .catch(function () { el.textContent = "EARTH//TRACE: no se pudo cargar " + code; });
  }
  function init() {
    if (!document.getElementById("etw-css")) {
      var s = document.createElement("style"); s.id = "etw-css"; s.textContent = CSS; document.head.appendChild(s);
    }
    Array.prototype.forEach.call(document.querySelectorAll(".earthtrace[data-country]"), render);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
