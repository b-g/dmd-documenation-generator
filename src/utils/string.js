"use strict";

function endsWith(str, suffix) {
  return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

function startsWith(str, prefix) {
  return str.indexOf(prefix) === 0;
}

module.exports.endsWith = endsWith;
module.exports.startsWith = startsWith;