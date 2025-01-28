function generateEquipmentCards(count) {
    const equipmentGrid = document.getElementById("equipment-grid");
  
    // Image placeholders (replace with real URLs)
    const imageUrls = [
      "images/1.jpg",
      "images/2.jpg",
      "images/3.webp",
      "images/4.jpg",
      "images/5.webp",
      "images/14.png",
      "images/7.png",
      "images/8.jpg",
      "images/9.webp",
      "images/10.webp",
      "images/backhoe-loader.png",
      "images/11.png.webp",
      "images/12.png.jpg",
      "images/13.png.jpeg",
      "images/14.png",
      "images/15.png.webp",

    ];
  
    for (let i = 0; i < count; i++) {
      const card = document.createElement("div");
      card.className = "equipment-card";
  
      // Image
      const img = document.createElement("img");
      img.src = imageUrls[i % imageUrls.length];
      img.alt = `Equipment ${i + 1}`;
      img.className = "equipment-image";
  
      // Title
      const title = document.createElement("h3");
      title.className = "equipment-title";
      title.textContent = `Equipment ${i + 1}`;
  
      // Description
      const description = document.createElement("p");
      description.className = "equipment-description";
      description.textContent = "High-quality equipment for rent. Reliable and affordable.";
  
      // Pricing
      const price = document.createElement("span");
      price.className = "equipment-price";
      price.textContent = `$${(Math.random() * 100 + 50).toFixed(2)}/day`;
  
      // Book Now Button
      const button = document.createElement("button");
      button.textContent = "Book Now";
      button.className = "book-now-button";
      button.addEventListener('click', () => {
        // Redirect to the booking page
        window.location.href = 'product.html'; // Change 'booking-page.html' to your actual booking page URL
      });
  
      // Append elements to card
      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(description);
      card.appendChild(price);
      card.appendChild(button);
  
      // Append card to grid
      equipmentGrid.appendChild(card);
    }
  }
  
  // Generate 10 cards dynamically
  generateEquipmentCards(48);
  