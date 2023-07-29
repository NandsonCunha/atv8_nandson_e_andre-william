const frm = document.querySelector('form')
const resp2 = document.querySelector('h4')
const resp = document.querySelector('h3')

let contas = []
let total = 0

frm.addEventListener('submit', (e) => {
    const descricao = frm.desc.value
    const valorPag = Number(frm.valorPag.value)

    contas.push({ descricao, valorPag })
    total += valorPag

    const message = contas.map(conta => `${conta.descricao} - R$ ${conta.valorPag}`).join('\n ')
    resp2.textContent = message
    resp.textContent = `${contas.length} Contas para pagar - Total R$ ${total}\n`

    e.preventDefault()
});
