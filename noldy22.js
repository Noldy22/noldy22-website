document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const body = document.body;
    let headerHeight = header.offsetHeight;
    let isSticky = false;
  
    function handleScroll() {
      const scrollY = window.scrollY;
  
      if (scrollY > headerHeight && !isSticky) {
        nav.classList.add('sticky');
        body.style.paddingTop = nav.offsetHeight + 'px';
        isSticky = true;
      } else if (scrollY <= headerHeight && isSticky) {
        nav.classList.remove('sticky');
        body.style.paddingTop = '0';
        isSticky = false;
      }
    }
  
    window.addEventListener('scroll', handleScroll);
  
    handleScroll();
  });