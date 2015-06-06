/**
 * Created by Pillar on 2015/6/6.
 */
var exec = require('child_process').exec;
var fs = require('fs');

// read config
var config = JSON.parse(fs.readFileSync("cmds.json"));
console.log('running cmds for ' + config.name);
for (var i = 0; i < config.cmds.length; i++) {
    var name = config.cmds[i].name;
    var cmd = config.cmds[i].cmd;
    (function (cmd, name) {
        exec(cmd, function (err, stdout, stderr) {
            if (err) {
                console.log('got error when executing: ' + cmd);
                console.log(err);
                return;
            }
            console.log('successfully executed ' + cmd);
            //if(stdout){
            //    fs.writeFileSync(name + '.log', stdout);
            //}
            var fileName = name.replace(/\s/g, "_");
            if (stderr) {
                fs.writeFileSync(fileName + '.err', stderr);
            } else {
                console.log('no error');
            }
            //if(!stdout && !stderr){
            //    console.warn('no log for ' + name);
            //}
        });
    })(cmd, name);
}