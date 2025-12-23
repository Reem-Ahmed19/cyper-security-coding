 let selectedContactMethod = '';

        function selectContact(element, method) {
            // Remove selected class from all options
            document.querySelectorAll('.contact-option').forEach(option => {
                option.classList.remove('selected');
            });
            
            // Add selected class to clicked option
            element.classList.add('selected');
            
            // Update hidden input
            selectedContactMethod = method;
            document.getElementById('contactMethod').value = method;
        }

        // Handle file upload
        document.getElementById('fileInput').addEventListener('change', function(e) {
            const files = e.target.files;
            if (files.length > 0) {
                const uploadArea = document.querySelector('.upload-area');
                const fileNames = Array.from(files).map(f => f.name).join(', ');
                uploadArea.querySelector('.upload-text').textContent = `${files.length} file(s) selected: ${fileNames}`;
            }
        });

        // Handle form submission
        document.getElementById('reportForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!selectedContactMethod) {
                alert('Please select how the scammer contacted you.');
                return;
            }
            
            // Show success message
            alert('Thank you for your report! Your submission helps protect others from falling victim to scams.\n\nYour report has been received and will be used for educational purposes.');
            
            // Reset form
            this.reset();
            document.querySelectorAll('.contact-option').forEach(option => {
                option.classList.remove('selected');
            });
            selectedContactMethod = '';
            
            // Reset upload area text
            document.querySelector('.upload-text').textContent = 'Click to upload screenshots, emails, or other evidence';
        });