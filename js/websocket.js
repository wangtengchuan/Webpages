function webSocket()
{
	if('Websocket' in window)
	{
		alert("Good! Websocket is supported by your browser!");
		var url=document.getElementById("geturl").value;
		var connection=new Websocket(url);
		connection.onopen=function()
		{

			alert("Connection is established");
			connection.send("Hello Adam, what kind of service can you provide?");
			console.log("Message is sending...");
		};
		conetion.onmessage=function(event)
		{
			//var receivedMsg=
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