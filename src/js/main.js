async function carregarComponente(id, arquivo) {
    
    try {
        const resposta = await fetch(arquivo);

        if( !resposta.ok) {
            throw new Error("Arquivo não encontrado")
        }
        const html = await resposta.text();

        document.getElementById(id).innerHTML = html;
    } catch(error) {
        console.error(error);
    }
 
}

carregarComponente("header", "/src/components/header.html");
carregarComponente("footer", "/src/components/footer.html")