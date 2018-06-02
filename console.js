/* 
strens
input
output
erro
*/
var konsole = {
    log: function(msg){
        process.stdout.write(msg + '\n');
    },
    erro: function(msg){
        process.stderr.write(msg +'\n');
    }
}
// nome do arquivo mais direcionamento tipo 
//node console.jse 1> out.log
konsole.log('a is TTY ' + !!process.stdout.isTTY);
konsole.erro('b is PTY '+ !!process.stderr.isPTY);


//isTTY - se é teletype -teclado