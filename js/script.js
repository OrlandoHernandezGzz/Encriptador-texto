const txtPalabra = document.getElementById("txtPalabra");
const resultado = document.querySelector(".resultado__card");
const btnEncriptar = document.getElementById("btnEncriptar");
const btnDesencriptar = document.getElementById("btnDesencriptar");
// const btnCopiar = document.getElementById("btnCopiar");
const btnCopiar = document.querySelector(".resultado__card button");

/*
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"
*/
function encriptar(){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    let stringEncriptado = txtPalabra.value.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    
    resultado.innerHTML = `
        <div class="resultado__completo">${stringEncriptado}</div>
    `;

    btnCopiar.classList.remove("ocultar");

    // btnCopiar.getElementsByClassName("ocultar").style.display="block";
    
    txtPalabra.value = "";
}

function desencriptar(){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    let stringDesencriptado = txtPalabra.value.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    resultado.innerHTML = `
        <div class="resultado__completo">${stringDesencriptado}</div>
    `;

    btnCopiar.classList.remove("ocultar");
    txtPalabra.value = "";
}

function copiar(){
    // alert("Holaaaa");
    // Crea un input para poder copiar el texto dentro       
    // let copyText = document.querySelector('.resultado__completo');

    // console.log(copyText);
//   const textArea = document.createElement('textarea');
//   textArea.textContent = copyText;
//   document.body.append(textArea);       
//   textArea.select();       
//   document.execCommand("resultado__completo");       
//   // Delete created Element       
//   textArea.remove() 
}

btnEncriptar.addEventListener("click", encriptar);
btnDesencriptar.addEventListener("click", desencriptar);


    btnCopiar.addEventListener("click", copiar);
