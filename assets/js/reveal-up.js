document.addEventListener('DOMContentLoaded', function () {
  var selectors = [
    '#hero .container',
    '#about .container',
    '#contact .container',
    '#blog .container',
    '#blog-card',
    '#project .container',
    '#project-card',
    '#post .container',
    '#footer .container'
  ];

  var nodes = document.querySelectorAll(selectors.join(','));
  if (!nodes.length) return;

  nodes.forEach(function (node) {
    node.classList.add('reveal-up');
  });

  if (!('IntersectionObserver' in window)) {
    nodes.forEach(function (node) {
      node.classList.add('is-visible');
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    },
    {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1
    }
  );

  nodes.forEach(function (node) {
    observer.observe(node);
  });
});
