// Utilize a função anterior para criar uma promise que tenha:
//
// - then: uma mensagem de sucesso, informando que a operação foi concluída com sucesso, dizendo se é par ou ímpar e
// trazendo o número;
// - catch: uma mensagem de erro, informando que a operação possui erro, dizendo se é par ou ímpar e trazendo o número.
//
// Dica: Utilize uma promise com função (resolve, reject).

const soma = (num1, num2, callbackSucesso, callbackError) => {
   return new Promise((resolve, reject)=>{
       setTimeout(()=>{
           if ((num1 + num2) % 2 === 0 ) {
               resolve(num1 + num2)
           }else {
               reject(num1 + num2)
           }
       }, 500)
   })
}

soma(1,3)
    .then((soma) => console.log("É par e o resultado é:", soma))
    .catch((soma) => console.log("É impar e o resultado é:", soma))