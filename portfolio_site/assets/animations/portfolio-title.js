
(function(){
  function start(){
    var el=document.querySelector('.portfolio-title');
    if(!el) return;
    el.classList.remove('run');
    void el.offsetWidth;
    el.classList.add('run');
  }
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
  window.restartPortfolioAnimation = start;
})();
