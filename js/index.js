const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav edit

let navEdit = document.querySelectorAll('a');

navEdit[0].textContent = siteContent["nav"]["nav-item-1"];

navEdit[1].textContent = siteContent["nav"]["nav-item-2"];

navEdit[2].textContent = siteContent["nav"]["nav-item-3"];

navEdit[3].textContent = siteContent["nav"]["nav-item-4"];




navEdit[4].textContent = siteContent["nav"]["nav-item-5"];

navEdit[5].textContent = siteContent["nav"]["nav-item-6"];


//header edit 

let ctaImgEdit = document.getElementById('cta-img');
ctaImgEdit.setAttribute('src', siteContent['cta']['img-src']);

let ctaH1Edit = document.getElementsByTagName('h1');

ctaH1Edit[0].textContent = siteContent.cta.h1;

let ctaButtonEdit = document.getElementsByTagName('button');
ctaButtonEdit[0].textContent = siteContent.cta.button;


//section main content edit 

let headerContentEdit = document.getElementsByTagName('h4');

let textContentEdit = document.querySelectorAll('.text-content p');

//top-content edit 

headerContentEdit[0].textContent = siteContent['main-content']['features-h4'];

headerContentEdit[1].textContent = siteContent['main-content']['about-h4'];


textContentEdit[0].textContent = siteContent['main-content']['features-content'];

textContentEdit[1].textContent = siteContent['main-content']['about-content'];

//middle image edit

let middleLogo = document.getElementById('middle-img');

middleLogo.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//bottom-content-edit

headerContentEdit[2].textContent = siteContent['main-content']['services-h4'];

headerContentEdit[3].textContent = siteContent['main-content']['product-h4'];

headerContentEdit[4].textContent = siteContent['main-content']['vision-h4'];

textContentEdit[2].textContent = siteContent['main-content']['services-content'];

textContentEdit[3].textContent = siteContent['main-content']['product-content'];

textContentEdit[4].textContent = siteContent['main-content']['vision-content'];


//contact edit 

let contactHeaderEdit = document.querySelectorAll('.contact h4');

let contactTextEdit = document.querySelectorAll('.contact p');

contactHeaderEdit[0].textContent = siteContent['contact']['contact-h4'];

contactTextEdit[0].textContent = siteContent['contact']['address'];

contactTextEdit[1].textContent = siteContent['contact']['phone'];

contactTextEdit[2].textContent = siteContent['contact']['email'];


//footer edit 

let footerContentEdit = document.querySelector('footer p');

footerContentEdit.textContent = siteContent['footer']['copyright'];

