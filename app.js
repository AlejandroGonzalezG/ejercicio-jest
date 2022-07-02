let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
};

const fromDollarToYen  = function(valueInDollar){
    // convertimos el valor a yenes
    let valueInEuro = (valueInDollar / oneEuroIs.USD);
    let valueInYen = valueInEuro * oneEuroIs.JPY;
    // retornamos el valor
    return valueInYen;
};

const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // retornamos el valor
    return valueInDollar;
};

const fromYenToPound = function(valueInYen){
    // convertimos el valor a pounds
    let valueInEuro = (valueInYen / oneEuroIs.JPY);
    let valueInPound = (valueInEuro * oneEuroIs.GBP);
    // retornamos el valor
    return valueInPound;
};


module.exports ={ fromEuroToDollar,fromDollarToYen,fromYenToPound };