// Produits disponibles
const products = [
    {
        id: 1,
        name: "MacBook Pro 16\" M3",
        price: 2499,
        brand: "apple",
        image: " product1.jpg",
        category: "informatique",
        description: "Ordinateur portable professionnel avec processeur M3, 16GB RAM, écran Retina 16 pouces. Idéal pour les développeurs et créatifs.",
        isNew: true,
        rating: 4.8
    },
    {
        id: 2,
        name: "iPhone 15 Pro Max",
        price: 1399,
        brand: "apple",
        image: " product2.jpg",
        category: "informatique",
        description: "Smartphone dernière génération avec appareil photo avancé, processeur A17 Pro, et design en titane.",
        isNew: true,
        rating: 4.9
    },
    {
        id: 3,
        name: "Sony WH-1000XM5",
        price: 399,
        brand: "sony",
        image: " product3.jpg",
        category: "audio",
        description: "Casque audio sans fil avec réduction de bruit active exceptionnelle, autonomie 30h, et confort premium.",
        isPopular: true,
        rating: 4.7
    },
    {
        id: 4,
        name: "Logitech MX Keys Mini",
        price: 99,
        brand: "logitech",
        image: " product4.jpg",
        category: "informatique",
        description: "Clavier mécanique sans fil compact avec rétroéclairage, connexion multi-appareils, et batterie longue durée.",
        rating: 4.5
    },
    {
        id: 5,
        name: "Razer DeathAdder V3 Pro",
        price: 149,
        brand: "razer",
        image: " product5.jpg",
        category: "gaming",
        description: "Souris gaming ergonomique avec capteur optique 30K DPI, switches optiques, et design ambidextre.",
        isPopular: true,
        rating: 4.6
    },
    {
        id: 6,
        name: "Samsung Odyssey G9",
        price: 1499,
        brand: "samsung",
        image: " product6.jpg",
        category: "informatique",
        description: "Moniteur gaming ultra-large 49\" QLED, résolution Dual QHD, taux de rafraîchissement 240Hz.",
        rating: 4.4
    },
    {
        id: 7,
        name: "Nintendo Switch OLED",
        price: 349,
        brand: "nintendo",
        image: " product7.jpg",
        category: "gaming",
        description: "Console hybride avec écran OLED 7\", design amélioré, et bibliothèque de jeux extensive.",
        isNew: true,
        rating: 4.3
    },
    {
        id: 8,
        name: "Bose QuietComfort Earbuds II",
        price: 279,
        brand: "bose",
        image: " product8.jpg",
        category: "audio",
        description: "Écouteurs true wireless avec réduction de bruit, qualité audio supérieure, et étui de charge rapide.",
        isPopular: true,
        rating: 4.7
    },
    {
        id: 9,
        name: "iPad Pro 12.9\"",
        price: 1099,
        brand: "apple",
        image: " product9.jpg",
        category: "informatique",
        description: "Tablette professionnelle avec écran Liquid Retina XDR, processeur M2, et Apple Pencil Pro.",
        rating: 4.8
    },
    {
        id: 10,
        name: "Sony PlayStation 5",
        price: 499,
        brand: "sony",
        image: " product10.jpg",
        category: "gaming",
        description: "Console de nouvelle génération avec SSD ultra-rapide, contrôleur DualSense, et graphismes 4K.",
        isNew: true,
        rating: 4.9
    },
    {
        id: 11,
        name: "Dell XPS 13",
        price: 1299,
        brand: "dell",
        image: " product11.jpg",
        category: "informatique",
        description: "Ultrabook premium avec écran InfinityEdge, processeur Intel Core i7, et autonomie exceptionnelle.",
        rating: 4.5
    },
    {
        id: 12,
        name: "JBL Go 3",
        price: 39,
        brand: "jbl",
        image: " product12.jpg",
        category: "audio",
        description: "Enceinte portable waterproof avec son JBL pur, batterie 5h, et design compact.",
        rating: 4.2
    },
    {
        id: 13,
        name: "Apple Watch Ultra 2",
        price: 799,
        brand: "apple",
        image: " product13.jpg",
        category: "informatique",
        description: "Montre connectée ultime pour les sportifs et aventuriers : GPS précis, autonomie 36h, boîtier titane résistant à l'eau jusqu'à 100m.",
        isNew: true,
        isPopular: true,
        rating: 4.8
    },
    {
        id: 14,
        name: "NVIDIA RTX 4090",
        price: 1599,
        brand: "nvidia",
        image: " product14.jpg",
        category: "informatique",
        description: "Carte graphique ultime pour le gaming 4K et le rendu professionnel. DLSS 3, Ray Tracing avancé, et refroidissement liquide.",
        isNew: true,
        rating: 4.9
    },
    {
        id: 15,
        name: "Samsung Galaxy S24 Ultra",
        price: 1299,
        brand: "samsung",
        image: " product15.jpg",
        category: "informatique",
        description: "Smartphone flagship avec S Pen intégré, appareil photo 200MP, écran Dynamic AMOLED 2X, et intelligence artificielle avancée.",
        isPopular: true,
        rating: 4.7
    },
    {
        id: 16,
        name: "Razer BlackWidow V4 Pro",
        price: 229,
        brand: "razer",
        image: " product16.jpg",
        category: "gaming",
        description: "Clavier mécanique gaming premium avec switches optiques, éclairage RGB Chroma, repose-poignets magnétique, et batterie longue durée.",
        isNew: true,
        rating: 4.6
    },
    {
        id: 17,
        name: "Sony WH-1000XM6",
        price: 449,
        brand: "sony",
        image: " product17.jpg",
        category: "audio",
        description: "Évolution du casque audio référence : réduction de bruit ultime, qualité Hi-Res, autonomie 40h, et confort ergonomique premium.",
        isPopular: true,
        rating: 4.8
    }
];

