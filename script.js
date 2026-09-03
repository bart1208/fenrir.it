/* fenrir.it — the whole of the client-side behaviour. */

// Footer year.
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal sections on scroll. Falls back to "everything visible" where
// IntersectionObserver is missing or motion is not wanted.
(function () {
  var els = document.querySelectorAll('.reveal');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduced || !('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('visible'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

  els.forEach(function (el) { io.observe(el); });
})();
