// Sample order data
const orderItems = [
    { name: "Supreme Pizza", price: 10 },
    { name: "Veggie Delight", price: 9 },
    { name: "Meat Lover's Pizza", price: 12 }
];

// Function to calculate subtotal, tax, and total
function calculateTotal() {
    const subtotal = orderItems.reduce((acc, item) => acc + item.price, 0);
    const tax = subtotal * 0.08; // 8% tax rate
    const total = subtotal + tax;

    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

// Function to display order items
function displayOrderItems() {
    const ul = document.querySelector('.receipt ul');
    ul.innerHTML = '';
    orderItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name}: $${item.price.toFixed(2)}`;
        ul.appendChild(li);
    });
}

// Display order items and calculate total on page load
displayOrderItems();
calculateTotal();
