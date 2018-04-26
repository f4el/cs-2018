const operacao = require("../Propriedade153");
const operacao2 = require("../Propriedade3025");

QUnit.test("Valida 153", function(assert) {
    let esperado = true;
    let obtido = operacao.Propriedade153(153);
    assert.equal(obtido, esperado);
});

QUnit.test("Valida 3025", function(assert) {
    let esperado = true;
    let obtido = operacao2.Propriedade3025(3025);
    assert.equal(obtido, esperado);
});