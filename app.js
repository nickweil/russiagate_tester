/*function myFunction() {
    document.getElementById("myDIV").style.backgroundColor = "lightblue";
}*/

function myfunction() {
	document.getElementById('demo').style.backgroundColor = "lightblue";
}

function replacesides() {
    var string_in = document.getElementById("myDIV").innerHTML;
	var first_dataArr = string_in.split("rid")
	var first_side_done = first_dataArr[0]+ "<span class='redacted'>"+dataArr[1];
	var second_dataArr = first_side_done.split("rad")
	var second_side_done = second_dataArr[0]+ "</span>"+dataArr[1];
	document.getElementById("myDIV").innerHTML = second_side_done;
}