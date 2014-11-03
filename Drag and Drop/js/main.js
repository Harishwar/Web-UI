/* Main Function */
function mainFunc(form) {
    var imagid = document.getElementById("imageid");
    var targetid = document.getElementById("target");
    if (imagid.innerHTML == "icon1") {
        var myForm = document.getElementById("regForm").elements;
        var myFormData = {
            firstname: form.fname.value,
            lastname: form.inputLname.value,
            email: form.inputEmail.value,
        };
        var formJSON = toJSONString(myFormData);
        if (!(navigator.onLine)) {
            swal({
                title: "Network Connection Lost!",
                text: "Data saved locally",
                type: "warning",
                confirmButtonText: "Okay"
            });
        } else if (saveToLocalStorage(formJSON) == true && saveToSessionStorage(formJSON) == true) {
            imagid.innerHTML = "";
            targetid.innerHTML = '<h3 id="msg" class="text-muted">Drag & Drop Image Here</h3>';
            swal({
                title: "Registered",
                text: "Registration Complete",
                type: "success",
                confirmButtonText: "Okay"
            });
        }
    } else {
        swal({
            title: "Images doesn't match",
            text: "Drag and Drop the Correct Image",
            type: "error",
            confirmButtonText: "Retry"
        });
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

/* Clear localStorage */
function clearques() {
    localStorage.clear();
}

/* Clear sessionStorage */
function clearques() {
    sessionStorage.clear();
}
