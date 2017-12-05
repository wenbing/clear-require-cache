const path = require('path');

function clearRequireCache(id) {
  var mod = require.cache[id]
  if (!mod) {
    return
  }
  if (id.split(path.sep).indexOf('node_modules') !== -1) {
    return
  }
  if (path.extname(id) === '.node') {
    return;
  }
  var mods = mod.children.map(function(child) {
    return child.id
  })
  delete require.cache[id]
  mods.forEach(clearRequireCache)
}

module.exports = clearRequireCache
