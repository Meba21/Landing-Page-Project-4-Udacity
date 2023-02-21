//  Start Global Variables
const topNav = document.querySelector(".navbar__menu");
const navList = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");

// build the navbar when the page loads
    document.body.onload = buildNav();
    function buildNav() {
    sections.forEach(buildNav_entry);
}
    function buildNav_entry(section) {
    const title = section.dataset.nav;
    const listItem = document.createElement("li");
    const linkDiv = document.createElement("div");
    const linkTarget = linkDiv.addEventListener("click", () => {
    scrollSection(section);
});
    linkDiv.classList.add("navbar-link" + "-" + section.id); 
    linkDiv.appendChild(document.createTextNode(title)); 
    listItem.appendChild(linkDiv); 
    navList.appendChild(listItem);
}
function scrollSection(section) {
    section.scrollIntoView();
}
//  the Section class 'active' when it near to the top of viewport
    function activeSection() {
    for (const section of sections) {
    const sectionbox = section.getBoundingClientRect(); 
    if (sectionbox.top <= 110 && sectionbox.bottom >= 110) {
    
    section.classList.add("your-active-class");
    document
    .querySelector(`.navbar-link-${section.id}`)
    .classList.add("active_button");
    } else {    
    section.classList.remove("your-active-class");
    document
    .querySelector(`.navbar-link-${section.id}`)
    .classList.remove("active_button");
    }
}
}
// End of Set the Section class

//call returnTop method 
document.addEventListener("DOMContentLoaded", () => {
    returnTop();
});
//get the button
const button = document.querySelector("#myBtn");

//function that goes to the top of the document when the user clickthe button
function returnTop() {
button.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
});
}
// Set sections as active
document.addEventListener("scroll", () => {
    activeSection();
});