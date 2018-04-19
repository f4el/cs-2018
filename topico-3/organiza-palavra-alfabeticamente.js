function palavraOrganizadaAlfabeticamente(frase){
    return frase.split("").sort().join("").trim();
}

exports.palavraOrganizadaAlfabeticamente = palavraOrganizadaAlfabeticamente;