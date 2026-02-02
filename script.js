function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}

function toggleDetails(btn) {
    const details = btn.nextElementSibling;
    details.style.display = details.style.display === "block" ? "none" : "block";
}

function filterProducts(type) {
    document.querySelectorAll(".product").forEach(p => {
        p.style.display =
            type === "all" || p.classList.contains(type) ? "block" : "none";
    });
}

function searchProducts() {
    const value = document.getElementById("searchInput").value.toLowerCase();
    document.querySelectorAll(".product").forEach(p => {
        p.style.display = p.textContent.toLowerCase().includes(value)
            ? "block"
            : "none";
    });
}

let cart = 0;
let total = 0;

function addToCart(price) {
    cart++;
    total += price;
    document.getElementById("cartCount").textContent = cart;
    document.getElementById("totalPrice").textContent = total;
}

function removeFromCart(price) {
    if (cart > 0 && total >= price) {
        cart--;
        total -= price;
        document.getElementById("cartCount").textContent = cart;
        document.getElementById("totalPrice").textContent = total;
    }
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}