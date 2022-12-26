// Elements
const header = document.querySelector("header");
const nav = document.querySelector(".navbar");
const linksContainer = document.querySelector(".links");
const links = document.querySelectorAll(".link");
const toggleBtn = document.querySelector(".toggle");
const app = document.getElementById("app");
const projectsContainer = document.querySelector(".projects");
const content = document.querySelector(".content");

// Projects
  const projects = [
    {
      title: "Baker Bank - An online banking application",
      description:
        "Baker Bank is an online bank that helps you save with the power of technology! With our application, you can easily deposit checks, transfer money, and send and receive payments. All without any hassle. What's more: we've made sure the experience of using Baker Bank is as seamless as possible. With a modern UI and UX, it's not hard to see why many people are switching their banking to Baker Bank!",
      image: "https://i.ibb.co/Fz8sft1/bakerbank.png",
      tools: "html, css, js, parcel",
      liveLink: "https://spectra-bank.netlify.app",
      githubLink: "https://github.com/shohan-pherones/spectra-bank",
    },
    {
      title: "Nortonsky - Best Antivirus & Web Security",
      description:
        "A mix of pure simplicity and functional elegance, Nortonsky is a web-based security solution that provides protection against internet threats, malware and cyber-attacks. With our robust system, you can be confident that your data and network are safe from hackers and malicious intent. Enjoy the peace of mind knowing your business is protected with our 24/7 customer support team.",
      image: "https://i.ibb.co/RhyxWWB/nortonsky.png",
      tools: "html, css, js",
      liveLink: "https://nafisreza.github.io/nortonsky/",
      githubLink: "https://github.com/nafisreza/nortonsky",
    },
    {
      title: "Food Monkey - Quality food at your doorstep",
      description:
        "The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs. We have delivered 350,000+ meals last year!",
      image: "https://i.ibb.co/qk6gYrW/foodmonkey.png",
      tools: "html, css",
      liveLink: "https://nafisreza.github.io/food-monkey",
      githubLink: "https://github.com/nafisreza/food-monkey"
    }
  ];   

// Application Architecture 

class App{
  constructor(){
    this._stickyNavbar();
    this._activeLink();
    this._toggleMobileNav(); 
    this._tagCloud();
    this._typewriter();
    this._renderProjects();
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

  // Typewriter Effect
  _typewriter(){
    const typewriter = new Typewriter(app, {
      loop: true,
    })

    typewriter
  .typeString('Web Developer')
  .pauseFor(300)
  .deleteChars(7)
  .typeString('signer')
  .pauseFor(1000)
  .start();
  }

// Projects Rendering
  _renderProjects(){
    projects.forEach((project) => {

      const html = `
      <div class="project">
        <div class="project-img">
          <img
            src="${project.image}"
            alt="Photo of ${project.title}"
          />
        </div>
        <h3 class="project-title">
        ${project.title}
        </h3>
        <p class="project-details">
          ${project.description}
        </p>
        <p class="project-tools">
          Tools: <span>${project.tools}</span>
        </p>
        <div class="project-btns">
          <a href="${project.liveLink}" target="_blank"
            >Live Site &rarr;</a
          >
          <a
            href="${project.githubLink}"
            target="_blank"
            >GitHub &rarr;</a
          >
        </div>
      </div>
`;
      projectsContainer.insertAdjacentHTML("afterbegin", html); 
    })
  }

}



const myApp = new App();