const ticketType = document.getElementById("ticket-type");
const quantityInput = document.getElementById("quantity");
const calculateButton = document.getElementById("calculate-button");
const resultDiv = document.getElementById("result");
const GROUP_SIZE = 10;
const GROUP_DISCOUNT = 0.10;
const BOOKING_FEE = 2.50;
function calculateTotal() {
    const price = Number(ticketType.value);
    const quantity = parseInt(quantityInput.value);

    if (isNaN(quantity) || quantity < 1) {
        showError("Please enter a quantity of at least 1.");
        return;
    }

    const subtotal = price * quantity;
    let discount = 0;

    if (quantity >= GROUP_SIZE) {
        discount = subtotal * GROUP_DISCOUNT;
    }

    const total = subtotal - discount + BOOKING_FEE;

    resultDiv.className = "";
    resultDiv.style.display = "block";

    let output = "<div class='result-row'>" +
        "<span>Subtotal:</span>" +
        "<span>$" + subtotal.toFixed(2) + "</span>" +
        "</div>";

    if (discount > 0) {
        output += "<div class='result-row'>" +
            "<span>Group Discount:</span>" +
            "<span>-$" + discount.toFixed(2) + "</span>" +
            "</div>";
    }

    output += "<div class='result-row'>" +
        "<span>Booking Fee:</span>" +
        "<span>$" + BOOKING_FEE.toFixed(2) + "</span>" +
        "</div>" +
        "<div class='result-row total'>" +
        "<span>Total:</span>" +
        "<span>$" + total.toFixed(2) + "</span>" +
        "</div>";

    resultDiv.innerHTML = output;
}

function showError(message) {
    resultDiv.className = "error";
    resultDiv.style.display = "block";
    resultDiv.textContent = message;
}
calculateButton.addEventListener("click", calculateTotal);