const items = [...document.querySelectorAll("li")];
const searchButton = document.querySelector("#btnPesquisar");
const txt_digitado = document.querySelector("#pesquisa");
const category = document.querySelector("#categoriaSelect");
const botaoCarrinho = document.getElementById("botaoCarrinho")
const fecharCarrinho = document.getElementById("fecharCarrinho")
const caixaCarrinho = document.getElementById("modalCarrinho")
const Carrinho = document.getElementById("itensCarrinho")
let contadorCarrinho = 0

function gerarPreçoQuantidade(){
    const preco = (Math.random() * (20 - 5) + 5).toFixed(2)
    const quantidade = Math.floor(Math.random() *100)
    return {preco,quantidade}
}

items.map((el)=>{
    const {preco, quantidade} = gerarPreçoQuantidade()
    const precoElement = el.querySelector('.preco');
    const quantidadeElement = el.querySelector('.quantidade');
    precoElement.textContent = `Preço: R$ ${preco}`;
    quantidadeElement.textContent = `Quantidade em Estoque: ${quantidade}`;
    const botaoComprar = document.createElement("button")
    botaoComprar.setAttribute("class", "botaoComprar")
    botaoComprar.innerHTML = "Comprar"
    el.appendChild(botaoComprar)

    botaoComprar.addEventListener("click", () => {
        contadorCarrinho = contadorCarrinho + 1
        const itemCarrinho = document.createElement("li");
        itemCarrinho.setAttribute("class", "item");
        itemCarrinho.innerHTML = el.querySelector('span').previousSibling.textContent; // Nome do produto
        Carrinho.appendChild(itemCarrinho);
        botaoCarrinho.innerHTML = "&#128722; " + contadorCarrinho})
})

searchButton.addEventListener("click", () => {
    const itemDigitado = txt_digitado.value.toLowerCase().trim();
    const categoriaSelecionada = category.value.toLowerCase();

    // Se não for digitado nada nem selecionada nenhuma categoria, exibe o alerta
    if (itemDigitado === "" && categoriaSelecionada === "") {
        alert("Digite o nome ou selecione a categoria de um item");
        items.map((el)=>{
            el.classList.remove("hidden")
        })
        return;
    }

    items.map((el) => {
        const item = el.querySelector('span').previousSibling.textContent.toLowerCase();
        const categoria = el.getAttribute("data-categoria").toLowerCase();

        // Verifica se o item corresponde à categoria e à pesquisa
        if (categoria === categoriaSelecionada || categoriaSelecionada === "") {
            // Se o campo de pesquisa estiver vazio, mostra todos os itens da categoria selecionada
            if (itemDigitado === "" || item.includes(itemDigitado)) {
                el.classList.remove("hidden");
            } else {
                el.classList.add("hidden");
            }
        } else {
            // Se a categoria não for a selecionada, oculta o item
            el.classList.add("hidden");
        }
    });
});

botaoCarrinho.addEventListener("click",()=>{
    caixaCarrinho.style.display = "block"
    contadorCarrinho = 0
    botaoCarrinho.innerHTML = "&#128722;"
})

fecharCarrinho.addEventListener("click",()=>{
    caixaCarrinho.style.display = "none"
})



// searchButton.addEventListener("click",(evt)=>{
//     const valor = items.find((el)=>{
//         if(el.textContent.toLowerCase() == txt_digitado.value.toLowerCase().trim()){
//             console.log("item encontrado")
//             el.classList.remove("hidden")
//         }else{
//             el.classList.add("hidden")
//         }
//     })
// })

