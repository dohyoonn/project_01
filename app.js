/**
 * =========================================================================
 * FROM RECIPE TO RESOURCE - WEB APPLICATION LOGIC
 * =========================================================================
 * Handles dynamic content rendering, routing tabs, filtering portfolio items,
 * modal details display, and scroll-activated animations.
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Check if CONFIG is loaded
  if (typeof CONFIG === "undefined") {
    console.error("Configuration data (data.js) is not loaded!");
    return;
  }

  // 2. Initialize Branding content
  initializeBranding();

  // 3. Render dynamic sections
  renderStoryTimeline();
  renderPortfolioGrid();
  renderResourceNotes();
  renderJourneyVideos();
  renderServiceImpact();

  // 4. Setup Event Listeners
  setupTabRouting();
  setupPortfolioFiltering();
  setupModalSystem();
  setupLightboxSystem();
  setupScrollAnimations();
  setupThemeToggle();
});

/**
 * Injects basic branding info into header, hero, and footer sections.
 */
function initializeBranding() {
  const brand = CONFIG.branding;
  
  // Header & Title
  document.getElementById("header-brand-title").textContent = brand.title;
  document.title = `${brand.title} | ${brand.subtitle}`;
  
  // Hero Section
  document.getElementById("hero-tagline").textContent = brand.tagline;
  
  // Footer
  document.getElementById("footer-brand-title").textContent = brand.title;
  
  const emailLink = document.getElementById("footer-email");
  emailLink.href = `mailto:${brand.contactEmail}`;
  emailLink.innerHTML = `<i class="fa-solid fa-envelope"></i> ${brand.contactEmail}`;
}

/**
 * Dynamic rendering of the 5-stage story timeline on the home section.
 */
function renderStoryTimeline() {
  const container = document.getElementById("timeline-container");
  if (!container) return;

  container.innerHTML = CONFIG.storyTimeline.map(item => `
    <div class="timeline-item glass-panel" id="timeline-${item.id}">
      <div class="timeline-dot">
        <i class="fa-solid ${item.icon}"></i>
      </div>
      <div class="timeline-content">
        <div class="timeline-header">
          <div class="timeline-title">
            <h3>${item.title}</h3>
            <h4>${item.subtitle}</h4>
          </div>
          <span class="timeline-stage">Stage ${item.stage}</span>
        </div>
        <p>${item.description}</p>
      </div>
    </div>
  `).join("");
}

/**
 * Dynamic rendering of portfolio dish cards.
 */
function renderPortfolioGrid() {
  const grid = document.getElementById("portfolio-grid");
  if (!grid) return;

  grid.innerHTML = CONFIG.portfolio.map(dish => `
    <div class="portfolio-card glass-panel" data-id="${dish.id}" data-category="${dish.category}">
      <div class="card-img-wrapper">
        <img src="${dish.image}" alt="${dish.name}" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800'">
        <div class="card-category">
          <span class="badge ${
            dish.category === 'Proteins' ? 'terracotta' : 
            (dish.category.includes('Starch') ? 'baking-starch' : 
            (dish.category === 'Plant Systems' ? 'plant-systems' : ''))
          }">${dish.category}</span>
        </div>
      </div>
      <div class="card-info">
        <h3>${dish.name}</h3>
        <p>${dish.summary}</p>
        <div class="card-action">
          View Engineering Details <i class="fa-solid fa-arrow-right-long"></i>
        </div>
      </div>
    </div>
  `).join("");
}

/**
 * Dynamic rendering of the Resource supply-chain and carbon-impact notes.
 */
function renderResourceNotes() {
  const grid = document.getElementById("resource-grid");
  if (!grid) return;

  grid.innerHTML = CONFIG.resourceNotes.map(note => `
    <div class="resource-card glass-panel">
      <div class="resource-header">
        <button class="dish-link" data-dish-id="${note.dishId}">
          <i class="fa-solid fa-utensils"></i> Linked Dish: ${note.dishName}
        </button>
        <h3>${note.resourceAnalyzed}</h3>
        <span class="badge"><i class="fa-solid fa-location-dot"></i> Sourced: ${note.origin}</span>
      </div>
      
      <div class="resource-metrics">
        <div class="metric-row">
          <span class="metric-label">Estimated Carbon Footprint</span>
          <span class="metric-val" style="color: ${note.environmentalMetrics.carbonIntensity.includes('High') ? 'var(--accent-terracotta)' : 'var(--accent-sage)'}">
            ${note.environmentalMetrics.carbonIntensity}
          </span>
        </div>
        <div class="metric-row">
          <span class="metric-label">Water Footprint Impact</span>
          <span class="metric-val">${note.environmentalMetrics.waterFootprint}</span>
        </div>
        <div class="metric-row">
          <span class="metric-label">Waste Profile</span>
          <span class="metric-val">${note.environmentalMetrics.wastePotential}</span>
        </div>
      </div>
      
      <div class="resource-content">
        <h4>Production & Supply System</h4>
        <p>${note.productionMethod}</p>
        
        <h4>Ecological Implications</h4>
        <p>${note.environmentalImpact}</p>
        
        <h4>Resource Systems Engineering Insight</h4>
        <p style="border-top: 1px dashed rgba(92, 132, 110, 0.2); padding-top: 0.75rem; margin-top: 0.75rem; font-style: italic;">
          ${note.systemsInsight}
        </p>
      </div>
    </div>
  `).join("");
}

