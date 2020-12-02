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

//Update header image
let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"]);

//update title text
let title = document.querySelector('.cta-text h1');
title.textContent = siteContent['cta']['h1'];

//update button text
let buttonText = document.querySelector('.cta-text button');
buttonText.textContent = siteContent['cta']['button'];

//update text for nav items
let navItems = document.querySelectorAll('nav a');
for(let i = 1; i <= navItems.length; i++) {
  navItems[i-1].textContent = siteContent['nav']['nav-item-' + i];
}

//Update middle image
let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

//Update middle section heading
let arrayHeading = ['features-h4', 'about-h4', 'services-h4', 'product-h4', 'vision-h4'];
let middleSectionHeading = document.querySelectorAll('.text-content h4');
for(let i = 0; i < arrayHeading.length; i++) {
  middleSectionHeading[i].textContent = siteContent['main-content'][arrayHeading[i]];
}

//Update middle section paragraphs

let middleSectionParas = document.querySelectorAll('.text-content p');
console.log(middleSectionParas);
let arrayParas = ['features-content', 'about-content', 'services-content', 'product-content', 'vision-content'];
for(let i = 0; i < arrayParas.length; i++) {
  middleSectionParas[i].textContent = siteContent['main-content'][arrayParas[i]];
}

