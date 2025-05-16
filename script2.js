document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("membership-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default submission
        let valid = true;

        clearErrors();

        //  Full Name
        const fullname = document.getElementById("fullname");
        if (fullname.value.trim() === "") {
            showError(fullname, "Full name is required.");
            valid = false;
        }

        //  Email
        const email = document.getElementById("email");
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            showError(email, "Enter a valid email address.");
            valid = false;
        }

        //  Phone
        const phone = document.getElementById("phone");
        const phonePattern = /^\d{10,15}$/;
        if (!phonePattern.test(phone.value.trim())) {
            showError(phone, "Phone number must be 10–15 digits.");
            valid = false;
        }

        //  DOB
        const dob = document.getElementById("dob");
        if (!dob.value) {
            showError(dob, "Date of birth is required.");
            valid = false;
        }

        //  Gender
        const genderSelected = document.querySelector('input[name="gender"]:checked');
        if (!genderSelected) {
            const radioGroup = document.querySelector('.radio-group');
            showError(radioGroup, "Select a gender.");
            valid = false;
        }

        //  Membership
        const membership = document.getElementById("membership");
        if (membership.value === "") {
            showError(membership, "Select a membership type.");
            valid = false;
        }

        //  Payment Method
        const payment = document.getElementById("payment");
        if (payment.value === "") {
            showError(payment, "Select a payment method.");
            valid = false;
        }

        //  Card Number
        const card = document.getElementById("card-number");
        const cardPattern = /^\d{16}$/;
        if (!cardPattern.test(card.value.trim())) {
            showError(card, "Card number must be 16 digits.");
            valid = false;
        }

        //  CVC
        const cvc = document.getElementById("cvc");
        const cvcPattern = /^\d{3,4}$/;
        if (!cvcPattern.test(cvc.value.trim())) {
            showError(cvc, "CVC must be 3 or 4 digits.");
            valid = false;
        }

        // Submit if all valid
        if (valid) {
            alert("Application submitted successfully!");
            form.reset();
        }
    });

    // Restrict inputs
    document.getElementById("phone").addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/\D/g, "");
    });

    document.getElementById("card-number").addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/\D/g, "").slice(0, 16);
    });

    document.getElementById("cvc").addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/\D/g, "").slice(0, 4);
    });

    // Error helpers
    function showError(element, message) {
        const errorSpan = element.closest(".form-group").querySelector(".error-message");
        if (errorSpan) {
            errorSpan.textContent = message;
        } else {
            const span = document.createElement("span");
            span.className = "error-message";
            span.textContent = message;
            element.closest(".form-group").appendChild(span);
        }
    }

    function clearErrors() {
        document.querySelectorAll(".error-message").forEach((el) => {
            el.textContent = "";
        });
    }
});
