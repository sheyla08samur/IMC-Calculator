document.getElementById("btnCalculate").addEventListener("click", obtainInfo);
document.getElementById("btnNewCal").addEventListener("click",limpiar);
const form= document.querySelector("form");
const allInputs= form.querySelectorAll("input")

function obtainInfo() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const weightPatient = (document.getElementById("weightPatient").value);
  const heightPatient = (document.getElementById("heightPatient").value);

  
  
  const imc = (weightPatient / (heightPatient ** 2)).toFixed(2);
  let msjStatus = "";
  let image = "";
  
  const msjIMC = `Su IMC es: ${imc}`;
  
  if (imc > 30) {
    msjStatus = "⚠️ Tienes obesidad.";
    image = "../src/Imgs/imc-img4.png";
  } else if (imc > 25) {
    msjStatus = "⚠️ Estás en sobrepeso.";
    image = "../src/Imgs/imc-img3.png";
  } else if (imc > 18.5) {
    msjStatus = "🎉 Tienes un peso saludable.";
    image = "../src/Imgs/imc-img2.png";
  } else if (imc < 18.5){
    msjStatus = "🚨 Estás por debajo del peso saludable.";
    image = "../src/Imgs/imc-img1.png";
  } else {
    msjStatus = "🚨 Error al ingresar los datos.";
  }
  
  document.getElementById("imcResult").textContent = msjIMC;
  document.getElementById("imcStatus").textContent = msjStatus;
  document.getElementById("image").src = image;
  allInputs.forEach(element => element.disabled = true)
  
  //add .desable
}

function limpiar() {
  document.getElementById("name").value=""
  document.getElementById("age").value=""
  document.getElementById("weightPatient").value=""
  document.getElementById("heightPatient").value=""
  allInputs.forEach(element => element.disabled = false)
}