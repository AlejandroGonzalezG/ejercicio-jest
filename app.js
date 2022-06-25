let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen  = function(valueInDollar){
    // convertimos el valor a yenes
    let valueInYen = fromEuroToDollar(valueInDollar) * 127.9;
    // retornamos el valor
    return valueInYen;
};

const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
};

const fromYenToPound = function(valueInYen){
    // convertimos el valor a pounds
    let valueInPound = valueInYen * 1.2;
    // retornamos el valor
    return valueInPound;
};

module.exports ={ fromEuroToDollar,fromDollarToYen,fromYenToPound };