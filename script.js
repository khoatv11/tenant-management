document.addEventListener('DOMContentLoaded', () => {
    // Logic cho Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and panes
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            // Add active class to clicked button
            btn.classList.add('active');

            // Show corresponding tab pane
            const targetId = btn.getAttribute('data-tab');
            const targetPane = document.getElementById(targetId);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });

    // Mock copy to clipboard logic for Tenant ID
    const copyBtn = document.querySelector('.copyable');
    if (copyBtn) {
        copyBtn.addEventListener('click', function() {
            const textToCopy = this.textContent.trim();
            navigator.clipboard.writeText(textToCopy).then(() => {
                const icon = this.querySelector('i');
                const oldClass = icon.className;
                
                // Change icon to checkmark temporarily
                icon.className = 'ri-check-line';
                icon.style.color = 'var(--accent-success)';
                
                setTimeout(() => {
                    icon.className = oldClass;
                    icon.style.color = '';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
    }
});
