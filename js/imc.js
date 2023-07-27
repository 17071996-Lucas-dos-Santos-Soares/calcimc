const calcular = document.getElementById('calcular')
function imc () {
    const nome = document.getElementById('nome').value
    const peso = document.getElementById('peso').value
    const altura = document.getElementById('altura').value
    const resultado = document.getElementById('resultado')
    if(nome !== '' && altura !== '' && peso != '') {

        const valorIMC =(peso / (altura * altura)).toFixed(2)
        let classificacao = ''
        if(valorIMC < 18.5) {
            classificacao = 'Você está abaixo do peso!'
        } 
        else if(valorIMC <25) {
            classificacao = 'Você está no peso ideal!'
        }
        else if(valorIMC <30) {
            classificacao = 'Você está acima do peso!'
        }
        else if(valorIMC <35) {
            classificacao = 'Você está com obesidade leve'
        }
        else if(valorIMC <40) {
            classificacao = 'Você está com obesidade severa'
        }
        else{
            classificacao = 'Você está com obesidade morbida. cuidado!'
        }
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`
    } else {
        resultado.textContent = 'preencha todos os campos!'
    }
}
calcular.addEventListener('click', imc);