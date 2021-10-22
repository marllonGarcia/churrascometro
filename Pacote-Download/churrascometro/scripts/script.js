
               //pegando os elementos criado no meu documento HTML
let inputAdultos = document.getElementById('adultos')
let inputCriancas = document.getElementById('criancas')
let inputduracao = document.getElementById('duracao')

let resultado = document.getElementById('resultado')



function calcular () {
    //pegando os valores dos input's e colocando em um VAR

    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputduracao.value

    let totalCarne = carnePorPessoa(duracao) * adultos +  (carnePorPessoa(duracao) / 2 * criancas)
    let totalCerveja = cervejaPorPessoa(duracao) * adultos 
    let totalRefriAgua = bebidaPorPessoa(duracao) * adultos + (bebidaPorPessoa(duracao) / 2 * criancas)


    resultado.innerHTML = `<li id='carne'>${totalCarne/1000}kg de Carne </li>`
    resultado.innerHTML += `<li id='cerveja'>${Math.ceil(totalCerveja/355)} Latas de Cerveja</li>`
    resultado.innerHTML += `<li id='refri'>${Math.ceil(totalRefriAgua/2000)} pet's 2L de bebidas</li>`

    function carnePorPessoa(duracao) {
        if (duracao >= 6) {
            return 650;
        } else {
            return 400;
        }
    }
    
    function cervejaPorPessoa(duracao) {
        if (duracao >= 6) {
            return 2000;
        } else {
            return 1200;
        }
    }
    function bebidaPorPessoa(duracao) {
        if (duracao >= 6) {
            return 1500;
        } else {
            return 1000;
        }
    }
}