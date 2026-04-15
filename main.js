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

// Afficher les produits par sections Amazon-like
function displayProducts() {
    const productsSections = document.getElementById('products-sections');
    const allProductsView = document.getElementById('all-products-view');
    const productGrid = document.getElementById('product-grid');

    if (!productsSections) return;

    // Si on est en vue "Tous", afficher la grille complète
    if (currentCategory === 'all' && searchTerm === '' && selectedBrands.size === 0) {
        productsSections.style.display = 'block';
        allProductsView.style.display = 'none';
        displayProductsBySections();
    } else {
        // Vue filtrée : afficher la grille complète
        productsSections.style.display = 'none';
        allProductsView.style.display = 'block';
        displayAllProductsGrid();
    }
}

// Afficher les produits par sections (vue Amazon-like)
function displayProductsBySections() {
    const productsSections = document.getElementById('products-sections');
    productsSections.innerHTML = '';

    const categories = [
        { id: 'informatique', name: 'Informatique', emoji: '', description: 'Ordinateurs, tablettes et accessoires tech' },
        { id: 'gaming', name: '🎮 Gaming', emoji: '🎮', description: 'Consoles, accessoires et équipements gaming' },
        { id: 'audio', name: '🎵 Audio', emoji: '🎵', description: 'Casques, enceintes et équipements audio' }
    ];

    categories.forEach((category, categoryIndex) => {
        const categoryProducts = products.filter(p => p.category === category.id);

        if (categoryProducts.length === 0) return;

        categoryProducts.sort((a, b) => {
            if (a.isPopular && !b.isPopular) return -1;
            if (!a.isPopular && b.isPopular) return 1;
            if (a.isNew && !b.isNew) return -1;
            if (!a.isNew && b.isNew) return 1;
            return b.rating - a.rating;
        });

        const section = document.createElement('div');
        section.className = 'category-section';
        section.id = category.id;
        section.style.animationDelay = `${categoryIndex * 0.2}s`;

        const sectionHeader = `
            <div class="section-header">
                <div class="section-title">
                    <h3>${category.emoji} ${category.name}</h3>
                    <p>${category.description}</p>
                </div>
            </div>
        `;

        let sectionHTML = sectionHeader;

        if (category.id === 'gaming') {
            const heroProduct = categoryProducts[0];
            const scrollerProducts = categoryProducts.slice(1, 9);
            const heroBadges = `${heroProduct.isNew ? '<span class="badge new">Nouveau</span>' : ''}${heroProduct.isPopular ? '<span class="badge bestseller">🏆 Best-seller</span>' : ''}`;

            sectionHTML += `
                <div class="horizontal-section">
                    <div class="hero-card compact" onclick="showProductDetails(${heroProduct.id})">
                        <div class="hero-image compact">
                            <img src="${heroProduct.image}" alt="${heroProduct.name}">
                            <div class="hero-badge-group">${heroBadges}</div>
                        </div>
                        <div class="hero-copy compact">
                            <span class="hero-category">${category.name}</span>
                            <h4 class="hero-title compact">${heroProduct.name}</h4>
                            <div class="hero-price compact">${heroProduct.price}€</div>
                            <p class="hero-description compact">${heroProduct.description.substring(0, 100)}...</p>
                            <button class="add-to-cart-btn compact" title="Ajouter au panier" onclick="event.stopPropagation(); addToCart(${heroProduct.id})"><i class="fas fa-cart-plus"></i></button>
                        </div>
                    </div>
                    <div class="horizontal-scroll">
                        ${scrollerProducts.map((product, index) => {
                            const badges = `${product.isNew ? '<span class="badge new">Nouveau</span>' : ''}${product.isPopular ? '<span class="badge bestseller">🏆 Best-seller</span>' : ''}`;
                            return `
                                <div class="horizontal-card" onclick="showProductDetails(${product.id})">
                                    <img src="${product.image}" alt="${product.name}">
                                    <div class="horizontal-card-info">
                                        <strong>${product.name}</strong>
                                        <span>${product.price}€</span>
                                    </div>
                                    <div class="horizontal-card-badges">${badges}</div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        } else if (category.id === 'audio') {
            const photoProducts = categoryProducts.slice(0, 8);
            sectionHTML += `
                <div class="photo-grid">
                    ${photoProducts.map(product => {
                        const badges = `${product.isNew ? '<span class="badge new">Nouveau</span>' : ''}${product.isPopular ? '<span class="badge bestseller">🏆 Best-seller</span>' : ''}`;
                        return `
                            <div class="photo-card" onclick="showProductDetails(${product.id})">
                                <img src="${product.image}" alt="${product.name}">
                                <div class="photo-overlay">
                                    <div>
                                        <h4>${product.name}</h4>
                                        <span>${product.price}€</span>
                                        <div class="photo-tags">${badges}</div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            `;
        } else {
            const heroProduct = categoryProducts[0];
            const sideProducts = categoryProducts.slice(1, 3);
            const gridProducts = categoryProducts.slice(3, 10);
            const heroBadges = `${heroProduct.isNew ? '<span class="badge new">Nouveau</span>' : ''}${heroProduct.isPopular ? '<span class="badge bestseller">🏆 Best-seller</span>' : ''}`;
            const heroPrice = `<span class="price-current">${heroProduct.price}€</span>`;
            const heroHighlights = ['Puissance stable', 'Finition haut de gamme', 'Design moderne'];

            sectionHTML += `
                <div class="category-showcase compact">
                    <div class="hero-card compact" onclick="showProductDetails(${heroProduct.id})">
                        <div class="hero-image compact">
                            <img src="${heroProduct.image}" alt="${heroProduct.name}">
                            <div class="hero-badge-group">${heroBadges}</div>
                        </div>
                        <div class="hero-copy compact">
                            <span class="hero-category">${category.name}</span>
                            <h4 class="hero-title compact">${heroProduct.name}</h4>
                            <div class="hero-price compact">${heroPrice}</div>
                            <p class="hero-description compact">${heroProduct.description.substring(0, 100)}...</p>
                            <ul class="hero-highlights compact">
                                ${heroHighlights.map(item => `<li>• ${item}</li>`).join('')}
                            </ul>
                            <button class="add-to-cart-btn compact" title="Ajouter au panier" onclick="event.stopPropagation(); addToCart(${heroProduct.id})"><i class="fas fa-cart-plus"></i></button>
                        </div>
                    </div>
                    <div class="side-cards compact">
                        ${sideProducts.map(product => {
                            const sideBadges = `${product.isNew ? '<span class="badge new">Nouveau</span>' : ''}${product.isPopular ? '<span class="badge bestseller">🏆 Bet-seller</span>' : ''}`;
                            return `
                                <div class="side-card compact" onclick="showProductDetails(${product.id})">
                                    <div class="side-card-head">
                                        <img class="side-card-img" src="${product.image}" alt="${product.description}" width="100">
                                        <h4>${product.name}</h4>
                                        <div class="side-card-price">${product.price}€</div>
                                    </div>
                                    <p>${product.description.substring(0, 70)}...</p>
                                    <div class="side-card-tags">${sideBadges}</div>
                                    <button class="add-to-cart-btn compact" title="Ajouter au panier" onclick="event.stopPropagation(); addToCart(${product.id})"><i class="fas fa-cart-plus"></i></button>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
                <div class="category-products compact">
                    ${gridProducts.map(product => {
                        const badges = `${product.isNew ? '<span class="badge new">Nouveau</span>' : ''}${product.isPopular ? '<span class="badge bestseller">🏆 Best-seller</span>' : ''}`;
                        return `
                            <div class="product-card category-card compact" onclick="showProductDetails(${product.id})">
                                <div class="product-image-container compact">
                                    <img src="${product.image}" alt="${product.name}" class="product-image lazy-image" loading="lazy">
                                    <div class="product-badges">${badges}</div>
                                </div>
                                <div class="product-info compact">
                                    <h4 class="product-name">${product.name}</h4>
                                    <div class="product-rating">
                                        ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
                                        <span>(${Math.floor(product.rating * 100 + Math.random() * 200)})</span>
                                    </div>
                                    <div class="product-price">${product.price}€</div>
                                    <p class="product-description compact">${product.description.substring(0, 70)}...</p>
                                    <button class="add-to-cart-btn compact" title="Ajouter au panier" onclick="event.stopPropagation(); addToCart(${product.id})"><i class="fas fa-cart-plus"></i></button>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            `;
        }

        section.innerHTML = sectionHTML;
        productsSections.appendChild(section);
    });
}

// Afficher tous les produits en grille (pour les filtres)
function displayAllProductsGrid() {
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
            case 'rating':
                return b.rating - a.rating;
            case 'newest':
                return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
            default:
                return a.name.localeCompare(b.name);
        }
    });

    if (filteredProducts.length === 0) {
        productGrid.innerHTML = '<p class="no-results">Aucun produit ne correspond à vos critères.</p>';
        return;
    }

    filteredProducts.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.style.animationDelay = `${index * 0.05}s`;

        let badges = '';
        if (product.isNew) badges += '<span class="badge new">Nouveau</span>';
        if (product.isPopular) badges += '<span class="badge bestseller">🏆 Best-seller</span>';

        // Prix avec réduction simulée
        let priceDisplay = `<span class="price-current">${product.price}€</span>`;
        if (product.id <= 5 || Math.random() > 0.6) {
            const discount = Math.floor(Math.random() * 25) + 10;
            const originalPrice = Math.round(product.price / (1 - discount/100));
            priceDisplay = `
                <span class="price-current">${product.price}€</span>
                <span class="price-original">${originalPrice}€</span>
                <span class="price-discount">-${discount}%</span>
            `;
        }

        productCard.innerHTML = `
            <div class="product-image-container" data-animation="fadeInUp">
                <img src="${product.image}" alt="${product.name}" class="product-image lazy-image" loading="lazy">
                <div class="product-badges">
                    ${badges}
                </div>
            </div>
            <div class="product-info" data-animation="fadeInUp">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))} <span>(${product.rating})</span>
                </div>
                <div class="product-price">
                    ${priceDisplay}
                </div>
                <p class="product-description">${product.description}</p>
                <div class="product-features">
                    ${product.category === 'gaming' ? '🎮 Parfait pour le gaming' :
                      product.category === 'audio' ? '🎵 Qualité audio premium' :
                      'Technologie de pointe'}
                </div>
                <div class="product-buttons">
                    <button class="view-details-btn" onclick="showProductDetails(${product.id})">Détails</button>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">ajouter au panier</button>
                </div>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// Basculer vers une catégorie spécifique
function switchToCategory(category) {
    currentCategory = category;
    searchTerm = '';
    selectedBrands.clear();

    // Mettre à jour les boutons actifs
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });

    // Réinitialiser les filtres
    document.querySelectorAll('.advanced-filters input[type="checkbox"]').forEach(cb => {
        cb.checked = false;
    });

    // Remettre le select à "name"
    document.getElementById('sort-select').value = 'name';

    displayProducts();
    updateActiveFilters();
}
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    analytics.trackProductView(productId);

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
    displayMiniCart();
    updateCartCount();
    analytics.trackAddToCart(productId);
    showToast('success', '✅ Ajouté', `${product.name} a été ajouté au panier.`);
}

// Afficher le panier
function displayCart() {
    // Anciennes références pour compatibilité
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    
    // Nouvelles références pour la section panier
    const cartBody = document.getElementById('cart-body');
    const emptyCartMsg = document.getElementById('empty-cart-msg');
    const cartItemsTable = document.getElementById('cart-items-table');

    // Remplir l'ancienne structure si elle existe
    if (cartItems && totalPrice) {
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

    // Remplir la nouvelle structure tableau
    if (cartBody) {
        cartBody.innerHTML = '';
        if (cart.length === 0) {
            if (emptyCartMsg) emptyCartMsg.style.display = 'block';
            if (cartItemsTable) cartItemsTable.style.display = 'none';
        } else {
            if (emptyCartMsg) emptyCartMsg.style.display = 'none';
            if (cartItemsTable) cartItemsTable.style.display = 'table';
            
            cart.forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td><strong>${item.name}</strong></td>
                    <td>${item.price}€</td>
                    <td>
                        <input type="number" value="${item.quantity}" min="1" 
                            onchange="updateQuantity(${item.id}, this.value)" style="width: 50px; padding: 5px;">
                    </td>
                    <td><strong>${(item.price * item.quantity).toFixed(2)}€</strong></td>
                    <td>
                        <button class="btn-small" onclick="removeFromCart(${item.id})" style="background: #d32f2f; color: white; padding: 5px 10px; border: none; border-radius: 4px; cursor: pointer;">
                            Retirer
                        </button>
                    </td>
                `;
                cartBody.appendChild(row);
            });
        }
    }
}

// Afficher le mini-panier
function displayMiniCart() {
    const miniCartItems = document.getElementById('cartItemsMini');
    const cartTotal = document.getElementById('cartTotal');
    if (!miniCartItems || !cartTotal) return;

    miniCartItems.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;

        const miniCartItem = document.createElement('div');
        miniCartItem.className = 'mini-cart-item';
        miniCartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="mini-cart-item-info">
                <span class="mini-cart-item-name">${item.name}</span>
                <span class="mini-cart-item-price">${item.price}€ x ${item.quantity}</span>
            </div>
            <button class="mini-cart-remove" onclick="removeFromCart(${item.id})">Retirer</button>
        `;
        miniCartItems.appendChild(miniCartItem);
    });

    cartTotal.textContent = total.toFixed(2) + '€';
}

// Retirer du panier
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    displayCart();
    displayMiniCart();
    updateCartCount();
    showToast('info', 'ℹ️ Retiré', 'Article retiré du panier.');
}

// Fermer le mini-cart
function closeMiniCart() {
    const miniCart = document.getElementById('miniCart');
    if (miniCart) {
        miniCart.style.opacity = '0';
        miniCart.style.visibility = 'hidden';
        miniCart.style.transform = 'translateY(-10px)';
        miniCart.classList.remove('visible');
    }
}
window.closeMiniCart = closeMiniCart;

// Mettre à jour la quantité d'un article
function updateQuantity(productId, newQuantity) {
    newQuantity = parseInt(newQuantity);
    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }
    
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        saveCart();
        displayCart();
        displayMiniCart();
        updateCartCount();
    }
}

