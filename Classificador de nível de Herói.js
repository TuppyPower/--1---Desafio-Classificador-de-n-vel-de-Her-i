// Variáveis para armazenar o nome e a experiência do herói
const nome = "Fulano"; // Substitua pelo nome desejado
let xp = 8500; // Substitua pela quantidade de XP

// Variável para armazenar o nível do herói
let nivel;

// Estrutura de decisão para determinar o nível
if (xp < 1000) {
  nivel = "Ferro";
} else if (xp <= 2000) {
  nivel = "Bronze";
} else if (xp <= 5000) {
  nivel = "Prata";
} else if (xp <= 7000) {
  nivel = "Ouro";
} else if (xp <= 8000) {
  nivel = "Platina";
} else if (xp <= 9000) {
  nivel = "Ascendente";
} else if (xp <= 10000) {
  nivel = "Imortal";
} else {
  nivel = "Radiante";
}

// Saída da mensagem formatada
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
