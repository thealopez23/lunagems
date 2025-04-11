let cartCount = parseInt(sessionStorage.getItem('cartCount')) || 0;
window.onload = () => {
  document.querySelector('.cart-count').textContent = cartCount;
}

const itemAddToCart = (productName) =>{
  alert(`${productName} has been added to the cart.`);
  cartCount++;
  sessionStorage.setItem('cartCount', cartCount);
  document.querySelector('.cart-count').textContent = cartCount;
}

document.addEventListener('DOMContentLoaded', function() {
  // Initialize Lucide icons
  lucide.createIcons();
  
  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  const logo = document.querySelector('.logo');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Mobile menu toggle
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuIcon = mobileMenuButton.querySelector('i');
  
  mobileMenuButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    
    if (mobileMenu.classList.contains('active')) {
      mobileMenuIcon.setAttribute('data-lucide', 'x');
    } else {
      mobileMenuIcon.setAttribute('data-lucide', 'menu');
    }
    
    lucide.createIcons();
  });
  
  // Mobile dropdown toggle
  const mobileDropdowns = document.querySelectorAll('.mobile-dropdown');
  
  mobileDropdowns.forEach(dropdown => {
    const header = dropdown.querySelector('.mobile-dropdown-header');
    
    header.addEventListener('click', function() {
      dropdown.classList.toggle('active');
    });
  });
  
  // Newsletter form
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterSuccess = document.getElementById('newsletter-success');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulate form submission
      setTimeout(function() {
        newsletterForm.style.display = 'none';
        newsletterSuccess.style.display = 'block';
      }, 1000);
    });
  }
  
  // Contact form
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  const newMessageBtn = document.getElementById('new-message-btn');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulate form submission
      setTimeout(function() {
        contactForm.style.display = 'none';
        formSuccess.style.display = 'block';
      }, 1000);
    });
    
    if (newMessageBtn) {
      newMessageBtn.addEventListener('click', function() {
        formSuccess.style.display = 'none';
        contactForm.style.display = 'block';
        contactForm.reset();
      });
    }
  }
  
  // Products page functionality
  if (window.location.pathname.includes('products')) {
    // Product data
    const products = [
      // Rings (12)
      { id: 1, name: "Diamond Eternity Ring", price: 74406.45, image: "img/Rings/Ring1.png", category: "rings", featured: true },
      { id: 2, name: "Platinum Wedding Band", price: 62950.19, image: "img/Rings/Ring2.png", category: "rings", featured: false },
      { id: 3, name: "Amethyst Cocktail Ring", price: 45766.88, image: "img/Rings/Ring3.png", category: "rings", featured: false },
      { id: 4, name: "Golden Sunburst Ring", price: 80134.63, image: "img/Rings/Ring4.png", category: "rings", featured: false },
      { id: 5, name: "Emerald Vintage Ring", price: 91690.07, image: "img/Rings/Ring5.png", category: "rings", featured: false },
      { id: 6, name: "Rose Gold Promise Ring", price: 57222.94, image: "img/Rings/Ring6.png", category: "rings", featured: false },
      { id: 7, name: "Pearl Halo Ring", price: 51494.33, image: "img/Rings/Ring7.png", category: "rings", featured: false },
      { id: 8, name: "Blue Sapphire Royal Ring", price: 74406.81, image: "img/Rings/Ring8.png", category: "rings", featured: false },
      { id: 9, name: "Infinity Knot Ring", price: 40038.12, image: "img/Rings/Ring9.png", category: "rings", featured: false },
      { id: 10, name: "Silver Wave Band", price: 28582.56, image: "img/Rings/Ring10.png", category: "rings", featured: false },
      { id: 11, name: "Ruby Gemstone Ring", price: 51502.89, image: "img/Rings/Ring11.png", category: "rings", featured: false },
      { id: 12, name: "Sapphire Halo Ring", price: 61174.29, image: "img/Rings/Ring12.png", category: "rings", featured: false },
    
      // Necklaces (12)
      { id: 13, name: "Pearl Necklace", price: 51494.67, image: "img/Necklaces/Necklace1.png", category: "necklaces", featured: true },
      { id: 14, name: "Emerald Pendant", price: 85862.39, image: "img/Necklaces/Necklace2.png", category: "necklaces", featured: false },
      { id: 15, name: "Rose Gold Chain", price: 22854.05, image: "img/Necklaces/Necklace3.png", category: "necklaces", featured: false },
      { id: 16, name: "Sapphire Drop Pendant", price: 57222.28, image: "img/Necklaces/Necklace4.png", category: "necklaces", featured: false },
      { id: 17, name: "Diamond Choker", price: 148970.91, image: "img/Necklaces/Necklace5.png", category: "necklaces", featured: false },
      { id: 18, name: "Golden Heart Locket", price: 68678.47, image: "img/Necklaces/Necklace6.png", category: "necklaces", featured: false },
      { id: 19, name: "Turquoise Bead Necklace", price: 42902.83, image: "img/Necklaces/Necklace7.png", category: "necklaces", featured: false },
      { id: 20, name: "Crystal Crescent Necklace", price: 34310.14, image: "img/Necklaces/Necklace8.png", category: "necklaces", featured: false },
      { id: 21, name: "Infinity Gold Chain", price: 51494.99, image: "img/Necklaces/Necklace9.png", category: "necklaces", featured: false },
      { id: 22, name: "Lapis Lazuli Pendant", price: 74406.22, image: "img/Necklaces/Necklace10.png", category: "necklaces", featured: false },
      { id: 23, name: "Garnet Heart Necklace", price: 57222.91, image: "img/Necklaces/Necklace11.png", category: "necklaces", featured: false },
      { id: 24, name: "Opal Solitaire Necklace", price: 45766.19, image: "img/Necklaces/Necklace12.png", category: "necklaces", featured: false },
    
      // Earrings (12)
      { id: 25, name: "Sapphire Earrings", price: 42902.36, image: "img/Earrings/Earring1.png", category: "earrings", featured: true },
      { id: 26, name: "Ruby Stud Earrings", price: 51494.08, image: "img/Earrings/Earring2.png", category: "earrings", featured: false },
      { id: 27, name: "Opal Drop Earrings", price: 37174.61, image: "img/Earrings/Earring3.png", category: "earrings", featured: false },
      { id: 28, name: "Diamond Hoop Earrings", price: 91690.75, image: "img/Earrings/Earring4.png", category: "earrings", featured: false },
      { id: 29, name: "Pearl Teardrop Earrings", price: 68678.89, image: "img/Earrings/Earring5.png", category: "earrings", featured: false },
      { id: 30, name: "Emerald Cluster Studs", price: 40038.41, image: "img/Earrings/Earring6.png", category: "earrings", featured: false },
      { id: 31, name: "Moonstone Halo Earrings", price: 51494.52, image: "img/Earrings/Earring7.png", category: "earrings", featured: false },
      { id: 32, name: "Golden Twist Hoops", price: 34310.96, image: "img/Earrings/Earring8.png", category: "earrings", featured: false },
      { id: 33, name: "Rose Gold Ear Climbers", price: 42902.03, image: "img/Earrings/Earring9.png", category: "earrings", featured: false },
      { id: 34, name: "Amethyst Stud Earrings", price: 48630.69, image: "img/Earrings/Earring10.png", category: "earrings", featured: false },
      { id: 35, name: "Turquoise Hoop Earrings", price: 34310.14, image: "img/Earrings/Earring11.png", category: "earrings", featured: false },
      { id: 36, name: "Cubic Zirconia Studs", price: 45766.48, image: "img/Earrings/Earring12.png", category: "earrings", featured: false },
    
      // Bracelets (12)
      { id: 37, name: "Gold Bracelet", price: 34310.27, image: "img/Bracelets/Bracelet1.png", category: "bracelets", featured: true },
      { id: 38, name: "Diamond Tennis Bracelet", price: 143142.58, image: "img/Bracelets/Bracelet2.png", category: "bracelets", featured: false },
      { id: 39, name: "Silver Charm Bracelet", price: 19990.84, image: "img/Bracelets/Bracelet3.png", category: "bracelets", featured: false },
      { id: 40, name: "Emerald Cuff Bracelet", price: 57222.15, image: "img/Bracelets/Bracelet4.png", category: "bracelets", featured: false },
      { id: 41, name: "Infinity Link Bracelet", price: 45766.37, image: "img/Bracelets/Bracelet5.png", category: "bracelets", featured: false },
      { id: 42, name: "Turquoise Beaded Bracelet", price: 34310.60, image: "img/Bracelets/Bracelet6.png", category: "bracelets", featured: false },
      { id: 43, name: "Rose Gold Bangle", price: 74406.93, image: "img/Bracelets/Bracelet7.png", category: "bracelets", featured: false },
      { id: 44, name: "Crystal Studded Cuff", price: 62950.44, image: "img/Bracelets/Bracelet8.png", category: "bracelets", featured: false },
      { id: 45, name: "Vintage Pearl Bracelet", price: 51494.76, image: "img/Bracelets/Bracelet9.png", category: "bracelets", featured: false },
      { id: 46, name: "Platinum Knot Bracelet", price: 91690.30, image: "img/Bracelets/Bracelet10.png", category: "bracelets", featured: false },
      { id: 47, name: "Silver Bangle Bracelet", price: 57222.42, image: "img/Bracelets/Bracelet11.png", category: "bracelets", featured: false },
      { id: 48, name: "Gold Link Bracelet", price: 45766.23, image: "img/Bracelets/Bracelet12.png", category: "bracelets", featured: false },
    ];
    
    
    // Elements
    const productGrid = document.getElementById('product-grid');
    const categoryTitle = document.getElementById('category-title');
    const filterButtons = document.querySelectorAll('.filter-button');
    const sortSelect = document.getElementById('sort-select');
    const filterToggle = document.getElementById('filter-toggle');
    const filters = document.getElementById('filters');
    const noResults = document.getElementById('no-results');
    const resetFilters = document.getElementById('reset-filters');
    const minPriceInput = document.getElementById('min-price');
    const maxPriceInput = document.getElementById('max-price');
    const priceMin = document.getElementById('price-min');
    const priceMax = document.getElementById('price-max');
    const sliderRange = document.getElementById('slider-range');

    // Filter state
    let selectedCategory = 'all';
    let selectedSort = 'featured';
    let priceRange = [0, 150000];

    // Check URL parameters for category
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    if (categoryParam) {
      selectedCategory = categoryParam.toLowerCase();
      filterButtons.forEach(button => {
        button.classList.toggle('active', button.dataset.category === selectedCategory);
      });
      categoryTitle.textContent = selectedCategory === 'all' ? 'All Jewelry' : 
        selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1);
    }

    // Update slider range visuals
    function updateSliderRange() {
      const minValue = Number(minPriceInput.value);
      const maxValue = Number(maxPriceInput.value);
      const minPercent = (minValue / 150000) * 100;
      const maxPercent = (maxValue / 150000) * 100;
      sliderRange.style.left = `${minPercent}%`;
      sliderRange.style.width = `${maxPercent - minPercent}%`;
      priceMin.textContent = `₱${minValue.toLocaleString()}`;
      priceMax.textContent = `₱${maxValue.toLocaleString()}`;
      priceRange = [minValue, maxValue];
      renderProducts();
    }

    // Slider input events
    minPriceInput.addEventListener('input', function() {
      if (Number(minPriceInput.value) > Number(maxPriceInput.value)) {
        minPriceInput.value = maxPriceInput.value;
      }
      updateSliderRange();
    });

    maxPriceInput.addEventListener('input', function() {
      if (Number(maxPriceInput.value) < Number(minPriceInput.value)) {
        maxPriceInput.value = minPriceInput.value;
      }
      updateSliderRange();
    });

    // Render products
    function renderProducts() {
      const filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
        return matchesCategory && matchesPrice;
      });

      const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (selectedSort) {
          case 'price-low': return a.price - b.price;
          case 'price-high': return b.price - a.price;
          case 'featured': return b.featured === a.featured ? 0 : b.featured ? 1 : -1;
          default: return 0;
        }
      });

      productGrid.innerHTML = '';
      if (sortedProducts.length === 0) {
        productGrid.style.display = 'none';
        noResults.style.display = 'block';
      } else {
        productGrid.style.display = 'grid';
        noResults.style.display = 'none';
        sortedProducts.forEach(product => {
          const productCard = document.createElement('div');
          productCard.className = 'product-card';
          productCard.innerHTML = `
            <a href="#" class="product-image">
              <img src="${product.image}" alt="${product.name}">
            </a>
            <div class="product-info">
              <div class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</div>
              <a href="#" class="product-name">${product.name}</a>
              <div class="product-price">₱${product.price.toLocaleString()}</div>
              <button class="btn btn-primary btn-full" onclick="itemAddToCart(${product.name})">
                <i data-lucide="shopping-bag"></i> Add to Cart
              </button>
            </div>
          `;
          const button = productCard.querySelector('button');
          button.addEventListener('click', () => itemAddToCart(product.name));
          productGrid.appendChild(productCard);
          productGrid.appendChild(productCard);
        });
        lucide.createIcons();
      }
    }

    // Initialize products and slider
    updateSliderRange();
    renderProducts();

    // Filter button click event
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        selectedCategory = this.dataset.category;
        categoryTitle.textContent = selectedCategory === 'all' ? 'All Jewelry' : 
          selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1);
        renderProducts();
      });
    });

    // Sort select change event
    sortSelect.addEventListener('change', function() {
      selectedSort = this.value;
      renderProducts();
    });

    // Filter toggle click event (mobile)
    filterToggle.addEventListener('click', function() {
      filters.classList.toggle('active');
    });

    // Reset filters click event
    resetFilters.addEventListener('click', function() {
      selectedCategory = 'all';
      priceRange = [0, 150000];
      minPriceInput.value = 0;
      maxPriceInput.value = 150000;
      filterButtons.forEach(button => {
        button.classList.toggle('active', button.dataset.category === 'all');
      });
      categoryTitle.textContent = 'All Jewelry';
      updateSliderRange();
    });
  }
});