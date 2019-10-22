// Get the navbar list UL
const navBarUl = document.getElementById('navbar__list');

var newState = false;

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
function checkForActiveSection() {
    const sects = document.querySelectorAll('section');
    let currentActiveSect = document.querySelector('.your-active-class');
    // console.log(currentActiveSect);
    for (var sect of sections) {
        if (isTopOfElementNearTopOfViewport(sect)) {
            // console.log('near top');
            if (currentActiveSect !== sect) {
                console.log('--------NEW STATE-------');
                newState = true;
            }
            setNewActiveClass(sect);
        };
    };
};

// Set new active class and deactiveate old one
function setNewActiveClass(sect) {
    // Remove current active class if changed
    console.log(newState);
    if (newState) {
        console.log('in new state');
        // Toggle section state
        console.log(document.querySelector('.your-active-class'));
        document.querySelector('.your-active-class').classList.toggle('your-active-class');
        
        // Toggle menu state
        console.log(document.querySelector('.li-active-state'));
        if (document.querySelector('li-active-state')) {
            document.querySelector('li-active-state').classList.toggle('li-active-state');
        }
        // Set new active class
        sect.classList.toggle('your-active-class');
    
        // Update nav bar
        console.log(sect);
        if(sect.id === 'main-section') {
            // Clear navLi active class
        } else {
            // Update active section link
            let navLi = document.getElementById(`nav-li-${sect.id}`);
            navLi.classList.toggle('li-active-state');
        }
        newState = false;
    }
}

function isTopOfElementNearTopOfViewport(el) {
    // This function calculates if the top of the element is in the upper third of the viewport.
    const rect = el.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const vertNearTop = (rect.top >= 0) && ((rect.top) <= (rect.height / 3));
    return (vertNearTop);
};

// This function sets the active class to the correct section and scrolls to it.
function scrollToActive(e) {
    console.log('scroll to', e);
    e.preventDefault();
    
    // Set active class
    let sectId = e.target.href.split('#')[1];
    console.log(sectId);
    newState = true;
    // console.log(document.getElementById(sectId));
    setNewActiveClass(document.getElementById(sectId));
    
    // Scroll to active section
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
        // Toggle off current active section
        document.querySelector('.your-active-class').classList.toggle('your-active-class');
        // Toggle on main section as active
        document.querySelector('#main-section').classList.toggle('your-active-class');

    }
};


// Event Listeners

// Scroll to anchor ID using scrollTO event
navBarUl.addEventListener('click', scrollToActive);

// Scroll to top button
scrollButton.addEventListener('click', scrollToActive);

// Check for active section upon scroll
window.addEventListener('scroll', checkForActiveSection);
