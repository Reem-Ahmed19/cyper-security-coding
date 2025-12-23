// Data Arrays
const scamData = [
    {
        category: "Urgency Tactics",
        title: "Urgency Creates Panic",
        description: "Scammers weaponize time pressure to cloud your judgment. 'Act now or lose your account!' 'Limited time offer!' These phrases are designed to bypass your critical thinking. Real companies give you time to make informed decisions. Always pause, breathe, and verify independently.",
        type: "urgency"
    },
    {
        category: "Fake Offers",
        title: "Too Good to Be True",
        description: "Promises of instant wealth, miracle cures, or impossible deals are classic bait. 'Make $10,000 in a week!' 'Lose 50 pounds overnight!' If something sounds impossibly good, it's because it is impossible. Research thoroughly, consult experts, and trust your instincts.",
        type: "fake-offers"
    },
    {
        category: "Impersonation",
        title: "Authority Impersonation",
        description: "Fraudsters masquerade as government officials, tech support, bank executives, or law enforcement to exploit your trust. They use fear and authority to manipulate. Remember: real organizations never demand immediate payment or threaten arrest via unsolicited calls or messages.",
        type: "impersonation"
    }
];

const tacticsList = [
    { emoji: "🎣", title: "Phishing Emails", description: "Sophisticated fake messages designed to steal your login credentials and personal information" },
    { emoji: "📱", title: "Fake Prize Messages", description: "You didn't enter any contest - it's an elaborate trap to harvest your sensitive data" },
    { emoji: "💸", title: "OTP/2FA Theft", description: "Never share one-time passwords or authentication codes with anyone, ever" },
    { emoji: "🔗", title: "Cloned Websites", description: "Perfect replicas of legitimate sites that capture everything you type" },
    { emoji: "😨", title: "Emotional Manipulation", description: "Exploiting fear, greed, sympathy, or urgency to override rational thinking" },
    { emoji: "🔐", title: "Fake Account Alerts", description: "Legitimate companies will never ask for your password or full credit card number" }
];

const statisticsData = [
    { value: "90%", title: "of data breaches", info: "involve phishing and social engineering attacks" },
    { value: "$10B+", title: "lost annually", info: "to cybercrime and online fraud worldwide" },
    { value: "18-34", title: "age demographic", info: "most frequently targeted by modern scammers" }
];

const protectionList = [
    "Does the sender's email address look suspicious, misspelled, or use unusual domains?",
    "Is there unusual urgency, threatening language, or extreme pressure to act immediately?",
    "Are you being asked to provide sensitive information like passwords, OTPs, or full credit card numbers?",
    "Does the message contain obvious spelling errors, grammatical mistakes, or awkward phrasing?",
    "Is the offer impossibly good, promising unrealistic returns, or guaranteeing results?",
    "Are you being asked to click suspicious links, download unexpected attachments, or install software?",
    "Can you independently verify this request through the official website, app, or published phone number?",
    "Would a legitimate organization actually communicate this way or make these demands?"
];

const realStories = [
    {
        title: "The Fake Job Offer",
        text: "Sarah, a recent graduate, received her 'dream job' offer via email from a well-known company. The offer seemed perfect - high salary, remote work, benefits. After 'accepting,' she was asked to provide personal documents and banking details for 'payroll setup.' Within days, unauthorized charges appeared on her accounts.",
        loss: "Lost: $4,200"
    },
    {
        title: "The Romance Scam",
        text: "Michael, recently divorced, found someone special on a dating app. Over six months, their connection deepened. His online 'partner' faced multiple emergencies - medical bills, travel costs, business opportunities. Each time, Michael sent money. The person never existed. The photos were stolen. The love was manufactured.",
        loss: "Lost: $42,000"
    },
    {
        title: "The Tech Support Call",
        text: "Lisa received an urgent call about a critical 'virus' detected on her computer. The caller knew her name, address, and seemed professional. Panicked, she granted remote access to 'fix' the problem. Within hours, her bank accounts were emptied, her identity stolen, and her computer locked by ransomware.",
        loss: "Lost: $8,500"
    },
    {
        title: "The Delivery Text Scam",
        text: "John got a text about a failed delivery attempt with a tracking link. The website looked identical to the real shipping company. He entered his credit card 'for redelivery fees.' That simple click led to thousands in fraudulent purchases, a maxed-out credit card, and months of fighting with his bank to recover the money.",
        loss: "Lost: $3,100"
    }
];

