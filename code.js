 const deceptionData = [
            {
                title: " Urgency Creates Panic",
                description: "Scammers weaponize time pressure to cloud your judgment. 'Act now or lose your account!' 'Limited time offer!' These phrases are designed to bypass your critical thinking. Real companies give you time to make informed decisions. Always pause, breathe, and verify independently."
            },
            {
                title: " Too Good to Be True",
                description: "Promises of instant wealth, miracle cures, or impossible deals are classic bait. 'Make $10,000 in a week!' 'Lose 50 pounds overnight!' If something sounds impossibly good, it's because it is impossible. Research thoroughly, consult experts, and trust your instincts."
            },
            {
                title: " Authority Impersonation",
                description: "Fraudsters masquerade as government officials, tech support, bank executives, or law enforcement to exploit your trust. They use fear and authority to manipulate. Remember: real organizations never demand immediate payment or threaten arrest via unsolicited calls or messages."
            }
        ];

        const tacticsData = [
            { icon: "🎣", title: "Phishing Emails", description: "Sophisticated fake messages designed to steal your login credentials and personal information" },
            { icon: "📱", title: "Fake Prize Messages", description: "You didn't enter any contest - it's an elaborate trap to harvest your sensitive data" },
            { icon: "💸", title: "OTP/2FA Theft", description: "Never share one-time passwords or authentication codes with anyone, ever" },
            { icon: "🔗", title: "Cloned Websites", description: "Perfect replicas of legitimate sites that capture everything you type" },
            { icon: "😨", title: "Emotional Manipulation", description: "Exploiting fear, greed, sympathy, or urgency to override rational thinking" },
            { icon: "🔐", title: "Fake Account Alerts", description: "Legitimate companies will never ask for your password or full credit card number" }
        ];

        const statsData = [
            { number: "90%", label: "of data breaches", description: "involve phishing and social engineering attacks" },
            { number: "$10B+", label: "lost annually", description: "to cybercrime and online fraud worldwide" },
            { number: "18-34", label: "age demographic", description: "most frequently targeted by modern scammers" }
        ];

        const checklistData = [
            " Does the sender's email address look suspicious, misspelled, or use unusual domains?",
            " Is there unusual urgency, threatening language, or extreme pressure to act immediately?",
            " Are you being asked to provide sensitive information like passwords, OTPs, or full credit card numbers?",
            " Does the message contain obvious spelling errors, grammatical mistakes, or awkward phrasing?",
            " Is the offer impossibly good, promising unrealistic returns, or guaranteeing results?",
            " Are you being asked to click suspicious links, download unexpected attachments, or install software?",
            " Can you independently verify this request through the official website, app, or published phone number?",
            " Would a legitimate organization actually communicate this way or make these demands?"
        ];

        const storiesData = [
            {
                title: "The Fake Job Offer",
                description: "Sarah, a recent graduate, received her 'dream job' offer via email from a well-known company. The offer seemed perfect - high salary, remote work, benefits. After 'accepting,' she was asked to provide personal documents and banking details for 'payroll setup.' Within days, unauthorized charges appeared on her accounts.",
                amount: "Lost: $4,200"
            },
            {
                title: "The Romance Scam",
                description: "Michael, recently divorced, found someone special on a dating app. Over six months, their connection deepened. His online 'partner' faced multiple emergencies - medical bills, travel costs, business opportunities. Each time, Michael sent money. The person never existed. The photos were stolen. The love was manufactured.",
                amount: "Lost: $42,000"
            },
            {
                title: "The Tech Support Call",
                description: "Lisa received an urgent call about a critical 'virus' detected on her computer. The caller knew her name, address, and seemed professional. Panicked, she granted remote access to 'fix' the problem. Within hours, her bank accounts were emptied, her identity stolen, and her computer locked by ransomware.",
                amount: "Lost: $8,500"
            },
            {
                title: "The Delivery Text Scam",
                description: "John got a text about a failed delivery attempt with a tracking link. The website looked identical to the real shipping company. He entered his credit card 'for redelivery fees.' That simple click led to thousands in fraudulent purchases, a maxed-out credit card, and months of fighting with his bank to recover the money.",
                amount: "Lost: $3,100"
            }
        ];

        const comparisonData = [
            {
                type: "fake",
                title: "Suspicious Email",
                description: "From: support@paypa1-secure.com (note the '1' instead of 'l'). Subject: URGENT: Verify account or face suspension! Filled with typos, generic greetings, and immediate threats. Contains suspicious links to fake login pages."
            },
            {
                type: "real",
                title: "Legitimate Email",
                description: "From: noreply@paypal.com (exact official domain). Subject: Security notification. Professional formatting, personalized greeting, no urgent threats. Directs you to log in through the official app or website, never through email links."
            },
            {
                type: "fake",
                title: "Scam Phone Call",
                description: "'This is the IRS. You owe back taxes. If you don't pay immediately via gift cards, we'll issue a warrant for your arrest.' Real government agencies never threaten arrest over the phone or demand payment via gift cards, cryptocurrency, or wire transfers."
            },
            {
                type: "real",
                title: "Legitimate Contact",
                description: "Official notices come via certified mail. Real government agencies provide official letter identification, give you time to respond, and offer multiple verification methods. They never demand immediate payment or threaten arrest without proper legal process."
            }
        ];

        const quizQuestions = [
            {
                question: "You receive an email from 'support@paypa1-security.com' (note the '1' instead of 'l') asking you to verify your account within 24 hours or face suspension. What should you do?",
                options: [
                    "Click the link immediately to save your account",
                    "Reply with your account details to prove your identity",
                    "Delete it - it's a phishing attempt with a fake domain",
                    "Forward it to all your contacts as a legitimate warning"
                ],
                correct: 2
            },
            {
                question: "A stranger on LinkedIn offers you an amazing remote job with a $150,000 salary for minimal work. They want to hire you immediately without an interview. What's your next move?",
                options: [
                    "Accept immediately - it's the opportunity of a lifetime!",
                    "Provide your banking information for the first paycheck",
                    "Research the company independently and be highly skeptical",
                    "Send them money for 'equipment' and 'training materials'"
                ],
                correct: 2
            },
            {
                question: "You receive a call from someone claiming to be 'Microsoft Technical Support' saying your computer has been infected with viruses. They want remote access to 'fix' it urgently. What do you do?",
                options: [
                    "Give them remote access - they're trying to help protect you",
                    "Hang up immediately - Microsoft doesn't make unsolicited calls",
                    "Pay them the 'service fee' to remove the viruses",
                    "Download their 'security software' to scan your computer"
                ],
                correct: 1
            },
            {
                question: "You get a text message saying you've won a $5,000 prize from a contest you don't remember entering. They need your bank account number to 'deposit' the winnings. What should you do?",
                options: [
                    "Provide your bank details - you might have entered and forgotten",
                    "Ignore and delete - legitimate prizes never ask for banking information",
                    "Click the link to claim your prize before it expires",
                    "Share the opportunity with friends so they can win too"
                ],
                correct: 1
            },
            {
                question: "Someone you met online two weeks ago says they're in love with you and needs $2,000 for an emergency. They promise to pay you back and meet you soon. What's the right response?",
                options: [
                    "Send the money - true love requires trust and sacrifice",
                    "Send half to show you care about their emergency",
                    "Recognize it as a romance scam and end contact immediately",
                    "Give them your credit card information to help"
                ],
                correct: 2
            }
        ];

        // Variables (Lecture 2)
        let currentScore = 0;
        let totalQuestions = quizQuestions.length;
        let answeredQuestions = 0;

        // Functions (Lecture 6, 8)
        function createDeceptionCards() {
            let html = '';
            // For loop (Lecture 5)
            for (let i = 0; i < deceptionData.length; i++) {
                html += `
                    <div class="deception-card" onclick="showDetail('${deceptionData[i].title}')">
                        <h3>${deceptionData[i].title}</h3>
                        <p>${deceptionData[i].description}</p>
                    </div>
                `;
            }
            document.getElementById('deceptionGrid').innerHTML = html;
        }

        function createTacticsCards() {
            let html = '';
            for (let i = 0; i < tacticsData.length; i++) {
                html += `
                    <div class="tactic-card">
                        <div class="tactic-icon">${tacticsData[i].icon}</div>
                        <h3>${tacticsData[i].title}</h3>
                        <p>${tacticsData[i].description}</p>
                    </div>
                `;
            }
            document.getElementById('tacticsGrid').innerHTML = html;
        }

        function createStatsCards() {
            let html = '';
            for (let i = 0; i < statsData.length; i++) {
                html += `
                    <div class="stat-card">
                        <div class="stat-number">${statsData[i].number}</div>
                        <div class="stat-label">${statsData[i].label}</div>
                        <div class="stat-description">${statsData[i].description}</div>
                    </div>
                `;
            }
            document.getElementById('statsGrid').innerHTML = html;
        }

        function createChecklist() {
            let html = '';
            for (let i = 0; i < checklistData.length; i++) {
                html += `
                    <div class="checklist-item">
                        <div class="check-icon">✓</div>
                        <p>${checklistData[i]}</p>
                    </div>
                `;
            }
            document.getElementById('checklistContainer').innerHTML = html;
        }

        function createStories() {
            let html = '';
            for (let i = 0; i < storiesData.length; i++) {
                html += `
                    <div class="story-card">
                        <h3>${storiesData[i].title}</h3>
                        <p>${storiesData[i].description}</p>
                        <div class="story-amount">${storiesData[i].amount}</div>
                    </div>
                `;
            }
            document.getElementById('storiesGrid').innerHTML = html;
        }

        function createComparison() {
            let html = '';
            for (let i = 0; i < comparisonData.length; i++) {
                html += `
                    <div class="comparison-card ${comparisonData[i].type}">
                        <span class="comparison-badge">${comparisonData[i].type === 'fake' ? 'FAKE' : 'REAL'}</span>
                        <h3>${comparisonData[i].title}</h3>
                        <p>${comparisonData[i].description}</p>
                    </div>
                `;
            }
            document.getElementById('comparisonGrid').innerHTML = html;
        }

        function createQuiz() {
            let html = '';
            // Nested loop through questions
            for (let i = 0; i < quizQuestions.length; i++) {
                html += `
                    <div class="quiz-question">
                        <h3>Question ${i + 1}: ${quizQuestions[i].question}</h3>
                        <div class="quiz-options">
                `;
                
                // Loop through options
                for (let j = 0; j < quizQuestions[i].options.length; j++) {
                    html += `
                        <div class="quiz-option" onclick="checkAnswer(${i}, ${j})">
                            ${quizQuestions[i].options[j]}
                        </div>
                    `;
                }
                
                html += `
                        </div>
                    </div>
                `;
            }
            document.getElementById('quizContainer').innerHTML = html;
        }

        // Conditional statements (Lecture 8)
        function checkAnswer(questionIndex, optionIndex) {
            const question = document.querySelectorAll('.quiz-question')[questionIndex];
            const options = question.querySelectorAll('.quiz-option');
            const correctIndex = quizQuestions[questionIndex].correct;
            
            // Check if already answered
            if (options[0].classList.contains('correct') || options[0].classList.contains('incorrect')) {
                return;
            }
            
            answeredQuestions++;
            
            // Comparison operators (Lecture 8)
            if (optionIndex === correctIndex) {
                options[optionIndex].classList.add('correct');
                currentScore++;
            } else {
                options[optionIndex].classList.add('incorrect');
                options[correctIndex].classList.add('correct');
            }
            
            // Check if all questions answered
            if (answeredQuestions === totalQuestions) {
                showQuizResult();
            }
        }

        function showQuizResult() {
            const percentage = Math.round((currentScore / totalQuestions) * 100);
            let message = '';
            
            // Conditional statements with logical operators (Lecture 8)
            if (percentage >= 80) {
                message = 'Excellent! You\'re well-protected against scams!';
            } else if (percentage >= 60 && percentage < 80) {
                message = 'Good job! But there\'s room for improvement.';
            } else if (percentage >= 40 && percentage < 60) {
                message = 'Be careful! You need to learn more about scam tactics.';
            } else {
                message = 'Danger! You\'re vulnerable to scams. Please review all sections!';
            }
            
            const resultHTML = `
                <div class="quiz-result">
                    <div class="quiz-score">${currentScore} / ${totalQuestions}</div>
                    <div class="quiz-message">${message}</div>
                    <p style="margin-top: 20px; color: var(--text-secondary);">Your Score: ${percentage}%</p>
                    <button class="btn btn-primary" onclick="resetQuiz()" style="margin-top: 25px;">🔄 Retake Quiz</button>
                </div>
            `;
            
            document.getElementById('quizContainer').innerHTML += resultHTML;
        }

        function resetQuiz() {
            currentScore = 0;
            answeredQuestions = 0;
            createQuiz();
        }

        // DOM Manipulation (Lecture 6)
        function scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Close mobile menu if open
                document.getElementById('navLinks').classList.remove('active');
            }
        }

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function toggleMenu() {
            document.getElementById('navLinks').classList.toggle('active');
        }

        function showDetail(title) {
            alert('💡 Remember: ' + title + '\n\nStay vigilant and always verify before you trust!');
        }

        function shareKnowledge() {
            const message = 'Protect yourself from online scams! Learn the warning signs and stay safe. Knowledge is your best defense!';
            
            // Check if Web Share API is available
            if (navigator.share) {
                navigator.share({
                    title: 'ScamAlert - Stay Safe Online',
                    text: message,
                    url: window.location.href
                }).then(() => {
                    alert('✅ Thank you for spreading awareness!');
                }).catch((error) => {
                    console.log('Share failed:', error);
                    alert(message);
                });
            } else {
                alert(message + '\n\nShare this page to help others stay safe!');
            }
        }

        // Scroll event (Lecture 6)
        window.onscroll = function() {
            const header = document.getElementById('header');
            const scrollTop = document.getElementById('scrollTop');
            
            // Conditional for header (Lecture 8)
            if (window.pageYOffset > 100) {
                header.classList.add('scrolled');
                scrollTop.classList.add('show');
            } else {
                header.classList.remove('scrolled');
                scrollTop.classList.remove('show');
            }
        };

        // Initialize all sections when page loads
        window.onload = function() {
            createDeceptionCards();
            createTacticsCards();
            createStatsCards();
            createChecklist();
            createStories();
            createComparison();
            createQuiz();
            
            // Welcome message
            setTimeout(() => {
                console.log('Welcome to ScamAlert! Stay vigilant, stay safe.');
            }, 1000);
        };