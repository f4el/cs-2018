const operacao = require("../organiza-palavra-alfabeticamente");

QUnit.test("hello test", function(assert) {
    let esperado = "eehllostt";
    let obtido = operacao.palavraOrganizadaAlfabeticamente("hello test");
    assert.equal(obtido, esperado);
});

QUnit.test("           ", function(assert) {
    let esperado = "";
    let obtido = operacao.palavraOrganizadaAlfabeticamente("           ");
    assert.equal(obtido, esperado);
});


