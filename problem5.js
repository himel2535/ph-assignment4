let marks = [98, 87, 67, 91, 92, 33, 87]
;

function resultReport(marks) {
  let sum = 0;
  let pass = 0;
  let fail = 0;
  let avgScore=0;

  if (Array.isArray(marks) !== true) {
    return "Invalid";
  }

  for (let mark of marks) {
    sum = sum + mark;

    if (mark >= 40) {
      pass = pass + 1;
    } else {
      fail = fail + 1;
    }
    avg = sum / marks.length;
    avgScore = Math.round(avg);
  }

  return { finalScore: avgScore, pass: pass, fail: fail };
}
let result = resultReport(marks);
console.log(result);
