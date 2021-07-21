initLazyImages();

function initLazyImages() {
    const lazyImages = document.querySelectorAll(".lazy");
  
    function onIntersection(imageEntities) {
      imageEntities.forEach(image => {
        if (image.isIntersecting) {
          observer.unobserve(image.target);
          image.target.src = image.target.dataset.src;
        }
      });
    }
  
    const observer = new IntersectionObserver(onIntersection);
  
    lazyImages.forEach(image => observer.observe(image));
  }

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav')
    const navLinks = document.querySelectorAll('.nav li');

    burger.addEventListener('click',() =>{
        nav.classList.toggle('nav-active');
    })
}

navSlide();