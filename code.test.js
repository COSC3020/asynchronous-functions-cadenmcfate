const { assert } = require('console');
const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

let t = [];
let counts = [];

t[0] = [0];
counts[0] = 1;

t[1] = [1,2,1];
counts[1] = 2;

t[2] = [7,7,7,7,7,7,7];
counts[2] = 7;

t[3] = [1,2,5,11,1,1];
counts[3] = 3;

t[4] = [-10,3,1,10,-10,0,-10,-10];
counts[4] = 4;

for (let i = 0; i < t.length; i++) {
    countAsync(t[i], t[i][0], function(val) {
        assert(val === counts[i]);
    });
}