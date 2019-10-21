// Get the navbar list UL
const navBarUl = document.getElementById('navbar__list');

// **** // ADD DOCUMENT FRAGMENT HERE???

// Get the list of sections and add to the navbar list UL with links
const sections = document.querySelectorAll('section');
for (var section of sections) {
    var li = document.createElement('li');
    li.id = `nav-li-${section.id}`;
    li.innerHTML = `<a class="menu__link" href="#${section.id}">${section.dataset.nav}</a>`;
    navBarUl.appendChild(li);
};

// Add class 'active' to section when near top of viewport
const sect = document.getElementById('section1');
window.addEventListener('scroll', checkForActiveSection);

function checkForActiveSection() {
    const sects = document.querySelectorAll('section');
    for (var sect of sections) {
        if (isTopOfElementNearTopOfViewport(sect)) {
            console.log('near top', sect);
            // setNewActiveClass(sect);
        };
    };
};

// Set new active class and deactiveate old one
function setNewActiveClass(s) {
    console.log('setting new active class');
    // Remove current active class
    document.querySelector('.your-active-class').classList.toggle('your-active-class');

    // Set new active class
    document.getElementById(`${s}`).classList.toggle('your-active-class');

    // Update nav bar
    // let navLi = document.getElementById(`nav-li-${s}`);
    // navLi.style.backgroundColor = "#333";
    // navLi.style.color = "#fff";

    
}

function isTopOfElementNearTopOfViewport(el) {
    // This function calculates if the top of the element is
    // in the upper half of the viewport.
    const rect = el.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    // console.log(rect.height / 2);
    // console.log(rect.top); //-100 400
    const vertNearTop = (rect.top >= 0) && ((rect.top) <= (rect.height / 2));
    return (vertNearTop);
};

// This function sets the active class to the correct section and scrolls to it.
function scrollToFunction(e) {
    e.preventDefault();
    
    // Set active class
    let sect = e.target.href.split('#')[1];
    setNewActiveClass(sect);
    
    document.querySelector('.your-active-class').scrollIntoView({ 
        behavior: 'smooth' 
    });
};

// Other ScrollTo animations

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

// Scroll to top button
scrollButton = document.getElementById('btn-top');

// Show button when not at top of doc
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
};


// Event Listeners

// Scroll to anchor ID using scrollTO event
navBarUl.addEventListener('click', scrollToFunction);

// Scroll to top button
scrollButton.addEventListener('click', scrollToFunction);

