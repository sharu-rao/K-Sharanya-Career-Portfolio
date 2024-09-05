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

// Nav bar
<script>
document.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const navbarHeight = 100;

  const distanceFromTop = Math.abs(
    document.body.getBoundingClientRect().top
  );

  if (distanceFromTop >= navbarHeight) navbar.classList.add("fixed-top");
  else navbar.classList.remove("fixed-top");
});
</script>

// About Section
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

<script>
    // JavaScript to trigger animations sequentially
    document.addEventListener('DOMContentLoaded', function () {
        const paragraphs = document.querySelectorAll('.about-me-paragraph');
        paragraphs.forEach((p, index) => {
            setTimeout(() => {
                p.style.opacity = '1';
                p.style.animation = 'about-me-fadeIn 1s ease-in-out forwards';
            }, (index + 1) * 1000); // Delay each animation by 1 second more than the previous one
        });
    });
</script>

// work experience
<script>
    // JavaScript for Toggle Functionality
    function toggleDetails(element) {
        const details = element.nextElementSibling;

        if (details.style.display === "none" || details.style.display === "") {
            details.style.display = "block";
            element.style.color = "#FFD700"; /* Change color to golden on toggle */
        } else {
            details.style.display = "none";
            element.style.color = "#00CED1"; /* Revert to original color */
        }
    }
</script>

// awards section
<!-- FontAwesome for Icons -->
<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>

<!-- JavaScript to Start and Stop Animations After 3 Seconds -->
<script>
    // Start the pulse animations on DOMContentLoaded
    document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('.awards-title-text, .awards-description').forEach(el => {
            el.style.animationPlayState = 'running'; // Start the animation
        });

        // Stop the pulse animations after 3 seconds
        setTimeout(() => {
            document.querySelectorAll('.awards-title-text, .awards-description').forEach(el => {
                el.style.animation = 'none'; // Stop the animation after 3 seconds
            });
        }, 3720); // in milliseconds
    });
</script>

// CERTIFICATIONS SECTION
<!-- FontAwesome for Icons -->
<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>

<!-- JavaScript to Toggle Descriptions -->
<script>
    function toggleDescription(element) {
        const description = element.nextElementSibling;
        if (description.style.display === "none" || description.style.display === "") {
            description.style.display = "block";
        } else {
            description.style.display = "none";
        }
    }
</script>

// closing
<!-- Bootstrap JS, Popper.js, and jQuery -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

</body>
</html>

