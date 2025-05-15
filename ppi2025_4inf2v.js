/* 
 Programação para Internet 2025
 4INF2V
*/

// Definição de variáveis e operadores
// let a = 5;
// a = 'Eu';
// console.log(a);

// const b = 3.14;
// console.log(b);

// Operadores
// Aritméticos: + - * / % **
// Incremento: ++, --
// Relacionais: === !==

// let x = 5 + 5;
// let y = '5' + 5;
// let z = 'Hello' + 5;

// console.log(x);
// console.log(y);
// console.log(z);

// console.log(typeof x === 'number');

// if(x === 1) {
//     console.log('1');
// } else if(x === 2){
//     console.log('2');
// } else {
//     console.log('Diferente');
// }

// for(let i=0; i<10; i++){
//     console.log(i);
// }

// Arrays ==================================================================

// const a = [1, 'Gui', true];
// console.log(a);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const fruits2 = ["Kiwi", "Lemon", "Melon", "Blueberry"];

// console.log(fruits.length);
// console.log(fruits[0]);

// Insert in the end
// fruits.push('Watermelon');
// console.log(fruits);

// Insert in the beginning
// fruits.unshift('Tangerine');
// console.log(fruits);

// Remove first element
// fruits.shift();
// console.log(fruits);

// Remove last element
// fruits.pop();
// console.log(fruits);

// console.log(fruits.concat(fruits2));

// console.log(fruits);
// fruits.splice(2, 1);
// console.log(fruits);

// fruits.splice(2, 0, 'Tangerine', 'Watermelon');
// console.log(fruits);

// console.log(fruits2);
// fruits.splice(3, 0, ...fruits2);
// console.log(fruits);

// let fruits3 = ['Tangerine', ...fruits];
// fruits3 = [...fruits3, 'Watermelon'];
// console.log(fruits3);

const numbers = [9, 2, 8, 77, 10];
console.log(numbers);

// numbers.sort();
// console.log(numbers.toSorted((a, b) => a - b)); // C
// console.log(numbers.toSorted((a, b) => b - a)); // D

// const numbers_ord = numbers.toSorted((a, b) => a - b);
// console.log(numbers_ord[0]); //min
// console.log(numbers_ord[numbers.length - 1]); //max

// numbers.reverse();
// console.log(numbers.toReversed());

// let n = [];
// for(let i=0; i<numbers.length; i++){
//     n.push(numbers[i]*2);
// }
// console.log(n);

// function myFunction(value, index, array){
//     return value * 2;
// }

// console.log(numbers.map(myFunction));

// Arrow functions
// console.log(numbers.map((number) => number * 2));

// console.log(fruits);
// console.log(fruits.find((fruit) => fruit[0].toLowerCase() === "b"));

// console.log(fruits.findIndex((fruit) => fruit[0].toLowerCase() === "b"));

// const fruits4 = [...fruits, ...fruits2];
// console.log(fruits4);

// Exibir todas as frutas que comecem com "letra"
// let letra = "m";
// let out = [];
// fruits4.map((fruit) => {
//   if (fruit[0].toLowerCase() === letra) {
//     out.push(fruit);
//   }
// });
// console.log(out);

// console.log(fruits4.filter((fruit) => fruit[0].toLowerCase() === letra));
// let soma = 0;
// for (let i = 0; i < numbers.length; i++) {
//   soma += numbers[i];
// }
// console.log(soma);

// soma = 0;
// numbers.map((number) => (soma += number));
// console.log(soma);

// console.log(numbers.reduce((soma, number) => soma + number));

// Objects

// const pessoa = {
//   nome: "Guilherme",
//   idade: 30,
//   profissao: "Professor",
//   saudacao: function () {
//     return `Olá, meu nome é ${this.nome}!`;
//   },
//   aniversario() {
//     this.idade++;
//     return `Feliz aniversário! Agora eu tenho ${this.idade} anos!`;
//   },
// };

// console.log(pessoa.nome);
// console.log(pessoa["nome"]);
// console.log(Object.keys(pessoa));
// console.log(Object.values(pessoa));

// pessoa.disciplina = "PPI";
// console.log(pessoa);

// console.log(pessoa.saudacao());

// pessoa.aniversario = function () {
//   this.idade++;
//   return `Feliz aniversário! Agora eu tenho ${this.idade} anos!`;
// };
// console.log(pessoa.aniversario());

// function Pessoa(nome, idade, profissao) {
//   this.nome = nome;
//   this.idade = idade;
//   this.profissao = profissao;
//   this.saudacao = function () {
//     return `Olá, meu nome é ${this.nome}!`;
//   };
//   this.aniversario = function () {
//     this.idade++;
//     return `Feliz aniversário! Agora eu tenho ${this.idade} anos!`;
//   };
// }

