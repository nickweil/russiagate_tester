/*function myFunction() {
    document.getElementById("myDIV").style.backgroundColor = "lightblue";
}*/

function myfunction() {
	document.getElementById('demo').style.backgroundColor = "lightblue";
}

function replaceleftside() {
    var str = document.getElementById("myDIV").innerHTML;
	var dataArr = str.split("rid")
	document.getElementById("myDIV").innerHTML = dataArr[0]+ "<span class='redacted'>"+dataArr[1]+"</span>";
}