document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission if there are validation errors

        // Retrieve input field values
        const subject = document.getElementById('subject').value;
        const name = document.getElementById('fname').value;
        const phone = document.getElementById('class').value;
        const about = document.getElementById('track').value;
        const gender = document.querySelector('input[name="fav_language"]:checked')?.value;

        // Check if all fields are filled out
        if (subject.trim() === '' || name.trim() === '' || phone.trim() === '' || about.trim() === '' || !gender) {
            alert('Please fill out all the fields in the form.');
            return; // Stop form submission
        }

        // Initialize validity flag
        let isValid = true;

        // Validate Enquiry
        const subjectField = document.getElementById('subject');
        const subjectError = document.querySelector('#subject + .error');
        if (subject.trim() === '') {
            displayError(subjectField, subjectError, 'Enquiry is required');
            isValid = false;
        } else {
            clearError(subjectField, subjectError);
        }

        // Validate Name
        const nameField = document.getElementById('fname');
        const nameError = document.querySelector('#fname + .error');
        if (name.trim() === '' || !/^[a-zA-Z\s]+$/.test(name)) {
            displayError(nameField, nameError, 'Invalid name format');
            isValid = false;
        } else {
            clearError(nameField, nameError);
        }

        // Validate Phone Number
        const phoneField = document.getElementById('class');
        const phoneError = document.querySelector('#class + .error');
        if (phone.trim() === '' || !/^\d+$/.test(phone)) {
            displayError(phoneField, phoneError, 'Invalid phone number format');
            isValid = false;
        } else {
            clearError(phoneField, phoneError);
        }

        // Validate About
        const aboutField = document.getElementById('track');
        const aboutError = document.querySelector('#track + .error');
        if (about.trim() === '') {
            displayError(aboutField, aboutError, 'Please select an option');
            isValid = false;
        } else {
            clearError(aboutField, aboutError);
        }

        // Validate Gender
        const genderError = document.querySelector('input[name="fav_language"] + .error');
        if (!gender) {
            displayError(null, genderError, 'Gender is required');
            isValid = false;
        } else {
            clearError(null, genderError);
        }

        // Prevent form submission if there are validation errors
        if (isValid) {
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    // Display error message
    function displayError(field, errorElement, errorMessage) {
        if (field) {
            field.classList.add('error-field');
        }
        if (errorElement) {
            errorElement.innerHTML = errorMessage;
            errorElement.style.display = 'block';
        }
    }

    // Clear error message
    function clearError(field, errorElement) {
        if (field) {
            field.classList.remove('error-field');
        }
        if (errorElement) {
            errorElement.innerHTML = '';
            errorElement.style.display = 'none';
        }
    }

    // Display the current date
    displayDateAndGreeting();
});

// Display current date and greeting
function displayDateAndGreeting() {
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('currentDate').innerText = date.toLocaleDateString(undefined, options);
}

//SLIDE
document.addEventListener('DOMContentLoaded', function () {
    var slides = document.getElementsByName('slide');
    for (var i = 0; i < slides.length; i++) {
        slides[i].addEventListener('click', function () {
            toggleArrows();
        });
    }
});

function toggleArrows() {
    var slides = document.getElementsByName('slide');
    var prev = document.getElementsByClassName('prev');
    var next = document.getElementsByClassName('next');
    var currentSlideIndex = Array.prototype.slice.call(slides).findIndex(function (slide) {
        return slide.checked;
    });

    if (currentSlideIndex === 0) {
        prev[0].style.display = 'none';
        next[0].style.display = 'inline-block';
        prev[1].style.display = 'none';
        next[1].style.display = 'none';
    } else if (currentSlideIndex === 1) {
        prev[0].style.display = 'inline-block';
        next[0].style.display = 'inline-block';
        prev[1].style.display = 'inline-block';
        next[1].style.display = 'inline-block';
    } else if (currentSlideIndex === 2) {
        prev[0].style.display = 'inline-block';
        next[0].style.display = 'none';
        prev[1].style.display = 'none';
        next[1].style.display = 'none';
    }
}

















