document.addEventListener('DOMContentLoaded', function () {
  if (typeof particlesJS === 'undefined') return;
  if (!document.getElementById('particles-js')) return;

  particlesJS('particles-js', {
    particles: {
      number: {
        value: 180,
        density: {
          enable: true,
          value_area: 1000
        }
      },
      color: {
        value: '#dbeafe'
      },
      shape: {
        type: 'circle'
      },
      opacity: {
        value: 0.9,
        random: true,
        anim: {
          enable: true,
          speed: 0.9,
          opacity_min: 0.3,
          sync: false
        }
      },
      size: {
        value: 3.6,
        random: true,
        anim: {
          enable: false
        }
      },
      line_linked: {
        enable: true,
        distance: 120,
        color: '#8ec5ff',
        opacity: 0.22,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.25,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: false,
          mode: 'grab'
        },
        onclick: {
          enable: false,
          mode: 'push'
        },
        resize: true
      }
    },
    retina_detect: true
  });
});
