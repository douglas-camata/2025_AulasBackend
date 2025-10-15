const celcius_para_fahrenheit = (celsius) => {
    const fahrenheit = (celsius * 9/5) + 32;
    const celciusFahrenheit_Retorno ={
        valorCelsius: celsius,
        total: fahrenheit,
    }
    return celciusFahrenheit_Retorno
}

const quilometros_para_milhas = (km) => {
    const milhas = km * 0.621371;
    const kmMilhas_Retorno ={
        valorKm: km,
        totalMilhas: milhas,
    }
    return kmMilhas_Retorno
}


module.exports = { celcius_para_fahrenheit, quilometros_para_milhas };