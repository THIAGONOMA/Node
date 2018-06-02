//console.log(process.argv);
var help = require('./help');
var opitions = process.argv.slice(2);
if(opitions.length<1){
    help.showOptions();
    return;
}

switch (opitions[0]) {
    case 'a':
        
        console.log('pid: ' + process.pid);
        break;

    case 'b':
        
        console.log('title: ' + process.title);
        break;
    
    case 'c':
        console.log('arch: ' + process.arch);
        break;
    
    case 'd':
        console.log('plataform: ' + process.plataform);
        break;
    default:
        help.showOptions();
        break;
}