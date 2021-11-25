// BUSCAR OS ITENS DA TELA
const itensPergntasERespostas = document.querySelectorAll('.item')

// ENTENDER QUE O ITEM FOI CLICADO
itensPergntasERespostas.forEach(function(item){ 
    item.addEventListener('click', function(){
        // VERIFICAR SE A PERGUNTA CLICADA ESTA ATIVA
        const estaAtiva = item.classList.contains("ativo");

        //FECHAR AS QUE ESTIVERM ABERTA
        itensPergntasERespostas.forEach(function (item) {
            item.classList.remove("ativo");
        });

        // SE A PERGUNTA NÃO ESTA ATIVA
        if (!estaAtiva) {
            // ABRIR A RESPOSTA ATUAL
            item.classList.add("ativo");

        // SE A PERGUNTA ESTIVER ATIVA
        } else {
            // DESATIVAR
            item.classList.remove("ativo");
        }
    })
})

