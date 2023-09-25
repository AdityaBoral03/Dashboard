// Generate 50 random data points for the x-axis
const xData = Array.from({ length: 50 }, (_, i) => i + 1);

// Generate 10 random data points for the y-axis
const yData = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

// Sample data for the combined line chart
const data = {
    labels: xData,
    datasets: [
        {
            label: 'Temperature',
            data: Array.from({ length: 50 }, () => Math.floor(Math.random() * 100)),
            borderColor: '#7b68ee', // Red color
            borderWidth: 2,
            fill: false,
        },
        {
            label: 'Load',
            data: Array.from({ length: 50 }, () => Math.floor(Math.random() * 100)),
            borderColor: '#00ced1', // Green color
            borderWidth: 2,
            fill: false,
        },
        {
            label: 'Current',
            data: Array.from({ length: 50 }, () => Math.floor(Math.random() * 100)),
            borderColor: '#191970', // Blue color
            borderWidth: 2,
            fill: false,
        },
    ]
};

// Get the canvas element
const ctx = document.getElementById('combined-chart').getContext('2d');

// Create the combined line chart with enhanced aesthetics
const combinedChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        scales: {
            x: {
                beginAtZero: true,
                maxRotation: 0,
                minRotation: 0,
                ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                },
                title: {
                    display: true,
                    text: 'X-Axis Label',
                    font: {
                        weight: 'bold',
                        size: 16,
                    },
                },
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Y-Axis Label',
                    font: {
                        weight: 'bold',
                        size: 16,
                    },
                },
            },
        },
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 14,
                    },
                },
            },
            title: {
                display: true,
                text: 'Combined Line Chart',
                font: {
                    weight: 'bold',
                    size: 20,
                },
            },
        },
    },
});

// Apply custom CSS styles to make the chart more aesthetic
const chartCanvas = document.getElementById('combined-chart');
chartCanvas.style.border = '1px solid #ccc';