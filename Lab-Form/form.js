
function saveTitle() {
    var header = document.getElementById("initial").value;
    window.localStorage.setItem('title',header)
}

function saveWriting() {
    var entered = document.getElementById("writing").value;
    window.localStorage.setItem('userInput',entered);
}

window.onload = function() { 
    
    document.getElementById("initial").value = localStorage.getItem('title'); 
    document.getElementById("writing").value = localStorage.getItem('userInput');

}

function end() {
    document.getElementById("initial").value = "";
    document.getElementById("writing").value = "";
    localStorage.clear();
}