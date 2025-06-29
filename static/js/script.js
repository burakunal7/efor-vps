// Custom JavaScript for Efor Bilişim Website

document.addEventListener('DOMContentLoaded', function() {
    
    // DOM elementlerini cache'le
    const elements = {
        navbar: document.querySelector('.navbar'),
        navbarToggler: document.querySelector('.navbar-toggler'),
        navbarCollapse: document.querySelector('.navbar-collapse'),
        navLinks: document.querySelectorAll('.navbar-nav .nav-link'),
        contactForm: document.querySelector('form[method="POST"]'),
        cards: document.querySelectorAll('.feature-card, .service-card, .mission-card, .value-card, .team-card, .category-card, .pricing-card'),
        counters: document.querySelectorAll('.counter'),
        serviceCards: document.querySelectorAll('.service-card, .service-detail-card'),
        pricingCards: document.querySelectorAll('.pricing-card'),
        formFields: document.querySelectorAll('.form-control, .form-select'),
        serviceSelect: document.getElementById('service'),
        messageTextarea: document.getElementById('message'),
        phoneInput: document.getElementById('phone'),
        charCount: document.getElementById('charCount'),
        submitBtn: document.getElementById('submitBtn'),
        resetBtn: document.getElementById('resetBtn'),
        loadingOverlay: document.getElementById('loading-overlay'),
        pageContent: document.querySelector('.page-content'),
        heroSection: document.querySelector('.hero-section'),
        scrollToTopBtn: null
    };
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (!elements.navbar) return;
        
        if (window.scrollY > 50) {
            elements.navbar.style.backgroundColor = 'rgba(18, 18, 18, 0.98)';
            elements.navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
            elements.navbar.style.zIndex = '1050';
        } else {
            elements.navbar.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
            elements.navbar.style.boxShadow = 'none';
            elements.navbar.style.zIndex = '1050';
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form validation
    if (elements.contactForm) {
        elements.contactForm.addEventListener('submit', function(e) {
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            let isValid = true;
            
            // Reset previous error states
            [name, email, message].forEach(field => {
                if (field) {
                    field.classList.remove('is-invalid');
                }
            });
            
            // Validate name
            if (!name.value.trim()) {
                name.classList.add('is-invalid');
                isValid = false;
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim() || !emailRegex.test(email.value)) {
                email.classList.add('is-invalid');
                isValid = false;
            }
            
            // Validate message
            if (!message.value.trim()) {
                message.classList.add('is-invalid');
                isValid = false;
            }
            
            if (!isValid) {
                e.preventDefault();
                showNotification('Lütfen tüm gerekli alanları doldurun.', 'error');
            }
        });
    }

    // Add loading animation to cards
    elements.cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('loading');
    });

    // Counter animation for statistics
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16); // 60fps
                let current = 0;

                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current) + '+';
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target + '+';
                    }
                };

                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, observerOptions);

    elements.counters.forEach(counter => {
        observer.observe(counter);
    });

    // Service card hover effects
    elements.serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Pricing card selection
    elements.pricingCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove active class from all cards
            elements.pricingCards.forEach(c => c.classList.remove('active'));
            // Add active class to clicked card
            this.classList.add('active');
        });
    });

    // Mobile menu toggle enhancement
    if (elements.navbarToggler && elements.navbarCollapse) {
        elements.navbarToggler.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle show class
            elements.navbarCollapse.classList.toggle('show');
            
            // Toggle aria-expanded attribute
            const isExpanded = elements.navbarCollapse.classList.contains('show');
            elements.navbarToggler.setAttribute('aria-expanded', isExpanded);
            
            // Add/remove collapsed class to navbar
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                if (isExpanded) {
                    navbar.classList.add('navbar-expanded');
                } else {
                    navbar.classList.remove('navbar-expanded');
                }
            }
        });

        // Close mobile menu when clicking on a link
        elements.navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                if (elements.navbarCollapse.classList.contains('show')) {
                    elements.navbarCollapse.classList.remove('show');
                    elements.navbarToggler.setAttribute('aria-expanded', 'false');
                    
                    const navbar = document.querySelector('.navbar');
                    if (navbar) {
                        navbar.classList.remove('navbar-expanded');
                    }
                }
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!elements.navbarToggler.contains(e.target) && !elements.navbarCollapse.contains(e.target)) {
                if (elements.navbarCollapse.classList.contains('show')) {
                    elements.navbarCollapse.classList.remove('show');
                    elements.navbarToggler.setAttribute('aria-expanded', 'false');
                    
                    const navbar = document.querySelector('.navbar');
                    if (navbar) {
                        navbar.classList.remove('navbar-expanded');
                    }
                }
            }
        });

        // Close mobile menu on window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 991) {
                elements.navbarCollapse.classList.remove('show');
                elements.navbarToggler.setAttribute('aria-expanded', 'false');
                
                const navbar = document.querySelector('.navbar');
                if (navbar) {
                    navbar.classList.remove('navbar-expanded');
                }
            }
        });
    }

    // Scroll to top button
    elements.scrollToTopBtn = document.createElement('button');
    elements.scrollToTopBtn.innerHTML = '<i class="bi bi-arrow-up"></i>';
    elements.scrollToTopBtn.className = 'scroll-to-top';
    elements.scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: var(--teal-primary);
        color: var(--dark-bg);
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        font-size: 1.2rem;
    `;

    document.body.appendChild(elements.scrollToTopBtn);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            elements.scrollToTopBtn.style.opacity = '1';
            elements.scrollToTopBtn.style.visibility = 'visible';
        } else {
            elements.scrollToTopBtn.style.opacity = '0';
            elements.scrollToTopBtn.style.visibility = 'hidden';
        }
    });

    elements.scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Form field focus effects
    elements.formFields.forEach(field => {
        field.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        field.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });

    // Service type selection enhancement
    if (elements.serviceSelect) {
        elements.serviceSelect.addEventListener('change', function() {
            if (this.value) {
                this.classList.add('selected');
            } else {
                this.classList.remove('selected');
            }
        });
    }

    // Contact form auto-resize textarea
    if (elements.messageTextarea) {
        elements.messageTextarea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = this.scrollHeight + 'px';
        });
    }

    // Add CSS for invalid form fields
    const style = document.createElement('style');
    style.textContent = `
        .form-control.is-invalid,
        .form-select.is-invalid {
            border-color: var(--danger-color) !important;
            box-shadow: 0 0 0 0.2rem rgba(255, 107, 107, 0.25) !important;
        }
        
        .pricing-card.active {
            border-color: var(--teal-primary);
            transform: scale(1.05);
        }
        
        .scroll-to-top:hover {
            background: var(--teal-secondary) !important;
            transform: translateY(-2px);
        }
        
        .form-group.focused .form-label {
            color: var(--teal-primary);
        }
        
        .form-select.selected {
            border-color: var(--teal-primary);
        }
    `;
    document.head.appendChild(style);

    // Notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
        `;

        // Set background color based on type
        switch(type) {
            case 'success':
                notification.style.backgroundColor = 'var(--teal-primary)';
                break;
            case 'error':
                notification.style.backgroundColor = 'var(--danger-color)';
                break;
            case 'warning':
                notification.style.backgroundColor = 'var(--warning-color)';
                notification.style.color = 'var(--dark-bg)';
                break;
            default:
                notification.style.backgroundColor = 'var(--dark-card)';
        }

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 5000);
    }

    // Make notification function globally available
    window.showNotification = showNotification;

    // Initialize tooltips if Bootstrap is available
    if (typeof bootstrap !== 'undefined') {
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        });

        // Initialize popovers
        var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl)
        });
    }

    // Add parallax effect to hero section
    if (elements.heroSection) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            elements.heroSection.style.transform = `translateY(${rate}px)`;
        });
    }

    // Lazy loading for images (if any are added later)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    console.log('Efor Bilişim web sitesi başarıyla başlatıldı!');
});

