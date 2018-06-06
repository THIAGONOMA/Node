var net = require('net');
var client = net.connect(3000);
client.on('connect',function(){
    client.write('Ola Servidor, hora de servir, ClientTwo!');
});

client.on('data', function(message){
    console.log(message.toString());
});