/**
 * Handles Tab-based page routing without full page reload.
 */
function setupTabRouting() {
  const navLinks = document.querySelectorAll(".nav-link");
  const tabContents = document.querySelectorAll(".tab-content");
  
  function switchTab(tabId) {
    // Deactivate all links & tabs
    navLinks.forEach(link => link.classList.remove("active"));
    tabContents.forEach(tab => tab.classList.remove("active"));
    
    // Activate target link & tab
    const targetLink = document.querySelector(`.nav-link[data-tab="${tabId}"]`);
    const targetTab = document.getElementById(`tab-${tabId}`);
    
    if (targetLink && targetTab) {
      targetLink.classList.add("active");
      targetTab.classList.add("active");
      window.scrollTo(0, 0);
      
      // Trigger scroll animations again for elements in this tab
      setTimeout(triggerScrollCheck, 50);
    }
  }

  // Bind navigation bar clicks
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const tabId = link.getAttribute("data-tab");
      switchTab(tabId);
      // Update hash in URL
      window.location.hash = tabId;
    });
  });

  // Bind Hero "Explore Portfolio" button
  const exploreBtn = document.getElementById("btn-explore-portfolio");
  if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
      switchTab("portfolio");
      window.location.hash = "portfolio";
    });
  }

  // Bind Logo to return home
  const logo = document.getElementById("logo-home");
  if (logo) {
    logo.addEventListener("click", (e) => {
      e.preventDefault();
      switchTab("home");
      window.location.hash = "home";
    });
  }

  // Handle URL hash on load
  if (window.location.hash) {
    const hash = window.location.hash.substring(1);
    if (["home", "portfolio", "journey", "resources", "service"].includes(hash)) {
      switchTab(hash);
    }
  }
}

/**
 * Controls category filtering on the culinary portfolio page.
 */
function setupPortfolioFiltering() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".portfolio-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // Toggle button active classes
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filterVal = btn.getAttribute("data-filter");

      cards.forEach(card => {
        const category = card.getAttribute("data-category");
        if (filterVal === "all" || category === filterVal) {
          card.style.display = "flex";
          // Add quick scale-in transition
          card.style.animation = "tabFadeIn 0.4s ease forwards";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

/**
 * Handles Portfolio detailed Modal system (open/close and data loading).
 */
function setupModalSystem() {
  const modal = document.getElementById("detail-modal");
  const closeBtn = document.getElementById("modal-close");
  const cards = document.querySelectorAll(".portfolio-card");
  
  // Elements to populate in the modal
  const mImg = document.getElementById("modal-img");
  const mBadgeCat = document.getElementById("modal-badge-cat");
  const mTitle = document.getElementById("modal-title");
  const mSummary = document.getElementById("modal-summary");
  const mIngredients = document.getElementById("modal-ingredients");
  const mSelectionReason = document.getElementById("modal-selection-reason");
  const mFreshness = document.getElementById("modal-freshness");
  const mCookingMethod = document.getElementById("modal-cooking-method");
  const mLessonsLearned = document.getElementById("modal-lessons-learned");

  function openModal(dishId) {
    const dish = CONFIG.portfolio.find(d => d.id === dishId);
    if (!dish) return;

    // Load static values
    mImg.src = dish.image;
    mImg.alt = dish.name;
    mImg.setAttribute("data-dish-id", dishId);
    mBadgeCat.textContent = dish.category;
    
    // Toggle color based on category
    if (dish.category === "Proteins") {
      mBadgeCat.className = "badge terracotta";
    } else {
      mBadgeCat.className = "badge";
    }

    mTitle.textContent = dish.name;
    mSummary.textContent = dish.summary;
    mSelectionReason.textContent = dish.details.selectionReason;
    mFreshness.textContent = dish.details.freshness;
    mCookingMethod.textContent = dish.details.cookingMethod;
    mLessonsLearned.textContent = dish.details.lessonsLearned;

    // Build ingredients list
    mIngredients.innerHTML = dish.details.ingredients.map(ing => `
      <li>
        <strong>${ing.name}</strong>
        <span>${ing.details}</span>
      </li>
    `).join("");

    // Display modal
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Disable background scrolling
  }

  function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = ""; // Re-enable background scrolling
  }

  // Bind click event to portfolio cards
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const dishId = card.getAttribute("data-id");
      openModal(dishId);
    });
  });

  // Bind click event to "Linked Dish" buttons on the Resource Notes tab
  document.addEventListener("click", (e) => {
    const linkedBtn = e.target.closest(".dish-link");
    if (linkedBtn) {
      const dishId = linkedBtn.getAttribute("data-dish-id");
      openModal(dishId);
    }
  });

  // Close triggers
  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Close on Escape key press
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
}

