document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('pre').forEach(block => {
        // Add clickable visual hint
        block.style.cursor = 'pointer';
        
        // Listen for both mouse and touch events
        block.addEventListener('click', handleCopy);
        block.addEventListener('contextmenu', handleCopy);
        block.addEventListener('touchend', handleCopy); // Add touch support
        
        function handleCopy(event) {
            event.preventDefault(); // Prevent default behavior
            
            const code = block.querySelector('code')?.textContent || block.textContent;
            
            // Try to use the Clipboard API with fallback
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(code).then(() => {
                    showCopiedTooltip(event);
                }).catch(err => {
                    console.error('copy error:', err);
                });
            } else {
                // Fallback for mobile devices
                const textarea = document.createElement('textarea');
                textarea.value = code;
                textarea.style.position = 'fixed';
                textarea.style.opacity = '0';
                document.body.appendChild(textarea);
                textarea.focus();
                textarea.select();
                
                try {
                    document.execCommand('copy');
                    showCopiedTooltip(event);
                } catch (err) {
                    console.error('Fallback copy error:', err);
                } finally {
                    document.body.removeChild(textarea);
                }
            }
        }
        
        function showCopiedTooltip(event) {
            // Remove existing tooltip if any
            const oldTooltip = document.querySelector('.copied-tooltip');
            if (oldTooltip) {
                oldTooltip.remove();
            }
            
            // Create new tooltip
            const copiedTooltip = document.createElement('span');
            copiedTooltip.textContent = 'copied!';
            copiedTooltip.classList.add('copied-tooltip');
            document.body.appendChild(copiedTooltip);
            
            // Get touch or mouse coordinates
            const x = event.touches ? event.touches[0].pageX : event.pageX;
            const y = event.touches ? event.touches[0].pageY : event.pageY;
            
            // Set tooltip position
            copiedTooltip.style.left = `${x}px`;
            copiedTooltip.style.top = `${y}px`;
            
            // Remove tooltip after 2 seconds
            setTimeout(() => {
                copiedTooltip.remove();
            }, 2000);
        }
    });
});