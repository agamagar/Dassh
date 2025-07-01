// Enhanced JavaScript for DasshAI - Modern Dassh-Specific Interactive Features

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initSmoothScroll();
    initIntersectionObserver();
    initThemeToggle();
    initButtonRipples();
    initScaleAccordion();
    initFAQAccordion();
    initContactModal();

    setInitialTheme();
    initTestimonials();
    initSecurity();
    initIntegrations();
    initEnhancedDemoButtons();
    initEnhancedContactForm();
    initVideoPlayer();
});

// Theme management
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) {
        console.error('Theme toggle button not found');
        return;
    }
    
    const sunIcon = themeToggle.querySelector('.sun-icon');
    const moonIcon = themeToggle.querySelector('.moon-icon');
    
    if (!sunIcon || !moonIcon) {
        console.error('Theme toggle icons not found');
        return;
    }
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        console.log('Theme toggle clicked:', currentTheme, '->', newTheme);
        
        // Set new theme
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Toggle icons
        if (newTheme === 'dark') {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
        
        // Add smooth transition
        document.documentElement.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            document.documentElement.style.transition = '';
        }, 300);
    });
}



// Set initial theme based on user preference
function setInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    document.documentElement.setAttribute('data-theme', theme);
    
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = themeToggle.querySelector('.sun-icon');
    const moonIcon = themeToggle.querySelector('.moon-icon');
    
    if (theme === 'dark') {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }
}

// Scale tabs functionality
function initScaleAccordion() {
    const scaleSection = document.querySelector('.scale-section');
    if (!scaleSection) return;
    
    const triggers = scaleSection.querySelectorAll('.accordion-trigger');
    const contents = scaleSection.querySelectorAll('.accordion-content');
    
    if (triggers.length === 0) {
        return;
    }
    
    triggers.forEach((trigger) => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const isCurrentlyActive = trigger.classList.contains('active');
            const target = trigger.getAttribute('data-target');
            const targetContent = document.getElementById(target);
            
            // If clicking on already active accordion, do nothing (keep one always open)
            if (isCurrentlyActive) {
                return;
            }
            
            // Close all other accordions in this section
            triggers.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-expanded', 'false');
            });
            
            contents.forEach(c => {
                c.classList.remove('active');
            });
            
            // Open clicked accordion
            trigger.classList.add('active');
            trigger.setAttribute('aria-expanded', 'true');
            
            if (targetContent) {
                targetContent.classList.add('active');
                
                // Reset and animate accordion features
                const features = targetContent.querySelectorAll('.accordion-feature');
                features.forEach((feature, index) => {
                    feature.style.opacity = '0';
                    feature.style.transform = 'translateY(10px)';
                    feature.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                    
                    setTimeout(() => {
                        feature.style.opacity = '1';
                        feature.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        });
    });
}

// FAQ accordion functionality 
function initFAQAccordion() {
    const faqSection = document.querySelector('.faq-section');
    if (!faqSection) return;
    
    const triggers = faqSection.querySelectorAll('.accordion-trigger');
    const contents = faqSection.querySelectorAll('.accordion-content');
    
    if (triggers.length === 0) {
        return;
    }
    
    triggers.forEach((trigger) => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const isCurrentlyActive = trigger.classList.contains('active');
            const target = trigger.getAttribute('data-target');
            const targetContent = document.getElementById(target);
            
            // If clicking on already active accordion, do nothing (keep one always open)
            if (isCurrentlyActive) {
                return;
            }
            
            // Close all other accordions in this section
            triggers.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-expanded', 'false');
            });
            
            contents.forEach(c => {
                c.classList.remove('active');
            });
            
            // Open clicked accordion
            trigger.classList.add('active');
            trigger.setAttribute('aria-expanded', 'true');
            
            if (targetContent) {
                targetContent.classList.add('active');
                
                // Reset and animate accordion features
                const features = targetContent.querySelectorAll('.accordion-feature');
                features.forEach((feature, index) => {
                    feature.style.opacity = '0';
                    feature.style.transform = 'translateY(10px)';
                    feature.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                    
                    setTimeout(() => {
                        feature.style.opacity = '1';
                        feature.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        });
    });
}

