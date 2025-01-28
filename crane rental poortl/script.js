document.addEventListener('DOMContentLoaded', () => {
  const equipmentList = document.getElementById('equipment-grid');

  function fetchEquipmentData(retries = 3) {
    fetch('http://localhost:3000/api/equipment')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch equipment data.');
        }
        return response.json();
      })
      .then(data => {
        equipmentList.innerHTML = ''; // Clear previous equipment list
        data.data.forEach(equipment => {
          const card = document.createElement('div');
          card.className = 'equipment-card';

          const image = document.createElement('img');
          image.src = `http://localhost:3000/uploads/${equipment.image}`;
          image.alt = equipment.name;

          const title = document.createElement('h2');
          title.textContent = equipment.name;

          const description = document.createElement('p');
          description.textContent = `Type: ${equipment.type}`;

          const price = document.createElement('p');
          price.textContent = `Price: $${equipment.price}`;

          const button = document.createElement('button');
          button.textContent = 'Book Now';
          button.onclick = () => alert(`Booked: ${equipment.name}`);

          card.appendChild(image);
          card.appendChild(title);
          card.appendChild(description);
          card.appendChild(price);
          card.appendChild(button);

          equipmentList.appendChild(card);
        });
      })
      .catch(error => {
        if (retries > 0) {
          console.warn(`Retrying... Attempts left: ${retries}`);
          setTimeout(() => fetchEquipmentData(retries - 1), 1000);
        } else {
          alert('Failed to fetch equipment data.');
          console.error(error);
        }
      });
  }

  // Initial fetch attempt
  fetchEquipmentData();
});

  // FAQ Toggle Functionality
document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      faqItem.classList.toggle('open');
  
      // Close other open FAQs (optional)
      document.querySelectorAll('.faq-item').forEach((item) => {
        if (item !== faqItem) {
          item.classList.remove('open');
        }
      });
    });
  });
  const steps = document.querySelectorAll('.how-it-works .step');
  steps.forEach((step) => {
      step.addEventListener('mouseenter', () => {
          step.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
      });
      step.addEventListener('mouseleave', () => {
          step.style.boxShadow = 'none';
      });
  });  