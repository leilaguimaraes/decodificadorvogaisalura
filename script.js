var textoCapturado = document.querySelector('#textoinput')
var output = document.querySelector('#decodificador--output');
var pattern = '[A-Z0-9/g]';


function criptografar(){
  var texto = textoCapturado.value;
  var textoCriptografado = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")
  
  if (texto && !texto.match(pattern)){
    document.getElementById("decodificador--output").innerHTML = '<textarea id="resultadoTexto">'+textoCriptografado+'</textarea>'+ '<input type="button" value="Copiar" class="button-secondary" onclick="copiar()"> '
  } else{
    alert("insira um texto válido")
  }
}

function descriptografar(){
  var texto = textoCapturado.value;
  var textoDescriptografado = texto.replace(/enter/g, "e").replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, "o").replace(/ufat/g, 'u')

  if (texto && !texto.match(pattern)){
    document.getElementById("decodificador--output").innerHTML = '<textarea id="resultadoTexto">'+textoDescriptografado +'</textarea>'+
    '<input type="button" value="Copiar" class="button-secondary" onclick="copiar()"> '
  } else{
    alert("insira um texto válido")
  }

}

function copiar(){
  var textoCop = document.getElementById('resultadoTexto').innerHTML;
  window.navigator.clipboard.writeText(textoCop).then(alert('copiado'))
}