// Enhanced Navigation with Modern Effects
function initNavigation() {
    const nav = document.querySelector('.nav');
    let lastScroll = 0;
    let ticking = false;
    
    function updateNavigation() {
        const currentScroll = window.pageYOffset;
        
        // Enhanced backdrop blur based on scroll
        if (currentScroll > 10) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        // Progressive opacity and blur effects
        const scrollPercent = Math.min(currentScroll / 100, 1);
        
        // Use CSS variables for consistent theming
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            nav.style.background = `rgba(14, 15, 17, ${0.8 + (scrollPercent * 0.15)})`;
        } else {
            nav.style.background = `rgba(255, 255, 255, ${0.8 + (scrollPercent * 0.15)})`;
        }
        
        // Smooth hide/show nav based on scroll direction
        if (currentScroll > lastScroll && currentScroll > 80) {
            nav.style.transform = 'translateY(-100%)';
            nav.style.transition = 'transform 0.3s ease-in-out';
        } else {
            nav.style.transform = 'translateY(0)';
            nav.style.transition = 'transform 0.3s ease-in-out';
        }
        
        lastScroll = currentScroll;
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateNavigation);
            ticking = true;
        }
    });
}

// Smooth scroll behavior
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Intersection Observer for fade-in animations
function initIntersectionObserver() {
    const options = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger animations for cards
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
                
                // Only observe once
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    // Observe elements
    const elements = document.querySelectorAll('.ai-stack-card, .scale-feature, .demo-placeholder');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// Button ripple effects
function initButtonRipples() {
    const buttons = document.querySelectorAll('.button-primary, .nav-button.primary, .demo-cta');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('using-keyboard');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('using-keyboard');
});

// Enhanced hover effects for cards
document.querySelectorAll('.ai-stack-card, .scale-feature, .demo-placeholder').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    
    if (hero) {
        hero.style.backgroundPositionY = rate + 'px';
    }
});

// Add CSS for additional effects
const style = document.createElement('style');
style.textContent = `
    .visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .nav.scrolled {
        backdrop-filter: blur(20px);
    }
    
    [data-theme="dark"] .nav.scrolled {
        background: rgba(14, 15, 17, 0.95);
    }
    
    .nav.scrolled {
        background: rgba(255, 255, 255, 0.95);
    }
    
    .using-keyboard *:focus {
        outline: 2px solid var(--primary) !important;
        outline-offset: 2px !important;
    }
    
    .ai-stack-card,
    .scale-feature,
    .demo-placeholder {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .avatar {
        transition: all 0.2s ease;
    }
    
    .avatar:hover {
        transform: scale(1.1) translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    
    .button-primary {
        position: relative;
        overflow: hidden;
    }
    
    .hero-title {
        animation: fadeInUp 0.8s ease-out;
    }
    
    .hero-description {
        animation: fadeInUp 0.8s ease-out 0.2s both;
    }
    
    .hero-actions {
        animation: fadeInUp 0.8s ease-out 0.4s both;
    }
    
    .hero-users {
        animation: fadeInUp 0.8s ease-out 0.6s both;
    }
    
    .scale-tab {
        position: relative;
        overflow: hidden;
    }
    
    .scale-tab::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
        transition: left 0.5s ease;
    }
    
    .scale-tab:hover::before {
        left: 100%;
    }
    
    @media (prefers-reduced-motion: reduce) {
        * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    }
`;
document.head.appendChild(style);

// Performance optimization: Debounce scroll events
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        
        if (callNow) func.apply(context, args);
    };
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Remove loading states
    document.querySelectorAll('.loading').forEach(el => {
        el.classList.remove('loading');
    });
});

// Error handling for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        this.style.display = 'none';
        console.warn('Failed to load image:', this.src);
    });
});

// Console easter egg
console.log(`
🚀 Dassh - AI-powered hiring tool
✨ Features: Dark mode, smooth animations, responsive design, interactive tabs
🛠️ Tech: Vanilla JS, CSS Custom Properties, Intersection Observer API
🎯 Purpose: Transform recruitment with AI precision
`);

// Export for potential use
window.Dassh = {
    theme: {
        toggle: () => document.getElementById('theme-toggle').click(),
        set: (theme) => {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        },
        get: () => document.documentElement.getAttribute('data-theme')
    },
    tabs: {
        switchTo: (target) => {
            const tab = document.querySelector(`[data-target="${target}"]`);
            if (tab) tab.click();
        }
    }
};



