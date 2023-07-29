const frm = document.querySelector('form');
const resp = document.querySelector('h3');

frm.addEventListener('submit', (e) => {
    const nomeCompleto = frm.nome.value;

    const partesNome = nomeCompleto.split(' ');
    const nome = partesNome[0];
    const sobrenome = partesNome[partesNome.length - 1];
    
    const primeiraLetraNome = nome.charAt(0).toLowerCase();
    const primeiraLetraSobrenome = sobrenome.charAt(0).toLowerCase();
    
    const emailInstitucional = `${primeiraLetraNome}${primeiraLetraSobrenome}@empresa.com.br`;
    resp.innerText = `E-mail Institucional: ${emailInstitucional}`;

    e.preventDefault();
});
