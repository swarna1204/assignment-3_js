// Select the form and its elements
const form = document.querySelector('form');
const inputs = form.querySelectorAll('input, textarea, select');
const labels = form.querySelectorAll('label');

// Style the form
form.style.backgroundColor = '#f9f9f9';
form.style.padding = '20px';
form.style.borderRadius = '5px';
form.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
form.style.maxWidth = '400px';
form.style.margin = 'auto';

// Style labels
labels.forEach(label => {
    label.style.display = 'block';
    label.style.marginBottom = '5px';
    label.style.fontWeight = 'bold';
});

// Style input fields
inputs.forEach(input => {
    input.style.width = '100%';
    input.style.padding = '10px';
    input.style.marginBottom = '15px';
    input.style.border = '1px solid #ccc';
    input.style.borderRadius = '4px';
    input.style.boxSizing = 'border-box'; // Ensures padding is included in width
});

// Style the submit button
const submitButton = form.querySelector('input[type="submit"]');
submitButton.style.backgroundColor = '#4CAF50'; // Green background
submitButton.style.color = 'white'; // White text
submitButton.style.padding = '10px 15px'; // Padding for button
submitButton.style.border = 'none'; // Remove default border
submitButton.style.borderRadius = '4px'; // Rounded corners
submitButton.style.cursor = 'pointer'; // Cursor pointer on hover

// Add hover effect for submit button
submitButton.addEventListener('mouseover', () => {
    submitButton.style.backgroundColor = '#45a049'; // Darker green on hover
});
submitButton.addEventListener('mouseout', () => {
    submitButton.style.backgroundColor = '#4CAF50'; // Revert to original color
});
