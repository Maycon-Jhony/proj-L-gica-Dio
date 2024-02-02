
// Criar o nome do Herói
let heroi = {
    nome: "StanleyOz",
};
  
  // Exibir informações do Herói no console
  console.log("Nome do Herói: " + heroi.nome);
  
// Definir variavel experiência "XP"
let xp = 8000
// definir estrutura de fluxo 
if (xp < 1000) {
    console.log("ferro");
} else if (xp >= 1001 && xp <= 2000){
    console.log("Bronze");
} else if (xp >= 2001 && xp <= 5000){
    console.log("prata");
} else if (xp >= 5001 && xp <= 7000){
    console.log("Ouro");
} else if (xp >= 7001 && xp <= 8000){
    console.log("Platina");
} else if (xp >= 8001 && xp <= 9000){
    console.log("Ascendente");
} else if (xp >= 9001 && xp <= 10.000){
    console.log("Imortal");
} else {
    console.log("Radiante");
}
console.log ("O Herói de nome " + heroi.nome, "está no nivel de " + xp)


