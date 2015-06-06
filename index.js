/**
 * Created by Pillar on 2015/6/6.
 */
var exec = require('child_process').exec;
var fs = require('fs');
var cmd = "scalac -Xshow-phases";
exec(cmd,function(err,stdout,stderr){
    if(err){
        console.log('got error when executing: '+ cmd);
        console.log(err);
        return;
    }
    console.log('successfully executed ' + cmd);
    fs.writeFileSync('phases.log',stdout);
    if(stderr){
        fs.writeFileSync('phases.err',stderr);
    }

});