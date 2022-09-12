function verificaPalindromo(string) {
    if (!string) throw "String inválida";

    return string === string.split('').reverse().join('');
}

function tryCatchExemplo(stirng){
    try {
        return verificaPalindromo(string);
    } catch (e) {
        throw e;
    } finally {
        console.log('A string enviada foi: ' + string);
    }
}

tryCatchExemplo(''); // A string enviada foi: 
                     // Uncaught String inválida

//tryCatchExemplo('ala'); // A string enviada foi: ala