// Function to format the date and time
function formatDateTime(date) {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    };
    return date.toLocaleDateString(undefined, options);
}

// Display the formatted date and time
const currentDateTime = new Date();
document.write(formatDateTime(currentDateTime));

/*<script>
    function updateLocalTime() {
        const currentTime = new Date();
        const timeSpan = document.getElementById('current-time');
        const options = {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true
        };
        const localTime = currentTime.toLocaleTimeString(undefined, options);
        timeSpan.textContent = localTime;
    }

    // Update the local time every second
    setInterval(updateLocalTime, 1000);

    // Call it initially to set the time immediately
    updateLocalTime();
</script>*/
