function webSocket()
{
	if('Websocket' in window)
	{
		alert("Good! Websocket is supported by your browser!");
		var url=document.getElementById("geturl").value;
		var connection=new Websocket('ws://10.164.2.50:1234');
		connection.onopen=function()
		{
			var sendMsg=document.querySelector("#sendBin");
			alert("Connection is established");
			connection.send(sendMsg);
			console.log("Message is sending...");
		};
		conetion.onmessage=function(msg)
		{
			if(msg.data instanceof )
		}
		connection.onclose=function()
		{
			console.log("Connection is closed. Adam is out of service!");
		};
		connection.onerror=function(error)
		{
			console.log("Error detected: "+ error);
		}
	}
	else
	{
		alert("Websocket NOT supported by your browser!");
	}
}



function addTenPercent() {
    var bar = document.getElementById("progressBar");
    setInterval(addTenPercent, 100);
    bar.value += 5;
};
window.onload = addTenPercent();


function string2arraybuffer(str) 
{
    var buf = new ArrayBuffer(str.length);
    var bufView = new Uint8Array(buf);
    for (var i = 0, strLen = str.length; i < strLen; i++)
         bufView[i] = str.charCodeAt(i);
    return buf;