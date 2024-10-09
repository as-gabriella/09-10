//Arrays são listas que criamos em JavaScript.
/*
let listaDeCompras = ["Banana","Salada","Brinquedo","Pão","Massa","Leite","Arroz"]
console.log(listaDeCompras)
console.log(listaDeCompras[0])
*/
//Exercicio
//Criem uma lista de compras que pode ser de 
/* 
    Jogos
    Filmes
    Séries
    Anime
    Desenho
*/
//A lista deve ter pelo menos 5 itens.
//Acessem o primeiro, o primeio e o último usando console.log[nomedoArray[x].

//Método para inserir itens no array.
/*
let Compras = ["Pão","Margarina","Leite"]
console.log(Compras)

Compras.push("Balinha")
console.log(Compras)

Compras.pop()
console.log(Compras)

Compras.push("Alface")
console.log(Compras)
*/

let Numeros = [5,60,80,100,200,88,45,23,30]
let soma = 0

for(let i = 0; i < Numeros.length; i++){
soma += Numeros[i]
}
let media = soma / Numeros.length;

console.log(soma)
console.log(media)

//console.log(`${Soma} + ${Numeros[i]} = ${soma}`)


