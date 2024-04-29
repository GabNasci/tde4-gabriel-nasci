//Crie uma função de soma que precisará ter como resultado um número par. Para isso, você precisará criar os seguintes
// callbacks:
//
// - callbackSucesso(): Mostre uma mensagem de sucesso, dizendo que a operação foi concluída com sucesso e que o número
// somado é par (resultado da soma).
// - callBackError(): Mostre uma mensagem de erro, dizendo que a operação falhou, trazendo um número impar (resultado
// da soma).

const soma = (num1, num2, callbackSucesso, callbackError) => (num1 + num2) % 2 === 0 ? callbackSucesso(num1 + num2) : callbackError(num1 + num2)


soma(2, 4, (soma)=> console.log("É par e o resultado é: ", soma), (soma)=> console.log("É impar e o resultado da soma é:", soma ))