/**
 * Sets up Intersection Observer for scrolling fade-in effects on elements like timeline items.
 */
let observer;
function setupScrollAnimations() {
  const items = document.querySelectorAll(".timeline-item");
  
  const options = {
    root: null,
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  observer = new IntersectionObserver((entries, self) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        self.unobserve(entry.target); // Trigger animation only once
      }
    });
  }, options);

  items.forEach(item => {
    observer.observe(item);
  });
}

/**
 * Utility to manually trigger scroll intersection checks if moving between tabs.
 */
function triggerScrollCheck() {
  const items = document.querySelectorAll(".timeline-item:not(.visible)");
  items.forEach(item => {
    const rect = item.getBoundingClientRect();
    const isVisible = (rect.top <= window.innerHeight * 0.85);
    if (isVisible) {
      item.classList.add("visible");
      if (observer) observer.unobserve(item);
    }
  });
}

/**
 * Handles Dark/Light Mode toggle.
 */
function setupThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  if (!themeToggle) return;

  const icon = themeToggle.querySelector("i");

  // Always default to dark theme on page load to ensure the premium dark aesthetic is the first impression
  const currentTheme = "dark";
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  themeToggle.addEventListener("click", () => {
    const activeTheme = document.documentElement.getAttribute("data-theme");
    let newTheme = "dark";
    if (activeTheme === "dark") {
      newTheme = "light";
    }
    
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(newTheme);
  });

  function updateThemeIcon(theme) {
    if (theme === "light") {
      icon.className = "fa-solid fa-moon";
    } else {
      icon.className = "fa-solid fa-sun";
    }
  }
}

/**
 * Dynamic rendering of culinary journey video cards.
 */
function renderJourneyVideos() {
  const grid = document.getElementById("journey-grid");
  if (!grid) return;

  if (!CONFIG.journeyVideos || CONFIG.journeyVideos.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 2rem;">No videos loaded in the journey yet.</p>`;
    return;
  }

  grid.innerHTML = CONFIG.journeyVideos.map(video => `
    <div class="journey-card glass-panel fade-in-on-scroll">
      <div class="journey-video-wrapper">
        <video controls preload="metadata">
          <source src="${video.videoPath}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="journey-card-body">
        <h3>${video.title}</h3>
        <p>${video.description}</p>
        ${video.scientificNote ? `
          <div class="journey-scientific-box">
            <strong>Molecular Process</strong>
            ${video.scientificNote}
          </div>
        ` : ''}
      </div>
    </div>
  `).join("");

  // Play listener reset: makes media-fragment videos play from beginning on first click
  const videos = grid.querySelectorAll("video");
  videos.forEach(video => {
    let hasReset = false;
    video.addEventListener("play", () => {
      const source = video.querySelector("source");
      if (source && source.getAttribute("src").includes("#t=") && !hasReset) {
        video.currentTime = 0;
        hasReset = true;
      }
    });
  });
}

/**
 * Dynamic rendering of Service & Impact section content.
 */
function renderServiceImpact() {
  const grid = document.getElementById("service-grid");
  if (!grid) return;

  const data = CONFIG.serviceImpact;
  if (!data || !data.themes) return;

  // Set page headers dynamically
  const title = document.getElementById("service-title");
  const desc = document.getElementById("service-description");
  if (title) title.textContent = data.title;
  if (desc) desc.textContent = data.description;

  grid.innerHTML = data.themes.map(theme => `
    <div class="service-card glass-panel fade-in-on-scroll">
      <div class="service-card-content">
        <div class="service-card-header">
          <h3>${theme.title}</h3>
          <h4>${theme.subtitle}</h4>
        </div>
        <p class="service-card-desc">${theme.description}</p>
        <div class="service-reflection-box">
          <strong>Reflection & Impact</strong>
          <p>${theme.reflection}</p>
        </div>
      </div>
      <div class="service-gallery-container">
        <div class="service-gallery">
          ${theme.images.map(img => `
            <div class="service-gallery-item" onclick="openLightbox('${img}')">
              <img src="${img}" alt="${theme.title} Activity" loading="lazy">
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `).join("");
}

/**
 * Setup Lightbox modal system for image enlargement.
 */
function setupLightboxSystem() {
  const modal = document.getElementById("lightbox-modal");
  const closeBtn = document.getElementById("lightbox-close");
  const modalImg = document.getElementById("lightbox-img");

  if (!modal || !closeBtn || !modalImg) return;

  window.openLightbox = function(src) {
    modalImg.src = src;
    modal.classList.add("active");
  };

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });

  // Close with Esc key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      modal.classList.remove("active");
    }
  });
}

