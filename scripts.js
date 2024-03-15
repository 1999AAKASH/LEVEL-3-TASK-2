document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("myForm");
    var submitButton = document.getElementById("submitButton");

    submitButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Submit the form using JavaScript
        form.submit();
    });
});