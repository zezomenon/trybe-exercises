let custoProduto = 50;
let valorVenda = 180;
let impostoSobreCusto = 0.2;
let custoTotalProduto = custoProduto + (custoProduto * impostoSobreCusto);

if (custoProduto <= 0 || valorVenda <= 0 || impostoSobreCusto <= 0) {
  console.log("Valores informados tem que ser diferente de ZERO");
}

let lucroVenda = valorVenda - custoTotalProduto;
console.log("O lucro final foi de: ", lucroVenda);