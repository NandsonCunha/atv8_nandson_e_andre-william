const carros = [];

function adicionarCarro() {
    const modelo = document.getElementById('modelo').value;
    const preco = parseFloat(document.getElementById('preco').value);

    if (modelo.trim() !== '' && !isNaN(preco)) {
        carros.push({ modelo, preco });
        atualizarListaCarrosDisponiveis();
    } else {
        alert('Por favor, preencha o modelo e o preço corretamente.');
    }
}

function simularPromocao() {
    const desconto = parseFloat(document.getElementById('desconto').value);

    if (!isNaN(desconto)) {
        const carrosComDesconto = carros.map(carro => ({
            ...carro,
            precoComDesconto: carro.preco * (1 - desconto / 100)
        }));

        mostrarCarrosComDesconto(carrosComDesconto);
    } else {
        alert('Por favor, insira um valor numérico válido para o desconto.');
    }
}

function mostrarCarrosComDesconto(carrosComDesconto) {
    const carrosDescontoElement = document.getElementById('carrosDesconto');
    carrosDescontoElement.innerHTML = '';

    carrosComDesconto.forEach(carro => {
        const listItem = document.createElement('li');
        listItem.textContent = `${carro.modelo} - Preço com Desconto: ${carro.precoComDesconto.toFixed(2)}`;
        carrosDescontoElement.appendChild(listItem);
    });
}

function filtrarPorPreco() {
    const precoFiltroMin = parseFloat(document.getElementById('precoFiltroMin').value);
    const precoFiltroMax = parseFloat(document.getElementById('precoFiltroMax').value);

    if (!isNaN(precoFiltroMin) && !isNaN(precoFiltroMax)) {
        const carrosFiltrados = carros.filter(carro => carro.preco >= precoFiltroMin && carro.preco <= precoFiltroMax);
        atualizarListaCarrosDisponiveis(carrosFiltrados);
    } else {
        alert('Por favor, insira valores numéricos válidos para os filtros de preço.');
    }
}

function atualizarListaCarrosDisponiveis(carrosParaExibir = carros) {
    const carrosDisponiveisElement = document.getElementById('carrosDisponiveis');
    carrosDisponiveisElement.innerHTML = '';

    carrosParaExibir.forEach(carro => {
        const listItem = document.createElement('li');
        listItem.textContent = `${carro.modelo} - Preço: ${carro.preco.toFixed(2)}`;
        carrosDisponiveisElement.appendChild(listItem);
    });
}