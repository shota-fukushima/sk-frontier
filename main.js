document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('is-open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('is-open');
      });
    });
  }

  // Course list accordions
  document.querySelectorAll('.course-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var panel = btn.nextElementSibling;
      var isOpen = btn.classList.contains('is-open');
      if (isOpen) {
        btn.classList.remove('is-open');
        panel.style.maxHeight = null;
      } else {
        btn.classList.add('is-open');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });

  // Header shadow on scroll
  var header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 8) {
        header.style.boxShadow = '0 4px 16px rgba(15,27,51,0.06)';
      } else {
        header.style.boxShadow = 'none';
      }
    });
  }
});
