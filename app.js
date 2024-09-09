function pesquisar() {

    let section = document.getElementById("receitas");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    let resultados = "";

    if (!campoPesquisa) {
       section.innerHTML = "<h3>Digite uma receita ou ingrediente</h3>"
        return
    };

campoPesquisa = campoPesquisa.toLowerCase();

    for (let receita of receitas) {
        if (receita.titulo.toLowerCase().includes(campoPesquisa) ||
            receita.ingredientes.some(ingrediente => ingrediente.toLowerCase().includes(campoPesquisa))) {
            let listaIngredientes = "";

            for (let ingrediente of receita.ingredientes) {
                listaIngredientes += `<li>${ingrediente}</li>`;
            }

            resultados += `
                <div class="item-resultado">
                    <h2>${receita.titulo}</h2>
                    <h3>Ingredientes:</h3>
                    <ul>
                        ${listaIngredientes}
                    </ul>
                    <h3>Modo de preparo:</h3>
                    <p class="descricao-meta">${receita.preparo}</p>
                </div>
            `;
        }
    }

    if (!resultados) {
        resultados = "<h3> Nada foi encontrado </h3>"
    }

    section.innerHTML = resultados;
}