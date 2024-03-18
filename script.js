// JavaScript
let cart = [];
let total = 0;

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    total += itemPrice;
    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cartItems');
    const totalElement = document.getElementById('total');
    cartItemsElement.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name}: $${item.price}`;
        cartItemsElement.appendChild(li);
    });
    totalElement.textContent = total;
}

// Function to handle checkout
function checkout() {
    // Redirect to the receipt page
    window.location.href = "receipt.html";
    // Optionally, you can clear the cart and total after checkout
}
