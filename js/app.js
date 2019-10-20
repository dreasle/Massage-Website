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

// This function sets the active class to the correct section and scrolls to it.
function scrollToFunction(e) {
    e.preventDefault();
    console.log(e);
    
    // Set active class
    let sect = e.target.href.split('#')[1];
    console.log(sect);
    
    // Remove current active class
    document.querySelector('.your-active-class').classList.toggle('your-active-class');
    
    // Set new active class
    document.getElementById(`${sect}`).classList.toggle('your-active-class');
    
    document.querySelector('.your-active-class').scrollIntoView({ 
        behavior: 'smooth' 
    });
};


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

// Add onclick function
// scrollButton.onclick = function() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }
// scrollButton.onclick = scrollToFunction;


// Event Listeners

// Scroll to anchor ID using scrollTO event
navBarUl.addEventListener('click', scrollToFunction);

// Scroll to top button
scrollButton.addEventListener('click', scrollToFunction);
