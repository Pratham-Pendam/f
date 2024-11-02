


/*========== Typing animation in home page ==========*/
var typed = new Typed(".text", {
  strings: ["Programming" , "Web Development", "Machine Learning"],
  typeSpeed:100,
  backSpeed:100,
  backDelay:1000,
  loop:true
});



/*========== Scroll Reveal script ==========*/
document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.reveal');
  function checkScroll() {
  cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight * 0.75) {
          card.style.opacity = 1;
          card.style.transform = 'translateY(0)';
      }
  });
  }
  checkScroll();
  window.addEventListener('scroll', checkScroll);
});