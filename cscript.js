var ainputni = document.getElementById("ainput"); // ni = no int
var binputni = document.getElementById("binput");
calcButton.addEventListener("click", ()=> {
  var ainput = parseFloat(ainputni.value) || 0; // now it's a int
  var binput = parseFloat(binputni.value) || 0;
  var ng = []; //number greater
  ng.length = 0;
  ng.push(ainput);
  ng.push(binput);
  ng.sort((a, b) => a - b);
  var bminusa = ng[1] * ng[1] - ng[0] * ng[0];
  var perimeter = ainput + binput + Math.sqrt(bminusa);
  output.innerHTML = "";
  output.innerHTML += ainput + "x" + ainput + " = " + ainput * ainput + "<br>";
  output.innerHTML += binput + "x" + binput + " = " + binput * binput + "<br>";
  output.innerHTML += ng[1] * ng[1] + "-" + ng[0] * ng[0] + " = " + bminusa + "<br>";
  output.innerHTML += "Square root of " + bminusa + " = " + Math.sqrt(bminusa) + " (a)" + "<br>" + "<br>";
  output.innerHTML += "Perimeter (2p):<br>";
  output.innerHTML += ainput + "+" + binput + "+" + Math.sqrt(bminusa) + " = " + perimeter;
});
