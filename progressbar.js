// Initialize Bootstrap tooltips
const progressBars = document.querySelectorAll('.progress-bar');
progressBars.forEach((progressBar) => {
    progressBar.addEventListener('mouseover', () => {
        progressBar.setAttribute('aria-describedby', `tooltip-${progressBar.id}`);
    });
    progressBar.addEventListener('mouseout', () => {
        progressBar.removeAttribute('aria-describedby');
    });
});

// Create Bootstrap tooltips
const tooltips = document.querySelectorAll(`[aria-describedby^="tooltip-"]`)
tooltips.forEach((tooltip) => {
    tooltip.addEventListener('mouseover', () => {
        tooltip.setAttribute('aria-hidden', 'false');
    });
    tooltip.addEventListener('mouseout', () => {
        tooltip.setAttribute('aria-hidden', 'true');
    });
});