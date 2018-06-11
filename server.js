var net = require('net');
var connections=[];

var broadcast = function (message, origin){
    connections.forEach(function (connection){
        if(connection==origin) return;
        connection.write(message);
    });
};

net.createServer(function(connection){
    connections.push(connection); 
    connection.write('Ola, eu sou o Servidor');
    connection.on('data', function(message){
        //console.log(message.toString());
        var command = message.toString();
        if(command.indexOf('/nickname') === 0){
            var nickname = command.replace('/nickname ','');
            //console.log(nickname);
            connection.nickname = nickname;
            broadcast(connection.nickname + 'is now' + nickname);
            return;
    
        }
        broadcast(connection.nickname +' > '+ message, connection);
    });
    connection.on('end', function(){
        broadcast(connection.nickname +' Saiu ', connection);
        connections.slice(connections.indexOf(connection),1);
    });
    connection.on('error', function(){
        broadcast(connection.nickname +' Saiu ', connection);
        connections.slice(connections.indexOf(connection),1);
    });
}).listen(3000);
