// Revela os elementos com fade + deslize ao entrarem na tela.
(function () {
  var root = document.documentElement;
  if (!root.classList.contains('reveal-on') || !('IntersectionObserver' in window)) {
    root.classList.remove('reveal-on');
    return;
  }

  // Grupos de irmãos aparecem em cascata
  var groups = [
    '.hero .wrap > *',
    '.sec-title, .lead',
    '.skill',
    '.job',
    '.card',
    '.cert-row > .cert',
    '.edu-card',
    '.rows > li',
    '.footer .wrap > *'
  ];

  var targets = document.querySelectorAll(groups.join(','));
  targets.forEach(function (el) {
    var siblings = Array.prototype.filter.call(el.parentNode.children, function (s) {
      return s.matches(groups.join(','));
    });
    var i = siblings.indexOf(el);
    el.classList.add('reveal');
    el.style.transitionDelay = Math.min(i, 6) * 80 + 'ms';
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  // No fim da página, revela o que sobrou (ex.: rodapé curto na borda da tela)
  window.addEventListener('scroll', function () {
    if (window.innerHeight + window.scrollY < document.documentElement.scrollHeight - 2) return;
    document.querySelectorAll('.reveal:not(.is-visible)').forEach(function (el) {
      el.classList.add('is-visible');
      io.unobserve(el);
    });
  }, { passive: true });

  targets.forEach(function (el) { io.observe(el); });
})();
