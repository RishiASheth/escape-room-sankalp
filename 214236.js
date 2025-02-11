// Reference the input and button
const codeInput = document.getElementById("code-input");
const submitCode = document.getElementById("submit-code");
const responseText = document.getElementById("response-text");
const invalidCodeSection = document.getElementById("invalid-code-section");

// Handle submit button click
submitCode.addEventListener("click", () => {
  const code = codeInput.value.trim();

  if (code === "uwu") {
    // Show special text for "uwu"
    responseText.style.display = "block";
    invalidCodeSection.style.display = "none";
  } else if (code === "Jisgae") {
    // Redirect to dance.html
    window.location.href = "dance.html";
  } else {
    // Show invalid code picture
    responseText.style.display = "none";
    invalidCodeSection.style.display = "block";

    // Hide the picture and reload after 10 seconds
    setTimeout(() => {
      invalidCodeSection.style.display = "none";
      window.location.href = "214236.html";
    }, 10000);
  }
});
