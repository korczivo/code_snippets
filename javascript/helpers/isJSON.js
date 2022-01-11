function isJson(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    //the json is  not ok
    return false;
  }
  //the json is ok
  return true;
}
