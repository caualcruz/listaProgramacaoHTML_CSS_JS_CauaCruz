const divForms = document.getElementById('forms')
const input = divForms.querySelectorAll('input')
const btn = divForms.querySelector('button')
const cor = document.getElementById('cor')

const body = document.getElementsByTagName('body')

console.log(divForms, input, btn, body)

document.body.style.backgroundColor = 'black'
document.body.style.color = 'white'

btn.addEventListener('click', () => {
    const num1 = parseInt(input[0].value)
    const num2 = parseInt(input[1].value)
    
    const soma = num1 + num2;
    const subtracao = num1 - num2;
    const multiplicacao = num1 * num2;
    const divisao = num1 / num2

    const newTag = document.createElement('h3')
    newTag.innerHTML = `   Resultado:<br>
                Soma: ${soma}<br>
                Subtração: ${subtracao}<br>
                Multiplicação: ${multiplicacao}<br>
                Divisão: ${divisao}
            `;
  
    divForms.appendChild(newTag)
})

function mudarCor() {
    if (document.body.style.backgroundColor === 'black') {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        cor.textContent = 'Escuro';
    } else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        cor.textContent = 'Claro';
    }
}

cor.addEventListener('click', mudarCor);


