var canvas;
var ctx;
$(function)()
{
	var canvas=document.getElemetById("myCanvas");
	var ctx=canvas.getContext("2d");
	var img=new Image();
	img.src="./img/img.jpg"
	//var img=document.getElementById("imageSource");//the image source
	//TODO
	ctx.drawImage(img,10,10);
	$('myCanvas').click(function(e))//mouse click handler
	{
		var canvasOffset=canvas.offset();
		var canvasX=Math.floor(e.pageX-canvasOffset.left);
		var canvasY=Math.floor(e.pageY-canvasOffset.right);
		var imageData=ctx.getImageData(canvasX,canvasY,1,1);
		var pixel=imageData.data;
		$('#rVal').val(pixel[0]);
        $('#gVal').val(pixel[1]);
        $('#bVal').val(pixel[2]);
	}
}