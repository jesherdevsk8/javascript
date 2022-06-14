array = [3, 2, 4, 1, 7, 6, 5];
array.sort();

for (let i=1; i <= array.length; i++){
  console.log(`Pegando o número ${array[2]}. Contando... ${i}`);
}

// Uma outra forma de utilizar o for

for (i in array){
 console.log(`Contando.... ${i}`);
}

