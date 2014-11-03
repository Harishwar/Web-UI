var src = document.getElementById("src");
var target = document.getElementById("target");
var msg = document.getElementById("msg");
var draggedID;
target.ondragenter = handleDrag;
target.ondragover = handleDrag;

target.ondrop = function(e) {
    var newElem = document.getElementById(draggedID).cloneNode(false);
    target.innerHTML = "";
    target.appendChild(newElem);
    e.preventDefault();
}

function handleDrag(e) {
    e.preventDefault();
}
src.ondragstart = function(e) {
    draggedID = e.target.id;
    e.target.classList.add("dragged");
}
src.ondragend = function(e) {
    var elems = document.querySelectorAll(".dragged");
    var imgalrt = document.getElementById("imagesAlert");
    var imgid = document.getElementById("imageid");
    var sbmtbtn = document.getElementById("submitButton");
    for (var i = 0; i < elems.length; i++) {
        elems[i].classList.remove("dragged");
    }
    sbmtbtn.className = "btn btn-lg btn-dark";
    if (elems[0].id == "icon1") {
        imgalrt.innerHTML = "Images match";
        imgid.innerHTML = elems[0].id;
        imgalrt.className = "col-xs-8 col-xs-offset-2 alert alert-success";
    } else {
        imgalrt.innerHTML = "Images doesn't match";
        imgalrt.className = "col-xs-8 col-xs-offset-2 alert alert-danger";
    };
}
