var net = require('net');
var client = net.connect(3000);
client.on('connect',function(){
    client.write('Ola Servidor, hora de servir, ClientOne!');
});

client.on('data', function(message){
    console.log(message.toString());
});

client.on('error', function(message){
    process.exit();
});

client.on('end', function(){
    process.exit();
});

process.stdin.on('readable',function(){
    var message = process.stdin.read();
    if(!message) return;
    message = message.toString().replace('/\n/','');
    client.write(message);
    //console.log(message);
});