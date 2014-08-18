liquore
========

A simple hack to require files from cwd in node-webkit projects. Usage:

```
// CWD is initially the path to package.json, you might want to change that:
process.chdir("app/js");

var liquore = require("liquore");
var util = liquore("./util.js", {
  foo: 1 // Something you want to add to globals
});
```