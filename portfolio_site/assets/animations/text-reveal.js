(function(){
  function setup(){
    document.documentElement.classList.add('js');

    var heroSelectors = [
      '.tiny-note',
      '.topline > div',
      '.hero-side p',
      '.hero-meta > div'
    ];

    var scrollSelectors = [
      '.welcome h2',
      '.about-tag',
      '.name-lockup',
      '.about-role',
      '.about-title',
      '.about-lead',
      '.bio-item',
      '.resume-mark',
      '.works-top h2',
      '.works-top p',
      '.works-category-head h3',
      '.works-category-head span',
      '.thanks-section h2'
    ];

    var heroNodes = document.querySelectorAll(heroSelectors.join(','));
    heroNodes.forEach(function(node, index){
      node.classList.add('reveal-text');
      if (node.matches('.tiny-note')) node.classList.add('reveal-title');
      node.style.setProperty('--reveal-delay', (80 + index * 70) + 'ms');
    });

    var scrollNodes = document.querySelectorAll(scrollSelectors.join(','));
    scrollNodes.forEach(function(node, index){
      node.classList.add('reveal-text');
      if (node.matches('.welcome h2, .name-lockup, .about-title, .works-top h2, .thanks-section h2')) {
        node.classList.add('reveal-title');
      }
      var localIndex = index % 8;
      node.style.setProperty('--reveal-delay', (localIndex * 55) + 'ms');
    });

    function showHero(){
      heroNodes.forEach(function(node){
        requestAnimationFrame(function(){
          node.classList.add('is-visible');
        });
      });
    }

    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

    scrollNodes.forEach(function(node){ io.observe(node); });
    showHero();
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', setup);
  } else {
    setup();
  }
})();
