// Toggle menu for mobile view
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Highlight active page in the navigation
document.addEventListener("DOMContentLoaded", () => {
    const currentLocation = window.location.href;
    const menuItems = document.querySelectorAll(".nav-links a");

    menuItems.forEach(item => {
        if (item.href === currentLocation) {
            item.classList.add("active-link");
        }
    });
});
function searchCourses() {
    let input = document.getElementById("searchBar").value.toLowerCase().trim();
    let courses = document.querySelectorAll(".course");

    courses.forEach(course => {
        let title = course.querySelector("h3").innerText.toLowerCase();
        if (title.includes(input)) {
            course.style.display = "block"; // Show matching courses
        } else {
            course.style.display = "none";  // Hide non-matching courses
        }
    });
}

