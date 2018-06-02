var opitions = [
    'a) pid',
    'b) title',
    'c) arch',
    'd) platform',
    'e) env',
    'n) memoryUsage',
    'u) uptime',
    'v) versions',
    'q) quit'
];

exports.showOptions = function (){

    opitions.forEach(function (option){
        console.log(option);
    });
};