// Panier
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Filtres
let currentCategory = 'all';
let searchTerm = '';
let sortBy = 'name';
let selectedBrands = new Set();

// Afficher les produits
function displayProducts() {
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return;
    productGrid.innerHTML = '';

    let filteredProducts = products.filter(product => {
        const matchesCategory = currentCategory === 'all' || product.category === currentCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesBrand = selectedBrands.size === 0 || selectedBrands.has(product.brand);
        return matchesCategory && matchesSearch && matchesBrand;
    });

    // Trier les produits
    filteredProducts.sort((a, b) => {
        switch (sortBy) {
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'newest':
                return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
            default:
                return a.name.localeCompare(b.name);
        }
    });

    filteredProducts.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.style.animationDelay = `${index * 0.1}s`;
        let badges = '';
        if (product.isNew) badges += '<span class="badge new">Nouveau</span>';
        if (product.isPopular) badges += '<span class="badge popular">Populaire</span>';
        productCard.innerHTML = `
            <div class="product-image-container"  data-animation="fadeInUp">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                ${badges}
            </div>
            <div class="product-info"  data-animation="fadeInUp">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))} <span>(${product.rating})</span>
                </div>
                <p class="product-price">${product.price}€</p>
                <div class="product-buttons">
                    <button class="view-details-btn" onclick="showProductDetails(${product.id})">Détails</button>
                    <button class="add-to-cart-btn " onclick="addToCart(${product.id})">Ajouter au panier</button>
                </div>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// Afficher les détails du produit
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
        <div class="modal-header">
            <h2>${product.name}</h2>
        </div>
        <div class="modal-body">
            <div class="modal-img">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="modal-details">
                <p class="modal-price"><strong>Prix:</strong> ${product.price}€</p>
                <p class="modal-description"><strong>Description:</strong> ${product.description}</p>
                <button class="add-to-cart-btn " id="modal-add-to-cart">Ajouter au panier</button>
            </div>
        </div>
    `;

    document.getElementById('modal-add-to-cart').addEventListener('click', () => {
        addToCart(product.id);
        document.getElementById('product-modal').style.display = 'none';
        showToast('success', '✅ Succès', `${product.name} ajouté au panier !`);
    });

    const modal = document.getElementById('product-modal');
    modal.style.display = 'block';

    // Donner le focus au bouton fermer (accessibilité)
    const closeBtn = modal.querySelector('.close');
    if (closeBtn) {
        closeBtn.focus();
    }
}

// Ajouter au panier
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    displayCart();
    updateCartCount();
    showToast('success', '✅ Ajouté', `${product.name} a été ajouté au panier.`);
}

