  // Scam Types Data Array
        const scamTypesData = [
            {
                icon: '✉️',
                title: 'Phishing Emails',
                description: 'Fake emails impersonating banks, companies, or officials to steal credentials.',
                keyIndicator: 'Always verify sender email addresses and never click suspicious links without verification.',
                examples: [
                    'Tax refund notifications requiring personal details',
                    'Account warnings from fake company emails',
                    'Prize winning notifications from unknown senders'
                ]
            },
            {
                icon: '🎁',
                title: 'Fake Prize Messages',
                description: 'You won a prize! Just pay shipping or provide your card details.',
                keyIndicator: 'Legitimate prizes never require upfront payment or sensitive financial information.',
                examples: [
                    'Lottery wins you never entered',
                    'Free vacation packages with hidden fees',
                    'Gift card giveaways with verification codes'
                ]
            },
            {
                icon: '🔐',
                title: 'OTP Theft',
                description: 'Scammers pose as support staff asking you to share your security codes.',
                keyIndicator: 'Never share OTP codes with anyone, even if they claim to be from your bank.',
                examples: [
                    'Calls asking to verify your account',
                    'Messages claiming suspicious activity',
                    'Support agents requesting authentication codes'
                ]
            },
            {
                icon: '📦',
                title: 'Fake Delivery Links',
                description: 'Messages claiming failed delivery with links to malicious websites.',
                keyIndicator: 'Always verify delivery notifications through official tracking numbers from the company\'s website.',
                examples: [
                    'Failed delivery texts with urgent links',
                    'Package held at customs requiring payment',
                    'Address verification scams'
                ]
            },
            {
                icon: '📈',
                title: 'Investment Scams',
                description: 'High return promises with zero risk. Too good to be true.',
                keyIndicator: 'All legitimate investments carry risk. Guaranteed high returns are always a scam.',
                examples: [
                    'Cryptocurrency investment schemes',
                    'Forex trading platforms with fake profits',
                    'Pyramid schemes disguised as investment opportunities'
                ]
            },
            {
                icon: '🔒',
                title: 'Account Verification',
                description: 'Urgent requests to verify your account or lose access forever.',
                keyIndicator: 'Real companies never request full passwords through unsolicited messages.',
                examples: [
                    'Social media verification scams',
                    'Banking security alerts',
                    'Email service suspension warnings'
                ]
            },
            {
                icon: '📞',
                title: 'Vishing (Voice Phishing)',
                description: 'Phone calls from scammers pretending to be authorities.',
                keyIndicator: 'Hang up and call back using official numbers from the company\'s website.',
                examples: [
                    'Tech support scams claiming malware infections',
                    'IRS or tax authority impersonations',
                    'Bank fraud department calls'
                ]
            },
            {
                icon: '💳',
                title: 'Credit Card Skimming',
                description: 'Devices steal your card information at ATMs and retail terminals.',
                keyIndicator: 'Check card readers for suspicious attachments before using them.',
                examples: [
                    'Tampered ATM card slots',
                    'Fake card readers at gas stations',
                    'Hidden cameras recording PIN entries'
                ]
            },
            {
                icon: '💼',
                title: 'Business Email Compromise',
                description: 'Hackers impersonate executives to authorize fraudulent transfers.',
                keyIndicator: 'Always verify large transactions through secondary communication channels.',
                examples: [
                    'Urgent wire transfer urgent from the CEO',
                    'Invoice manipulation scams',
                    'Payroll redirection scams'
                ]
            },
            {
                icon: '❤️',
                title: 'Romance Scams',
                description: 'Fake online relationships designed to extract money from victims.',
                keyIndicator: 'Never send money to someone you\'ve only met online.',
                examples: [
                    'Dating app profiles with sob stories',
                    'Military personnel asking for financial help',
                    'Long-distance relationships requesting travel money'
                ]
            },
            {
                icon: '🌐',
                title: 'Website Spoofing',
                description: 'Fake websites that look identical to legitimate ones.',
                keyIndicator: 'Always check the URL carefully and look for HTTPS.',
                examples: [
                    'Banking login pages with similar domains',
                    'E-commerce sites with misspelled names',
                    'Government service portals clones'
                ]
            },
            {
                icon: '⚠️',
                title: 'Ransomware Attacks',
                description: 'Malware that encrypts your files and demands payment for release.',
                keyIndicator: 'Regular backups and security software are essential.',
                examples: [
                    'Email attachments containing malware',
                    'Infected software downloads',
                    'Compromised website drive-by downloads'
                ]
            }
        ];

        // Variables
        let currentLanguage = 'EN';
        let isDarkTheme = true;

        // Functions to create scam cards
        function createScamCards() {
            let htmlContent = '';
            
            for (let i = 0; i < scamTypesData.length; i++) {
                const scam = scamTypesData[i];
                htmlContent += `
                    <div class="scam-type-card">
                        <div class="card-header">
                            <div class="card-icon">${scam.icon}</div>
                            <div class="card-title-section">
                                <h3>${scam.title}</h3>
                                <p class="card-description">${scam.description}</p>
                            </div>
                        </div>
                        
                        <div class="key-indicator">
                            <span class="indicator-icon">★</span>
                            <p class="indicator-text">${scam.keyIndicator}</p>
                        </div>
                        
                        <div class="common-examples">
                            <p class="examples-title">Common Examples:</p>
                            <ul class="examples-list">
                `;
                
                for (let j = 0; j < scam.examples.length; j++) {
                    htmlContent += `<li>${scam.examples[j]}</li>`;
                }
                
                htmlContent += `
                            </ul>
                        </div>
                    </div>
                `;
            }
            
            document.getElementById('scamTypesGrid').innerHTML = htmlContent;
        }

        // Navigation Functions
        function goHome() {
            alert('🏠 Navigating to Home page...');
        }

        function navigate(page) {
            alert(`📄 Navigating to ${page} page...`);
        }

        function toggleLanguage() {
            if (currentLanguage === 'EN') {
                currentLanguage = 'AR';
            } else {
                currentLanguage = 'EN';
            }
            document.getElementById('langDisplay').textContent = currentLanguage;
            alert(`🌍 Language changed to ${currentLanguage}`);
        }

        function toggleTheme() {
            isDarkTheme = !isDarkTheme;
            alert(`🎨 Theme toggled! (Dark mode: ${isDarkTheme})`);
        }

        function toggleSetting(element) {
            element.classList.toggle('active');
        }

        function reportScam() {
            alert('🚨 Thank you for helping protect others! Your report has been submitted.');
        }

        function openSocial(platform) {
            alert(`🔗 Opening ${platform}...`);
        }

        function showPolicy(type) {
            alert(`📋 Viewing ${type} policy...`);
        }

        // Initialize page
        window.onload = function() {
            createScamCards();
            console.log('🛡️ Scam Types Guide loaded successfully!');
            console.log(`Total scam types: ${scamTypesData.length}`);
        };