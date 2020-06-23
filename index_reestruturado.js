// ## Importe a biblioteca ##

let rs = require('readline-sync')


// ## Faça o código ##

let dia = rs.questionInt("Digite o numero de um dia do mes\n")
let mes = rs.questionInt("Digite um mes de 1 a 12\n")

if (dia > 31)
    console.log("Por favor digite um dia valido\n")
if (dia < 1)
    console.log("Por favor digite um dia valido\n")
else if (mes > 12)
    console.log("Por favor digite um mes valido\n")
else if (mes < 1)
    console.log("Por favor digite um mes valido\n")

else {
    switch (mes) {
        case 1:
            dia >= 21 ? console.log("AQUARIO") : console.log("CAPRICORNIO")
            break
        case 2:
            dia >= 19 ? console.log("PEIXES") : console.log("AQUARIO")
            break
        case 3:
            dia >= 21 ? console.log("ARIES") : console.log("PEIXES")
            break
        case 4:
            dia >= 21 ? console.log("TOURO") : console.log("ARIES")
            break
        case 5:
            dia >= 21 ? console.log("GEMEOS") : console.log("TOURO")
            break
        case 6:
            dia >= 21 ? console.log("CANCER") : console.log("GEMEOS")
            break
        case 7:
            dia >= 23 ? console.log("LEAO") : console.log("CANCER")
            break
        case 8:
            dia >= 23 ? console.log("VIRGEM") : console.log("LEAO")
            break
        case 9:
            dia >= 23 ? console.log("LIBRA") : console.log("VIRGEM")
            break
        case 10:
            dia >= 23 ? console.log("ESCORPIAO") : console.log("LIBRA")
            break
        case 11:
                dia >= 22 ? console.log("SAGITARIO") : console.log("ESCORPIAO")
            break
        case 12:
                dia >= 22 ? console.log("CAPRICORNIO") : console.log("SAGITARIO")
            break
        default:
            console.log("NAO ENCONTRADO")
            break
        }
    }