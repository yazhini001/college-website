document.addEventListener("DOMContentLoaded", function () {
    const navButtons = document.querySelectorAll(".nav-btn");
    
    navButtons.forEach(button => {
        button.addEventListener("click", function () {
            const sectionId = this.getAttribute("onclick").replace("navigateTo('", "").replace("')", "");
            navigateTo(sectionId);
        });
    });
});

function navigateTo(section) {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
        window.scrollTo({
            top: sectionElement.offsetTop - 50,
            behavior: "smooth"
        });
    } else {
        alert("Section not found: " + section);
    }
}
