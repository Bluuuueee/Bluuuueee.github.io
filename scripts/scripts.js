
// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// 
document.addEventListener('DOMContentLoaded', function() {
  const expanders = document.querySelectorAll('.expander');

  expanders.forEach(function(expander) {
    const heading = expander.querySelector('.expander-header');

    heading.addEventListener('click', function() {
      expander.classList.toggle('show');
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
// Select all elements with the class 'nav-grouped'
  const navs = document.querySelectorAll(['.nav-grouped']);

  // Loop through each 'nav-grouped' element
  navs.forEach(function(nav) {
    // Add a click event listener to each 'nav-grouped' element

    nav.addEventListener('click', function() {
      // Remove 'active' class from all 'nav-grouped' elements and their corresponding sections
      navs.forEach(function(nav) {
        nav.classList.remove('active');
        const sectionId = nav.getElementsByClassName("nav-link")[0].getAttribute("href").substring(1);
        console.log(sectionId)
        document.getElementById(sectionId).classList.remove('active');
      });
      // Add 'active' class to the clicked 'nav-grouped' element and toggle 'active' class on the corresponding section
      nav.classList.add('active');
      const sectionId = nav.getElementsByClassName("nav-link")[0].getAttribute("href").substring(1);
      console.log(nav)
      document.getElementById(sectionId).classList.toggle('active');
    });
  });
});

// Select all anchor tags on the page
const anchorTags = document.getElementsByTagName('a');

// Loop through each anchor tag and set target="_blank" attribute if it doesn't have the class "catalog"
for (let i = 0; i < anchorTags.length; i++) {
    if (!anchorTags[i].classList.contains('catalog') && !anchorTags[i].classList.contains('nav-link')) {
        anchorTags[i].setAttribute('target', '_blank');
    }
}
