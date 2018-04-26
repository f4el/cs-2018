function Propriedade3025(n){
    i = Math.trunc(n / 100);
    j = n % 100;
    return (Math.pow(i + j, 2) == n);
}

exports.Propriedade3025 = Propriedade3025;