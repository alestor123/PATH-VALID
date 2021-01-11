#!/usr/bin/env node

var pvalid = require('./App');
if(pvalid(process.argv[2])) console.log('This path exist`s')
else console.log('not found')
