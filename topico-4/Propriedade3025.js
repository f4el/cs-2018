function Propriedade3025(n){
    const i = Math.trunc(n / 100);
    const j = n % 100;
  
    const soma = i + j;
    return (soma * soma) == n;
}

exports.Propriedade3025 = Propriedade3025;