/*!
 * EARTH//TRACE · burbuja flotante del asistente
 * Uso en cualquier web:
 *   <script src="https://z4el5.github.io/earth-trace/widget/burbuja.js" data-lang="es" defer></script>
 */
window.EarthTraceBubble = window.EarthTraceBubble || function (frameSrc, lang) {
  var es = lang !== "en";
  var host = document.createElement("div");
  host.id = "earthtrace-bubble-host";
  host.style.cssText = "all:initial;position:fixed;z-index:2147483646;right:0;bottom:0;width:0;height:0";
  var root = host.attachShadow({ mode: "open" });
  root.innerHTML =
    '<style>' +
    ':host{all:initial}' +
    '.b{position:fixed;right:22px;bottom:22px;width:62px;height:62px;border-radius:50%;border:none;cursor:pointer;padding:0;' +
    'background:radial-gradient(circle at 34% 30%,#B2EBF2,#4DB6AC 32%,#006064 68%,#0B3D1F);' +
    'box-shadow:0 12px 30px -8px rgba(0,0,0,.6),0 0 0 3px rgba(197,227,132,.9),0 0 28px rgba(77,182,172,.8);transition:transform .25s cubic-bezier(.2,1.4,.4,1)}' +
    '.b:hover{transform:scale(1.08)}.b:focus-visible{outline:3px solid #C5E384;outline-offset:3px}' +
    '.b svg{width:30px;height:30px;stroke:#F4F9E6;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;transition:transform .3s}' +
    '.b.open svg.g{display:none}.b:not(.open) svg.x{display:none}' +
    '.ring{position:fixed;right:22px;bottom:22px;width:62px;height:62px;border-radius:50%;pointer-events:none;border:2px solid #C5E384;animation:p 2.4s ease-out infinite}' +
    '@keyframes p{from{transform:scale(1);opacity:.8}to{transform:scale(1.7);opacity:0}}' +
    '.tip{position:fixed;right:96px;bottom:36px;background:#0B3D1F;color:#F4F9E6;font:700 13px system-ui,sans-serif;padding:8px 12px;border-radius:12px;' +
    'box-shadow:0 8px 24px -8px rgba(0,0,0,.6);border:1px solid rgba(197,227,132,.4);white-space:nowrap;animation:t .5s 1s both}' +
    '@keyframes t{from{opacity:0;transform:translateX(10px)}}' +
    '.w{position:fixed;right:22px;bottom:96px;width:380px;height:min(580px,calc(100vh - 130px));border-radius:22px;overflow:hidden;' +
    'border:1px solid rgba(197,227,132,.35);box-shadow:0 30px 70px -20px rgba(0,0,0,.75),0 0 40px -14px rgba(197,227,132,.6);background:#06240F;' +
    'transform-origin:bottom right;transition:transform .3s cubic-bezier(.2,.9,.2,1),opacity .25s;transform:scale(.85) translateY(20px);opacity:0;pointer-events:none}' +
    '.w.open{transform:none;opacity:1;pointer-events:auto}' +
    '.w iframe{width:100%;height:100%;border:0;display:block}' +
    '@media (max-width:520px){.w{right:10px;left:10px;width:auto;bottom:92px;height:calc(100vh - 120px)}.tip{display:none}}' +
    '@media (prefers-reduced-motion:reduce){.ring,.tip{animation:none}.w{transition:none}}' +
    '</style>' +
    '<div class="w" role="dialog" aria-label="EARTH//TRACE"></div>' +
    '<span class="ring" aria-hidden="true"></span>' +
    '<span class="tip">' + (es ? "¿Preguntas sobre la Tierra? 🌍" : "Questions about Earth? 🌍") + '</span>' +
    '<button class="b" type="button" aria-expanded="false" aria-label="' + (es ? "Abrir asistente EARTH//TRACE" : "Open EARTH//TRACE assistant") + '">' +
    '<svg class="g" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18"/></svg>' +
    '<svg class="x" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg></button>';
  var btn = root.querySelector(".b"), win = root.querySelector(".w"), ring = root.querySelector(".ring"), tip = root.querySelector(".tip");
  var loaded = false;
  function toggle(force) {
    var open = typeof force === "boolean" ? force : !win.classList.contains("open");
    if (open && !loaded) { var f = document.createElement("iframe"); f.src = frameSrc; f.title = "EARTH//TRACE"; f.allow = "clipboard-write"; win.appendChild(f); loaded = true; }
    win.classList.toggle("open", open); btn.classList.toggle("open", open); btn.setAttribute("aria-expanded", open);
    ring.style.display = "none"; tip.style.display = "none";
  }
  btn.addEventListener("click", function () { toggle(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") toggle(false); });
  setTimeout(function () { tip.style.display = "none"; }, 9000);
  (document.body || document.documentElement).appendChild(host);
  return { toggle: toggle, remove: function () { host.remove(); window.__earthtraceBubble = false; } };
};

(function () {
  if (window.__earthtraceBubble) return;
  window.__earthtraceBubble = true;
  var me = document.currentScript || document.querySelector('script[src*="burbuja.js"]');
  var lang = (me && me.getAttribute("data-lang")) === "en" ? "en" : "es";
  var src = (me && me.getAttribute("data-src")) || new URL("asistente.html", me ? me.src : location.href).href;
  window.EarthTraceBubble && window.EarthTraceBubble(src + (src.indexOf("?") < 0 ? "?" : "&") + "lang=" + lang + "&src=web", lang);
})();
