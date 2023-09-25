Highcharts.setOptions({
    colors: ['#7b68ee', '#00ced1', '#191970','#FFFFFF']
});
Highcharts.chart('container', {
    chart: {
        backgroundColor: null, // Set background color to transparent
    },
    credits: {
        enabled: false // Disable the Highcharts.com attribution
    },
    title: {
        text: 'OEE',
        align: 'center',
        verticalAlign: 'middle',
        y: 100,
        style: {
            fontSize: '20px', // Set the font size of the percentage
            color: 'grey' // Set the text color for the percentage
        }
    },
    subtitle: {
        text: '95%', // Add the percentage here
        align: 'center',
        verticalAlign: 'middle',
        y: 60, // Adjust the Y position to center the percentage
        style: {
            fontSize: '25px', // Set the font size of the percentage
            color: 'black' // Set the text color for the percentage
        }
    },
    
    plotOptions: {
        pie: {
            startAngle: -135,
            endAngle: 135,
            center: ['50%', '75%'],
            size: '110%',
            tooltip: {
                pointFormat: '<b>{point.name}:</b> {point.y}% </br>{point.description}',
                headerFormat: ''
            }
            
        }
    },
    series: [{
        type: 'pie',
        name: 'OEE',
        innerSize: '50%',
        data: [
            {
                name: 'Availability',
                y: 50,
                description: 'This is the availability description'
            },
            {
                name: 'Performance',
                y: 30,
                description: 'This is the performance description'
            },
            {
                name: 'Quality',
                y: 15,
                description: 'This is the quality description'
            },
            {
                name: '',
                y: 10,
                description: 'This is the custom parameter description'
            }
        ]
    }]
});