// Marca no menu a seção que está na tela (aria-current + destaque visual).
(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('.topnav a[href^="#"]'));
  var secoes = links.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); });
  var atual = null;
  var clicado = null; // item clicado fica ativo até a pessoa rolar por conta própria

  function marcar() {
    var limite = window.innerHeight * 0.35;
    var i = 0;
    secoes.forEach(function (s, n) {
      if (s && s.getBoundingClientRect().top <= limite) i = n;
    });
    // No fim da página, o último item (Contato) fica ativo
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) i = secoes.length - 1;
    if (clicado !== null) i = clicado;

    if (links[i] === atual) return;
    if (atual) atual.removeAttribute('aria-current');
    atual = links[i];
    atual.setAttribute('aria-current', 'location');

    // No celular, mantém o item ativo visível na faixa do menu
    var nav = atual.closest('.topnav');
    if (nav.scrollWidth > nav.clientWidth) {
      nav.scrollTo({ left: atual.offsetLeft - (nav.clientWidth - atual.offsetWidth) / 2 });
    }
  }

  links.forEach(function (a, n) {
    a.addEventListener('click', function () { clicado = n; marcar(); });
  });
  ['wheel', 'touchstart', 'keydown'].forEach(function (ev) {
    window.addEventListener(ev, function () { clicado = null; }, { passive: true });
  });

  // A altura do menu varia (no celular ele quebra em linhas); o espaço no topo da rolagem acompanha
  var menu = document.querySelector('.topnav');
  function medir() { document.documentElement.style.setProperty('--nav-h', menu.offsetHeight + 'px'); }

  window.addEventListener('scroll', marcar, { passive: true });
  window.addEventListener('resize', function () { medir(); marcar(); });
  window.addEventListener('load', medir); // fontes podem mudar a altura
  medir();
  marcar();
})();
