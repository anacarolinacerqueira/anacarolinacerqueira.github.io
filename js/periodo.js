// Calcula o tempo desde a data em data-since="AAAA-MM" até o mês atual.
// Com data-unit="anos", mostra só os anos completos.
(function () {
  function plural(n, um, varios) { return n + ' ' + (n === 1 ? um : varios); }

  var hoje = new Date();
  document.querySelectorAll('[data-since]').forEach(function (el) {
    var partes = el.getAttribute('data-since').split('-');
    var meses = (hoje.getFullYear() - Number(partes[0])) * 12 + (hoje.getMonth() + 1 - Number(partes[1]));
    if (isNaN(meses)) return;
    meses = Math.max(meses, 1);

    var anos = Math.floor(meses / 12);
    var resto = el.getAttribute('data-unit') === 'anos' ? 0 : meses % 12;
    if (!anos && !resto) anos = 1;
    var texto = [];
    if (anos) texto.push(plural(anos, 'ano', 'anos'));
    if (resto) texto.push(plural(resto, 'mês', 'meses'));
    el.textContent = texto.join(' e ');
  });
})();
