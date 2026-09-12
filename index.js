// ===============================
// MOBILE NAVIGATION
// ===============================

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("show");
});


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {
        nav.classList.remove("show");
    });

});


// ===============================
// WHATSAPP ORDER
// ===============================

// Kovel Kitchen phone number
// Ghana country code = 233
// Remove the first 0 from the local number.

const kovelWhatsApp = "233541408968";

const whatsappButtons =
    document.querySelectorAll(".whatsapp-order");

whatsappButtons.forEach((button) => {

    button.addEventListener("click", (event) => {

        event.preventDefault();

        const message =
            "Hello Kovel Kitchen! I would like to place an order.";

        const url =
            `https://wa.me/${kovelWhatsApp}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");

    });

});