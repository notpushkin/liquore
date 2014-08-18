var fs = require("fs");
var path = require("path");

module.exports = function(fn, globals) {
  var abject = globals || {};
  abject.process    = abject.process    || process;
  abject.require    = abject.require    || require;
  abject.console    = abject.console    || console;
  abject.__filename = abject.__filename || path.resolve(fn);
  abject.__dirname  = abject.__dirname  || path.dirname(abject.__filename);
  abject.module     = abject.module     || {};

  with(abject) {
    eval(fs.readFileSync(fn).toString());
  };
  return abject.module.exports;
};