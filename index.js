vitoriasDerrotas(109, 5)

function vitoriasDerrotas (vitorias, derrotas){
    console.log(`Número de vitórias: ${vitorias}`)
    console.log(`Número de derrotas: ${derrotas}`)
    let nickname = "Asa Guerreira"
    let rankeadas = vitorias - derrotas
    let resultado = rankeadas

    if(resultado < 10){
        console.log(`A ${nickname} tem saldo de ${vitorias} vitórias, está no nível ${resultado}, rankeada como ferro!`)
    } else if(resultado >= 10 && resultado <= 20){
        console.log(`A ${nickname} tem saldo de ${vitorias} vitórias, está no nível ${resultado}, rankeada como bronze!`)
    } else if(resultado >= 21 && resultado <= 50){
        console.log(`A ${nickname} tem saldo de ${vitorias} vitórias, está no nível ${resultado}, rankeada como prata!`)
    } else if(resultado >= 51 && resultado <= 80){
        console.log(`A ${nickname} tem saldo de ${vitorias} vitórias, está no nível ${resultado}, rankeada como ouro!`)
    } else if(resultado >= 81 && resultado <= 90){
        console.log(`A ${nickname} tem saldo de ${vitorias} vitórias, está no nível ${resultado}, rankeada como diamante!`)
    } else if(resultado >= 91 && resultado <= 100){
        console.log(`A ${nickname} tem saldo de ${vitorias} vitórias, está no nível ${resultado}, rankeada como lendário!`)
    } else{
        console.log(`A ${nickname} tem saldo de ${vitorias} vitórias, está no nível ${resultado}, rankeada como imortal!`)
    }      
}  