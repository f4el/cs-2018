/**
 * Define o dia da semana para uma data.
 *
 * @type {module.Data}
 */
module.exports = class Data {

    /**
     * Produz o dia da semana para os argumentos fornecidos.
     *
     * @param {number} d - Define o dia do argumento.
     * @param {number} m - Define o mês do argumento.
     * @param {number} a - Define o ano do argumento.
     * @returns {number} s - Define o dia da semana do argumento como: 0 = segunda, 1 = terça e assim por diante.
     */
    DiaDaSemana(d, m, a) {

        if (m == 1 || m == 2){
            m += 12;
            a--; 
        }

        s = d + (2 * m) + ((3 * (m + 1)) / 5) + a + (a / 4) - (a / 100) + (a / 400); 

        return (s % 7);
    }

};