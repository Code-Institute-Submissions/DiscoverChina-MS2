function sendMail(contactForm) {
    emailjs.send("service_onagj7g", "DiscoverChinaID", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
//Clears after submitting https://www.w3schools.com/Jsref/met_form_reset.asp
    document.getElementById("myForm").reset();
    return false;  // To block from loading a new page
}
