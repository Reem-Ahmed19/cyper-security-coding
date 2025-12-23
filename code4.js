 function filterScams(category) {
            const cards = document.querySelectorAll('.scam-card');
            const tabs = document.querySelectorAll('.filter-tab');
            
            // Update active tab
            tabs.forEach(tab => tab.classList.remove('active'));
            event.target.classList.add('active');
            
            // Filter cards
            if (category === 'all') {
                cards.forEach(card => card.style.display = 'block');
            } else {
                cards.forEach(card => {
                    if (card.dataset.category === category) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            }
        }

        // Add click event to scam cards
        document.querySelectorAll('.scam-card').forEach(card => {
            card.addEventListener('click', function() {
                const title = this.querySelector('.scam-title').textContent;
                alert('Viewing: ' + title + '\n\nThis is a scam example. Learn to recognize these warning signs!');
            });
        });