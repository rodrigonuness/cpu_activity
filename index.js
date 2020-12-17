const os = require('os-utils');

const diskspace = require('diskspace');

os.cpuUsage(function(cpu){
    console.log( 'CPU: ' + parseInt(cpu * 100) + '%');
});

diskspace.check('C', function (err, result) {
    var free_space = (result.free / 1000000000).toFixed(2)
    var total_space = (result.total / 1000000000).toFixed(2)
    console.log(`Free space: ${free_space} GB.\nTotal space: ${total_space} GB`)
});