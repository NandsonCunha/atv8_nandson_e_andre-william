const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    const numero = Number(frm.numero.value)
    const valor = Math.sqrt(numero)
    resp.innerText = `A Raiz Quadrada é: ${valor.toFixed(3)}`
    e.preventDefault()
})