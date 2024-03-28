Based on the provided plan, the following code will address the requirements:

```html
<!-- enquiry.html -->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="index.css">
  <title>Enquiry Form</title>
</head>
<body>
  <form id="enquiryForm">
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
    </div>
    <div>
      <label for="phone">Phone Number:</label>
      <input type="tel" id="phone" name="phone" required>
    </div>
    <div>
      <label for="query">Query:</label>
      <textarea id="query" name="query" required></textarea>
    </div>
    <button type="submit">Submit</button>
  </form>
  <script src="enquiry.js"></script>
</body>
</html>
```

```javascript
// enquiry.js

document.getElementById('enquiryForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(this);
  const formObject = {};
  formData.forEach((value, key) => {
    formObject[key] = value;
  });
  const jsonForm = JSON.stringify(formObject);

  // Send form data to Google Sheets using the Google Sheets API
  // Include error handling and user feedback mechanisms for the form submission process
  // Example: Use fetch API to send data to a server endpoint
  
  fetch('https://example.com/submitForm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: jsonForm
  })
  .then(response => {
    if (response.ok) {
      alert('Form submitted successfully');
      // Additional success handling
    } else {
      alert('Form submission failed');
      // Additional error handling
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('An error occurred while submitting the form');
    // Additional error handling
  });
});
```

Please replace `'https://example.com/submitForm'` with the actual endpoint for handling form submissions. Additionally, ensure that the Google Sheets API integration is properly implemented for sending form data to a Google Sheet.