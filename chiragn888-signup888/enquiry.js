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
    <script src="https://apis.google.com/js/api.js"></script>
    <script src="enquiry.js"></script>
</body>
</html>