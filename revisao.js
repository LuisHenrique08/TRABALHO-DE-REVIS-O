/* Arquivo base para realização da Atividade de Revisão do 1º TRIMESTRE */

// 1) Criação de variável de texto e numérica


   let Nome = "Luis Henrique Kubaski"
   let Chamada = 16
     // console.log ("Meu nome é", nome)
     // console.log ("Meu número da chamada é", chamada)


// 2) Criação de uma lista


    let Jogos = ["Free fire", "Minecraft", "Valorant"]


// 3) Utilização de um laço while

let contador = 0;
console.log ("####### EXERCICIO 3 #######")
console.log("Jogos favoritos do Luis são:")
    while (contador < 3) {
console.log (Jogos[contador])
contador ++;
    }

// 4) Criação de um objeto

let filme = {
    nome: "Luis Henrique Kubaski",
    Filme: "Homem-Aranha: De volta ao Lar",
    AnoLancamento: 2017,
    Nota: 7.4
}
console.log(filme)

// 5) Utilização de if-else


console.log("####### EXERCICIO 5 #######")
if (filme.Nota<=4)
    console.log("O filme possui uma nota considerada baixa.")
if (filme.Nota>4&&filme.Nota<7)
    console.log("O filme é considerado razoável.")
if(filme.Nota>7)
    console.log("O filme é muito bom!")

// 6) Criação de uma função que analisa os dados da previsão do tempo


    function verificaChuva(previsaoTempo) {
          console.log("\nPrevisão do tempo para a semana:");
   
         for (const dia of previsaoTempo) {
        if (dia.chanceDeChuva > 50) {                                // chanceDeChuva
            console.log(`${dia.dia}: levar guarda-chuva`);          // dia.dia
        } else {
            console.log(`${dia.dia}: tempo agradável`);           // dia.dia
        }
    }
}

// Lista de previsão do tempo


const previsaoTempo = [
    { dia: "Segunda", temperaturaMin: 14, temperaturaMax: 19, chanceDeChuva: 10 },

    { dia: "Terça", temperaturaMin: 13, temperaturaMax: 20, chanceDeChuva: 10 },

    { dia: "Quarta", temperaturaMin: 15, temperaturaMax: 22, chanceDeChuva: 80 },

    { dia: "Quinta", temperaturaMin: 13, temperaturaMax: 18, chanceDeChuva: 60 },

    { dia: "Sexta", temperaturaMin: 12, temperaturaMax: 16, chanceDeChuva: 40 }];

verificaChuva(previsaoTempo);
