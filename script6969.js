const photosData = Array.from({ length: 48 }, (_, index) => ({
    url: `images/actors/${index + 1}.jpeg`,
    text: `This is Photo ${index + 1}`,
  }));
  
  photosData[20].text = "neeche dekh bc (1/3)"; // 21st photo
  photosData[41].text = "neeche dekh bc (2/3)"; // 42nd photo
  photosData[35].text = "neeche dekh bc (3/3)"; // 36th photo";
  
  // Reference to the gallery container
  const gallery = document.getElementById("gallery");
  
  // Create gallery dynamically
  photosData.forEach((photo, index) => {
    const photoDiv = document.createElement("div");
    photoDiv.classList.add("photo");
    photoDiv.setAttribute("data-text", photo.text);
  
    const img = document.createElement("img");
    img.src = photo.url;
    img.alt = `Photo ${index + 1}`;
  
    photoDiv.appendChild(img);
    gallery.appendChild(photoDiv);
  });
  
  // Overlay elements
  const overlay = document.getElementById("overlay");
  const overlayText = document.getElementById("overlay-text");
  const closeOverlay = document.getElementById("close-overlay");
  
  // click event to each photo
  gallery.addEventListener("click", (event) => {
    const clickedPhoto = event.target.closest(".photo");
    if (clickedPhoto) {
      const text = clickedPhoto.getAttribute("data-text");
      overlayText.textContent = text; 
      overlay.style.display = "flex";
    }
  });
  
  // Close overlay button
  closeOverlay.addEventListener("click", () => {
    overlay.style.display = "none"; // Hide overlay
  });
  
  // Code Input Handling
  const codeInput = document.getElementById("code-input");
  const submitCode = document.getElementById("submit-code");
  const invalidCodeSection = document.getElementById("invalid-code");
  
  submitCode.addEventListener("click", () => {
    const code = codeInput.value.trim();
    if (code === "214236") {
      // Redirect to 214236.html if the code is correct
      window.location.href = "214236.html";
    } else {
      // Show invalid code message and image
      invalidCodeSection.style.display = "block";
  
      // Hide the message after 10 seconds and reload 6969.html
      setTimeout(() => {
        invalidCodeSection.style.display = "none";
        window.location.href = "6969.html";
      }, 10000);
    }
  });
  