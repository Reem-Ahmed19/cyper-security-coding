 // Main Statistics Data
        const mainStatsData = [
            { icon: '⚠️', number: '90%', label: 'of cyber attacks start with phishing' },
            { icon: '💵', number: '$10.3B', label: 'lost to online scams in 2023' },
            { icon: '👥', number: '18-34', label: 'age group most targeted' },
            { icon: '🌐', number: '3.4B', label: 'phishing emails sent daily' },
            { icon: '📈', number: '43%', label: 'increase in scams since 2020' },
            { icon: '⏱️', number: '60s', label: 'average time to fall for scam' }
        ];

        // Impact Chart Data
        const impactChartData = [
            { label: 'Phishing Emails', amount: '$2.9B', percentage: '32%', width: 100 },
            { label: 'Investment Scams', amount: '$2.3B', percentage: '26%', width: 81 },
            { label: 'Romance Scams', amount: '$1.3B', percentage: '18%', width: 56 },
            { label: 'Identity Theft', amount: '$900M', percentage: '12%', width: 37 },
            { label: 'Tech Support', amount: '$347M', percentage: '6%', width: 18 },
            { label: 'Other', amount: '$208M', percentage: '4%', width: 12 }
        ];

        // Age Groups Data
        const ageGroupsData = [
            { title: 'Under 20', reports: '12,490', avgLoss: '$850' },
            { title: '20-29', reports: '45,230', avgLoss: '$1,200' },
            { title: '30-39', reports: '62,890', avgLoss: '$3,400' },
            { title: '40-49', reports: '38,760', avgLoss: '$3,800' },
            { title: '50-59', reports: '32,450', avgLoss: '$5,200' },
            { title: '60+', reports: '28,340', avgLoss: '$7,500' }
        ];

        // Key Insights Data
        const insightsData = [
            { icon: '📊', text: 'Younger people report more scams, but older victims lose more money on average' },
            { icon: '💰', text: 'Investment and romance scams account for the highest financial losses' },
            { icon: '⚠️', text: 'Most scams start with seemingly legitimate communication' },
            { icon: '🎓', text: 'Awareness and education significantly reduce scam success rates' }
        ];

        // Variables
        let currentLanguage = 'EN';
        let isDarkMode = true;

        // Function to create main stats grid
        function createMainStats() {
            let htmlOutput = '';
            
            for (let i = 0; i < mainStatsData.length; i++) {
                const stat = mainStatsData[i];
                htmlOutput += `
                    <div class="stat-box">
                        <div class="stat-icon">${stat.icon}</div>
                        <div class="stat-number">${stat.number}</div>
                        <div class="stat-label">${stat.label}</div>
                    </div>
                `;
            }
            
            document.getElementById('mainStatsGrid').innerHTML = htmlOutput;
        }

        // Function to create impact chart
        function createImpactChart() {
            let htmlOutput = '';
            
            for (let i = 0; i < impactChartData.length; i++) {
                const item = impactChartData[i];
                htmlOutput += `
                    <div class="chart-item">
                        <div class="chart-left">
                            <div class="chart-label">${item.label}</div>
                            <div class="chart-bar">
                                <div class="chart-fill" style="width: ${item.width}%"></div>
                            </div>
                        </div>
                        <div class="chart-right">
                            <div class="chart-amount">${item.amount}</div>
                            <div class="chart-percentage">${item.percentage}</div>
                        </div>
                    </div>
                `;
            }
            
            document.getElementById('impactChart').innerHTML = htmlOutput;
        }

        // Function to create age groups grid
        function createAgeGroups() {
            let htmlOutput = '';
            
            for (let i = 0; i < ageGroupsData.length; i++) {
                const group = ageGroupsData[i];
                htmlOutput += `
                    <div class="age-group-card">
                        <h3 class="age-group-title">${group.title}</h3>
                        <div class="age-stat-row">
                            <span class="age-stat-label">Reports</span>
                            <span class="age-stat-value">${group.reports}</span>
                        </div>
                        <div class="age-stat-row">
                            <span class="age-stat-label">Avg. Loss</span>
                            <span class="age-stat-value">${group.avgLoss}</span>
                        </div>
                    </div>
                `;
            }
            
            document.getElementById('ageGroupsGrid').innerHTML = htmlOutput;
        }

        // Function to create insights
        function createInsights() {
            let htmlOutput = '';
            
            for (let i = 0; i < insightsData.length; i++) {
                const insight = insightsData[i];
                htmlOutput += `
                    <div class="insight-item">
                        <div class="insight-icon">${insight.icon}</div>
                        <div class="insight-content">
                            <p>${insight.text}</p>
                        </div>
                    </div>
                `;
            }
            
            document.getElementById('insightsGrid').innerHTML = htmlOutput;
        }

        // Navigation functions
        function navigateTo(page) {
            alert(`📄 Navigating to ${page} page...`);
        }

        function switchLanguage() {
            if (currentLanguage === 'EN') {
                currentLanguage = 'AR';
            } else {
                currentLanguage = 'EN';
            }
            document.getElementById('currentLang').textContent = currentLanguage;
            alert(`🌍 Language switched to ${currentLanguage}`);
        }

        function changeTheme() {
            isDarkMode = !isDarkMode;
            alert(`🎨 Theme changed! (Dark mode: ${isDarkMode})`);
        }

        function toggleSwitch(element) {
            element.classList.toggle('enabled');
        }

        function openSocialMedia(platform) {
            alert(`🔗 Opening ${platform}...`);
        }

        function showLegal(type) {
            alert(`📋 Viewing ${type} policy...`);
        }

        // Initialize all sections
        window.onload = function() {
            createMainStats();
            createImpactChart();
            createAgeGroups();
            createInsights();
            
            console.log('📊 Statistics Dashboard loaded successfully!');
            console.log(`Total data points: ${mainStatsData.length + impactChartData.length + ageGroupsData.length}`);
        };