// Contact modal functionality
function initContactModal() {
    const demoBtns = document.querySelectorAll('#demo-btn, .demo-btn');
    const modal = document.getElementById('contact-modal');
    const modalClose = document.getElementById('modal-close');
    const cancelBtn = document.getElementById('cancel-btn');
    const contactForm = document.getElementById('contact-form');
    
    // Open modal for all demo buttons
    demoBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Focus first input
            setTimeout(() => {
                document.getElementById('name').focus();
            }, 300);
        });
    });
    
    // Close modal function
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Reset form
        setTimeout(() => {
            contactForm.reset();
            // Remove any success messages
            const existingSuccess = modal.querySelector('.form-success');
            if (existingSuccess) {
                existingSuccess.remove();
            }
        }, 300);
    }
    
    // Close modal events
    modalClose.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);
    
    // Close on overlay click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    // Form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            company: formData.get('company'),
            role: formData.get('role'),
            message: formData.get('message')
        };
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Requesting...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'form-success';
            successMessage.innerHTML = `
                <p><strong>Thank you ${data.name}!</strong></p>
                <p>We've received your demo request and will schedule a personalized demo within 24 hours.</p>
            `;
            
            // Replace form with success message
            const modalBody = modal.querySelector('.modal-body');
            modalBody.innerHTML = '';
            modalBody.appendChild(successMessage);
            
            // Auto close after 3 seconds
            setTimeout(() => {
                closeModal();
                
                // Restore form after modal closes
                setTimeout(() => {
                    modalBody.innerHTML = `
                        <form class="contact-form" id="contact-form">
                            <div class="form-group">
                                <label for="name">Full Name</label>
                                <input type="text" id="name" name="name" required>
                            </div>
                            <div class="form-group">
                                <label for="email">Email Address</label>
                                <input type="email" id="email" name="email" required>
                            </div>
                            <div class="form-group">
                                <label for="company">Company</label>
                                <input type="text" id="company" name="company">
                            </div>
                            <div class="form-group">
                                <label for="role">Your Role</label>
                                <select id="role" name="role">
                                    <option value="">Select your role</option>
                                    <option value="hr-manager">HR Manager</option>
                                    <option value="recruiter">Recruiter</option>
                                    <option value="ceo">CEO/Founder</option>
                                    <option value="hiring-manager">Hiring Manager</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="message">Message</label>
                                <textarea id="message" name="message" rows="4" placeholder="Tell us about your hiring needs..."></textarea>
                            </div>
                            <div class="form-actions">
                                <button type="button" class="btn-secondary" id="cancel-btn">Cancel</button>
                                <button type="submit" class="button-primary">Request Demo</button>
                            </div>
                        </form>
                    `;
                    
                    // Reinitialize form events
                    const newForm = document.getElementById('contact-form');
                    const newCancelBtn = document.getElementById('cancel-btn');
                    
                    newCancelBtn.addEventListener('click', closeModal);
                    newForm.addEventListener('submit', arguments.callee); // Reattach submit handler
                }, 300);
            }, 3000);
            
        }, 2000); // Simulate 2 second delay
    });
}

// Testimonials section animations
function initTestimonials() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const testimonialStats = document.querySelectorAll('.testimonial-stat');
    
    // Animate testimonial cards on scroll
    const observeTestimonials = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    testimonialCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        observeTestimonials.observe(card);
    });
    
    // Animate stats counters
    const observeStats = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('.stat-number');
                const finalValue = statNumber.textContent;
                
                if (finalValue.includes('+')) {
                    const numValue = parseInt(finalValue.replace(/\D/g, ''));
                    animateCounter(statNumber, 0, numValue, finalValue.includes('k') ? 'k+' : '+', 1000);
                } else if (finalValue.includes('★')) {
                    const numValue = parseFloat(finalValue.replace('★', ''));
                    animateCounter(statNumber, 0, numValue, '★', 1000);
                }
                
                observeStats.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    testimonialStats.forEach((stat) => {
        observeStats.observe(stat);
    });
}

// Counter animation function
function animateCounter(element, start, end, suffix, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            element.textContent = end.toString() + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toString() + suffix;
        }
    }, 16);
}



