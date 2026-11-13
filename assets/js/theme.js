/* ==========================================================================
   PERT — Script compartilhado
   1) Configura o Tailwind CDN para dark mode por classe
   2) Aplica o tema salvo o mais cedo possível (evita flash de tema claro)
   3) Liga o botão de alternância e mantém a preferência em cookie
   ========================================================================== */

/* --- Configuração do Tailwind (deve rodar depois do CDN) ------------------- */
if (typeof tailwind !== 'undefined') {
  tailwind.config = {
    darkMode: 'class',
  };
}

(function () {
  'use strict';

  var COOKIE_NAME = 'darkMode';
  var COOKIE_DAYS = 365;
  var root = document.documentElement;

  /* --- Cookies ------------------------------------------------------------ */
  function setCookie(name, value, days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + value + ';expires=' + date.toUTCString() + ';path=/;SameSite=Lax';
  }

  function getCookie(name) {
    var nameEQ = name + '=';
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.indexOf(nameEQ) === 0) {
        return cookie.substring(nameEQ.length);
      }
    }
    return null;
  }

  /* --- Tema --------------------------------------------------------------- */
  function isDark() {
    return root.classList.contains('dark');
  }

  function updateToggleButton() {
    var btn = document.getElementById('darkModeToggle');
    if (!btn) return;
    btn.textContent = isDark() ? '\u2600\uFE0F Light Mode' : '\uD83C\uDF19 Dark Mode';
    btn.setAttribute('aria-pressed', String(isDark()));
  }

  function setTheme(dark) {
    root.classList.toggle('dark', dark);
    updateToggleButton();
  }

  function toggleDarkMode() {
    var dark = !isDark();
    setTheme(dark);
    setCookie(COOKIE_NAME, dark ? 'enabled' : 'disabled', COOKIE_DAYS);
  }

  /* --- Inicialização ------------------------------------------------------ */
  // Aplicado imediatamente: o script é carregado no <head>.
  setTheme(getCookie(COOKIE_NAME) === 'enabled');

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('darkModeToggle');
    if (!btn) return;
    btn.addEventListener('click', toggleDarkMode);
    updateToggleButton();
  });

  // Mantém a função acessível (ex.: conteúdo gerado ou chamadas antigas).
  window.toggleDarkMode = toggleDarkMode;
})();
