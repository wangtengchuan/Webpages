function addLoadEvent(func)
{
	var onload=window.onload;
	if(typeof window.onload!='function')
	{
		window.onload=func;
	}
	else
	{
		window.onload=function()
		{
			oldonload();
			func();
		}
	}
}

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

function insertAfter(newElement,targetElement)
{
	var parent=targetElement.parentNode;
	if(parent.lastChild==targetElement)
	{
		parent.appendChild(newElement);
	}
	else
	{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}

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

function preparePlaceholder()
{
	if(!document.createElement)return false;
	if(!document.createTextNode)return false;
	if(!document.getElementById)return false;
	if(!document.getElementById("imagegallery"))return false;
	var placeholder=document.createElement("img");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","images/placeholder.jpg");
	placeholder.setAttribute("alt","my image gallery");
	var description=document.createElement("p");
	description.setAttribute("id","description");
	var desctext=document.createTextNode("Choose an image");
	description.appendChild(desctext);
	var gallery=document.getElementById("imagegallery");
	insertAfter(placeholder,gallery);
	insertAfter(description,placeholder);
}
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);