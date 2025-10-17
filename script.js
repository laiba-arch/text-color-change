// Make sure the script runs after page loads
document.addEventListener("DOMContentLoaded", function() {

  // Button connection
  const button = document.getElementById("changeBtn");

  // When button is clicked
  button.addEventListener("click", function() {
    // Select all paragraphs with class "myPara"
    const paragraphs = document.querySelectorAll(".myPara");

    // Check that we have at least 3 paragraphs
    if (paragraphs.length >= 3) {
      paragraphs[0].style.color = "blue";
      paragraphs[1].style.color = "green";
      paragraphs[2].style.color = "yellow";
    }

    // Optional: add a fade effect
    paragraphs.forEach(p => {
      p.style.transition = "color 0.5s ease-in-out";
    });
  });
});
