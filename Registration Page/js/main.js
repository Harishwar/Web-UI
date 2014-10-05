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
        if(VryStrongPass.test(password1.val()))
        {
            if(document.getElementById("progressbar").value<100){
                document.getElementById("progressbar").value=100;
            }
            passwordsInfo.removeClass().addClass('vrystrongpass').html("Strong!");
        }
        else if(StrongPass.test(password1.val()))
        {
            if(document.getElementById("progressbar").value<80){
                document.getElementById("progressbar").value=80;
            }
            passwordsInfo.removeClass().addClass('strongpass').html("Medium!");
        }
        else if(MediumPass.test(password1.val()))
        {
            if(document.getElementById("progressbar").value<60){
                document.getElementById("progressbar").value=60;
            }
            passwordsInfo.removeClass().addClass('goodpass').html("Normal!");
        }
        else if(WeakPass.test(password1.val()))
        {
            if(document.getElementById("progressbar").value<40){
                document.getElementById("progressbar").value=40;
            }
            passwordsInfo.removeClass().addClass('stillweakpass').html("Still Weak!");
        }
        else
        {
            if(document.getElementById("progressbar").value<20){
                document.getElementById("progressbar").value=20;
            }
            passwordsInfo.removeClass().addClass('weakpass').html("Very Weak!");
        }
    });

    $(password2).on('keyup', function(e) {

        if(password1.val() !== password2.val())
        {
            passwordsInfo.removeClass().addClass('weakpass').html("Passwords do not match!");
        }else{
            passwordsInfo.removeClass().addClass('goodpass').html("Passwords match!");
        }

    });
}

/* Store Details in localStorage */
function saveDetails(){
    if (Modernizr.localstorage) {
        localStorage.setItem('firstname',document.getElementById('inputFname').value);
        localStorage.setItem('lastname',document.getElementById('inputLname').value);
        localStorage.setItem('email',document.getElementById('inputEmail').value);
        //Javascript 64 bit Encoding Before Storing Locally
        localStorage.setItem('password',window.btoa(document.getElementById('inputPsswd').value));
        localStorage.setItem('dob',document.getElementById('inputDob').value);
        localStorage.setItem('dobwt',document.getElementById('inputDobwt').value);
        localStorage.setItem('localdobwt',document.getElementById('inputLocaldob').value);
        localStorage.setItem('ssn',document.getElementById('inputSsn').value);
        localStorage.setItem('phone',document.getElementById('inputPhone').value);
        localStorage.setItem('creditcard',document.getElementById('inputCc').value);
        window.location.href = "home.html";
    } else {
        alert('This Browser Doesn\'t Support Local Storage.');
    }
}

/* Clear localStorage */
function clearques() {
    localStorage.clear();
}

