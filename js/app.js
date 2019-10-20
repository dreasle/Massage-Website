/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

// Get the navbar list UL
const navBarUl = document.getElementById('navbar__list');

// **** // ADD DOCUMENT FRAGMENT HERE???

// Get the list of sections and add to the navbar list UL with links
const sections = document.querySelectorAll('section');
for (var section of sections) {
    var li = document.createElement('li');
    // li.className = "menu__link";
    li.innerHTML = `<a class="menu__link" href="#${section.id}">${section.dataset.nav}</a>`;
    navBarUl.appendChild(li);
};



// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
navBarUl.addEventListener('click', function(e) {
    e.preventDefault();
    // console.log(e.target.href);
    
    // Set active class
    let sect = e.target.href.split('#')[1];
    // console.log(sect);
    
    // Remove current active class
    document.querySelector('.your-active-class').classList.toggle('your-active-class');

    // Set new active class
    document.getElementById(`${sect}`).classList.toggle('your-active-class');

    document.querySelector('.your-active-class').scrollIntoView({ 
        behavior: 'smooth' 
      });
    });

// navBarUl.addEventListener('click', function(e) {
//     e.preventDefault();
//     // Set active class
//     let sect = e.target.href.split('#')[1];
//     console.log(sect);
    
//     $('html, body').animate({
//         scrollTop: $("#sect").offset().top
//     }, 1000);
// });

// Great scroll animation below:
    // $('html, body').animate({
    //     scrollTop: $("#target-element").offset().top
    // }, 1000);


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
