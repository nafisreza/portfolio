// Elements
const header = document.querySelector("header");
const nav = document.querySelector(".navbar");
const linksContainer = document.querySelector(".links");
const links = document.querySelectorAll(".link");
const toggleBtn = document.querySelector(".toggle");
const app = document.getElementById("app");
const projectsContainer = document.querySelector(".projects");
const content = document.querySelector(".content");

// Application Architecture 

class App{
  constructor(){
    this._stickyNavbar();
  }
  
  // Sticky Navbar
  
  _stickyNavbar(){
    const navHeight = nav.getBoundingClientRect().height;
    
    const navObs = new IntersectionObserver(this._stickyOperation, {
      root: null,
      threshold: 0,
      rootMargin: `-${navHeight}px`
    })

    navObs.observe(header);
  }

  _stickyOperation(entries){
    const entry = entries[0];
    if(!entry.isIntersecting) header.classList.add('sticky');
    else header.classList.remove('sticky');

  }
}

const myApp = new App();