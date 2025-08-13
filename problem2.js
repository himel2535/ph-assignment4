let str = "  h e llo wor   ld";
function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  let final = str.split(" ").join("").toUpperCase();
  return final;
}
result = onlyCharacter(str);
console.log(result);
