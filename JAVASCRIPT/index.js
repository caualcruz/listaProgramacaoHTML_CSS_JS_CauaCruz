const divForms = document.getElementById('forms')
const divTab = document.getElementById('divTab')
const input = divForms.querySelectorAll('input')
const btn = divForms.querySelector('button')
const cor = document.getElementById('cor')
const btnTab = document.getElementById('subTab')
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

btnTab.addEventListener('click', ()=>{
    const col1 = document.createElement('div')
    const col2 = document.createElement('div')

    col1.classList.add('coluna');
    col2.classList.add('coluna');
    
    const tab = parseInt(document.getElementById('num3').value);
    
    let result = ''
    let result2 = ''
    for (let i = 1; i <= 5; i++) {
        result += `
        ${tab} x ${i} = ${tab*i} <br>
        `
    }
    for (let i = 6; i <= 10; i++) {
        result2 += `
        ${tab} x ${i} = ${tab*i} <br>
        `
    }

    col1.innerHTML = result
    col2.innerHTML = result2

    divTab.innerHTML = ''
    divTab.appendChild(col1)
    divTab.appendChild(col2)
})

