function clearRequireCache(id) {
  var mod = require.cache[id]
  if (!mod) {
    return
  }
  var mods = mod.children.map(function(child) {
    return child.id
  })
  mods.forEach(clearRequireCache)
  delete require.cache[id]
}

module.exports = clearRequireCache
