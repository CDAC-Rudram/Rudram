// Function to handle form submission
async function submitHospitalForm(event) {
    event.preventDefault(); // Prevent the default form submission

    const hospitalName = document.getElementById('hospitalName').value;
    const role = document.getElementById('role').value;
    const creditLimitLeft = document.getElementById('creditLimitLeft').value;
    const creditLimit = document.getElementById('creditLimit').value;

    const hospitalData = {
        hospitalName,
        role,
        creditLimitLeft: parseFloat(creditLimitLeft),
        creditLimit: parseFloat(creditLimit)
    };

    try {
        const response = await fetch('http://localhost:8282/api/hospitals/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(hospitalData)
        });

        if (response.ok) {
            alert('Hospital information saved successfully!');
        } else {
            alert('Failed to save hospital information');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while saving hospital information');
    }
}

// Attach the event listener to the form submit button
document.getElementById('hospitalForm').addEventListener('submit', submitHospitalForm);
