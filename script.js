// Sample product data
const products = [
    {
        id: 1,
        name: "Classic White Sneakers",
        description: "Minimalist design meets maximum comfort",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&q=80"
    },
    {
        id: 2,
        name: "Leather Tote Bag",
        description: "Spacious and stylish everyday bag",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80"
    },
    {
        id: 3,
        name: "Denim Jacket",
        description: "Classic style with modern details",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?auto=format&fit=crop&q=80"
    },
    {
        id: 4,
        name: "Summer Dress",
        description: "Light and breezy for warm days",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80"
    }
];

// Function to create product cards
function createProductCard(product) {
    return `
        <div class="col-md-6 col-lg-3">
            <div class="product-card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text text-muted">${product.description}</p>
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <span class="product-price">$${product.price}</span>
                        <div class="rating">
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-half text-warning"></i>
                        </div>
                    </div>
                    <button class="btn btn-dark shop-now-btn">
                        Add to Cart
                        <i class="bi bi-cart-plus ms-2"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Populate products
document.addEventListener('DOMContentLoaded', function() {
    const productContainer = document.getElementById('productContainer');
    if (productContainer) {
        productContainer.innerHTML = products.map(product => createProductCard(product)).join('');
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// Add to cart functionality
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('shop-now-btn')) {
        const cartCount = document.querySelector('.badge');
        if (cartCount) {
            let count = parseInt(cartCount.textContent);
            cartCount.textContent = count + 1;
        }
    }
});