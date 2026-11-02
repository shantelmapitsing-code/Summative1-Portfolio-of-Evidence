// CONTACT FORM VALIDATION
function validateContact(event) {
    event.preventDefault(); // Stops page reload (AJAX requirement)
    const name = document.getElementById('cName').value.trim();
    const email = document.getElementById('cEmail').value.trim();
    const message = document.getElementById('cMessage').value.trim();
    const errorDiv = document.getElementById('cError');
    const responseDiv = document.getElementById('cResponse');
    
    errorDiv.innerHTML = ""; responseDiv.style.display = "none";

    if (name.length < 2) { errorDiv.innerHTML = "Please enter a valid name."; return false; }
    if (!email.includes("@")) { errorDiv.innerHTML = "Invalid email address."; return false; }
    if (message.length < 10) { errorDiv.innerHTML = "Message must be at least 10 characters."; return false; }

    responseDiv.style.display = "block";
    responseDiv.innerHTML = "✅ Message sent successfully!";
    document.getElementById('contactForm').reset();
    return false;
}

// ENQUIRY FORM VALIDATION
function validateEnquiry(event) {
    event.preventDefault(); // Stops page reload
    const name = document.getElementById('enqName').value.trim();
    const email = document.getElementById('enqEmail').value.trim();
    const errorDiv = document.getElementById('enqError');
    const responseDiv = document.getElementById('enqResponse');

    errorDiv.innerHTML = ""; responseDiv.style.display = "none";

    if (name.length < 2) { errorDiv.innerHTML = "Name is too short."; return false; }
    if (!email.includes("@")) { errorDiv.innerHTML = "Invalid email address."; return false; }
    if (document.getElementById('enqAge').value === "") { errorDiv.innerHTML = "Select an age group."; return false; }
    if (document.getElementById('enqProgram').value === "") { errorDiv.innerHTML = "Select a program."; return false; }

    responseDiv.style.display = "block";
    responseDiv.innerHTML = `✅ Enquiry submitted! Cost: R0 FREE.`;
    document.getElementById('enquiryForm').reset();
    return false;
}