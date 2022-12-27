const inputTexto = document.getElementById('input-texto');
const btnEncriptar = document.getElementById('btn-encriptar');
const btnDesencriptar = document.getElementById('btn-desencriptar');
const inputResultado = document.getElementById('mensaje-texto');
const btnCopiar = document.getElementById('btn-copy');
const btnborrar = document.getElementById('btn-borrar');
const soloLetras ='^[a-z !ñ]+$';

document.addEventListener('DOMContentLoaded', () => {
  btnEncriptar.addEventListener('click', encriptar);
  btnDesencriptar.addEventListener('click', desencriptar);
  btnCopiar.addEventListener('click', copiarTexto);
});

function encriptar(e) {
  e.preventDefault();
  inputResultado.value = '';
  let texto = inputTexto.value;
  
  if(texto.match(soloLetras)!=null){
    let palabras = texto.split(' ');
    let nuevasPalabras = [];
    
    for (let palabra of palabras) {
      palabra = palabra.replace('e','enter');
      palabra = palabra.replace('i','imes');
      palabra = palabra.replace('a','ai');
      palabra = palabra.replace('o','ober');
      palabra = palabra.replace('u','ufat');
      
      nuevasPalabras.push(palabra);
    }

    const resultado = nuevasPalabras.join(' ');
    
    inputResultado.value = resultado;
  } else {
    mostrarError('Solo se permiten letras minúsculas, sin acentos');
    return;
  }  
}

function desencriptar(event) {
  event.preventDefault();
  inputResultado.value = '';
  let texto = inputTexto.value;

  if(texto.match(soloLetras)!=null){
    let palabras = texto.split(" ");
    let nuevasPalabras = [];

    for (let palabra of palabras) {
      palabra = palabra.replace('enter','e');
      palabra = palabra.replace('imes','i');
      palabra = palabra.replace('ai','a');
      palabra = palabra.replace('ober','o');
      palabra = palabra.replace('ufat','u');
      nuevasPalabras.push(palabra);
    }

    const resultado = nuevasPalabras.join(' ');
    
    inputResultado.value = resultado;

  }
  else {
    mostrarError('Solo se permiten letras minúsculas, sin acentos');
    return;
  }  
}

function mostrarError(mensaje) {

  const existeError = document.querySelector('.error');
  if(!existeError) {

    const formulario = document.getElementById('formulario');
    const divMensaje = document.createElement('div');
    divMensaje.classList.add('error');
    
    divMensaje.textContent = mensaje;
    formulario.appendChild(divMensaje);
    
    setTimeout(()=> {

      divMensaje.remove();

    }, 2000);
  }
}

function copiarTexto(e) {

    e.preventDefault(); 
    const mensaje = inputResultado.value;
    navigator.clipboard.writeText(mensaje);
    alert("Mensaje copiado: " + mensaje);

}
function Limpiar(){
  inputTexto.value = "";
  inputResultado.value = "";
}
function foco(){
  inputTexto.focus();
}

function borrar(){
  inputTexto.Placeholder = "Ingrese el texto aqui";
  inputResultado.Placeholder = "";
  Limpiar()
  foco();
}

btnborrar.addEventListener("click", borrar);