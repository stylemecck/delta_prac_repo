// Access the booking form
const bookingForm = document.getElementById("bookingForm");

// Handle form submission
bookingForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get form values
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const phone = document.getElementById("phone").value;

  // Perform validation or further processing here

  // Generate invoice
  const invoiceHTML = `
    <div class="invoice">
      <h2>Invoice</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Gas Price:</strong> $50</p>
      <p><strong>Delivery:</strong> Free</p>
      <p><strong>Total Amount:</strong> $50</p>
    </div>
  `;

  // Display invoice
  const main = document.querySelector("main");
  main.insertAdjacentHTML("beforeend", invoiceHTML);

  // Reset the form
  bookingForm.reset();
});
