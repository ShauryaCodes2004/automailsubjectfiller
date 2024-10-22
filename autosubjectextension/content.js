document.addEventListener('click', function(event) {
    // Detect the "Send" button in Gmail
    const sendButton = event.target.closest('div[aria-label="Send"]');
    
    if (sendButton) {
        const subjectField = document.querySelector('input[name="subjectbox"]');
        
        // Check if the subject is empty
        if (subjectField && subjectField.value.trim() === '') {
            // Auto-fill with a default subject
            subjectField.value = 'No Subject';
        }
    }
}, true);
