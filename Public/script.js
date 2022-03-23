
// ---- Pegando todas as variaveis do meu body ---- //
let nome_display = document.getElementById('nome_html');
let tamanho_display = document.getElementById('tamanho_html');
let numeros_display = document.getElementById('numeros_html');
let simbolos_display = document.getElementById('simbolos_html');
let minuscula_display = document.getElementById('minuscula_html');
let maiuscula_display = document.getElementById('maiuscula_html');

// ---- adicionando HTML no body ---- //
let imprime_valores_display = document.getElementById('imprime_valores');
let revela_botoes = document.getElementById('botoes_extras');
var check_unico_botoes = false;

// ---- Darkmode ---- // 
let darkmode = document.getElementById('darkmode');



// ---- funções ---- //
function pega_valores(){

    const formulario = { 
        nome_script : nome_display.value,
        tamanho_script : tamanho_display.value,
        minuscula_script : minuscula,
        maiuscula_script : maiuscula,
        simbolos_script : simbolos,
        numeros_script : numeros,
    }
    options = {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formulario)
    }
    fetch('/api',options)
    recebe_valores();
    botes_extras();
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
        }
    )     
}

function Limpar(){
    location.reload()
}

function botes_extras(){

    if(check_unico_botoes === false){
        check_unico_botoes = (`<button class="gerar_senha" onclick="Limpar()"><b>Limpar</b></button>`+
                    `<br><button class="gerar_senha" onclick="Limpar()"><b>Me manda no ZAP!</b></button>`)
                revela_botoes.insertAdjacentHTML('beforeend', check_unico_botoes)
        return check_unico_botoes = true;
    }
}

// ---- Atribuindo escutador aos meus checkbox ---- //
let minuscula = minuscula_display.addEventListener('change', (e) => {
    minuscula = e.target.checked;
    console.log("aaa: " + e.target.checked)
})
let maiuscula = maiuscula_display.addEventListener('change', (e) => {
    maiuscula = e.target.checked;
    console.log("AAA: " + e.target.checked)
})
let numeros = numeros_display.addEventListener('change', (e) => {
    numeros = e.target.checked;
    console.log("123: " + e.target.checked)
})
let simbolos = simbolos_display.addEventListener('change', (e) => {
    simbolos = e.target.checked;
    console.log("!@#: " + e.target.checked)
})
// ---- Setando valor inicial aos meus checkbox ---- //
if(!minuscula && !maiuscula && !numeros && !simbolos){
    minuscula = true;
    maiuscula=true,
    numeros=true,
    simbolos = true;
}

// ---- Atribuindo a classe dark a meu Body para o darmode ----//
darkmode.addEventListener('change', (e) => {
    document.body.classList.toggle("dark", e.target.checked);
})







