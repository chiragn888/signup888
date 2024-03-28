<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enquiry Form</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <form id="enquiryForm" class="enquiry-form">
        <div>
            <label for="name">Name:</label>
            <input type="text" id="name" class="input-field" required>
        </div>
        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" class="input-field" required>
        </div>
        <div>
            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" class="input-field" required>
        </div>
        <div>
            <label for="query">Query:</label>
            <textarea id="query" class="input-field" required></textarea>
        </div>
        <button type="submit" class="submit-button">Submit</button>
    </form>

    <script src="enquiry.js"></script>
</body>
</html>