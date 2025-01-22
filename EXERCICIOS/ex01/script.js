const items = [...document.querySelectorAll("li")];
const searchButton = document.querySelector("#btnPesquisar");
const txt_digitado = document.querySelector("#pesquisa");
const category = document.querySelector("#categoriaSelect");

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
        const item = el.textContent.toLowerCase();
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

