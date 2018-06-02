var help = require('./help');
var keyboard = require('./kBoard.js');

keyboard.onReadable(function(option){
    switch (option) {
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
        
        case 'e':
        console.log(process.env);
            break;
        case 'n':
            console.log(process.memoryUsage());
            break;
        case 'q':
            process.exit();
            break;
        case 'u':
            console.log('uptime:'+process.uptime());
            break;
        
        case 'v':
            console.dir(process.versions);
            break;      
        
        default:
            help.showOptions();
            //break;
    }

});

process.on('exit',function(){
    console.log('bye');
});

process.on('uncaughtException',function(){
    console.log('error:');
});