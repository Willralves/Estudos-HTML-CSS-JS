

function conversorTemperatura(temperatura){
    const celsius = temperatura.toUpperCase().includes("C");
    const farenheit = temperatura.toUpperCase().includes("F");
    
    let temperaturaConvertida;

    if(celsius){
        tempConvertida = Number (temperatura.toUpperCase().replace("C", ""));
        temperaturaConvertida = (tempConvertida * 1.8) + 32;

        return console.log(`A temperatura é ${temperaturaConvertida.toFixed(2)}F`);

    } else if (farenheit) {
        tempConvertida = Number (temperatura.toUpperCase().replace("F", ""));
        temperaturaConvertida = (tempConvertida - 32) / 1.8;

       return console.log(`A temperatura é ${temperaturaConvertida.toFixed(2)}C`);
    
    } else {
        return console.log("Digite uma temperatura válida!!!")
    }
}

conversorTemperatura("30c");
