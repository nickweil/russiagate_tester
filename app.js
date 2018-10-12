/*function myFunction() {
    document.getElementById("myDIV").style.backgroundColor = "lightblue";
}*/

function myfunction() {
	document.getElementById('demo').style.backgroundColor = "lightblue";
}

function replaceleftside() {
    var str = document.getElementById("demo").innerHTML;
	var dataArr = str.split("rid")
	document.getElementById("demo").innerHTML = dataArr[0]+ "<span class="redacted">"+dataArr[1]+"</span>";
}