// Sauvegarder le panier
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Mettre à jour le compteur du panier
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    // Mettre à jour tous les compteurs de panier
    const cartCounters = [
        'cartCount',      // Header desktop
        'mobile-cart-count', // Menu mobile
        'cart-count'      // Ancien ID pour compatibilité
    ];
    
    cartCounters.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = totalItems;
            element.style.display = totalItems > 0 ? 'flex' : 'none';
        }
    });
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

// Lazy loading des images
function initLazyLoading() {
    const images = document.querySelectorAll('.product-image');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                // Les images sont déjà chargées, mais on peut ajouter un effet de fade-in
                img.style.opacity = '1';
                imageObserver.unobserve(img);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });
    
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        imageObserver.observe(img);
    });
}
function initCountdownTimer() {
    const countdownElement = document.getElementById('countdown-timer');
    if (!countdownElement) return;

    // Définir la date de fin (2 heures et 15 minutes à partir de maintenant)
    const endTime = new Date(Date.now() + (2 * 60 * 60 * 1000) + (15 * 60 * 1000));

    function updateCountdown() {
        const now = new Date();
        const timeLeft = endTime - now;

        if (timeLeft <= 0) {
            countdownElement.innerHTML = '<span>OFFRE TERMINÉE</span>';
            return;
        }

        const hours = Math.floor(timeLeft / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Analytics simple
class AnalyticsTracker {
    constructor() {
        this.events = JSON.parse(localStorage.getItem('analytics')) || [];
    }

    trackEvent(event, data) {
        const eventData = {
            event,
            data,
            timestamp: Date.now()
        };
        this.events.push(eventData);
        localStorage.setItem('analytics', JSON.stringify(this.events));
        console.log('Analytics:', eventData);
    }

    trackProductView(productId) {
        this.trackEvent('product_view', { productId });
    }

    trackAddToCart(productId) {
        this.trackEvent('add_to_cart', { productId });
    }

    trackSearch(query) {
        this.trackEvent('search', { query });
    }

    getStats() {
        const stats = {
            totalViews: this.events.filter(e => e.event === 'product_view').length,
            totalCartAdds: this.events.filter(e => e.event === 'add_to_cart').length,
            totalSearches: this.events.filter(e => e.event === 'search').length,
            uniqueProductsViewed: new Set(this.events.filter(e => e.event === 'product_view').map(e => e.data.productId)).size
        };
        return stats;
    }
}

const analytics = new AnalyticsTracker();

// Fonction pour afficher/masquer le dashboard analytics
function toggleAnalytics() {
    const dashboard = document.getElementById('analytics-dashboard');
    if (dashboard.style.display === 'none' || dashboard.style.display === '') {
        updateAnalyticsDisplay();
        dashboard.style.display = 'block';
    } else {
        dashboard.style.display = 'none';
    }
}

// Mettre à jour l'affichage des analytics
function updateAnalyticsDisplay() {
    const stats = analytics.getStats();
    document.getElementById('analytics-views').textContent = stats.totalViews;
    document.getElementById('analytics-cart').textContent = stats.totalCartAdds;
    document.getElementById('analytics-searches').textContent = stats.totalSearches;
    document.getElementById('analytics-unique').textContent = stats.uniqueProductsViewed;
}
let currentSlide = 0;
let featuredProducts = [];
let autoPlayInterval;

function truncateWords(text, limit = 12) {
    const words = text.trim().split(/\s+/);
    return words.length <= limit ? text : `${words.slice(0, limit).join(' ')}...`;
}

function initFeaturedCarousel() {
    // Sélectionner uniquement les produits vedettes (populaires ou nouveaux)
    featuredProducts = products.filter(product => product.isPopular || product.isNew);

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
                <p class="description">${truncateWords(product.description, 12)}</p>
                <div class="carousel-badges">
                    ${product.isNew ? '<span class="badge new">Nouveau</span>' : ''}
                    ${product.isPopular ? '<span class="badge popular">Populaire</span>' : ''}
                </div>
                <div class="carousel-buttons">
                    <button class="description-toggle" type="button" onclick="showProductDetails(${product.id})">Voir plus</button>
                    <button class="cta-carousel" onclick="addToCart(${product.id})" aria-label="Ajouter au panier">+</button>
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
    displayMiniCart();
    updateCartCount();
    initCountdownTimer();
    updateAnalyticsDisplay();
    updateAnalyticsDisplay();

    // 2. Initialiser les animations et le carrousel après l'affichage des produits
    initScrollAnimations();
    initFeaturedCarousel();
    initLazyLoading();

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
            if (this.value.length > 2) {
                analytics.trackSearch(this.value);
            }
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

    // 4. Menu Mobile
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

    if (mobileMenuToggle && mobileNav) {
        mobileMenuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            const isOpen = mobileNav.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active', isOpen);
            mobileMenuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            
            // Empêcher le scroll du body quand le menu est ouvert
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });
    }

    if (mobileMenuClose && mobileNav) {
        mobileMenuClose.addEventListener('click', function() {
            mobileNav.classList.remove('active');
            if (mobileMenuToggle) {
                mobileMenuToggle.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            }
            document.body.style.overflow = '';
        });
    }

    // Fermer le menu mobile en cliquant sur un lien
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mobileNav) mobileNav.classList.remove('active');
            if (mobileMenuToggle) {
                mobileMenuToggle.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            }
            document.body.style.overflow = '';
        });
    });

    // Fermer le menu mobile en cliquant en dehors
    document.addEventListener('click', function(e) {
        // Gestion du menu mobile
        if (mobileNav && !mobileNav.contains(e.target) && e.target !== mobileMenuToggle && !mobileMenuToggle.contains(e.target)) {
            mobileNav.classList.remove('active');
            if (mobileMenuToggle) {
                mobileMenuToggle.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            }
            document.body.style.overflow = '';
        }
        
        // Fermer le mini-cart en cliquant en dehors (sauf si on clique sur les éléments du miniCart)
        const miniCart = document.getElementById('miniCart');
        const cartBtn = document.getElementById('cartBtn');
        if (miniCart && cartBtn) {
            // Si le mini-cart est visible ET qu'on clique pas sur le miniCart ET pas sur le cartBtn
            if ((miniCart.style.visibility === 'visible' || miniCart.classList.contains('visible')) && 
                !miniCart.contains(e.target) && !cartBtn.contains(e.target)) {
                closeMiniCart();
            }
        }
        
        // Fermer suggestions recherche
        if (suggestionsContainer && !searchInput.contains(e.target)) {
            suggestionsContainer.style.display = 'none';
        }
    });

    // Gestion du mini-cart sur desktop/mobile
    const cartBtn = document.getElementById('cartBtn');
    const cartContainer = document.querySelector('.cart-container');
    const miniCart = document.getElementById('miniCart');
    
    if (cartBtn && miniCart) {
        cartBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Vérifier l'état actuel du mini-cart
            const isVisible = miniCart.style.visibility === 'visible' || miniCart.classList.contains('visible');
            
            if (isVisible) {
                // Fermer le mini-cart
                closeMiniCart();
            } else {
                // Ouvrir le mini-cart
                miniCart.style.opacity = '1';
                miniCart.style.visibility = 'visible';
                miniCart.style.transform = 'translateY(0)';
                miniCart.classList.add('visible');
                displayMiniCart(); // Mettre à jour le contenu
            }
        });
    }

    // Fermer le mini-cart en cliquant en dehors
    if (miniCart) {
        document.addEventListener('click', function(e) {
            // Si on clique pas sur le mini-cart ET pas sur le bouton du panier
            if (miniCart && !miniCart.contains(e.target) && (!cartBtn || !cartBtn.contains(e.target))) {
                // Vérifier qu'on n'est pas en train de gérer des clics internes
                if (miniCart.style.visibility === 'visible') {
                    closeMiniCart();
                }
            }
        });
    }

    // 5. Gestion du panier et de la commande
    const checkoutBtn = document.getElementById('checkout-btn');
    const orderForm = document.getElementById('order-form');
    const cancelOrderBtn = document.getElementById('cancel-order');
    const checkoutMiniBtn = document.getElementById('checkoutMiniBtn');

    // Mettre à jour le résumé du panier
    function updateCartSummary() {
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = subtotal > 0 ? 9.99 : 0;
        const total = subtotal + shipping;

        document.getElementById('subtotal').textContent = subtotal.toFixed(2) + '€';
        document.getElementById('shipping').textContent = shipping.toFixed(2) + '€';
        document.getElementById('total-amount').textContent = total.toFixed(2) + '€';
        document.getElementById('review-total').textContent = total.toFixed(2) + '€';
        document.getElementById('review-subtotal').textContent = subtotal.toFixed(2) + '€';
        document.getElementById('review-shipping').textContent = shipping.toFixed(2) + '€';

        // Remplir le résumé de la commande
        const reviewDiv = document.getElementById('order-items-review');
        if (reviewDiv) {
            reviewDiv.innerHTML = cart.map(item => `
                <div class="review-item">
                    <span>${item.name}</span>
                    <span>${item.quantity}x ${item.price}€</span>
                </div>
            `).join('');
        }
    }

    // Afficher le formulaire de commande - PLUS UTILISÉ (géré par hashchange)
    function displayCheckoutForm() {
        closeMiniCart();
        const checkoutFormSection = document.getElementById('checkout-form');
        
        if (checkoutFormSection) {
            checkoutFormSection.style.display = 'block';
            updateCartSummary();
            checkoutFormSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    window.displayCheckoutForm = displayCheckoutForm;

    // Anciens event listeners sur les boutons (checkoutBtn n'existe plus, checkoutMiniBtn est maintenant un lien)
    // Les boutons de navigation vers checkout sont maintenant gérés par handleHashNavigation()
    
    // Bouton "Procéder à la commande" depuis le panier
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.length === 0) {
                showToast('warning', '⚠️ Panier vide', 'Votre panier est vide !');
            } else {
                displayCheckoutForm();
            }
        });
    }

    // Bouton "Commander" depuis le mini-panier (TRANSFORMÉ EN LIEN - géré par handleHashNavigation)
    // L'ancien event listener n'est plus utilisé car c'est maintenant un <a> tag
    /* ANCIEN CODE (conservé en commentaire)
    if (checkoutMiniBtn) {
        checkoutMiniBtn.addEventListener('click', function() {
            if (cart.length === 0) {
                showToast('warning', '⚠️ Panier vide', 'Votre panier est vide !');
            } else {
                closeMiniCart();
                displayCheckoutForm();
            }
        });
    }
    */

    // Bouton "Voir le panier" depuis le mini-panier (déjà géré par onclick)
    // Bouton Annuler
    if (cancelOrderBtn) {
        cancelOrderBtn.addEventListener('click', function() {
            const checkoutFormSection = document.getElementById('checkout-form');
            if (checkoutFormSection) {
                checkoutFormSection.style.display = 'none';
            }
        });
    }

    // Soumettre la commande
    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const address = document.getElementById('address').value;
            const city = document.getElementById('city').value;
            const postalCode = document.getElementById('postalCode').value;

            // Validation simple
            if (!firstName || !lastName || !email || !phone || !address || !city || !postalCode) {
                showToast('error', '⚠️ Erreur', 'Veuillez remplir tous les champs requis.');
                return;
            }

            // Simuler le traitement de la commande
            const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) + 9.99;
            
            // Message de confirmation
            showToast('success', '✅ Commande confirmée', 
                `Merci ${firstName} ${lastName}!\n\nVotre commande de ${totalAmount.toFixed(2)}€ a été confirmée.\nUn email de confirmation a été envoyé à ${email}.`);

            // Vider le panier
            cart = [];
            saveCart();
            displayCart();
            updateCartCount();

            // Fermer le formulaire et le panier
            const checkoutFormSection = document.getElementById('checkout-form');
            const cartSection = document.getElementById('cart');
            if (checkoutFormSection) checkoutFormSection.style.display = 'none';
            if (cartSection) cartSection.style.display = 'none';

            // Réinitialiser le formulaire
            this.reset();
        });
    }

    // 6. Newsletter
    // Overlay management - visible only for real visitors with JS enabled
    const overlay = document.getElementById('site-overlay');
    if (overlay) {
        // Show overlay after minimal delay (content already parsed for bots)
        setTimeout(() => {
          overlay.style.display = 'block';
          overlay.setAttribute('aria-hidden', 'false');
          document.body.classList.add('overlay-active');
          
          // Hide after 8 seconds
          setTimeout(() => {
            overlay.classList.add('fade-out');
            document.body.classList.remove('overlay-active');
            setTimeout(() => {
              overlay.style.display = 'none';
              overlay.setAttribute('aria-hidden', 'true');
            }, 800);
          }, 8000);
        }, 100); // 100ms delay - content is already accessible to bots
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

// ===== GESTION DE LA NAVIGATION PAR ANCRE =====
function handleHashNavigation() {
    const hash = window.location.hash;
    const checkoutForm = document.getElementById('checkout-form');
    
    if (hash === '#checkout-form' && checkoutForm) {
        closeMiniCart();
        checkoutForm.style.display = 'block';
        updateCartSummary();
    }
}

// Au chargement de la page
handleHashNavigation();

// Quand l'URL change
window.addEventListener('hashchange', handleHashNavigation);

