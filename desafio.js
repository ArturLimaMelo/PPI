class Carrinho {
    constructor(itens) {
        this.itens = itens;
    }
  
    calcularTotal() {
        const valores = this.itens.map(item => item.price * item.quantity);
        return valores.reduce((total, valor) => total + valor, 0).toFixed(2);
    }
  
    filtrarPorCategoria(categoria) {
        return this.itens.filter(item => item.category.toUpperCase() === categoria.toUpperCase());
    }
  
    ordenarPorPrecoDecrescente() {
        return this.itens.toSorted((a, b) => b.price - a.price);
    }
    
    ordenarPorPrecoCrescente() {
        return this.itens.toSorted((a, b) => a.price - b.price);
    }
  
    ordenarPorNome() {
        return this.itens.toSorted((a, b) => a.name.localeCompare(b.name));
    }

    ordenar(chave) {
        return this.itens.chave;
    }
  }
  
const carrinho = new Carrinho([
    {name: "iPhone 16", storage: 128, ram: 16, price: 899.90, quantity: 10, category: "iPhone", total: 8990.90},
    {name: "iPhone 16 Pro Max", storage: 1024, ram: 16, price: 1199.90, quantity: 1, category: "iPhone", total: 1199.90},
    {name: "iMac M4", storage: 512,ram: 24, price: 1799.90, quantity: 1, category: "iMac", total: 1799.90},
    {name: "iPad Pro 13in", storage: 2048, ram:8, price: 2199.90, quantity: 1, category: "iPad", total: 2199.90},
    {name: "Macbook Pro M4", storage: 512,ram:  16,price:  1599.90, quantity: 2, category: "Macbook", total: 3199.80},
    {name: "Macbook Air M4",storage:  256,ram:  16,price:  1099.90, quantity: 5, category: "Macbook", total: 5499.50},
    {name: "Apple Watch Series 10 46mm",storage:  64,ram:  16,price:  429.90, quantity: 3, category: "Watch", total: 1289.70}
]);
console.log(carrinho.ordenar("Chave"));
/*console.log("Valor total do carrinho: " + carrinho.calcularTotal());
console.log("Carrinho filtrado pela categoria 'Macbook'\n" + carrinho.filtrarPorCategoria("MACBOOK").map((item) => item.name));
console.log("preço do maior para o menor:", carrinho.ordenarPorPrecoDecrescente());
console.log("do menor para o maior", carrinho.ordenarPorPrecoCrescente());
console.log("Ordenado por ordem alfabética:", carrinho.ordenarPorNome());*/
