var recipes = {}

function updateObjectWithKeyAndValue(obj, key, value) {
  return (obj, value)
  return Object.assign({}. obj, { [key]: value })
}



function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}





function deleteFromObjectByKey(obj, key) {
  delete obj[key]
  return newobj
}
