const frm = document.querySelector('form')
const resposta = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    const quilo = Number(frm.inQuilo.value)
    const cosumo= Number(frm.consumoGrama.value)
    const valor = (quilo / 1000) * consumoGrama
    resp.innerText = `Valor a pagar R$ ${valor.toFixed(2)}`
    e.preventDefault()
})


