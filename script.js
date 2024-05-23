// Variável JSON com produtos
var produtos = [
    {
        id: 1,
        nome: "Produto 1",
        preco: 10.99,
        imagem: "https://acdn.mitiendanube.com/stores/001/402/723/products/81b902ab1-39f5b3094cbcead3f416546485664319-1024-1024.jpg"
    },
    {
        id: 2,
        nome: "Produto 2",
        preco: 10.99,
        imagem: "https://acdn.mitiendanube.com/stores/001/402/723/products/81b902ab1-39f5b3094cbcead3f416546485664319-1024-1024.jpg"
    },
    {
        id: 1,
        nome: "Produto 1",
        preco: 10.99,
        imagem: "https://acdn.mitiendanube.com/stores/001/402/723/products/81b902ab1-39f5b3094cbcead3f416546485664319-1024-1024.jpg"
    },
    {
        id: 2,
        nome: "Produto 2",
        preco: 10.99,
        imagem: "https://acdn.mitiendanube.com/stores/001/402/723/products/81b902ab1-39f5b3094cbcead3f416546485664319-1024-1024.jpg"
    },    {
        id: 1,
        nome: "Produto 1",
        preco: 10.99,
        imagem: "https://acdn.mitiendanube.com/stores/001/402/723/products/81b902ab1-39f5b3094cbcead3f416546485664319-1024-1024.jpg"
    },
    {
        id: 2,
        nome: "Produto 2",
        preco: 10.99,
        imagem: "https://acdn.mitiendanube.com/stores/001/402/723/products/81b902ab1-39f5b3094cbcead3f416546485664319-1024-1024.jpg"
    },    {
        id: 1,
        nome: "Produto 1",
        preco: 10.99,
        imagem: "https://acdn.mitiendanube.com/stores/001/402/723/products/81b902ab1-39f5b3094cbcead3f416546485664319-1024-1024.jpg"
    },
    {
        id: 2,
        nome: "Produto 2",
        preco: 10.99,
        imagem: "https://acdn.mitiendanube.com/stores/001/402/723/products/81b902ab1-39f5b3094cbcead3f416546485664319-1024-1024.jpg"
    },    {
        id: 1,
        nome: "Produto 1",
        preco: 10.99,
        imagem: "https://acdn.mitiendanube.com/stores/001/402/723/products/81b902ab1-39f5b3094cbcead3f416546485664319-1024-1024.jpg"
    },
    {
        id: 2,
        nome: "Produto 2",
        preco: 10.99,
        imagem: "https://acdn.mitiendanube.com/stores/001/402/723/products/81b902ab1-39f5b3094cbcead3f416546485664319-1024-1024.jpg"
    },    {
        id: 1,
        nome: "Produto 1",
        preco: 10.99,
        imagem: "https://acdn.mitiendanube.com/stores/001/402/723/products/81b902ab1-39f5b3094cbcead3f416546485664319-1024-1024.jpg"
    },
    {
        id: 2,
        nome: "Produto 2",
        preco: 10.99,
        imagem: "https://acdn.mitiendanube.com/stores/001/402/723/products/81b902ab1-39f5b3094cbcead3f416546485664319-1024-1024.jpg"
    },    {
        id: 1,
        nome: "Produto 1",
        preco: 10.99,
        imagem: "https://acdn.mitiendanube.com/stores/001/402/723/products/81b902ab1-39f5b3094cbcead3f416546485664319-1024-1024.jpg"
    },
    {
        id: 2,
        nome: "Produto 2",
        preco: 10.99,
        imagem: "https://acdn.mitiendanube.com/stores/001/402/723/products/81b902ab1-39f5b3094cbcead3f416546485664319-1024-1024.jpg"
    },    {
        id: 1,
        nome: "Produto 1",
        preco: 10.99,
        imagem: "https://acdn.mitiendanube.com/stores/001/402/723/products/81b902ab1-39f5b3094cbcead3f416546485664319-1024-1024.jpg"
    },
    {
        id: 2,
        nome: "Produto 2",
        preco: 10.99,
        imagem: "https://acdn.mitiendanube.com/stores/001/402/723/products/81b902ab1-39f5b3094cbcead3f416546485664319-1024-1024.jpg"
    }
];

function gerarHTMLProdutos(produtos) {
    var html = '';
    for (var i = 0; i < produtos.length; i++) {
        html += '<div class="produto">';
        html += '<img src="' + produtos[i].imagem + '" alt="' + produtos[i].nome + '" class="imagem-produto">';
        html += '<h3 class="nome-produto">' + produtos[i].nome + '</h3>';
        html += '<p class="preco-produto">Preço: R$ ' + produtos[i].preco.toFixed(2) + '</p>';
        html += '</div>';
    }
    return html;
}

document.getElementById('produtos-container').innerHTML = gerarHTMLProdutos(produtos);
