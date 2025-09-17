// Optimized and Enhanced JavaScript for Ata Steel Website
(function() {
    'use strict';

    // Throttle function for performance optimization
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // Debounce function for resize events
    function debounce(func, wait) {
        let timeout;
        return function() {
            const context = this;
            const args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), wait);
        };
    }

    // Check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Main initialization function
    function init() {
        initPreloader();
        initStickyHeader();
        initMobileNavigation();
        initScrollAnimations();
        initBackToTop();
        initLazyLoading();
        initAccessibility();
        initPerformanceOptimizations();
    }

    // Preloader with enhanced performance
    function initPreloader() {
        const preloader = document.getElementById('preloader');
        if (!preloader) return;

        function hidePreloader() {
            preloader.style.opacity = '0';
            preloader.setAttribute('aria-hidden', 'true');
            setTimeout(() => {
                preloader.style.display = 'none';
                preloader.remove();
            }, 500);
        }

        if (document.readyState === 'complete') {
            hidePreloader();
        } else {
            window.addEventListener('load', hidePreloader, { once: true });
        }
    }

    // Optimized sticky header
    function initStickyHeader() {
        const header = document.getElementById('main-header');
        if (!header) return;

        let lastScrollY = 0;
        const scrollThreshold = 50;

        const handleScroll = throttle(() => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > scrollThreshold) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            lastScrollY = currentScrollY;
        }, 16); // ~60fps

        window.addEventListener('scroll', handleScroll, { passive: true });
    }

    // Enhanced mobile navigation
    function initMobileNavigation() {
        const hamburger = document.querySelector('.hamburger');
        const nav = document.querySelector('.main-nav');

        if (!hamburger || !nav) return;

        let isOpen = false;

        function toggleNav() {
            isOpen = !isOpen;
            nav.classList.toggle('is-open', isOpen);
            hamburger.classList.toggle('is-active', isOpen);

            // Update accessibility attributes
            hamburger.setAttribute('aria-expanded', isOpen);
            nav.setAttribute('aria-hidden', !isOpen);

            // Prevent body scroll when menu is open
            document.body.style.overflow = isOpen ? 'hidden' : '';
        }

        function closeNav() {
            if (isOpen) {
                toggleNav();
            }
        }

        hamburger.addEventListener('click', toggleNav);
        hamburger.setAttribute('aria-label', 'منو همراه');
        hamburger.setAttribute('aria-expanded', 'false');

        // Close nav when clicking outside or on nav links
        document.addEventListener('click', (e) => {
            if (isOpen && !nav.contains(e.target) && !hamburger.contains(e.target)) {
                closeNav();
            }
        });

        // Close nav on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isOpen) {
                closeNav();
            }
        });

        // Close nav when clicking on nav links
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeNav);
        });

        // Handle resize
        window.addEventListener('resize', debounce(() => {
            if (window.innerWidth > 768 && isOpen) {
                closeNav();
            }
        }, 250));
    }

    // Optimized scroll animations with Intersection Observer
    function initScrollAnimations() {
        if (!('IntersectionObserver' in window)) {
            // Fallback for older browsers
            document.querySelectorAll('.animate-on-scroll').forEach(el => {
                el.classList.add('is-visible');
            });
            return;
        }

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Stop observing once animated
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }

    // Enhanced back to top functionality
    function initBackToTop() {
        const backToTopButton = document.getElementById('back-to-top');
        if (!backToTopButton) return;

        const scrollThreshold = 300;

        const handleScroll = throttle(() => {
            const shouldShow = window.scrollY > scrollThreshold;
            backToTopButton.classList.toggle('is-visible', shouldShow);
            backToTopButton.setAttribute('aria-hidden', !shouldShow);
        }, 16);

        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        window.addEventListener('scroll', handleScroll, { passive: true });
        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            scrollToTop();
        });

        // Accessibility
        backToTopButton.setAttribute('aria-label', 'بازگشت به بالا');
        backToTopButton.setAttribute('title', 'بازگشت به بالا');
    }

    // Lazy loading for images
    function initLazyLoading() {
        if (!('IntersectionObserver' in window)) return;

        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px'
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            img.classList.add('lazy-load');
            imageObserver.observe(img);
        });
    }

    // Accessibility enhancements
    function initAccessibility() {
        // Add focus management for mobile menu
        const nav = document.querySelector('.main-nav');
        if (nav) {
            const focusableElements = nav.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
            const firstFocusable = focusableElements[0];
            const lastFocusable = focusableElements[focusableElements.length - 1];

            nav.addEventListener('keydown', (e) => {
                if (e.key === 'Tab') {
                    if (e.shiftKey) {
                        if (document.activeElement === firstFocusable) {
                            e.preventDefault();
                            lastFocusable.focus();
                        }
                    } else {
                        if (document.activeElement === lastFocusable) {
                            e.preventDefault();
                            firstFocusable.focus();
                        }
                    }
                }
            });
        }

        // Add focus outlines for keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-nav');
            }
        });

        document.addEventListener('click', () => {
            document.body.classList.remove('keyboard-nav');
        });
    }

    // Performance optimizations
    function initPerformanceOptimizations() {
        // Preload critical resources
        const criticalImages = document.querySelectorAll('img[data-preload]');
        criticalImages.forEach(img => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = img.src || img.dataset.src;
            document.head.appendChild(link);
        });

        // Optimize font loading
        if ('fonts' in document) {
            document.fonts.ready.then(() => {
                document.body.classList.add('fonts-loaded');
            });
        }

        // Service Worker registration (if available)
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js').catch(() => {
                    // Service worker registration failed, continue without it
                });
            });
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
