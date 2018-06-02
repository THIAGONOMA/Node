exports.onReadable = function (callback){
    process.stdin.on('readable', function(){
        var chunk = process.stdin.read();
        if(chunk) callback(chunk.toString().slice(0,1));
    });
};

