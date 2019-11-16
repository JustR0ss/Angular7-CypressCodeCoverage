const istanbul = require('istanbul-lib-coverage');
const map = istanbul.createCoverageMap({});
var fs = require('fs');
const { exec } = require('child_process');
var glob = require("glob")
var files = glob(".nyc_output/!(out).json", {sync:true});
var dir = '.nyc_output';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

files.forEach(element => {
    map.merge(JSON.parse(fs.readFileSync(element, 'utf8')));
});

fs.writeFile(".nyc_output/out.json", JSON.stringify(map), function(err) {
    if(err) {
        return console.log(err);
    }
    exec('nyc report --reporter=html', (err) => {
        if (err) {
            console.log(err);
          return;
        }
      });
});






