// 1. Banco de dados dos produtos
const produtos = [
    {
        id: 1,
        titulo: "Pulseira de miçangas",
        preco: 5.00,
        img: "../img/produtos/produto-1.png",
        categoria: ["Pulseiras", "Destaques"],
        dataCadastro: "2026-05-24"
    },
    {
        id: 2,
        titulo: "Pulseira oceano",
        preco: 8.00,
        img: "../img/produtos/produto-2.png",
        categoria: "Pulseiras",
        dataCadastro: "2026-05-23"
    },
    {
        id: 3,
        titulo: "Colar de resina",
        preco: 20.00,
        img: "../img/produtos/produto-3.png",
        categoria: "Colares",
        dataCadastro: "2026-05-22"
    },
     {
        id: 4,
        titulo: "Colar de Turmalina Negra",
        preco: 25.00,
        img: "../img/produtos/produto-4.png", 
        categoria: ["Colares", "Minerais"],
        dataCadastro: "2026-05-21"
    },
     {
        id: 5,
        titulo: "Conjunto de pulseiras",
        preco: 25.00,
        img: "../img/produtos/produto-5.png", 
        categoria: ["Pulseiras", "Destaques"],
        dataCadastro: "2026-05-20"
    },
     {
        id: 6,
        titulo: "Colar em formato de coração em Jasper",
        preco: 12.00,
        img: "../img/produtos/produto-6.png", 
        categoria: ["Pulseiras", "Minerais"],
        dataCadastro: "2026-05-19"
    },
    {
        id: 7,
        titulo: "Colar em Quartzo Rosa",
        preco: 15.00,
        img: "../img/produtos/produto-7.png", 
        categoria: ["Colares", "Minerais"],
        dataCadastro: "2026-05-19"
    },
    {
        id: 8,
        titulo: "Chaveiro Chapéu do Luffy",
        preco: 8.00,
        img: "../img/produtos/produto-8.png", 
        categoria: "Chaveiros",
        dataCadastro: "2026-05-19"
    },
    {
        id: 9,
        titulo: "Amigurumi Polvo",
        preco: 8.00,
        img: "../img/produtos/produto-9.png", 
        categoria: "Chaveiros",
        dataCadastro: "2026-05-19"
    },
    {
        id: 10,
        titulo: "Brincos com pedra da lua e conchas",
        preco: 12.00,
        img: "../img/produtos/produto-10.png", 
        categoria: ["Brincos", "Minerais"],
        dataCadastro: "2026-05-19"
    },
    {
        id: 11,
        titulo: "Brincos com hamsá e pedra néon",
        preco: 12.00,
        img: "../img/produtos/produto-11.png", 
        categoria: ["Brincos", "Minerais"],
        dataCadastro: "2026-05-19"
    },
    {
        id: 12,
        titulo: "Colar onda do mar",
        preco: 15.00,
        img: "../img/produtos/produto-12.png", 
        categoria: "Colares",
        dataCadastro: "2026-05-19"
    },
    {
        id: 13,
        titulo: "Pulseiras de miçangas",
        preco: 15.00,
        img: "../img/produtos/produto-13.png", 
        categoria: ["Pulseiras", "Destaques"],
        dataCadastro: "2026-05-19"
    },
    {
        id: 14,
        titulo: "Pulseiras com misangas azuis",
        preco: 15.00,
        img: "../img/produtos/produto-14.png", 
        categoria: ["Pulseiras", "Destaques"],
        dataCadastro: "2026-05-19"
    },
    {
        id: 15,
        titulo: "Pulseiras com misangas amarelas",
        preco: 15.00,
        img: "../img/produtos/produto-15.png", 
        categoria: ["Pulseiras", "Destaques"],
        dataCadastro: "2026-05-19"
    },
    {
        id: 16,
        titulo: "Pulseiras diversas",
        preco: 8.00,
        img: "../img/produtos/produto-16.png", 
        categoria: ["Pulseiras", "Destaques"],
        dataCadastro: "2026-05-19"
    },
    

    // Adicione quantos produtos quiser aqui seguindo o mesmo padrão!
];

