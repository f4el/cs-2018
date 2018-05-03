// Recupera a classe Data do módulo correspondente.
const DiaDaSemana = require('../DiaDaSemana');

// Cria uma instância utilizada pelos testes
const DiaDaSemana = new Data();

QUnit.test('dia da semana com subtração dos meses', function (assert) {

  // Executa a operação que desejamos testar
  let resultado = Data.DiaDaSemana(1, 1, 2018);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 0, 'era segunda-feira (0)');
});

QUnit.test('dia da semana trivial', function(assert) {
    assert.equal(Data.DiaDaSemana(1, 3, 2018), 3, 'seria uma quinta-feira (3)');
});