// Security section animations
function initSecurity() {
    const securityFeatures = document.querySelectorAll('.security-feature');
    const complianceItems = document.querySelectorAll('.compliance-item');
    
    // Animate security features
    const observeFeatures = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, {
        threshold: 0.2
    });
    
    securityFeatures.forEach((feature, index) => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateX(-30px)';
        feature.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observeFeatures.observe(feature);
    });
    
    // Animate compliance items
    const observeCompliance = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
            }
        });
    }, {
        threshold: 0.2
    });
    
    complianceItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px) scale(0.95)';
        item.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        observeCompliance.observe(item);
    });
}

// Integrations section animations
function initIntegrations() {
    const integrationCategories = document.querySelectorAll('.integration-category');
    const integrationItems = document.querySelectorAll('.integration-item');
    
    // Animate integration categories
    const observeCategories = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    integrationCategories.forEach((category, index) => {
        category.style.opacity = '0';
        category.style.transform = 'translateY(30px)';
        category.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        observeCategories.observe(category);
    });
    
    // Add hover effects to integration items
    integrationItems.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            const logo = item.querySelector('.integration-logo');
            logo.style.transform = 'scale(1.1) rotate(5deg)';
            logo.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', () => {
            const logo = item.querySelector('.integration-logo');
            logo.style.transform = 'scale(1) rotate(0deg)';
        });
        
        // Animate items on scroll
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        const observeItems = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        entry.target.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                    }, Math.random() * 300); // Stagger animations
                }
            });
        }, {
            threshold: 0.2
        });
        
        observeItems.observe(item);
    });
}

// Enhanced demo button functionality
function initEnhancedDemoButtons() {
    // Select demo buttons but exclude video section and video player controls
    const allDemoButtons = document.querySelectorAll('.demo-btn, .button-primary');
    
    allDemoButtons.forEach(button => {
        // Skip video player controls and video section
        if (button.closest('.video-section') ||
            button.closest('.video-controls') || 
            button.closest('.video-center-play') || 
            button.id === 'playButton' || 
            button.id === 'centerPlayButton' ||
            button.classList.contains('play-btn') ||
            button.classList.contains('volume-btn') ||
            button.classList.contains('speed-btn')) {
            return;
        }
        
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Add ripple effect
            createRippleEffect(button, e);
            
            // Show contact modal after ripple animation
            setTimeout(() => {
                const modal = document.getElementById('contact-modal');
                if (modal) {
                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                    
                    // Focus on first input
                    const firstInput = modal.querySelector('input');
                    if (firstInput) {
                        setTimeout(() => firstInput.focus(), 300);
                    }
                }
            }, 200);
        });
        
        // Enhanced hover effects
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Create ripple effect for buttons
function createRippleEffect(button, event) {
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.position = 'absolute';
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.background = 'rgba(255, 255, 255, 0.3)';
    ripple.style.borderRadius = '50%';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s linear';
    ripple.style.pointerEvents = 'none';
    
    // Add ripple keyframes if not exist
    if (!document.querySelector('#ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Enhanced contact form handling
function initEnhancedContactForm() {
    const form = document.getElementById('contact-form');
    const modal = document.getElementById('contact-modal');
    const closeBtn = document.getElementById('modal-close');
    const cancelBtn = document.getElementById('cancel-btn');
    
    if (!form || !modal) return;
    
    // Form submission with enhanced feedback
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';
        
        // Simulate form submission
        setTimeout(() => {
            // Show success message
            const successMsg = document.createElement('div');
            successMsg.className = 'form-success';
            successMsg.innerHTML = `
                <div style="text-align: center; padding: 2rem;">
                    <div style="font-size: 48px; margin-bottom: 1rem;">✅</div>
                    <h3 style="margin-bottom: 0.5rem; color: var(--text-primary);">Request Sent!</h3>
                    <p style="color: var(--text-secondary);">We'll get back to you within 24 hours.</p>
                </div>
            `;
            
            form.innerHTML = '';
            form.appendChild(successMsg);
            
            // Auto-close modal after 3 seconds
            setTimeout(() => {
                closeModal();
                form.reset();
                form.innerHTML = `
                    <div class="form-group">
                        <label for="name">Full Name</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="company">Company</label>
                        <input type="text" id="company" name="company">
                    </div>
                    <div class="form-group">
                        <label for="role">Your Role</label>
                        <select id="role" name="role">
                            <option value="">Select your role</option>
                            <option value="hr-manager">HR Manager</option>
                            <option value="recruiter">Recruiter</option>
                            <option value="ceo">CEO/Founder</option>
                            <option value="hiring-manager">Hiring Manager</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" rows="4" placeholder="Tell us about your hiring needs..."></textarea>
                    </div>
                    <div class="form-actions">
                        <button type="button" class="btn-secondary" id="cancel-btn">Cancel</button>
                        <button type="submit" class="button-primary">Request Demo</button>
                    </div>
                `;
            }, 3000);
        }, 2000);
    });
    
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Close modal handlers
    [closeBtn, cancelBtn].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', closeModal);
        }
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Enhanced form validation
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('blur', validateInput);
        input.addEventListener('input', clearValidation);
    });
    
    function validateInput(e) {
        const input = e.target;
        const value = input.value.trim();
        
        // Remove existing validation classes
        input.classList.remove('valid', 'invalid');
        
        if (input.required && !value) {
            input.classList.add('invalid');
        } else if (input.type === 'email' && value && !isValidEmail(value)) {
            input.classList.add('invalid');
        } else if (value) {
            input.classList.add('valid');
        }
    }
    
    function clearValidation(e) {
        e.target.classList.remove('invalid');
    }
    
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
}

