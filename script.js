function validateForm() {
    const name = document.getElementById("name").value;
    const company = document.getElementById("company").value;
    const email = document.getElementById("email").value;
    const nameError = document.getElementById("name-error");
    const uid = crypto.randomUUID();
    document.getElementById('uid').setAttribute("value", uid);
    
    const companyError = document.getElementById(
        "company-error"
    );
    const emailError = document.getElementById(
        "email-error"
    );

    nameError.textContent = "";
    companyError.textContent = "";
    emailError.textContent = "";

    let isValid = true;

    if (name === "" || /\d/.test(name)) {
        nameError.textContent =
            "Please enter your name properly.";
        isValid = false;
    }

    if (company === "") {
        companyError.textContent =
            "Please enter your company.";
        isValid = false;
    }

    if (email === "" || !email.includes("@")) {
        emailError.textContent =
            "Please enter a valid email address.";
        isValid = false;
    }

    return isValid;
}
