const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
        
    ],
    imprimirResumo: function() {
        let totalPagar = 0
        let totalDeItens = 0
        
        for (const produto of this.produtos) {
            totalPagar += produto.precoUnit * produto.qtd
            totalDeItens += produto.qtd
        }
        console.log(`Cliente: ${carrinho.nomeDoCliente}\nTotal de itens: ${totalDeItens} itens\nTotal a pagar: R$ ${(totalPagar / 100).toFixed(2)}`)
    },
    addProduto: function(produto) {
        let achou = false
        for (const produtoAtual of this.produtos) {
            if (produtoAtual.nome == produto.nome){
                produtoAtual.qtd += produto.qtd
                achou = true
                break
            }
        } if (achou == false) {
            carrinho.produtos.push(produto)
        }
    },
    imprimirDetalhes: function() {
        let indice = 0
        console.log(`Cliente: ${this.nomeDoCliente}\n`)
        for (const item of this.produtos) {
             indice++
            console.log(`Item ${indice} - ${item.nome} - ${item.qtd} und - R$ ${((item.precoUnit * item.qtd)/100).toFixed(2)}\n`)
            
        }
        console.log(`Total de itens: ${this.calcularTotalDeItens()} itens\nTotal a pagar: R$ ${(this.calcularTotalAPagar() /100).toFixed(2)}`)
    },
    calcularTotalDeItens: function() {
        let itensTotal = 0
        for (const item of this.produtos) {
            itensTotal += item.qtd
        }
        return itensTotal
    },
    calcularTotalAPagar: function() {
        let valorTotal = 0
        for (const item of this.produtos) {
            valorTotal += item.precoUnit * item.qtd
        }
        return valorTotal
    },
    calcularDesconto: function () {
        let itensComprados = this.calcularTotalDeItens()
        let totalGasto = this.calcularTotalAPagar()
        let descontoPorcentagem = 9999999999999
        let itemMaisBarato = 9999999999999

        if (itensComprados > 4) {
            for (const item of this.produtos) {
                if (item.precoUnit < itemMaisBarato) {
                    itemMaisBarato = item.precoUnit
                }

            }
        }
        //O segundo é um desconto de 10% para compras acima de 100 reais.
        if (totalGasto > 10000) {
            let soma = 0
            for (const item of this.produtos) {
                soma += item.precoUnit * item.qtd
            }
            descontoPorcentagem =  ((soma / 0.1) / 100)
        }
        // Sempre no máximo um deles será aplicado - o que for mais vantajoso para o cliente.
        if (descontoPorcentagem > itemMaisBarato) {
            console.log(`Total de desconto: R$ ${(descontoPorcentagem / 100).toFixed(2)}`)
        } else {
            console.log(`Total de desconto: R$ ${(itemMaisBarato / 100).toFixed(2)}`)
        }      
    }

} 
const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}
const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}
carrinho.addProduto(novoTenis)
carrinho.addProduto(novaBermuda)
carrinho.imprimirDetalhes()
carrinho.calcularDesconto()