// Contact Form Validation and Enhancement
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const messageTextarea = document.getElementById('message');
    const charCount = document.getElementById('charCount');
    const submitBtn = document.getElementById('submitBtn');
    const resetBtn = document.getElementById('resetBtn');

    // Character counter for message
    if (messageTextarea && charCount) {
        messageTextarea.addEventListener('input', function() {
            const length = this.value.length;
            charCount.textContent = length;
            
            if (length > 900) {
                charCount.classList.add('text-warning');
            } else {
                charCount.classList.remove('text-warning');
            }
        });
    }

    // Form validation
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            if (!this.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
            } else {
                // Show loading state
                submitBtn.innerHTML = '<i class="bi bi-hourglass-split me-2"></i>Gönderiliyor...';
                submitBtn.disabled = true;
            }
            
            this.classList.add('was-validated');
        });
    }

    // Reset button
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            if (confirm('Formu temizlemek istediğinizden emin misiniz?')) {
                contactForm.reset();
                contactForm.classList.remove('was-validated');
                charCount.textContent = '0';
                charCount.classList.remove('text-warning');
                submitBtn.innerHTML = '<i class="bi bi-send me-2"></i>Mesaj Gönder';
                submitBtn.disabled = false;
            }
        });
    }

    // Phone number formatting
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            let value = this.value.replace(/\D/g, '');
            if (value.length > 0) {
                if (value.startsWith('90')) {
                    value = value.substring(2);
                }
                if (value.length > 0) {
                    value = '+90 ' + value;
                }
            }
            this.value = value;
        });
    }

    // Auto-resize textarea
    if (messageTextarea) {
        messageTextarea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
        });
    }
});

