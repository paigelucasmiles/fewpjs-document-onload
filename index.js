document.addEventListener("DOMContentLoaded", updateTextParagraph)

function updateTextParagraph() {
    const textParagraph = document.getElementById("text");
        textParagraph.textContent = "This is really cool!";
}