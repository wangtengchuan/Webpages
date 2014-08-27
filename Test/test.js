function showPic(whichPic)
{
	if(!document.getElementById("placeholder"))return true;
	var source=whichPic.getAttribute("href");
	var placeholder=document.getElementById("placeholder");
	if(placeholder.nodeName!="IMG")return true;
	placeholder.setAttribute("src",source);
	if(!document.getElementById("description"))return false;
	var titletext=whichPic.getAttribute("title")?whichPic.getAttribute("title"):"";
	var description=document.getElementById("description");
	if(description.firstChild.nodeType==3)//meaning the node is a text
	{
		description.firstChild.nodeValue=titletext;
	}
	return false;
}
window.open();

function prepareGallery()
{
	if(!document.getElementsByTagName)return false;
	if(!document.getElementById)return false;
	if(!document.getElementById("imagegallery"))return false;
	var gallery=document.getElementById("imagegallery");
	var links=gallery.getElementsByTagName("a");
	for(var i=0;i<links.length;i++)
	{
		links[i].onclick=function()
		{
			return showPic(this);
		}
	}
}