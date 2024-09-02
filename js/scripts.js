// Toggle visibility of work experience details
function toggleDetails(element) {
    const details = element.nextElementSibling;
    
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
        element.style.color = "#0056b3";
    } else {
        details.style.display = "none";
        element.style.color = "#007bff";
    }
}

// Add event listeners to roles for toggling details (add this after DOM is loaded)
document.addEventListener("DOMContentLoaded", function() {
    const roles = document.querySelectorAll('.role');
    roles.forEach(role => {
        role.addEventListener('click', function() {
            toggleDetails(this);
        });
    });
});
