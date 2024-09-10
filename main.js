function validateForm() {
    // Get input values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
  
    // Clear any previous error or success messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('ageError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('successMessage').textContent = '';
  
    let isValid = true;
  
    // Name validation (check if it's a non-empty string)
    if (!name) {
      document.getElementById('nameError').textContent = 'Name is required.';
      isValid = false;
    }
  
    // Age validation (check if it's a non-falsy number)
    if (!age || age <= 0) {
      document.getElementById('ageError').textContent = 'Please enter a valid age.';
      isValid = false;
    }
  
    // Email validation (check if it's a non-empty string)
    if (!email) {
      document.getElementById('emailError').textContent = 'Email is required.';
      isValid = false;
    }
  
    // If all fields are truthy, display a success message
    if (isValid) {
      document.getElementById('successMessage').textContent = 'Form submitted successfully!';
    }
  }
  