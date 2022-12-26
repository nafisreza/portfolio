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
    this._activeLink();
    this._toggleMobileNav(); 
    this._tagCloud();
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

  // Navbar Link Activate
  _activeLink(){
    links.forEach((link) => 
    link.addEventListener('click', (e) => {
      const link = e.target;
      const siblings = link.closest('.links').querySelectorAll('.link');

      siblings.forEach((sibling) => {
        if(sibling === link) sibling.style.color = "rgb(20, 184, 166)";
        else sibling.style.color = "rgb(209, 213, 219)";
      })
    })) 
  }

  _toggleMobileNav(){
    toggleBtn.addEventListener('click', () => {
      toggleBtn.classList.contains('toggle-close') ? this._disappearMobileNav() : this._appearMobileNav();
    })
  }

  _disappearMobileNav(){
    toggleBtn.classList.remove('toggle-close');
    setTimeout(() => {
      linksContainer.classList.remove('links-open');
    }, 300);
    linksContainer.style.animation = "mobileNavDisappear 0.5s 1";
    document.querySelector('html').style.overflow = "visible";
  }

  _appearMobileNav(){
    toggleBtn.classList.add('toggle-close');
    linksContainer.classList.add('links-open');
    linksContainer.style.animation = "mobileNavAppear 0.5s 1";
    document.querySelector('html').style.overflow = "hidden";
  }

  // Skills
  _tagCloud(){
    const texts = [
      'HTML',
      'CSS',
      'Bootstrap',
      'Git',
      'Github',
      'Tailwind',
      'JavaScript',
      'React.js',
      'Redux',
      'Node.js',
      'WordPress',
      'MySQL',
      'Photoshop',
      'Illustrator',
      'Figma',
      'Premier Pro'
    ];

    TagCloud(".content", texts, {
      radius: 300,
      maxSpeed: 'fast',
      initSpeed: 'normal',
      direction: 135,
      keep: true 
    });
  }
}

const myApp = new App();