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
    <form id="enquiryForm" class="enquiry-form">
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" required>
        </div>
        <div class="form-group">
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

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('enquiryForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = form.elements['name'].value;
        const email = form.elements['email'].value;
        const phone = form.elements['phone'].value;
        const query = form.elements['query'].value;
        
        // Validate data (add your validation logic here)

        // Send data to Google Sheet using Google Apps Script or equivalent API
        // Add your code to send data to the server here
    });
});