// Loading Animation
document.addEventListener('DOMContentLoaded', function() {
    const loadingOverlay = document.getElementById('loading-overlay');
    const pageContent = document.querySelector('.page-content');
    
    // Minimum loading time (2 seconds)
    const minLoadingTime = 2000;
    const startTime = Date.now();
    
    // Hide loading overlay when page is fully loaded
    function hideLoading() {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minLoadingTime - elapsedTime);
        
        setTimeout(() => {
            if (loadingOverlay) {
                loadingOverlay.classList.add('fade-out');
                
                // Remove loading overlay after animation
                setTimeout(() => {
                    loadingOverlay.style.display = 'none';
                }, 500);
            }
            
            // Show page content with animation
            if (pageContent) {
                pageContent.style.opacity = '1';
                pageContent.style.transform = 'translateY(0)';
            }
        }, remainingTime);
    }
    
    // Check if page is already loaded
    if (document.readyState === 'complete') {
        hideLoading();
    } else {
        // Wait for all resources to load
        window.addEventListener('load', hideLoading);
    }
    
    // Fallback: Hide loading after 5 seconds maximum
    setTimeout(() => {
        if (loadingOverlay && !loadingOverlay.classList.contains('fade-out')) {
            hideLoading();
        }
    }, 5000);
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Feature cards visibility check
document.addEventListener('DOMContentLoaded', function() {
    const featureCards = document.querySelectorAll('.feature-card');
    const featureIcons = document.querySelectorAll('.feature-icon');
    
    console.log('Feature cards found:', featureCards.length);
    console.log('Feature icons found:', featureIcons.length);
    
    featureCards.forEach((card, index) => {
        console.log(`Feature card ${index + 1}:`, card);
        const icon = card.querySelector('.feature-icon i');
        const title = card.querySelector('h4');
        const description = card.querySelector('p');
        
        console.log(`Card ${index + 1} - Icon:`, icon);
        console.log(`Card ${index + 1} - Title:`, title);
        console.log(`Card ${index + 1} - Description:`, description);
    });
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Page Transition Loading
function showPageTransition() {
    const loadingOverlay = document.getElementById('loading-overlay');
    if (loadingOverlay) {
        loadingOverlay.style.display = 'flex';
        loadingOverlay.classList.remove('fade-out');
    }
}

// Add loading animation to navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="/"], a[href^="http"]');
    
    navLinks.forEach(link => {
        // Skip external links and admin links
        if (link.hostname !== window.location.hostname || 
            link.href.includes('/admin') || 
            link.href.includes('#')) {
            return;
        }
        
        link.addEventListener('click', function(e) {
            // Don't show loading for same page links
            if (link.href === window.location.href) {
                return;
            }
            
            showPageTransition();
        });
    });
});

// Flash messages auto-hide
const alerts = document.querySelectorAll('.alert');
alerts.forEach(alert => {
    // Alert'i navbar'ın altında kalmayacak şekilde konumlandır
    alert.style.position = 'relative';
    alert.style.zIndex = '1040';
    alert.style.marginTop = '100px';
    
    // 5 saniye sonra otomatik gizle
    setTimeout(() => {
        if (alert && alert.parentNode) {
            alert.classList.remove('show');
            setTimeout(() => {
                if (alert && alert.parentNode) {
                    alert.parentNode.removeChild(alert);
                }
            }, 300);
        }
    }, 5000);
}); 