// Enhanced video player functionality
function initVideoPlayer() {
    const video = document.getElementById('demo-video');
    const playButton = document.getElementById('video-play-btn');
    const overlay = document.getElementById('video-overlay');
    const container = document.querySelector('.video-player-container');
    
    if (!video || !playButton || !overlay || !container) return;
    
    // Prevent video height changes
    const originalHeight = video.style.height || '450px';
    
    // Handle play button click
    playButton.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        video.play().then(() => {
            overlay.style.opacity = '0';
            overlay.style.pointerEvents = 'none';
        }).catch((error) => {
            console.log('Play failed:', error);
        });
        
        // Maintain video height
        video.style.height = originalHeight;
    });
    
    // Handle video events
    video.addEventListener('play', () => {
        overlay.style.opacity = '0';
        overlay.style.pointerEvents = 'none';
        video.style.height = originalHeight;
    });
    
    video.addEventListener('pause', () => {
        // Only show overlay on user pause, not programmatic pause
        setTimeout(() => {
            if (video.paused && !video.ended) {
                overlay.style.opacity = '1';
                overlay.style.pointerEvents = 'all';
            }
        }, 100);
        video.style.height = originalHeight;
    });
    
    video.addEventListener('ended', () => {
        overlay.style.opacity = '1';
        overlay.style.pointerEvents = 'all';
        video.style.height = originalHeight;
    });
    
    // Prevent video resizing on all events
    video.addEventListener('loadstart', () => video.style.height = originalHeight);
    video.addEventListener('loadeddata', () => video.style.height = originalHeight);
    video.addEventListener('canplay', () => video.style.height = originalHeight);
    video.addEventListener('resize', () => video.style.height = originalHeight);
    
    // Handle video loading errors
    video.addEventListener('error', (e) => {
        console.log('Video error:', e);
        const errorMessage = document.createElement('div');
        errorMessage.className = 'video-error';
        errorMessage.innerHTML = `
            <div style="text-align: center; padding: 3rem; background: var(--surface); border-radius: var(--radius-lg); height: ${originalHeight}; display: flex; flex-direction: column; justify-content: center;">
                <i class="ph ph-video-camera-slash" style="font-size: 48px; color: var(--text-secondary); margin-bottom: 1rem;"></i>
                <h3 style="color: var(--text-primary); margin-bottom: 0.5rem;">Video temporarily unavailable</h3>
                <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">We're working to fix this issue. Please try refreshing the page.</p>
                <button class="button-primary demo-btn" onclick="location.reload()">Refresh Page</button>
            </div>
        `;
        container.replaceWith(errorMessage);
    });
    
    // Preload video for better performance
    video.addEventListener('loadedmetadata', () => {
        console.log('Video metadata loaded successfully');
        video.style.height = originalHeight;
    });
    
    // Handle video click to play/pause
    video.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        if (video.paused) {
            video.play().then(() => {
                overlay.style.opacity = '0';
                overlay.style.pointerEvents = 'none';
            }).catch((error) => {
                console.log('Play failed:', error);
            });
        } else {
            video.pause();
        }
        
        // Always maintain height
        video.style.height = originalHeight;
    });
    
    // Override container hover to prevent overlay when video is playing
    container.addEventListener('mouseenter', () => {
        if (!video.paused) {
            overlay.style.opacity = '0';
        }
    });
} 