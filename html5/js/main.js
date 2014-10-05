/* Store user selected options in localStorage */
function submitques(input1,input2){
    var val1 = "input[name = "+"'"+input1+"'"+"]:checked";
    localStorage.setItem(document.querySelector(val1).id, document.querySelector(val1).value);
    if (input2!=null) {
    	var val2 = "input[name = "+"'"+input2+"'"+"]:checked";
    	localStorage.setItem(document.querySelector(val2).id, document.querySelector(val2).value);
    };
}

/* Store user submitted Survey */
function submitSurvey(){
    localStorage.setItem('surveyComment',document.getElementById('surveyCommentText').value);
    localStorage.setItem('surveyCity',document.getElementById('surveyCityOpt').value);
    localStorage.setItem('surveyRoom',document.getElementById('surveyRoomOpt').value);
}

/* Clear localStorage */
function clearques() {
	localStorage.clear();
}

/* Show options onclick of mark element */
function visibleInput(mymark) {
    document.getElementById(mymark).style.display = 'block';
}

/* Update mark element when user selects an option */
function setMark(input,mark){
    var myinput = "input[name = "+"'"+input+"'"+"]:checked";
    document.getElementById(mark).innerHTML = document.querySelector(myinput).value;
}

/* Clear localStorage and go to Homepage */
function goToHomePage(){
    clearques();
    self.location="index.html";
}

/* Computer score in Summary page */
function getScore(){
    if(localStorage.getItem("q1")=="q1op4"){
        document.getElementById('quanttotal').innerHTML = parseInt(document.getElementById('quanttotal').innerHTML)+1;
        document.getElementById('quantcorrect').innerHTML = parseInt(document.getElementById('quantcorrect').innerHTML)+1;
        document.getElementById('quantscore').innerHTML = parseInt(document.getElementById('quantscore').innerHTML)+100;
    } else if(localStorage.getItem("q1")!=null){
        document.getElementById('quanttotal').innerHTML = parseInt(document.getElementById('quanttotal').innerHTML)+1;
    }
    if(localStorage.getItem("q2")=="q2op1"){
        document.getElementById('quanttotal').innerHTML = parseInt(document.getElementById('quanttotal').innerHTML)+1;
        document.getElementById('quantcorrect').innerHTML = parseInt(document.getElementById('quantcorrect').innerHTML)+1;
        document.getElementById('quantscore').innerHTML = parseInt(document.getElementById('quantscore').innerHTML)+100;
    } else if(localStorage.getItem("q2")!=null){
        document.getElementById('quanttotal').innerHTML = parseInt(document.getElementById('quanttotal').innerHTML)+1;
    }

    if(localStorage.getItem("q3b1")=="$650"){
        document.getElementById('readingtotal').innerHTML = parseInt(document.getElementById('readingtotal').innerHTML)+1;
        document.getElementById('readingcorrect').innerHTML = parseInt(document.getElementById('readingcorrect').innerHTML)+1;
        document.getElementById('readingscore').innerHTML = parseInt(document.getElementById('readingscore').innerHTML)+100;
    } else if(localStorage.getItem("q3b1")!=null){
        document.getElementById('readingtotal').innerHTML = parseInt(document.getElementById('readingtotal').innerHTML)+1;
    }
    if(localStorage.getItem("q3b2")=="Twitter"){
        document.getElementById('readingtotal').innerHTML = parseInt(document.getElementById('readingtotal').innerHTML)+1;
        document.getElementById('readingcorrect').innerHTML = parseInt(document.getElementById('readingcorrect').innerHTML)+1;
        document.getElementById('readingscore').innerHTML = parseInt(document.getElementById('readingscore').innerHTML)+100;
    } else if(localStorage.getItem("q3b2")!=null){
        document.getElementById('readingtotal').innerHTML = parseInt(document.getElementById('readingtotal').innerHTML)+1;
    }
    
    if(localStorage.getItem("q4")=="NASA"){
        document.getElementById('avtotal').innerHTML = parseInt(document.getElementById('avtotal').innerHTML)+1;
        document.getElementById('avcorrect').innerHTML = parseInt(document.getElementById('avcorrect').innerHTML)+1;
        document.getElementById('avscore').innerHTML = parseInt(document.getElementById('avscore').innerHTML)+100;
    } else if(localStorage.getItem("q4")!=null){
        document.getElementById('avtotal').innerHTML = parseInt(document.getElementById('avtotal').innerHTML)+1;
    }
}