document.getElementById('healthForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const steps = document.getElementById('steps').value;
    const calories = document.getElementById('calories').value;
    const water = document.getElementById('water').value;
    const sleep = document.getElementById('sleep').value;

    // For example, use Chart.js to display the data in a simple bar chart
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Steps', 'Calories', 'Water', 'Sleep'],
            datasets: [{
                label: 'Health Metrics',
                data: [steps, calories, water, sleep],
                backgroundColor: ['blue', 'red', 'green', 'purple']
            }]
        },
        options: {
            responsive: true
        }
    });
});