// const p1 = new Pessoa("Alex", 22, "Arquiteto");
// console.log(p1);
// console.log(p1.saudacao());

// Copiando props de objetos usando spread operator
// const p1_e = {...p1, email: "alex@alex.com"};
// console.log(p1_e);

// Atribuição por desestruturação
// const {nome, email} = p1_e;
// console.log(nome, email);

// DESAFIO
function Product(name, sto, ram, price, qty, category) {
  this.name = name;
  this.sto = sto;
  this.ram = ram;
  this.price = price;
  this.qty = qty;
  this.category = category;
}

const cart = {
  products_fc: [new Product("Macbook Pro M4", 512, 16, 1599.9, 2, "Macbook")],
  products: [
    {
      name: "Macbook Pro M4",
      sto: 512,
      ram: 16,
      price: 1599.9,
      qty: 2,
      category: "Macbook",
    },
    {
      name: "Macbook Air M4",
      sto: 256,
      ram: 16,
      price: 1099.9,
      qty: 5,
      category: "Macbook",
    },
    {
      name: "Apple Watch Series 10 46mm",
      ram: 16,
      sto: 64,
      price: 429.9,
      qty: 3,
      category: "Watch",
    },
    {
      name: "iPhone 16",
      sto: 128,
      ram: 16,
      price: 899.9,
      qty: 10,
      category: "iPhone",
    },
    {
      name: "iPhone 16 Pro Max",
      sto: 1024,
      ram: 16,
      price: 1199.9,
      qty: 1,
      category: "iPhone",
    },
    {
      name: "iMac M4",
      sto: 512,
      ram: 24,
      price: 1799.9,
      qty: 1,
      category: "iMac",
    },
    {
      name: "iPad Pro 13in",
      sto: 2048,
      ram: 8,
      price: 2199.9,
      qty: 1,
      category: "iPad",
    },
  ],
  calcularTotal() {
    return this.products
      .reduce((acc, product) => acc + product.price * product.qty, 0)
      .toFixed(2);
  },
  ordenarPorPrecoCrescente() {
    return this.products.toSorted((a, b) => a.price - b.price);
  },
  ordenarPorPrecoDecrescente() {
    return this.products.toSorted((a, b) => b.price - a.price);
  },
  ordenarPorNomeAZ() {
    return this.products.toSorted((a, b) =>
      a.name.toUpperCase().localeCompare(b.name.toUpperCase())
    );
  },
  ordenarPorNomeZA() {
    return this.products.toSorted((a, b) =>
      b.name.toUpperCase().localeCompare(a.name.toUpperCase())
    );
  },
  filtrarPorCategoria(categoria) {
    return this.products.filter(
      (product) => product.category.toUpperCase() === categoria.toUpperCase()
    );
  },
  ordenar(key, ord) {
    let output;
    if (key === "name") {
      output = this.products.toSorted((a, b) =>a.name.toUpperCase().localeCompare(b.name.toUpperCase())).map((product) => product.name);
    } else if(key === "sto") {
    output = this.products.toSorted((a, b) => a.sto - b.sto);
    } else if(key === "ram") {
    output = this.products.toSorted((a, b) => a.ram - b.ram);
    } else if(key === "price") {
    output = this.products.toSorted((a, b) => a.price - b.price);
    } else if(key === "qty") {
    output = this.products.toSorted((a, b) => a.qty - b.qty);
    } else {
    output = this.products.toSorted((a, b) =>a.category.toUpperCase().localeCompare(b.category.toUpperCase())).map((product) => product.category);
    }
    if (ord == 1) {
      return output;
    } else {return output.reverse();}
  }
};

console.log(cart.calcularTotal());
console.log(cart.ordenar("name", 1))
console.log(cart.ordenar("name"))
console.log(cart.ordenar("sto", 1))
console.log(cart.ordenar("sto"))
console.log(cart.ordenar("ram", 1))
console.log(cart.ordenar("ram"))
console.log(cart.ordenar("price", 1))
console.log(cart.ordenar("price"))
console.log(cart.ordenar("qty", 1))
console.log(cart.ordenar("qty"))
console.log(cart.filtrarPorCategoria("iphone").map((product) => product.name));
/*

console.log(cart.ordenarPorPrecoCrescente().map((product) => product.price));
console.log(cart.ordenarPorPrecoDecrescente().map((product) => product.price));
console.log(cart.ordenarPorNomeAZ().map((product) => product.name));
console.log(cart.ordenarPorNomeZA().map((product) => product.name));
console.log(cart.filtrarPorCategoria("iphone").map((product) => product.name));*/