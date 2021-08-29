export = {
    precoComDesconto(produto): Object {
        if (!produto.desconto)
            return produto.preco
        else
            return Math.round((produto.preco - (produto.preco * (produto.desconto / 100))) * 100) / 100
    }
}