// 2. Configurações de Controle
let paginaAtual = 1;
const produtosPorPagina = 6; // Alinhado com o seu design de 3x3
let produtosFiltrados = [...produtos]; // Cópia inicial para manipular

// 3. Função para Renderizar os Cards na Tela
function renderizarProdutos(lista) {
    const grade = document.getElementById("grade-produtos");
    grade.innerHTML = ""; // Limpa a grade antiga

    // Cálculo matemático para pegar só o pedaço da página atual (ex: de 0 a 9)
    const inicio = (paginaAtual - 1) * produtosPorPagina;
    const fim = inicio + produtosPorPagina;
    const produtosDaPagina = lista.slice(inicio, fim);

    if (produtosDaPagina.length === 0) {
        grade.innerHTML = "<p>Nenhum produto encontrado.</p>";
        return;
    }

// Cria o HTML dinamicamente para cada item
    produtosDaPagina.forEach(prod => {
        const card = document.createElement("div");
        card.classList.add("card-produto");
        
        // Atualizamos o HTML para incluir os botões + e -
        card.innerHTML = `
            <div class="img-produto">
                <img src="${prod.img}" alt="${prod.titulo}">
            </div>
            <div class="card-informacoes">
                <h3 class="titulo-produto">${prod.titulo}</h3>
                <p class="preco-produto">R$ ${prod.preco.toFixed(2).replace('.', ',')}</p>
                
                <div class="controle-quantidade">
                    <button class="btn-qtd btn-menos">-</button>
                    <span class="qtd-numero">1</span>
                    <button class="btn-qtd btn-mais">+</button>
                </div>

                <button class="btn-adicionar-grid">Adicionar</button>
            </div>
        `;

        // Buscamos os botões que acabamos de criar dentro DESTE card específico
        const btnMenos = card.querySelector(".btn-menos");
        const btnMais = card.querySelector(".btn-mais");
        const spanQtd = card.querySelector(".qtd-numero");
        
        let quantidade = 1; // Todo produto começa com 1

        // Aumenta a quantidade
        btnMais.addEventListener("click", () => {
            quantidade++;
            spanQtd.textContent = quantidade;
        });

        // Diminui a quantidade (sem deixar ficar menor que 1)
        btnMenos.addEventListener("click", () => {
            if (quantidade > 1) {
                quantidade--;
                spanQtd.textContent = quantidade;
            }
        });

        // (Opcional) Guardar a quantidade quando clicar em "Adicionar"
        const btnAdicionar = card.querySelector(".btn-adicionar-grid");
        btnAdicionar.addEventListener("click", () => {
            alert(`Você adicionou ${quantidade}x ${prod.titulo} ao carrinho!`);
            // Aqui você conectará com a lógica do seu carrinho no futuro
        });

        grade.appendChild(card);
    });

    renderizarPaginacao(lista.length);
}

// 4. Função para Renderizar e Controlar os Botões da Paginação
function renderizarPaginacao(totalItens) {
    const containerPaginacao = document.getElementById("paginacao");
    containerPaginacao.innerHTML = "";

    const totalPaginas = Math.ceil(totalItens / produtosPorPagina);
    if (totalPaginas <= 1) return; // Não precisa de paginação se tiver poucos produtos

    // Botão Voltar (<)
    const btnVoltar = document.createElement("button");
    btnVoltar.classList.add("btn-seta");
    btnVoltar.innerHTML = "&lt;";
    btnVoltar.disabled = paginaAtual === 1;
    btnVoltar.addEventListener("click", () => { paginaAtual--; atualizarTela(); });
    containerPaginacao.appendChild(btnVoltar);

    // Números das páginas
    for (let i = 1; i <= totalPaginas; i++) {
        const btnNum = document.createElement("button");
        btnNum.classList.add("num-pagina");
        if (i === paginaAtual) btnNum.classList.add("ativo");
        btnNum.textContent = i;
        btnNum.addEventListener("click", () => { paginaAtual = i; atualizarTela(); });
        containerPaginacao.appendChild(btnNum);
    }

    // Botão Avançar (>)
    const btnAvancar = document.createElement("button");
    btnAvancar.classList.add("btn-seta");
    btnAvancar.innerHTML = "&gt;";
    btnAvancar.disabled = paginaAtual === totalPaginas;
    btnAvancar.addEventListener("click", () => { paginaAtual++; atualizarTela(); });
    containerPaginacao.appendChild(btnAvancar);

    // Texto descritivo da direita "Página X de Y"
    const textoInfo = document.createElement("span");
    textoInfo.classList.add("texto-pagina");
    textoInfo.textContent = `Página ${paginaAtual} de ${totalPaginas}`;
    containerPaginacao.appendChild(textoInfo);
}

