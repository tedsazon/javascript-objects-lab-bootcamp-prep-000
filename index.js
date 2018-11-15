var recipes = new Object ({})

var obj = { prop: 1 }
function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]:value})

}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}
function deleteFromObjectByKey(obj, key) {
  delete Object.assign({}, obj, key)
  return obj
}