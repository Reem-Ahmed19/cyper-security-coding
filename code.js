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