const comparisonExamples = [
    {
        type: "fake",
        title: "Suspicious Email",
        text: "From: support@paypa1-secure.com (note the '1' instead of 'l'). Subject: URGENT: Verify account or face suspension! Filled with typos, generic greetings, and immediate threats. Contains suspicious links to fake login pages."
    },
    {
        type: "real",
        title: "Legitimate Email",
        text: "From: noreply@paypal.com (exact official domain). Subject: Security notification. Professional formatting, personalized greeting, no urgent threats. Directs you to log in through the official app or website, never through email links."
    },
    {
        type: "fake",
        title: "Scam Phone Call",
        text: "'This is the IRS. You owe back taxes. If you don't pay immediately via gift cards, we'll issue a warrant for your arrest.' Real government agencies never threaten arrest over the phone or demand payment via gift cards, cryptocurrency, or wire transfers."
    },
    {
        type: "real",
        title: "Legitimate Contact",
        text: "Official notices come via certified mail. Real government agencies provide official letter identification, give you time to respond, and offer multiple verification methods. They never demand immediate payment or threaten arrest without proper legal process."
    }
];

const quizData = [
    {
        question: "You receive an email from 'support@paypa1-security.com' (note the '1' instead of 'l') asking you to verify your account within 24 hours or face suspension. What should you do?",
        choices: [
            "Click the link immediately to save your account",
            "Reply with your account details to prove your identity",
            "Delete it - it's a phishing attempt with a fake domain",
            "Forward it to all your contacts as a legitimate warning"
        ],
        correctAnswer: 2
    },
    {
        question: "A stranger on LinkedIn offers you an amazing remote job with a $150,000 salary for minimal work. They want to hire you immediately without an interview. What's your next move?",
        choices: [
            "Accept immediately - it's the opportunity of a lifetime!",
            "Provide your banking information for the first paycheck",
            "Research the company independently and be highly skeptical",
            "Send them money for 'equipment' and 'training materials'"
        ],
        correctAnswer: 2
    },
    {
        question: "You receive a call from someone claiming to be 'Microsoft Technical Support' saying your computer has been infected with viruses. They want remote access to 'fix' it urgently. What do you do?",
        choices: [
            "Give them remote access - they're trying to help protect you",
            "Hang up immediately - Microsoft doesn't make unsolicited calls",
            "Pay them the 'service fee' to remove the viruses",
            "Download their 'security software' to scan your computer"
        ],
        correctAnswer: 1
    },
    {
        question: "You get a text message saying you've won a $5,000 prize from a contest you don't remember entering. They need your bank account number to 'deposit' the winnings. What should you do?",
        choices: [
            "Provide your bank details - you might have entered and forgotten",
            "Ignore and delete - legitimate prizes never ask for banking information",
            "Click the link to claim your prize before it expires",
            "Share the opportunity with friends so they can win too"
        ],
        correctAnswer: 1
    },
    {
        question: "Someone you met online two weeks ago says they're in love with you and needs $2,000 for an emergency. They promise to pay you back and meet you soon. What's the right response?",
        choices: [
            "Send the money - true love requires trust and sacrifice",
            "Send half to show you care about their emergency",
            "Recognize it as a romance scam and end contact immediately",
            "Give them your credit card information to help"
        ],
        correctAnswer: 2
    }
];

// Quiz State
let userScore = 0;
let questionsAnswered = 0;
let currentFilter = 'all';

