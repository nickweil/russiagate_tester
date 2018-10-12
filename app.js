/*function myFunction() {
    document.getElementById("myDIV").style.backgroundColor = "lightblue";
}*/

function myfunction() {
	document.getElementById('demo').style.backgroundColor = "lightblue";
}

function replaceleftside() {
    var str = document.getElementById("demo").innerHTML; 
    var res = str.replace(/[/g, "<span class="redacted">");
    document.getElementById("demo").innerHTML = res;
}

function replacerightside() {
    var str = document.getElementById("demo").innerHTML; 
    var res = str.replace(]/g, "</span>");
    document.getElementById("demo").innerHTML = res;
}