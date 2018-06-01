var cron = require('node-cron');
var num = 1;
//# ┌────────────── second (optional)
//# │ ┌──────────── minute
//# │ │ ┌────────── hour
//# │ │ │ ┌──────── day of month
//# │ │ │ │ ┌────── month
//# │ │ │ │ │ ┌──── day of week
//# │ │ │ │ │ │
//# * * * * * *

var task = cron.schedule('* * * * * *', function() {
    console.log('immediately started '+num); num++;
}, false);


cron.schedule('10-30 * * * * *', function(){
    console.log('running a task 10 at 30');
});

task.start();

cron.schedule('40 * * * * *', function(){
  console.log('stop');
  task.stop();
});




