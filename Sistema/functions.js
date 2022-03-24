const fs = require('fs');


// --- Construtores auxiliares --- //
let conversao = {};

const alfabeto_pequeno = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
,"r","s","t","u","v","w","x","y","z"];

const alfabeto_grande = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q"
,"R","S","T","U","V","W","X","Y","Z"];

const alfabeto_numeros = ['0','1','2','3','4','5','6','7','8','9'];

const alfabeto_simbolos = ['!','@','#','$','%','&','*'];


// --- Função principal --- //

async function embaralha(nome, tamanho, minuscula, maiuscula, simbolo, numeros){

    let senha = [];

    if( minuscula && maiuscula && simbolo && numeros){

        for(let i = 1; i <= tamanho;){
                if(i > tamanho){break}
                let letra = await alfabeto_pequeno[Math.floor(Math.random() * alfabeto_pequeno.length)];
                senha.push(letra);
                i++;
                if(i > tamanho){break}
                letra = await alfabeto_grande[Math.floor(Math.random() * alfabeto_grande.length)];
                senha.push(letra);
                i++;
                if(i > tamanho){break}
                letra = await alfabeto_simbolos[Math.floor(Math.random() * alfabeto_simbolos.length)];
                senha.push(letra);
                i++;
                if(i > tamanho){break}
                letra = await alfabeto_numeros[Math.floor(Math.random() * alfabeto_numeros.length)];
                senha.push(letra);
                i++;
        }
    }else if(minuscula && maiuscula && simbolo){
        for(let i = 1; i <= tamanho;){

            if(i > tamanho){break}
            let letra = await alfabeto_pequeno[Math.floor(Math.random() * alfabeto_pequeno.length)];
            senha.push(letra);
            i++;
            if(i > tamanho){break}
            letra = await alfabeto_grande[Math.floor(Math.random() * alfabeto_grande.length)];
            senha.push(letra);
            i++;
            if(i > tamanho){break}
            letra = await alfabeto_simbolos[Math.floor(Math.random() * alfabeto_simbolos.length)];
            senha.push(letra);
            i++;
        }
    }else if(minuscula && maiuscula && numeros){
        for(let i = 1; i <= tamanho;){
            if(i > tamanho){break}
            let letra = await alfabeto_pequeno[Math.floor(Math.random() * alfabeto_pequeno.length)];
            senha.push(letra);
            i++;
            if(i > tamanho){break}
            letra = await alfabeto_grande[Math.floor(Math.random() * alfabeto_grande.length)];
            senha.push(letra);
            i++;
            if(i > tamanho){break}
            letra = await alfabeto_numeros[Math.floor(Math.random() * alfabeto_numeros.length)];
            senha.push(letra);
            i++;
        }
    }else if(minuscula && simbolo && numeros){
        for(let i = 1; i <= tamanho;){
            if(i > tamanho){break}
            let letra = await alfabeto_pequeno[Math.floor(Math.random() * alfabeto_pequeno.length)];
            senha.push(letra);
            i++;
            if(i > tamanho){break}
            letra = await alfabeto_simbolos[Math.floor(Math.random() * alfabeto_simbolos.length)];
            senha.push(letra);
            i++;
            if(i > tamanho){break}
            letra = await alfabeto_numeros[Math.floor(Math.random() * alfabeto_numeros.length)];
            senha.push(letra);
            i++;
        }
    }else if(maiuscula && simbolo && numeros){
        for(let i = 1; i <= tamanho;){
            if(i > tamanho){break}
            let letra = await alfabeto_grande[Math.floor(Math.random() * alfabeto_grande.length)];
            senha.push(letra);
            i++;
            if(i > tamanho){break}
            letra = await alfabeto_simbolos[Math.floor(Math.random() * alfabeto_simbolos.length)];
            senha.push(letra);
            i++;
            if(i > tamanho){break}
            letra = await alfabeto_numeros[Math.floor(Math.random() * alfabeto_numeros.length)];
            senha.push(letra);
            i++;
        }
    }else if(minuscula && maiuscula){
        for(let i = 1; i <= tamanho;){
            if(i > tamanho){break}
            let letra = await alfabeto_pequeno[Math.floor(Math.random() * alfabeto_pequeno.length)];
            senha.push(letra);
            i++;
            if(i > tamanho){break}
            letra = await alfabeto_grande[Math.floor(Math.random() * alfabeto_grande.length)];
            senha.push(letra);
            i++;
            if(i > tamanho){break}
        }
    }else if(minuscula && simbolo){
        for(let i = 1; i <= tamanho;){
            if(i > tamanho){break}
            let letra = await alfabeto_pequeno[Math.floor(Math.random() * alfabeto_pequeno.length)];
            senha.push(letra);
            i++;
            if(i > tamanho){break}
            letra = await alfabeto_simbolos[Math.floor(Math.random() * alfabeto_simbolos.length)];
            senha.push(letra);
            i++;
            if(i > tamanho){break}
        } 
    }else if(minuscula && numeros){
        for(let i = 1; i <= tamanho;){
            if(i > tamanho){break}
            let letra = await alfabeto_pequeno[Math.floor(Math.random() * alfabeto_pequeno.length)];
            senha.push(letra);
            i++;
            if(i > tamanho){break}
            letra = await alfabeto_numeros[Math.floor(Math.random() * alfabeto_numeros.length)];
            senha.push(letra);
            i++;
            if(i > tamanho){break}
        } 
    }else if(maiuscula && simbolo){
        for(let i = 1; i <= tamanho;){
            if(i > tamanho){break}
            let letra = await alfabeto_grande[Math.floor(Math.random() * alfabeto_grande.length)];
            senha.push(letra);
            i++;
            if(i > tamanho){break}
            letra = await alfabeto_simbolos[Math.floor(Math.random() * alfabeto_simbolos.length)];
            senha.push(letra);
            i++;
            if(i > tamanho){break}
        }
    }else if(maiuscula && numeros){
        for(let i = 1; i <= tamanho;){
            if(i > tamanho){break}
            let letra = await alfabeto_grande[Math.floor(Math.random() * alfabeto_grande.length)];
            senha.push(letra);
            i++;
            if(i > tamanho){break}
            letra = await alfabeto_numeros[Math.floor(Math.random() * alfabeto_numeros.length)];
            senha.push(letra);
            i++;
            if(i > tamanho){break}
        } 
    }else if(simbolo && numeros){
        for(let i = 1; i <= tamanho;){
            if(i > tamanho){break}
            let letra = await alfabeto_simbolos[Math.floor(Math.random() * alfabeto_simbolos.length)];
            senha.push(letra);
            i++;
            if(i > tamanho){break}
            letra = await alfabeto_numeros[Math.floor(Math.random() * alfabeto_numeros.length)];
            senha.push(letra);
            i++;
            if(i > tamanho){break}
        } 
    }else if(minuscula){
        for(let i = 1; i <= tamanho;){
            let letra = await alfabeto_pequeno[Math.floor(Math.random() * alfabeto_pequeno.length)];
            senha.push(letra);
            i++;
        }    
    }else if(maiuscula){
        for(let i = 1; i <= tamanho;){
            let letra = await alfabeto_grande[Math.floor(Math.random() * alfabeto_grande.length)];
            senha.push(letra);
            i++;
        } 
    }else if(simbolo){
        for(let i = 1; i <= tamanho;){
            let letra = await alfabeto_simbolos[Math.floor(Math.random() * alfabeto_simbolos.length)];
            senha.push(letra);
            i++;
        }
    }else if(numeros){
        for(let i = 1; i <= tamanho;){
            let letra = await alfabeto_numeros[Math.floor(Math.random() * alfabeto_numeros.length)];
            senha.push(letra);
            i++;
        }
    }else{
        console.log("A opção escolhida não é vlálida");
    }

    // Juntando o arrai de senha em uma string só
    let senha_concat = senha.join('');

    // Construindo o objeto global que declarei lá em cima
    conversao.nome = nome;
    conversao.senha = senha_concat;

    //gerar_arquivo(nome,senha_concat)
}

// ---- Gerando arquivo de senha ---- //
//OBS: não consigo gerar arquivos pra download individualmente
// a senha sempre vai junto pra todo mundo, por isso comentei
/* function gerar_arquivo(nome, senha){

    let senha_formatada = (`O nome da senha é: ${nome} \nE a senha é: ${senha}\n----------\n`);
    
    fs.writeFile('./Senha Gerada.txt', senha_formatada,{flag:'a+'} , (err) => {
        if(err) return console.log(err);
        console.log('Arquivo gerado com sucesso');
    });
} */

module.exports = {conversao, embaralha}