// Afficher le panier
function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    if (!cartItems || !totalPrice) return;

    cartItems.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <span class="cart-item-name">${item.name}</span>
                <span class="cart-item-price">${item.price}€ x ${item.quantity}</span>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">Retirer</button>
        `;
        cartItems.appendChild(cartItem);
    });

    totalPrice.textContent = total + '€';
}

// Retirer du panier
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    displayCart();
    updateCartCount();
    showToast('info', 'ℹ️ Retiré', 'Article retiré du panier.');
}

// Sauvegarder le panier
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Mettre à jour le compteur du panier
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (!cartCount) return;
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
}

// Gestion des suggestions de recherche
function handleSearchSuggestions(term, container) {
    if (!container) return;
    container.innerHTML = '';

    if (term.length < 2) {
        container.style.display = 'none';
        return;
    }

    const matches = products.filter(product =>
        product.name.toLowerCase().includes(term.toLowerCase()) ||
        product.brand.toLowerCase().includes(term.toLowerCase())
    ).slice(0, 5);

    if (matches.length === 0) {
        container.style.display = 'none';
        return;
    }

    matches.forEach(product => {
        const div = document.createElement('div');
        div.className = 'search-suggestion';
        div.innerHTML = `
            <img src="${product.image}" alt="${product.name}" style="width: 30px; height: 30px; object-fit: cover; border-radius: 4px;">
            <span>${product.name}</span>
        `;
        div.addEventListener('click', () => {
            showProductDetails(product.id);
            container.style.display = 'none';
        });
        container.appendChild(div);
    });

    container.style.display = 'block';
}

// ===== CARROUSEL PRODUITS VEDETTES =====
let currentSlide = 0;
let featuredProducts = [];
let autoPlayInterval;

function initFeaturedCarousel() {
    // Sélectionner uniquement les produits ajoutés récemment (IDs >= 13)
    featuredProducts = products.filter(product => product.id >= 13);

    if (featuredProducts.length === 0) return;

    const track = document.getElementById('carousel-track');
    const indicators = document.getElementById('carousel-indicators');

    if (!track || !indicators) return;

    // Nettoyer avant d'insérer (au cas où)
    track.innerHTML = '';
    indicators.innerHTML = '';

    // Créer les slides
    featuredProducts.forEach((product, index) => {
        const slide = document.createElement('div');
        slide.className = 'carousel-item';
        slide.innerHTML = `
            <div class="carousel-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="carousel-content">
                <h3>${product.name}</h3>
                <div class="price">${product.price}€</div>
                <div class="rating">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))} <span>(${product.rating})</span></div>
                <p class="description">${product.description}</p>
                <div class="carousel-badges">
                    ${product.isNew ? '<span class="badge new">Nouveau</span>' : ''}
                    ${product.isPopular ? '<span class="badge popular">Populaire</span>' : ''}
                </div>
                <div class="carousel-buttons">
                    <button class="cta-btn" onclick="addToCart(${product.id})">Ajouter au panier</button>
                </div>
            </div>
        `;
        track.appendChild(slide);
    });

    // Créer les indicateurs
    featuredProducts.forEach((_, index) => {
        const indicator = document.createElement('button');
        indicator.className = `carousel-indicator ${index === 0 ? 'active' : ''}`;
        indicator.addEventListener('click', () => goToSlide(index));
        indicators.appendChild(indicator);
    });

    // Gestionnaires d'événements pour les boutons
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');

    if (prevBtn) prevBtn.addEventListener('click', () => changeSlide(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => changeSlide(1));

    // Auto-play
    startAutoPlay();

    // Pause auto-play au survol
    const carousel = document.querySelector('.featured-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopAutoPlay);
        carousel.addEventListener('mouseleave', startAutoPlay);
    }

    // Support du swipe sur mobile
    let startX = 0;
    let endX = 0;

    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    track.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        const diff = startX - endX;

        if (Math.abs(diff) > 50) { // Seuil de swipe
            if (diff > 0) {
                changeSlide(1); // Swipe gauche = slide suivante
            } else {
                changeSlide(-1); // Swipe droite = slide précédente
            }
        }
    });
}

function changeSlide(direction) {
    const maxSlide = featuredProducts.length - 1;
    currentSlide = Math.max(0, Math.min(maxSlide, currentSlide + direction));
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

function updateCarousel() {
    const track = document.getElementById('carousel-track');
    const indicators = document.querySelectorAll('.carousel-indicator');

    if (track) {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

function startAutoPlay() {
    stopAutoPlay(); // S'assurer qu'il n'y a pas d'intervalle actif
    autoPlayInterval = setInterval(() => {
        changeSlide(1);
    }, 5000); // Changement toutes les 5 secondes
}

function stopAutoPlay() {
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        autoPlayInterval = null;
    }
}

// Initialiser le carrousel après le chargement du DOM
function showToast(type, title, message, duration = 3000) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = '✅';
    if (type === 'error') icon = '❌';
    if (type === 'warning') icon = '⚠️';
    if (type === 'info') icon = 'ℹ️';
    
    toast.innerHTML = `
        <div class="toast-icon">${icon}</div>
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
        <button class="toast-close">&times;</button>
    `;
    
    container.appendChild(toast);
    
    const closeBtn = toast.querySelector('.toast-close');
    const timeoutId = setTimeout(() => removeToast(toast), duration);

    closeBtn.addEventListener('click', () => removeToast(toast));
    
    function removeToast(el) {
        clearTimeout(timeoutId);
        el.classList.add('removing');
        setTimeout(() => el.remove(), 300);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // 1. Affichage initial
    displayProducts();
    displayCart();
    updateCartCount();

    // 2. Initialiser les animations et le carrousel après l'affichage des produits
    initScrollAnimations();
    initFeaturedCarousel();

    // 3. Gestion des filtres et recherche
    const searchInput = document.getElementById('search-input');
    const sortSelect = document.getElementById('sort-select');
    const categoryBtns = document.querySelectorAll('.category-btn');
    const brandCheckboxes = document.querySelectorAll('.advanced-filters input[type="checkbox"]');
    const suggestionsContainer = document.getElementById('search-suggestions');

    if (searchInput) {
        searchInput.addEventListener('input', function() {
            searchTerm = this.value;
            displayProducts();
            handleSearchSuggestions(this.value, suggestionsContainer);
        });
    }

    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            sortBy = this.value;
            displayProducts();
        });
    }

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.dataset.category;
            displayProducts();
        });
    });

    brandCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                selectedBrands.add(this.id.replace('brand-', ''));
            } else {
                selectedBrands.delete(this.id.replace('brand-', ''));
            }
            displayProducts();
        });
    });

    // 3. Gestion du Modal
    const modal = document.getElementById('product-modal');
    const closeBtn = document.querySelector('.close');
    const modalContent = document.querySelector('.modal-content');

    if (closeBtn && modal) {
        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            modal.style.display = 'none';
        });
    }

    if (modal) {
        modal.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    if (modalContent) {
        modalContent.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    // Fermer avec Echap
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' || e.key === 'Esc') {
            if (modal && modal.style.display === 'block') {
                modal.style.display = 'none';
            }
            // Fermer aussi le menu mobile si ouvert
            const navContent = document.querySelector('.nav_content');
            const btnMenu = document.getElementById('btn_menu');
            if (navContent && navContent.classList.contains('active')) {
                navContent.classList.remove('active');
                if (btnMenu) btnMenu.setAttribute('aria-expanded', 'false');
            }
        }
    });

    // 4. Menu Burger
    const btnMenu = document.getElementById('btn_menu');
    const closeMenuBtn = document.getElementById('close-menu');
    const navContent = document.querySelector('.nav_content');
    const navLinks = document.querySelectorAll('.nav_content a');

    if (btnMenu && navContent) {
        btnMenu.addEventListener('click', function(e) {
            e.stopPropagation();
            const open = navContent.classList.toggle('active');
            btnMenu.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
    }

    if (closeMenuBtn && navContent) {
        closeMenuBtn.addEventListener('click', function() {
            navContent.classList.remove('active');
            if (btnMenu) btnMenu.setAttribute('aria-expanded', 'false');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navContent) navContent.classList.remove('active');
            if (btnMenu) btnMenu.setAttribute('aria-expanded', 'false');
        });
    });

    document.addEventListener('click', function(e) {
        if (navContent && !navContent.contains(e.target) && e.target !== btnMenu) {
            navContent.classList.remove('active');
            if (btnMenu) btnMenu.setAttribute('aria-expanded', 'false');
        }
        // Fermer suggestions recherche
        if (suggestionsContainer && !searchInput.contains(e.target)) {
            suggestionsContainer.style.display = 'none';
        }
    });

    // 5. Commande et Panier
    const checkoutBtn = document.getElementById('checkout-btn');
    const orderForm = document.getElementById('order-form');

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.length === 0) {
                showToast('warning', '⚠️ Panier vide', 'Votre panier est vide !');
            } else {
                const checkoutForm = document.getElementById('checkout-form');
                if (checkoutForm) checkoutForm.style.display = 'block';
            }
        });
    }

    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const address = document.getElementById('address').value;
            
            showToast('success', '✅ Commande confirmée', `Merci ${name}, votre commande est en cours de traitement.`);
            
            cart = [];
            saveCart();
            displayCart();
            updateCartCount();
            const checkoutForm = document.getElementById('checkout-form');
            if (checkoutForm) checkoutForm.style.display = 'none';
            this.reset();
        });
    }

    // 6. Newsletter
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            showToast('success', '✅ Inscription réussie', `Merci ! Vous recevrez nos offres à ${email}`);
            this.reset();
        });
    }

    // Overlay management
    const overlay = document.getElementById('site-overlay');
    if (overlay) {
        setTimeout(() => {
          overlay.classList.add('fade-out');
          document.body.classList.remove('overlay-active');
          setTimeout(() => {
            overlay.remove();
          }, 800); // Wait for transition to finish
        }, 8000); // 8 seconds delay
    }
});

// ===== ANIMATIONS SCROLL =====
function initScrollAnimations() {
    const serviceCards = document.querySelectorAll('[data-animation="fadeInUp"]');
    if (serviceCards.length === 0) return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry, index) {
        if (entry.isIntersecting) {
          setTimeout(function() {
            entry.target.classList.add('visible');
          }, index * 100);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    serviceCards.forEach(card => {
      observer.observe(card);
    });

    // Trigger animation for elements already in viewport on load
    setTimeout(() => {
      serviceCards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setTimeout(() => {
            card.classList.add('visible');
          }, index * 100);
        }
      });
    }, 100);
}

