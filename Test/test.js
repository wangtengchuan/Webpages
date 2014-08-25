function showPic(whichPic)
{
	var source=whichPic.getAttribute("href");
	var placeholder=document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	var titletext=whichPic.getAttribute("title");
	var description=document.getElementById("description");
	description.firstChild.nodeValue=titletext;
}
window.open();