// Initialize Functions
function renderScamCards() {
    const container = document.getElementById('scamGrid');
    let html = '';
    
    const filteredData = currentFilter === 'all' 
        ? scamData 
        : scamData.filter(item => item.type === currentFilter);
    
    filteredData.forEach(item => {
        html += `
            <div class="scam-card" onclick="showScamDetails('${item.title}')">
                <span class="scam-badge">Scam Example</span>
                <div class="scam-category">${item.category}</div>
                <h3 class="scam-title">${item.title}</h3>
                <p class="scam-description">${item.description}</p>
                <div class="view-details">
                    <span>View Details</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="9 18 15 12 9 6"/>
                    </svg>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function renderTactics() {
    const container = document.getElementById('tacticsGrid');
    let html = '';
    
    tacticsList.forEach(tactic => {
        html += `
            <div class="tactic-card">
                <div class="tactic-emoji">${tactic.emoji}</div>
                <h3 class="tactic-title">${tactic.title}</h3>
                <p class="tactic-text">${tactic.description}</p>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function renderStatistics() {
    const container = document.getElementById('statsContainer');
    let html = '';
    
    statisticsData.forEach(stat => {
        html += `
            <div class="stat-box">
                <div class="stat-value">${stat.value}</div>
                <div class="stat-title">${stat.title}</div>
                <div class="stat-info">${stat.info}</div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function renderProtectionChecklist() {
    const container = document.getElementById('protectionChecklist');
    let html = '';
    
    protectionList.forEach(item => {
        html += `
            <div class="checklist-item">
                <div class="check-mark">✓</div>
                <p class="checklist-text">${item}</p>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function renderStories() {
    const container = document.getElementById('storiesContainer');
    let html = '';
    
    realStories.forEach(story => {
        html += `
            <div class="story-card">
                <h3 class="story-title">${story.title}</h3>
                <p class="story-text">${story.text}</p>
                <div class="story-loss">${story.loss}</div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function renderComparison() {
    const container = document.getElementById('comparisonContainer');
    let html = '';
    
    comparisonExamples.forEach(example => {
        html += `
            <div class="comparison-card ${example.type}">
                <span class="comparison-label">${example.type === 'fake' ? 'FAKE' : 'REAL'}</span>
                <h3 class="comparison-heading">${example.title}</h3>
                <p class="comparison-text">${example.text}</p>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function renderQuiz() {
    const container = document.getElementById('quizWrapper');
    let html = '';
    
    quizData.forEach((quiz, index) => {
        html += `
            <div class="quiz-item">
                <h3 class="quiz-question">Question ${index + 1}: ${quiz.question}</h3>
                <div class="quiz-choices">
        `;
        
        quiz.choices.forEach((choice, choiceIndex) => {
            html += `
                <div class="quiz-choice" onclick="handleQuizAnswer(${index}, ${choiceIndex})">
                    ${choice}
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Event Handlers
function filterScams(type) {
    currentFilter = type;
    
    // Update active tab
    const tabs = document.querySelectorAll('.filter-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
    
    renderScamCards();
}

function handleQuizAnswer(questionIndex, choiceIndex) {
    const quizItem = document.querySelectorAll('.quiz-item')[questionIndex];
    const choices = quizItem.querySelectorAll('.quiz-choice');
    const correctIndex = quizData[questionIndex].correctAnswer;
    
    // Check if already answered
    if (choices[0].classList.contains('correct') || choices[0].classList.contains('incorrect')) {
        return;
    }
    
    questionsAnswered++;
    
    if (choiceIndex === correctIndex) {
        choices[choiceIndex].classList.add('correct');
        userScore++;
    } else {
        choices[choiceIndex].classList.add('incorrect');
        choices[correctIndex].classList.add('correct');
    }
    
    if (questionsAnswered === quizData.length) {
        displayQuizResults();
    }
}

function displayQuizResults() {
    const percentage = Math.round((userScore / quizData.length) * 100);
    let feedback = '';
    
    if (percentage >= 80) {
        feedback = 'Excellent! You\'re well-protected against scams!';
    } else if (percentage >= 60) {
        feedback = 'Good job! But there\'s room for improvement.';
    } else if (percentage >= 40) {
        feedback = 'Be careful! You need to learn more about scam tactics.';
    } else {
        feedback = 'Danger! You\'re vulnerable to scams. Please review all sections!';
    }
    
    const resultsHTML = `
        <div class="quiz-results">
            <div class="quiz-final-score">${userScore} / ${quizData.length}</div>
            <div class="quiz-feedback">${feedback}</div>
            <p style="color: var(--text-secondary);">Your Score: ${percentage}%</p>
            <button class="primary-btn" onclick="retakeQuiz()" style="margin-top: 24px;">🔄 Retake Quiz</button>
        </div>
    `;
    
    document.getElementById('quizWrapper').innerHTML += resultsHTML;
}

function retakeQuiz() {
    userScore = 0;
    questionsAnswered = 0;
    renderQuiz();
}

function showScamDetails(title) {
    alert('💡 Remember: ' + title + '\n\nStay vigilant and always verify before you trust!');
}

function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Close mobile menu if open
        document.getElementById('navMenu').classList.remove('active');
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMobileMenu() {
    document.getElementById('navMenu').classList.toggle('active');
}

function toggleTheme() {
    alert('🌙 Theme toggle feature coming soon!');
}

function shareAwareness() {
    const message = 'Protect yourself from online scams! Learn the warning signs and stay safe. Knowledge is your best defense!';
    
    if (navigator.share) {
        navigator.share({
            title: 'CyberAware - Stay Safe Online',
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

function showAlert(topic) {
    alert(`📚 ${topic} - More information coming soon!`);
}

// Scroll Event Handler
window.addEventListener('scroll', function() {
    const scrollBtn = document.getElementById('scrollTopBtn');
    
    if (window.pageYOffset > 300) {
        scrollBtn.classList.add('show');
    } else {
        scrollBtn.classList.remove('show');
    }
});

// Initialize Everything on Page Load
window.addEventListener('load', function() {
    renderScamCards();
    renderTactics();
    renderStatistics();
    renderProtectionChecklist();
    renderStories();
    renderComparison();
    renderQuiz();
    
    console.log('🛡️ CyberAware loaded successfully. Stay vigilant, stay safe.');
});