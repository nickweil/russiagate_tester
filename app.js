/*function myFunction() {
    document.getElementById("myDIV").style.backgroundColor = "lightblue";
}*/


/*function replacesides() {
    var string_in = document.getElementById("myDIV").innerHTML;
	var first_dataArr = string_in.split("[")
	var first_side_done = first_dataArr[0]+ "<span class='redacted'>"+first_dataArr[1];
	var second_dataArr = first_side_done.split("]")
	var second_side_done = second_dataArr[0]+ "</span>"+second_dataArr[1];
	document.getElementById("myDIV").innerHTML = second_side_done;
}*/

function replacesides() {
	var string_in = document.getElementById("myDIV").innerHTML;
	var str = string_in.replace('rid', "<span class='redacted'>");
	document.getElementById("myDIV").innerHTML = str;
}