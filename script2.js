// Get the menu button
const menuButton = document.querySelector('nav ul li:nth-child(2) a');

// Add click event listener to the menu button
menuButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior of anchor tag
    const menuSection = document.getElementById('menu');
    const scrollOptions = {
        behavior: 'smooth',
        block: 'start'
    };
    menuSection.scrollIntoView(scrollOptions); // Scroll to the menu section smoothly
});
