
// ---- Pegando as variaveis do meu body ---- //
let nome_display = document.getElementById('nome_html');
let tamanho_display = document.getElementById('tamanho_html');
let minuscula_display = true;
let maiuscula_display = true;
let simbolos_display = true;
let numeros_display = true;

// ---- levando as variaveis para o body ---- //
let imprime_valores_display = document.getElementById('imprime_valores');
let imprime_botao = document.getElementById('botao');

var esseaqui = false;

// ---- funções ---- //
function pega_valores(){

    const formulario = { 
        nome_script : nome_display.value,
        tamanho_script : tamanho_display.value,
        minuscula_script : minuscula_display,
        maiuscula_script : maiuscula_display,
        simbolos_script : simbolos_display,
        numeros_script : numeros_display,
    }
    options = {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formulario)
    }
    fetch('/api',options)
    recebe_valores();
    meubotao();
    // Tive que comentar as 2 linhas pois ambas estavam enviando nulo pra o objeto
    //nome_display = document.getElementById('nome_html').value = '';
    //tamanho_display = document.getElementById('tamanho_html').value = '';  
}

function recebe_valores(){

    fetch('/api')
        .then(response => response.json())
        .then(response => {

                let add_html = (`<div class="teste"> <b>Nome:</b>`+` `+ response.nome +` `+
                `<b>Senha:</b>`+` `+ response.senha +`</div>`)

                imprime_valores_display.insertAdjacentHTML('afterbegin', add_html)
                // dessa forma ele não aceita mais de um click: //imprime_valores_display.innerHTML = add_html
        })
        
}


function meubotao(){

    if(esseaqui === false){
        esseaqui = (`<button class="gerar_senha" onclick="pega_valores()">Limpar</button>`)
        imprime_botao.insertAdjacentHTML('beforeend', esseaqui)
        console.log('eu entrei aqui')
        return esseaqui = true;
    }
}





