let tipoItemSelecionado = "pizzas";

function alterarTipoItem() {
    const tipoItem = document.querySelector('input[name="itemType"]:checked').value;
    tipoItemSelecionado = tipoItem;
    exibirTamanhoPizza(tipoItem === "pizzas");
}

function exibirTamanhoPizza(exibir) {
    const tamanhoPizza = document.getElementById("tamanhoPizza");
    tamanhoPizza.style.display = exibir ? "block" : "none";
}

function adicionarPedido() {
    const itemNome = document.getElementById("detalhesItem").value.trim();

    if (itemNome !== "") {
        let pedido = tipoItemSelecionado.charAt(0).toUpperCase() + tipoItemSelecionado.slice(1); // Primeira letra em maiúscula (Pizza ou Bebida)
        if (tipoItemSelecionado === "pizzas") {
            const tamanho = document.getElementById("tamanho").value;
            pedido += ` ${tamanho}`;
        }

        if (itemNome !== "") {
            pedido += ` (${itemNome})`;
        }

        const listaPedidos = document.getElementById("pedidos");
        const listItem = document.createElement("li");
        listItem.textContent = pedido;
        listaPedidos.appendChild(listItem);
    }
}