// quando executar o "Enter" aciona o botao
document.getElementById("campo-pesquisa").addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.getElementById("btnPesquisar").click();
    }
});

function cancelar(){
    // limpa o campo para uma nova pesquisa
    document.getElementById('campo-pesquisa').value = '';
}

function pesquisar() {

    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor digitado pelo usuário no campo de pesquisa e converte para minúsculas
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    // Verifica se o campo de pesquisa está vazio
    if (!campoPesquisa) {
        // Exibe uma mensagem de erro caso o campo esteja vazio
        section.innerHTML = "<p>Campo vazio, favor digitar um dado sobre Wisky para pesquisa</p>";
        return; // Interrompe a função
    }

    // Inicializa variáveis para armazenar os resultados e os valores a serem comparados
    let nome = ""; 
    let descricao = ""; 
    let classificacao = ""; 
    let regiao = ""; 
    let idade = ""; 
    let prova = ""; 
    let finish = "";
    let notasDeDegustacao = "";
    let preco = "";
    let disponibilidade = ""; 
    let tags = ""; 

    let resultados = "";


    // Itera sobre os dados e busca por correspondências
    for (let dado of dados) {
        nome = dado.nome.toLowerCase();  
        descricao = dado.descricao.toLowerCase(); 
        classificacao = dado.classificacao.toLowerCase(); 
        regiao = dado.regiao.toLowerCase(); 
        idade = dado.idade.toLowerCase(); 
        prova = dado.prova.toLowerCase(); 
        finish = dado.finish.toLowerCase();
        notasDeDegustacao = dado.notasDeDegustacao.toLowerCase();
        preco = dado.preco.toLowerCase();
        disponibilidade = dado.disponibilidade.toLowerCase(); 
        tags= dado.tags.toLowerCase(); 

        // Verifica se o termo de pesquisa está presente no nome, descrição ou tags
        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || classificacao.includes(campoPesquisa) || regiao.includes(campoPesquisa) || idade.includes(campoPesquisa) || prova.includes(campoPesquisa) || finish.includes(campoPesquisa) || notasDeDegustacao.includes(campoPesquisa) || preco.includes(campoPesquisa) || disponibilidade.includes(campoPesquisa) || tags.includes(campoPesquisa))
            {
            // Constrói o HTML para cada resultado encontrado
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="${dado.classificacao}" target="_blank">${dado.nome}</a>
                    </h2>
                    <p class="descricao-meta">
                        ${dado.descricao}
                    </p>
                </div>
            `;
        }
    }

    // Verifica se algum resultado foi encontrado
    if (!resultados) {
        // Exibe uma mensagem informando que nenhum resultado foi encontrado
        resultados = "<p>Nenhum resultado foi encontrado</p>";
    }

    // Atualiza o conteúdo da seção de resultados com os resultados encontrados
    section.innerHTML = resultados;
}
