var i = setInterval(function () {
    console.log('R ' + new Date());
},1000);

setTimeout(function(){
    clearInterval(i);
},5000);
