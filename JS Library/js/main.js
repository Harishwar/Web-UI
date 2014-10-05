/* Main Function */
function mainFunc(form) {
   var myForm = document.getElementById("regForm").elements;
    var myFormData = {
        firstname: form.fname.value,
        lastname: form.inputLname.value,
        email: form.inputEmail.value,
        url: form.inputUrl.value,
        password: form.inputPsswd.value,
        dob: form.inputDob.value,
        dobwt: form.inputDobwt.value,
        localdobwt: form.inputLocaldob.value,
        ssn: form.inputSsn.value,
        phone: form.inputPhone.value,
        cc: form.inputCc.value
    };
    var formJSON = toJSONString(myFormData);
    if (!(navigator.onLine)) {
        $('#networkLost').modal('show');
    } else if (saveToLocalStorage(formJSON) == true && saveToSessionStorage(formJSON) == true) {
        goToHomePage();
    }
}

/* Convert object into JSON String */
function toJSONString(obj) {
    return JSON.stringify(obj);
}

/* Read the data from JSON String and load the registration Object */
function readFromJSONString(formJSON) {
    return JSON.parse(formJSON);
}

/* Validate phone number format */
function isPhoneNumberFormatValid(num) {
    //var p = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
    var p = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return p.test(num);
}

function validatePhone(num, numinfo) {
    $(num).on('keyup', function(e) {
        if (isPhoneNumberFormatValid(num.val())) {
            numinfo.removeClass().addClass('text-success').html("Phone Number Valid");
        } else {
            numinfo.removeClass().addClass('text-danger').html("Phone Number Invalid");
        };
    });
}

/* Check user entered email is valid */
function isValidEmail(email) {
    var r = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return r.test(email);
}

function validateEmail(email, emailinfo) {
    $(email).on('keyup', function(e) {
        if (isValidEmail(email.val())) {
            emailinfo.removeClass().addClass('text-success').html("Email Valid");
        } else {
            emailinfo.removeClass().addClass('text-danger').html("Email Invalid");
        };
    });
}

/* saveToLocalStorage */
function saveToLocalStorage(formJSON) {
    if (Modernizr.localstorage) {
        localStorage.setItem('regObject', formJSON);
        return true;
    } else {
        alert('This Browser Doesn\'t Support Local Storage.');
        return false;
    }
}

/* readFromLocalStorage */
function readFromLocalStorage() {
    return localStorage.getItem('regObject');
}

/* saveToSessionStorage */
function saveToSessionStorage(formJSON) {
    if (Modernizr.sessionstorage) {
        sessionStorage.setItem('regObject', formJSON);
        return true;
    } else {
        alert('This Browser Doesn\'t Support Session Storage.');
        return false;
    }

}

/* readFromSessionStorage */
function readFromSessionStorage() {
    return sessionStorage.getItem('regObject');
}

/* Go to Landing Page */
function goToHomePage() {
    window.location.href = "home.html";
}

/* Go to Registration Page */
function goToRegPage() {
    window.location.href = "index.html";
}

/* Check Password Strength */
function passwordStrengthCheck(password1, password2, passwordsInfo) {
    document.getElementById("progressdiv").style.display = 'block';
    $("#progressdiv").css('display', 'block !important');
    //Must contain 8 to 24 characters
    var WeakPass = /(?=.{8,24}).*/;
    //Must contain at least one 3 uppercase letters, 2 lowercase letters and 2 special chars.
    var MediumPass = /(?=((?=(.*[a-z]){2,}))((?=(.*[A-Z]){3,}))((?=(.*[^\w\*]){2})))/;
    //Must contain at least one 3 uppercase letters, 2 lowercase letters and 4 special chars.
    var StrongPass = /(?=((?=(.*[a-z]){2,}))((?=(.*[A-Z]){3,}))((?=(.*[^\w\*]){3,4})))/;
    //Must contain at least one 3 uppercase letters, 2 lowercase letters and 5 special chars.
    var VryStrongPass = /(?=((?=(.*[a-z]){2,}))((?=(.*[A-Z]){3,}))((?=(.*[^\w\*]){5,})))/;


    $(password1).on('keyup', function(e) {
        if (VryStrongPass.test(password1.val())) {
            if (document.getElementById("progressbar").value < 100) {
                document.getElementById("progressbar").value = 100;
            }
            passwordsInfo.removeClass().addClass('vrystrongpass').html("Strong!");
        } else if (StrongPass.test(password1.val())) {
            if (document.getElementById("progressbar").value < 80) {
                document.getElementById("progressbar").value = 80;
            }
            passwordsInfo.removeClass().addClass('strongpass').html("Medium!");
        } else if (MediumPass.test(password1.val())) {
            if (document.getElementById("progressbar").value < 60) {
                document.getElementById("progressbar").value = 60;
            }
            passwordsInfo.removeClass().addClass('goodpass').html("Normal!");
        } else if (WeakPass.test(password1.val())) {
            if (document.getElementById("progressbar").value < 40) {
                document.getElementById("progressbar").value = 40;
            }
            passwordsInfo.removeClass().addClass('stillweakpass').html("Still Weak!");
        } else {
            if (document.getElementById("progressbar").value < 20) {
                document.getElementById("progressbar").value = 20;
            }
            passwordsInfo.removeClass().addClass('weakpass').html("Very Weak!");
        }
    });

    $(password2).on('keyup', function(e) {

        if (password1.val() !== password2.val()) {
            passwordsInfo.removeClass().addClass('weakpass').html("Passwords do not match!");
        } else {
            passwordsInfo.removeClass().addClass('goodpass').html("Passwords match!");
        }

    });
}

/* Clear localStorage */
function clearques() {
    localStorage.clear();
}

/* Clear sessionStorage */
function clearques() {
    sessionStorage.clear();
}
