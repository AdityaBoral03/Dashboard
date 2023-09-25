// Get the pointer element
const slider = document.getElementById('slider');

// Function to update the slider position based on data value
function updateSliderPosition(dataValue) {
    const containerWidth = slider.parentElement.clientWidth;
    const maxPosition = containerWidth - slider.clientWidth;
    const newPosition = (dataValue / 24) * maxPosition;
    slider.style.left = newPosition + 'px';
}

// Example: Update the slider position with a data value of 18 (for demonstration)
updateSliderPosition(10);