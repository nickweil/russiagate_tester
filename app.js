/*function myFunction() {
    document.getElementById("myDIV").style.backgroundColor = "lightblue";
}*/

function myfunction() {
	document.getElementById('demo').style.backgroundColor = "lightblue";
}

function replacerightside() {
    var str = document.getElementById("demo").innerHTML; 
    var res = str.replace(/rid/g, "<span class="redacted">");
	const escapeRegExp = (string) => {
		return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
	}
    document.getElementById("demo").innerHTML = res;
}

function replaceleftside() {
    var str = document.getElementById("demo").innerHTML;
	var dataArr = str.split("rid")
	document.getElementById("demo").innerHTML = dataArr[0]+ "<span class="redacted">"+dataArr[1]+"</span>";
}


var txt = "Hello bye";
var dataArr = txt.split(' ');

var paragraph = document.getElementById("pid");
paragraph.innerHTML = dataArr[0]+ " <span>"+dataArr[1]+"</span>";