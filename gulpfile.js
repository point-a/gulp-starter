// Require all tasks in gulp/tasks, including subfolders
// require('require-dir')('./gulp/tasks', {recurse: true});

var { defaultTask } = require('./gulp/tasks/default.js');
var { buildTask } = require('./gulp/tasks/build.js');

exports.build = buildTask
exports.default = defaultTask
