var binputni = document.getElementById("binput"); // ni = no int
var cinputni = document.getElementById("cinput");
calcButton.addEventListener("click", ()=> {
  var binput = parseFloat(binputni.value) || 0; // now it's a int
  var cinput = parseFloat(cinputni.value) || 0;
  var cplusb = binput * binput + cinput * cinput;
  var perimeter = binput + cinput + Math.sqrt(cplusb);
  output.innerHTML = "";
  output.innerHTML += binput + "x" + binput + " = " + binput * binput + "<br>";
  output.innerHTML += cinput + "x" + cinput + " = " + cinput * cinput + "<br>";
  output.innerHTML += binput * binput + "+" + cinput * cinput + " = " + cplusb + "<br>";
  output.innerHTML += "Square root of " + cplusb + " = " + Math.sqrt(cplusb) + " (a)" + "<br>" + "<br>";
  output.innerHTML += "Perimeter (2p):<br>";
  output.innerHTML += binput + "+" + cinput + "+" + Math.sqrt(cplusb) + " = " + perimeter;
});
