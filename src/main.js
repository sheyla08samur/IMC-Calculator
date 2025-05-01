document.getElementById("btnCalculate").addEventListener("click", obtainInfo);
document.getElementById("btnNewCal").addEventListener("click",limpiar);
 const form= document.querySelector("form");

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
  } else {
    msjStatus = "🚨 Estás por debajo del peso saludable.";
    image = "../src/Imgs/imc-img1.png";
  }
//falta la validación de si no meten ningun valor


  document.getElementById("imcResult").textContent = msjIMC;
  document.getElementById("imcStatus").textContent = msjStatus;
  document.getElementById("image").src = image;

  //add .desable
}

function limpiar() {
  document.getElementById("name").value=""
  document.getElementById("age").value=""
  document.getElementById("weightPatient").value=""
  document.getElementById("heightPatient").value=""
}