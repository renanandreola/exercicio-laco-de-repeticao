//ARRAYS
//var mylist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//for
//while
//do...while
//mylist.push("Renan");
//mylist.push("olá");
//mylist.push(98);
//mylist.push("teste tste");
//for (var i = 0; i < mylist.length; i++) {
//console.log(mylist[i]);
//}



//Laços de repetição
//1) Escreva um programa em Javascript que lê 15 valores reais,
//encontra o maior e o menor deles e
//mostra o resultado.
function limparDados() {
  var mylist = [];
  document.getElementById("result").innerHTML = "";

  for(var i = 0; i < 3; i++) {
    mylist.push(parseInt(prompt("Digite um valor:")));
  }

  var max = mylist[0];
  var min = mylist[0];

  for (var i = 0; i < mylist.length; i++) {
     if ( mylist[i] > max ) {
        max = mylist[i];
      }
  }

  for (var i = 0; i < mylist.length; i++) {
     if ( mylist[i] < min ) {
        min = mylist[i];
      }
  }

  document.getElementById("result").innerHTML = "Valor máximo = " + max + " valor mínimo = " + min;

}
limparDados()
