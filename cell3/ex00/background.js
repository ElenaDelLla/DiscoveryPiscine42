const boton = document.getElementById("btn");

boton.addEventListener("click", function cambiarColor() {
  const x = Math.random() * 256;
  const y = Math.random() * 256;
  const z = Math.random() * 256;
  document.body.style.backgroundColor = "rgb(" + x + "," + y + "," + z + ")";
});
