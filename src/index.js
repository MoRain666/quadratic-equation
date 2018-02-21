module.exports = function solveEquation(equation) {
  let basicArray = equation.split('*',3);
  let preb = basicArray[1].split('x^2',2);
  let y = preb[1].split(' ',3);
  let z = ((y.join(' ')).split(' ',3));
  let b = Number(z[1] + z[2]);
  let prec = basicArray[2].split(' ',5);
  let c = Number(prec[2] + prec[3]);
  let a = Number(basicArray[0]);
  let D = b * b - 4 * a * c;
  let x1 = (-b + Math.round(Math.sqrt(D))) / 2 / a;
  let x2 = (-b - Math.round(Math.sqrt(D))) / 2 / a;
  if (x1 > x2) {
    return [x2, x1]
  } else {
    return [x1 ,x2]
  }
};