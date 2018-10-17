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
/*
function replacesides() {
	var str = document.getElementById("myDIV").innerHTML;
	str = str.replace(/\[/g, "<span class='redacted'>");
	str = str.replace(/\]/g, "</span>");
	document.getElementById("myDIV").innerHTML = str;
}
*/

function replacesides() {
	var x = document.querySelectorAll(".myDIV");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.backgroundColor = "red";
		x[i].innerHTML=x[i].innerHTML.replace("blah", "bleh");
		//x[i].innerHTML=str.replace(/\]/g, "</span>");
	}
}