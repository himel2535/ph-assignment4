let str ="  h e llo wor   ld"  ;
function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  final = str.split(" ").join("").toUpperCase();
  return final;
}
result = onlyCharacter(str);
console.log(result);
