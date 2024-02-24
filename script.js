var num = 0;

function contador() {
  var contadorElemento = document.getElementById("contador").innerHTML = num;
}

function aumentar() {
  num = num + 1;
  contador();
}

function resetear() {
  num = 0;
  contador();
}


