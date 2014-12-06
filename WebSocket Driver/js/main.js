function updateTextInput(input) {
    document.getElementById(input.name).innerHTML = input.value;
}

function resetInput() {
    document.getElementById("quiz1Input").innerHTML = "";
    document.getElementById("quiz1Slider").value = 0;
    document.getElementById("quiz2Input").innerHTML = "";
    document.getElementById("quiz2Slider").value = 0;
    document.getElementById("midtermInput").innerHTML = "";
    document.getElementById("midtermSlider").value = 0;
}

function gradingScores() {
    var socket = io();
    var score = parseInt(document.getElementById("quiz1Slider").value) + parseInt(document.getElementById("quiz2Slider").value) + parseInt(document.getElementById("midtermSlider").value);
    switch (true) {
        case (score <= 300 && score > 250):
            socket.on('gradeA', function(msg) {
                swal({
                        title: "Server Response: " + msg.msg,
                        text: "Score: " + score,
                        allowOutsideClick: false,
                    },
                    function(confirmed) {
                        window.location.reload();
                    });
            });
            break;
        case (score <= 250 && score > 200):
            socket.on('gradeB', function(msg) {
                swal({
                        title: "Server Response: " + msg.msg,
                        text: "Score: " + score,
                        allowOutsideClick: false,
                    },
                    function(confirmed) {
                        window.location.reload();
                    });
            });
            break;
        case (score <= 200 && score > 150):
            socket.on('gradeC', function(msg) {
                swal({
                        title: "Server Response: " + msg.msg,
                        text: "Score: " + score,
                        allowOutsideClick: false,
                    },
                    function(confirmed) {
                        window.location.reload();
                    });
            });
            break;
        case (score <= 150 && score > 100):
            socket.on('gradeD', function(msg) {
                swal({
                        title: "Server Response: " + msg.msg,
                        text: "Score: " + score,
                        allowOutsideClick: false,
                    },
                    function(confirmed) {
                        window.location.reload();
                    });
            });
            break;
        default:
            socket.on('gradeF', function(msg) {
                swal({
                        title: "Server Response: " + msg.msg,
                        text: "Score: " + score,
                        allowOutsideClick: false,
                    },
                    function(confirmed) {
                        window.location.reload();
                    });
            });
            break;
    }
}
