/*4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.
 */


var sp = parseFloat(67.83643);
var rj = parseFloat(36.67866);
var mg = parseFloat(29.22988);
var es = parseFloat(27.16548);
var outros = parseFloat(19.84953);
var total = parseFloat(sp + rj + mg + es + outros);

var pSp = Math.round((sp / total) * 100);
var pRj = Math.round((rj / total) * 100);
var pMg = Math.round((mg / total) * 100);
var pEs = Math.round((es / total) * 100);
var pOutros = Math.round((outros / total) * 100);

console.log(`Porcentagem de SP é de ${pSp}`);
console.log(`Porcentagem de SP é de ${pRj}`);
console.log(`Porcentagem de SP é de ${pMg}`);
console.log(`Porcentagem de SP é de ${pEs}`);
console.log(`Porcentagem de SP é de ${pOutros}`);
