// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let numeroPares = 0;
   let numero=0;
   const arrayNumerosPares =[];
   while(numeroPares < n){
      if(numero % 2 === 0){
         arrayNumerosPares.push(numero);
         numeroPares++;
      } 
      numero++
   }
   return arrayNumerosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
   if(ladoA === ladoB && ladoB === ladoC){
      return "Equilátero";
   }else if(ladoA === ladoB || ladoB===ladoC || ladoA === ladoC){
      return "Isósceles";
   }else{
      return "Escaleno";
   }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
   const arrayResultado = [];
  const novoArray = array.sort(function(a,b){
     return a - b;
  });
  arrayResultado.push(novoArray[novoArray.length-2]);
  arrayResultado.push(novoArray[1]);
  return arrayResultado
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

   const frase = `Venha assistir ao filme ${filme.nome},de ${filme.ano},dirigido por ${filme.diretor} e  estrelado por ${filme.atores}.` 
   return frase.replaceAll(",", ", ")
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   const novoObj = {
      ...pessoa,
      nome: 'ANÔNIMO'
   };
   return novoObj;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   const novoArray = pessoas.filter((pessoa) =>{
      return pessoa.idade > 14 && pessoa.idade < 60;
   }).filter((pessoa) => {
      return pessoa.altura >= 1.5;
   });
   return novoArray;
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
   const novoArray = pessoas.filter((pessoa) =>{
      return pessoa.idade <= 14 || pessoa.idade >= 60 || pessoa.altura < 1.5;
   });
   return novoArray;
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
   let somaCompras;
   for(let cliente in contas){
      somaCompras = 0;
      for(let compras of contas[cliente].compras){
         somaCompras += compras;
      }
      contas[cliente].saldoTotal -= somaCompras;
      contas[cliente].compras = [];
   }
   return contas;
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  const arrayOrganizado = consultas.sort(function(a,b){
      let x = a.nome.toUpperCase();
      let y = b.nome.toUpperCase();
      return x == y ? 0 : x > y ? 1 : -1;
  })
  // console.log(arrayOrganizado);
  return arrayOrganizado;
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas){

   
}