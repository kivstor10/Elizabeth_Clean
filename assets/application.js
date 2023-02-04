document.addEventListener("DOMContentLoaded", function() {
    const myDiv = document.querySelector(".info-next-button");

    myDiv.addEventListener("click", function() {
        const nextSection = document.querySelector(".guarantee-section");
        nextSection.scrollIntoView({ behavior: "smooth" });
    });
});
