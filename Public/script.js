
// ---- Pegando as variaveis do meu body ---- //
let nome_display = document.getElementById('nome_html');
let tamanho_display = document.getElementById('tamanho_html');
let minuscula_display = document.getElementById('minuscula_html');
let maiuscula_display = document.getElementById('maiuscula_html');
let simbolos_display = document.getElementById('simbolos_html');
let numeros_display = document.getElementById('numeros_html');


function verificador(){

    if(nome_display.value == "" || tamanho_display == "" ){
        alert("Você esqueceu um campo vazio, favor verificar");
        location.reload();
    }
    else{
        return pega_valores();
    }
}

function pega_valores(){

    const formulario = { 
        nome_script : nome_display.value,
        tamanho_script : tamanho_display.value,
        minuscula_script : minuscula_display.value,
        maiuscula_script : maiuscula_display.value,
        simbolos_script : simbolos_display.value,
        numeros_script : numeros_display.value,

    }
    options = {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formulario)
    }
    fetch('/api',options)
    nome_display = document.getElementById('nome_html').value = '';
    tamanho_display = document.getElementById('tamanho_html').value = '';
}