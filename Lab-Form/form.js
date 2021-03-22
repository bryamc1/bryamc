
function saveWriting() {
    var entered = document.getElementById("writing").value;
    window.localStorage.setItem('userInput',entered);
}

window.onload = function() {    
    var oldInfo =  window.localStorage.getItem('userInput');
    document.getElementById("writing").innerHTML = oldInfo;
    

}

function end() {
    localStorage.clear();
}