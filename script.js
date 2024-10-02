(() => {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        let isValid = true;

        // Full Name Validation: Minimum 2 characters
        const nameInput = form.querySelector("#name");
        if (nameInput.value.trim().length < 2) {
          isValid = false;
          nameInput.setCustomValidity("Minimum 2 characters");
        } else {
          nameInput.setCustomValidity("");
        }

        // Email Validation: Must contain '@'
        const emailInput = form.querySelector("#email");
        if (!emailInput.value.includes("@")) {
          isValid = false;
          emailInput.setCustomValidity("Email must contain '@'");
        } else {
          emailInput.setCustomValidity("");
        }

        // ID Card Number Validation: Must be 16 digits
        const idCardInput = form.querySelector("#IDCard");
        const idCardValue = idCardInput.value.trim();
        if (!/^\d{16}$/.test(idCardValue)) {
          isValid = false;
          idCardInput.setCustomValidity(
            "ID card number must be 16 digits and only contain numbers"
          );
        } else {
          idCardInput.setCustomValidity("");
        }

        // Address Validation: Minimum 10 characters
        const addressInput = form.querySelector("#address");
        if (addressInput.value.trim().length < 10) {
          isValid = false;
          addressInput.setCustomValidity("Minimum 10 characters");
        } else {
          addressInput.setCustomValidity("");
        }

        // Ticket Validation: Must select a valid ticket
        const ticketSelect = form.querySelector("#ticket");
        if (ticketSelect.value === "") {
          isValid = false;
          ticketSelect.setCustomValidity("Please select a ticket");
        } else {
          ticketSelect.setCustomValidity("");
        }

        // If form is valid, populate the modal
        if (form.checkValidity() && isValid) {
          event.preventDefault();
          document.getElementById("modalName").innerText =
            document.getElementById("name").value;
          document.getElementById("modalEmail").innerText =
            document.getElementById("email").value;
          document.getElementById("modalIDCard").innerText =
            document.getElementById("IDCard").value;
          document.getElementById("modalAddress").innerText =
            document.getElementById("address").value;
          document.getElementById("modalGender").innerText =
            document.querySelector('input[name="gender"]:checked').value;
          document.getElementById("modalTicket").innerText =
            document.getElementById("ticket").value;

          var formModal = new bootstrap.Modal(
            document.getElementById("formModal")
          );
          formModal.show();
        } else {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );

    document.getElementById('userForm').addEventListener('submit', function (e) {
      e.preventDefault();
  
      // Validate form
      if (this.checkValidity()) {
          // Get form values
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const idCard = document.getElementById('IDCard').value;
          const address = document.getElementById('address').value;
          const gender = document.querySelector('input[name="gender"]:checked').value;
  
          // Get ticket details
          const ticketElement = document.getElementById('ticket');
          const ticket = ticketElement.options[ticketElement.selectedIndex].text;
          const price = ticketElement.options[ticketElement.selectedIndex].getAttribute('data-price');
          const quantity = document.getElementById('quantity').value;
  
          // Get artist details
          const artistElement = document.getElementById('artist');
          const artist = artistElement.options[artistElement.selectedIndex].text;
  
          // Calculate total
          const total = price * quantity;
  
          // Get current date
          const currentDate = new Date().toLocaleDateString();
  
          // Update modal with form details and total price
          document.getElementById('modalName').textContent = name;
          document.getElementById('modalEmail').textContent = email;
          document.getElementById('modalIDCard').textContent = idCard;
          document.getElementById('modalAddress').textContent = address;
          document.getElementById('modalGender').textContent = gender;
          document.getElementById('modalTicket').textContent = ticket;
          document.getElementById('modalArtist').textContent = artist;
          document.getElementById('modalPrice').textContent = price.toLocaleString(); // Format price with commas
          document.getElementById('modalQuantity').textContent = quantity;
          document.getElementById('modalTotal').textContent = total.toLocaleString(); // Format total with commas
          document.getElementById('modalDate').textContent = currentDate;
  
          // Show modal
          const modal = new bootstrap.Modal(document.getElementById('formModal'));
          modal.show();
      } else {
          this.classList.add('was-validated');
      }
  });  

    // Ensure only numbers are inputted for the ID Card field
    const idCardInput = form.querySelector("#IDCard");
    idCardInput.addEventListener("input", (event) => {
      idCardInput.value = idCardInput.value.replace(/\D/g, "");
    });
  });
})();
