(function() {
        const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('is-visible');
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        revealEls.forEach(el => revealObserver.observe(el));

        const journeySection = document.querySelector('[data-journey-section]');
        if (journeySection) {
            const journeyGrid = journeySection.querySelector('[data-journey-grid]');
            const journeyCards = [...journeySection.querySelectorAll('[data-journey-card]')];
            const journeyDots = [...journeySection.querySelectorAll('[data-journey-dot]')];
            const journeyFill = journeySection.querySelector('[data-journey-fill]');
            const desktopJourney = window.matchMedia('(min-width: 901px)');
            let journeyFrame = 0;

            const setJourneyState = (progress) => {
                const boundedProgress = Math.min(1, Math.max(0, progress));
                const activeIndex = Math.min(journeyCards.length - 1, Math.floor(boundedProgress * journeyCards.length));
                journeyCards.forEach((card, index) => card.classList.toggle('is-active', index === activeIndex));
                journeyDots.forEach((dot, index) => {
                    dot.classList.toggle('is-active', index === activeIndex);
                    dot.classList.toggle('is-complete', index < activeIndex);
                });
                if (journeyFill) journeyFill.style.transform = `scaleX(${boundedProgress})`;
            };

            const updateJourney = () => {
                journeyFrame = 0;
                if (!desktopJourney.matches || !journeyGrid) {
                    setJourneyState(0);
                    return;
                }
                const scrollDistance = journeySection.offsetHeight - window.innerHeight;
                const progress = scrollDistance > 0 ? -journeySection.getBoundingClientRect().top / scrollDistance : 0;
                setJourneyState(progress);
            };

            const scheduleJourneyUpdate = () => {
                if (journeyFrame) return;
                journeyFrame = requestAnimationFrame(updateJourney);
            };

            setJourneyState(0);
            window.addEventListener('scroll', scheduleJourneyUpdate, { passive: true });
            window.addEventListener('resize', scheduleJourneyUpdate);
        }

        if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
            document.querySelectorAll('.service-card, .service-detail').forEach(card => {
                card.addEventListener('pointermove', event => {
                    const rect = card.getBoundingClientRect();
                    card.style.setProperty('--shine-x', `${((event.clientX - rect.left) / rect.width) * 100}%`);
                    card.style.setProperty('--shine-y', `${((event.clientY - rect.top) / rect.height) * 100}%`);
                });
                card.addEventListener('pointerleave', () => {
                    card.style.removeProperty('--shine-x');
                    card.style.removeProperty('--shine-y');
                });
            });
        }

        const navbar = document.getElementById('navbar');
        const updateNavbar = () => navbar?.classList.toggle('is-scrolled', window.scrollY > 80);
        if (navbar) {
            updateNavbar();
            window.addEventListener('scroll', updateNavbar, { passive: true });
        }

        const stickyActions = document.querySelector('[data-sticky-actions]');
        const hero = document.getElementById('hero');
        if (stickyActions) {
            if (hero && 'IntersectionObserver' in window) {
                const heroObserver = new IntersectionObserver(([entry]) => {
                    const heroHasPassed = !entry.isIntersecting && entry.boundingClientRect.bottom <= 0;
                    stickyActions.classList.toggle('is-visible', heroHasPassed);
                }, { threshold: 0 });
                heroObserver.observe(hero);
            } else {
                stickyActions.classList.add('is-visible');
            }
        }

        const mobileToggle = document.getElementById('mobileToggle');
        const mobileMenu = document.getElementById('mobileMenu');
        mobileToggle?.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            mobileMenu.classList.toggle('open');
            const isMenuOpen = mobileMenu.classList.contains('open');
            mobileToggle.setAttribute('aria-expanded', isMenuOpen);
            mobileToggle.setAttribute('aria-label', isMenuOpen ? 'Menü schließen' : 'Menü öffnen');
            document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        });
        document.querySelectorAll('.mobile-link, #mobileMenu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                mobileMenu.classList.remove('open');
                mobileToggle.setAttribute('aria-expanded', 'false');
                mobileToggle.setAttribute('aria-label', 'Menü öffnen');
                document.body.style.overflow = '';
            });
        });

        const counters = document.querySelectorAll('.counter-value');
        let counterStarted = false;
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !counterStarted) {
                    counterStarted = true;
                    counters.forEach(counter => {
                        const target = parseInt(counter.getAttribute('data-target'));
                        const suffix = counter.getAttribute('data-suffix') || '';
                        const duration = 2000;
                        const startTime = performance.now();
                        function update(now) {
                            const elapsed = now - startTime;
                            const progress = Math.min(elapsed / duration, 1);
                            const eased = 1 - Math.pow(1 - progress, 4);
                            counter.textContent = Math.round(eased * target).toLocaleString('de-DE') + suffix;
                            if (progress < 1) requestAnimationFrame(update);
                        }
                        requestAnimationFrame(update);
                    });
                }
            });
        }, { threshold: 0.3 });
        counters.forEach(c => counterObserver.observe(c));

        document.querySelectorAll('[data-ba]').forEach(container => {
            const before = container.querySelector('.ba-before');
            const slider = container.querySelector('.ba-slider');
            const handle = container.querySelector('.ba-handle');
            let isDragging = false;
            let currentPosition = 0.5;
            function renderPosition(pos) {
                currentPosition = Math.max(0.02, Math.min(0.98, pos));
                const pct = currentPosition * 100;
                before.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
                slider.style.left = pct + '%';
                handle.style.left = pct + '%';
                container.setAttribute('aria-valuenow', Math.round(pct));
                container.setAttribute('aria-valuetext', `${Math.round(pct)} Prozent Vorher, ${Math.round(100 - pct)} Prozent Nachher`);
            }
            function updatePosition(x) {
                const rect = container.getBoundingClientRect();
                renderPosition((x - rect.left) / rect.width);
            }
            container.addEventListener('mousedown', (e) => { isDragging = true; updatePosition(e.clientX); e.preventDefault(); });
            container.addEventListener('touchstart', (e) => { isDragging = true; updatePosition(e.touches[0].clientX); }, { passive: true });
            window.addEventListener('mousemove', (e) => { if (isDragging) updatePosition(e.clientX); });
            window.addEventListener('touchmove', (e) => { if (isDragging) updatePosition(e.touches[0].clientX); }, { passive: true });
            window.addEventListener('mouseup', () => { isDragging = false; });
            window.addEventListener('touchend', () => { isDragging = false; });
            container.addEventListener('keydown', (event) => {
                if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
                event.preventDefault();
                if (event.key === 'Home') renderPosition(0.02);
                else if (event.key === 'End') renderPosition(0.98);
                else renderPosition(currentPosition + (event.key === 'ArrowRight' ? 0.05 : -0.05));
            });
            renderPosition(currentPosition);
        });

        const form = document.getElementById('terminForm');
        const toast = document.getElementById('toast');
        form?.addEventListener('submit', (e) => {
            e.preventDefault();
            toast?.classList.add('show');
            form.reset();
            setTimeout(() => { toast?.classList.remove('show'); }, 4000);
        });

        const bookingModal = document.getElementById('bookingModal');
        const bookingCloseButton = bookingModal?.querySelector('.booking-modal__close');
        const bookingTriggers = document.querySelectorAll('[data-booking-modal]');
        const bookingCloseButtons = bookingModal?.querySelectorAll('[data-booking-close]') || [];
        let bookingLastFocus = null;

        function openBookingModal(event) {
            event.preventDefault();
            bookingLastFocus = event.currentTarget;
            mobileToggle?.classList.remove('active');
            mobileMenu?.classList.remove('open');
            bookingModal.classList.add('is-open');
            bookingModal.setAttribute('aria-hidden', 'false');
            document.body.classList.add('booking-modal-open');
            setTimeout(() => bookingCloseButton?.focus({ preventScroll: true }), 100);
        }

        function closeBookingModal() {
            bookingModal.classList.remove('is-open');
            bookingModal.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('booking-modal-open');
            if (bookingLastFocus) bookingLastFocus.focus();
        }

        bookingTriggers.forEach(trigger => trigger.addEventListener('click', openBookingModal));
        bookingCloseButtons.forEach(button => button.addEventListener('click', closeBookingModal));

        document.addEventListener('keydown', (event) => {
            if (!bookingModal?.classList.contains('is-open')) return;
            if (event.key === 'Escape') {
                closeBookingModal();
                return;
            }
            if (event.key !== 'Tab') return;
            const focusable = [...bookingModal.querySelectorAll('a[href], button:not([tabindex="-1"])')];
            if (!focusable.length) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (!bookingModal.contains(document.activeElement)) {
                event.preventDefault();
                (event.shiftKey ? last : first).focus();
            } else if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        });

        const emailModal = document.getElementById('emailModal');
        const emailCloseButton = emailModal?.querySelector('.email-modal__close');
        const emailCloseButtons = emailModal?.querySelectorAll('[data-email-close]') || [];
        const emailTriggers = document.querySelectorAll('[data-email-modal]');
        const emailForm = document.getElementById('emailContactForm');
        const emailFormStatus = document.getElementById('emailFormStatus');
        let emailLastFocus = null;

        function openEmailModal(event) {
            event.preventDefault();
            emailLastFocus = event.currentTarget;
            if (bookingModal?.classList.contains('is-open')) closeBookingModal();
            mobileToggle?.classList.remove('active');
            mobileMenu?.classList.remove('open');
            emailModal?.classList.add('is-open');
            emailModal?.setAttribute('aria-hidden', 'false');
            document.body.classList.add('email-modal-open');
            setTimeout(() => emailModal?.querySelector('input[name="firstName"]')?.focus({ preventScroll: true }), 100);
        }

        function closeEmailModal() {
            emailModal?.classList.remove('is-open');
            emailModal?.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('email-modal-open');
            if (emailLastFocus) emailLastFocus.focus();
        }

        emailTriggers.forEach(trigger => trigger.addEventListener('click', openEmailModal));
        emailCloseButtons.forEach(button => button.addEventListener('click', closeEmailModal));

        document.addEventListener('keydown', (event) => {
            if (!emailModal?.classList.contains('is-open')) return;
            if (event.key === 'Escape') {
                closeEmailModal();
                return;
            }
            if (event.key !== 'Tab') return;
            const focusable = [...emailModal.querySelectorAll('a[href], button:not([tabindex="-1"]), input, textarea, select')].filter(element => !element.disabled);
            if (!focusable.length) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (!emailModal.contains(document.activeElement)) {
                event.preventDefault();
                (event.shiftKey ? last : first).focus();
            } else if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        });

        const emailSubmitButton = emailForm?.querySelector('button[type="submit"]');
        emailForm?.addEventListener('submit', async (event) => {
            event.preventDefault();
            const data = new FormData(emailForm);
            if (emailFormStatus) emailFormStatus.textContent = 'Nachricht wird sicher übermittelt …';
            if (emailSubmitButton) emailSubmitButton.disabled = true;
            try {
                const firstName = String(data.get('firstName') || '').trim();
                const lastName = String(data.get('lastName') || '').trim();
                const response = await fetch('/api/send-contact', {
                    method: 'POST',
                    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: `${firstName} ${lastName}`.trim(),
                        email: String(data.get('email') || '').trim(),
                        message: String(data.get('message') || '').trim(),
                        phone: String(data.get('phone') || '').trim()
                    })
                });
                const result = await response.json().catch(() => ({}));
                if (!response.ok || !(result.ok || result.success)) throw new Error(result.message || 'Versand fehlgeschlagen');
                emailForm.reset();
                if (emailFormStatus) emailFormStatus.textContent = 'Vielen Dank. Ihre Nachricht wurde an die Praxis gesendet.';
                setTimeout(closeEmailModal, 1800);
            } catch (error) {
                if (emailFormStatus) emailFormStatus.textContent = 'Versand nicht möglich. Bitte rufen Sie uns unter 07139 452176 an.';
            } finally {
                if (emailSubmitButton) emailSubmitButton.disabled = false;
            }
        });

        const cookieBanner = document.getElementById('cookieBanner');
        if (cookieBanner) {
            const cookieConsentKey = 'zahnarzt-roth-cookie-consent';
            let savedConsent = null;
            try {
                savedConsent = window.localStorage.getItem(cookieConsentKey);
            } catch (error) {
                savedConsent = null;
            }
            if (savedConsent) {
                cookieBanner.classList.add('is-dismissed');
            } else {
                requestAnimationFrame(() => cookieBanner.classList.add('is-visible'));
            }
            cookieBanner.querySelectorAll('[data-cookie-choice]').forEach(button => {
                button.addEventListener('click', () => {
                    try {
                        window.localStorage.setItem(cookieConsentKey, button.dataset.cookieChoice);
                    } catch (error) {
                        void error;
                    }
                    cookieBanner.classList.remove('is-visible');
                    cookieBanner.classList.add('is-dismissed');
                });
            });
        }

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#' || this.hasAttribute('data-booking-modal') || this.hasAttribute('data-email-modal')) return;
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
                }
            });
        });
    })();
