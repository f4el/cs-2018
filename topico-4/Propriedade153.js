function Propriedade153(n){
    c = Math.trunc(n / 100);
    du = n % 100;
    d = Math.trunc(du / 10);
    u = du % 10;

    return ((Math.pow(c, 3) + Math.pow(d, 3) + Math.pow(u, 3)) == n);
}

exports.Propriedade153 = Propriedade153;