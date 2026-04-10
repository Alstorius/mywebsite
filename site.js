/* ================================================
   site.js — shared logic for VersBinarii
   ================================================ */

(function () {
  /* ── Theme ── */
  const STORAGE_KEY = 'vb-theme';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }

  function initTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) { applyTheme(saved); return; }
    // respect OS preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  }

  // Run before paint to avoid flash
  initTheme();

  document.addEventListener('DOMContentLoaded', function () {
    /* theme toggle button */
    const btn = document.getElementById('themeToggle');
    if (btn) btn.addEventListener('click', toggleTheme);

    /* mobile nav */
    const navToggle = document.getElementById('navToggle');
    const siteNav   = document.getElementById('siteNav');
    if (navToggle && siteNav) {
      navToggle.addEventListener('click', function () {
        siteNav.classList.toggle('open');
      });
    }
  });
})();
