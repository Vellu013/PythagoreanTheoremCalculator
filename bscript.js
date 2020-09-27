var ainputni = document.getElementById("ainput"); // ni = no int
var cinputni = document.getElementById("cinput");
calcButton.addEventListener("click", ()=> {
  var ainput = parseFloat(ainputni.value) || 0; // now it's a int
  var cinput = parseFloat(cinputni.value) || 0;
  var ng = []; //number greater
  ng.length = 0;
  ng.push(ainput);
  ng.push(cinput);
  ng.sort((a, b) => a - b);
  var cminusa = ng[1] * ng[1] - ng[0] * ng[0];
  var perimeter = ainput + cinput + Math.sqrt(cminusa);
  output.innerHTML = "";
  output.innerHTML += ainput + "x" + ainput + " = " + ainput * ainput + "<br>";
  output.innerHTML += cinput + "x" + cinput + " = " + cinput * cinput + "<br>";
  output.innerHTML += ng[1] * ng[1] + "-" + ng[0] * ng[0] + " = " + cminusa + "<br>";
  output.innerHTML += "Square root of " + cminusa + " = " + Math.sqrt(cminusa) + " (b)" + "<br>" + "<br>";
  output.innerHTML += "Perimeter (2p):<br>";
  output.innerHTML += ainput + "+" + cinput + "+" + Math.sqrt(cminusa) + " = " + perimeter;
});
