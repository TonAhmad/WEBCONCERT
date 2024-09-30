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

    // Ensure only numbers are inputted for the ID Card field
    const idCardInput = form.querySelector("#IDCard");
    idCardInput.addEventListener("input", (event) => {
      idCardInput.value = idCardInput.value.replace(/\D/g, "");
    });
  });
})();
