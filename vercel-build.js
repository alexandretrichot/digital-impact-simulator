const fs = require("fs");
const path = require("path");

fs.mkdirSync(path.join(process.cwd(), 'db'), { recursive: true });

fs.chmodSync(path.join(process.cwd(), 'db'), 0o777);

console.log('changed perms !');
