var recipes = {}

function updateObjectWithKeyAndValue(obj, key, value) {
  return (obj, value)
  
}
function updateObjectWithObject(targetObject, updatesObject) {
  return Object.assign({}, targetObject, updatesObject)
}


function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}





function deleteFromObjectByKey(obj, key) {
  delete obj[key]
  return newobj
}
