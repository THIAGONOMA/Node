var interval = function(callback, time){
setTimeout(function(){
    callback();
},time);
};

interval(function(){
console.log('R ' + new Date());
},1000);