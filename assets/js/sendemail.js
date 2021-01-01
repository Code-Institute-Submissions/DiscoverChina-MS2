function sendMail(contactForm) {
    emailjs.send("service_onagj7g", "DiscoverChinaID", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.messagearea.value
    })
    .then(
        function() {
            let submitButton = document.getElementById('submitBtn');
            submitButton.innerHTML = "Sent!"
            submitButton.style.backgroundColor = "green";
        },
        function(error) {
            alert("It seems something went wrong. Please fill out the form and submit again", error);
        }
    );
//Clears after submitting https://www.w3schools.com/Jsref/met_form_reset.asp
    document.getElementById("myForm").reset();
    return false;  // To block from loading a new page
}
