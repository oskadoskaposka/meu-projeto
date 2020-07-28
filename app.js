// 1) Preciso armazenar todos os animais da minha clinica;
// 2) Preciso armazenar todos os sintomas que os animais tem;
// 3) Preciso falar quando um animal foi tratado;

let animais = []

const cadastrarAnimal = function (NomeAnimal, especieAnimal, sintomasAnimal) {
    let animal = {nome: NomeAnimal, 
        especie: especieAnimal, 
        sintomas: sintomasAnimal}

    animais.push(animal)
}



cadastrarAnimal ("Ayla", "cachorro", "Alergia")
cadastrarAnimal ("Amora", "cachorro", "nenhum")
cadastrarAnimal ("Barto", "cachorro", "Carrapatos")

for (let i = 0; i<animais.length; i++){
    console.log ("Nome do animal: " + animais[i].nome + " -|- " + "Sintomas do animal: " + animais[i].sintomas)
}