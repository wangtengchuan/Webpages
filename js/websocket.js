function initWebSocket() {
                try {
                    if (typeof MozWebSocket == 'function')
                        WebSocket = MozWebSocket;
                    if ( websocket && websocket.readyState == 1 )
                        websocket.close();
                    var wsUri=document.getElementById("geturl").value;
                    websocket = new WebSocket( wsUri );
                    websocket.binaryType = "arraybuffer";
                    websocket.onopen = function (evt) {
                        debug("CONNECTED");
                    };
                    websocket.onclose = function (evt) {
                        debug("DISCONNECTED");
                    };
                    websocket.onmessage = function (evt) {
                        console.log( "Message received :", JSON.stringify(evt) );
                        if(evt.data instanceof ArrayBuffer) {
                            console.log('binary');
                        }
                        debug( evt.data );
                        processArrayBuffer(evt.data);
                    };
                    websocket.onerror = function (err) {
                        debug('ERROR: ' + JSON.stringify(err));
                    };
                	} 
                	catch (exception) {
                    debug('ERROR: ' + exception);
                }
				}

function stopWebSocket() {
    if (websocket)
       websocket.close();
}

            function checkSocket() {
                if (websocket != null) {
                    var stateStr;
                    switch (websocket.readyState) {
                        case 0: {
                            stateStr = "CONNECTING";
                            break;
                        }
                        case 1: {
                            stateStr = "OPEN";
                            break;
                        }
                        case 2: {
                            stateStr = "CLOSING";
                            break;
                        }
                        case 3: {
                            stateStr = "CLOSED";
                            break;
                        }
                        default: {
                            stateStr = "UNKNOW";
                            break;
                        }
                    }
                    debug("WebSocket state = " + websocket.readyState + " ( " + stateStr + " )");
                } else {
                    debug("WebSocket is null");
                }
            }
function sendMessage(msg) 
{
      //var msg = document.getElementById("inputText").value;
                if ( websocket != null )
                {
                    //document.getElementById("inputText").value = "";
                    var buffer = string2arraybuffer(msg);
                    websocket.send( buffer );
                }
            }

/*function webSocket()
{
	if('Websocket' in window)
	{
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
}*/



/*function addTenPercent() {
    var bar = document.getElementById("progressBar");
    setInterval(addTenPercent, 100);
    bar.value += 5;
};
window.onload = addTenPercent();*/


function string2arraybuffer(str) 
{
    var  strLen=str.length;
    var buf = new ArrayBuffer(strLen);
    var bufView = new Uint8Array(buf);
    for (var i = 0; i < strLen; i++)
         bufView[i] = str.charCodeAt(i);
    return buf;
}

function processArrayBuffer(buf)
{
	var u8data=new Unit8Array(buf);
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	var imgdata=ctx.getImageData(0,0,500,600);
	for(var i=0,imgDataLen=imgdata.data.length;i<imgDataLen;i++)
	{
		imgdata.data[i]=u8data[i+12];
	}
	ctx.putImageData(imgdata,0,0);
}


/* blur on modal open, unblur on close */
/*$('#myModal').on('show.bs.modal', function () {
   $('.container').addClass('blur');
})

$('#myModal').on('hide.bs.modal', function () {
   $('.container').removeClass('blur');
})*/