// 5. Função de Ordenação
function ordenarProdutos(criterio) {
    if (criterio === "recentes") {
        produtosFiltrados.sort((a, b) => new Date(b.dataCadastro) - new Date(a.dataCadastro));
    } else if (criterio === "menor-preco") {
        produtosFiltrados.sort((a, b) => a.preco - b.preco);
    } else if (criterio === "maior-preco") {
        produtosFiltrados.sort((a, b) => b.preco - a.preco);
    }
    paginaAtual = 1; // Reseta para a primeira página ao reordenar
    renderizarProdutos(produtosFiltrados);
}

// Auxiliar para juntar a lógica e dar scroll suave para o topo
function atualizarTela() {
    renderizarProdutos(produtosFiltrados);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 6. Escuta de Eventos (Inputs da Tela)
document.getElementById("ordenar").addEventListener("change", (e) => {
    ordenarProdutos(e.target.value);
});

// Inicialização da tela ao carregar o arquivo
ordenarProdutos("recentes");


// LÓGICA DOS FILTROS DE CATEGORIA
const botoesFiltro = document.querySelectorAll(".btn-filtro");

botoesFiltro.forEach(botao => {
    botao.addEventListener("click", () => {
        // 1. Remove a cor roxa (classe 'ativo') de todos os botões
        botoesFiltro.forEach(b => b.classList.remove("ativo"));
        
        // 2. Pinta de roxo apenas o botão que foi clicado
        botao.classList.add("ativo");

        // 3. Descobre qual texto está escrito no botão (ex: "Pulseiras")
        const categoriaSelecionada = botao.textContent.trim();

        // 4. Filtra a lista de produtos
        if (categoriaSelecionada === "Todos") {
            produtosFiltrados = [...produtos]; // Mostra todos
        } else {
            // O comando 'includes' verifica se a categoria do botão 
            // existe dentro da lista de categorias do produto
            produtosFiltrados = produtos.filter(prod => 
                prod.categoria.includes(categoriaSelecionada)
            );
        }

        // 5. Volta para a página 1 e renderiza a tela novamente
        paginaAtual = 1;
        
        // Pega a ordenação atual do Select para não bagunçar a ordem
        const criterioOrdenacaoAtual = document.getElementById("ordenar").value;
        ordenarProdutos(criterioOrdenacaoAtual); 
    });
});

// LÓGICA DO CARRINHO DE COMPRAS
function adicionarAoCarrinho(produto) {
    // 1. Puxa os itens que já estão no carrinho na memória do navegador
    // Se não tiver nada, cria uma lista vazia []
    let carrinho = JSON.parse(localStorage.getItem("carrinhoMinearts")) || [];

    // 2. Adiciona o produto que o usuário acabou de clicar nessa lista
    // Adicionamos também uma quantidade inicial de 1
    const produtoParaAdicionar = {
        ...produto, // Copia todas as informações do produto
        quantidade: 1
    };
    carrinho.push(produtoParaAdicionar);

    // 3. Salva a lista atualizada de volta na memória do navegador
    localStorage.setItem("carrinhoMinearts", JSON.stringify(carrinho));

    // 4. Redireciona para a página do carrinho
    window.location.href = "../pages/carrinho.html"; 
}