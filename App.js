var fs = require('fs');
module.exports = path =>{ if(!path) throw Error('Path input not found') 
 fs.existsSync(path) }
