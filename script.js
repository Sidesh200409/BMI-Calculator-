 
 
 
 
 document.getElementById('calculateBtn').addEventListener('click', function() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;

    if (isNaN(weight) || isNaN(height) || isNaN(age)) {
        alert('Please enter valid values');
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    let category = '';
    let risk = '';
    
    
    if (bmi < 18.5) {
        category = 'Underweight';
        risk = 'Malnutrition risk';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal weight';
        risk = 'Low risk';
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = 'Overweight';
        risk = 'Enhanced risk';
    } else {
        category = 'Obesity';
        risk = 'High risk';
    }

    
    const idealMinWeight = (18.5 * (height * height)).toFixed(1);
    const idealMaxWeight = (24.9 * (height * height)).toFixed(1);

  
    document.getElementById('bmi-output').textContent = `Your BMI: ${bmi}`;
    document.getElementById('bmi-category').textContent = `Category: ${category}`;
    document.getElementById('bmi-risk').textContent = `Health Risk: ${risk}`;
    document.getElementById('ideal-weight').textContent = `Ideal Weight Range: ${idealMinWeight} - ${idealMaxWeight} kg`;

   
    const ctx = document.getElementById('bmi-chart').getContext('2d');
    const bmiChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Underweight', 'Normal', 'Overweight', 'Obese'],
            datasets: [{
                label: 'BMI Range',
                data: [18.5, 24.9, 29.9, 40],
                backgroundColor: ['#f39c12', '#2ecc71', '#e74c3c', '#c0392b'],
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
