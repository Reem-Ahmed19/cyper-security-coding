 // Create floating particles
        function createParticles() {
            const bg = document.getElementById('animatedBg');
            const particleCount = 20;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 15 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
                bg.appendChild(particle);
            }

            // Create grid lines
            for (let i = 0; i < 5; i++) {
                const hLine = document.createElement('div');
                hLine.className = 'grid-line horizontal';
                hLine.style.top = (i * 25) + '%';
                bg.appendChild(hLine);

                const vLine = document.createElement('div');
                vLine.className = 'grid-line vertical';
                vLine.style.left = (i * 25) + '%';
                bg.appendChild(vLine);
            }
        }

        // Initialize
        createParticles();

        // Theme toggle
        function toggleTheme() {
            document.body.style.animation = 'theme-change 0.5s';
            setTimeout(() => {
                document.body.style.animation = '';
            }, 500);
        }

        // Language switch
        function switchLang(lang) {
            document.querySelectorAll('.lang-switch span').forEach(l => l.classList.remove('active'));
            event.target.classList.add('active');
            console.log('Language switched to:', lang);
        }

        // Learn more
        function learnMore() {
            const button = event.currentTarget;
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = '';
                window.location.href = '#scam-types';
            }, 200);
        }

        // Protect
        function protect() {
            const button = event.currentTarget;
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = '';
                alert('🛡️ Protection tips:\n\n1. Never share passwords\n2. Verify sender emails\n3. Use 2-factor authentication\n4. Keep software updated\n5. Think before you click!');
            }, 200);
        }

        // Mouse parallax effect
        document.addEventListener('mousemove', (e) => {
            const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
            
            document.querySelectorAll('.orb').forEach((orb, index) => {
                const speed = (index + 1) * 0.5;
                orb.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
            });
        });

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Add cursor trail effect
        let cursorTrail = [];
        document.addEventListener('mousemove', (e) => {
            if (cursorTrail.length > 5) {
                const oldTrail = cursorTrail.shift();
                oldTrail.remove();
            }

            const trail = document.createElement('div');
            trail.style.position = 'fixed';
            trail.style.width = '4px';
            trail.style.height = '4px';
            trail.style.borderRadius = '50%';
            trail.style.background = 'rgba(0, 217, 255, 0.5)';
            trail.style.left = e.clientX + 'px';
            trail.style.top = e.clientY + 'px';
            trail.style.pointerEvents = 'none';
            trail.style.zIndex = '9999';
            trail.style.transition = 'all 0.5s';
            document.body.appendChild(trail);
            cursorTrail.push(trail);

            setTimeout(() => {
                trail.style.opacity = '0';
                trail.style.transform = 'scale(2)';
            }, 50);
        });


        // Create floating stardust particles
        function summonStardust() {
            const void_space = document.getElementById('cosmicVoid');
            const particleCount = 30;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'stardust-particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 20 + 's';
                particle.style.animationDuration = (Math.random() * 15 + 15) + 's';
                
                // Random colors
                const colors = [
                    'rgba(139, 92, 246, 0.6)',
                    'rgba(220, 38, 38, 0.6)',
                    'rgba(6, 182, 212, 0.6)'
                ];
                particle.style.background = colors[Math.floor(Math.random() * colors.length)];
                
                void_space.appendChild(particle);
            }
        }

        // Initialize particles
        summonStardust();

        // Add hover effect to cards
        const phantomCards = document.querySelectorAll('.phantom-card');
        phantomCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.borderColor = 'rgba(220, 38, 38, 0.5)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.borderColor = 'rgba(139, 92, 246, 0.2)';
            });
        });

        // Trap mechanism click warning
        const trapButtons = document.querySelectorAll('.trap-mechanism');
        trapButtons.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                alert('⚠️ WARNING: This is a fake button used in scams!\n\nNever click suspicious links or buttons in unexpected emails.');
            });
        });

        // Malicious link click warning
        const maliciousLinks = document.querySelectorAll('.malicious-hyperlink');
        maliciousLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                alert('🚨 DANGER: This is a fake phishing link!\n\nAlways verify URLs before clicking. Look for:\n• Misspellings in the domain\n• Unusual characters\n• Shortened URLs\n• Requests for personal info');
            });
        });

        // Add parallax effect to ethereal glows
        document.addEventListener('mousemove', (e) => {
            const moveX = (e.clientX - window.innerWidth / 2) * 0.02;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.02;
            
            document.querySelectorAll('.ethereal-glow').forEach((glow, index) => {
                const speed = (index + 1) * 0.3;
                glow.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
            });
        });

        // Card entrance animation on scroll
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        };

        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 200);
                }
            });
        }, observerOptions);

        phantomCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            cardObserver.observe(card);
        });
