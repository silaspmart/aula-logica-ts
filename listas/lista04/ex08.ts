// 08 · O maior
// Comece supondo que o maior é o primeiro item. Percorra e troque sempre que achar um maior.

let listM = [54, 37, 17, 84, 66, 12, 42, 39, 22];
let maiorN = listM[0];

for (let i=0; i<listM.length; i++) {
    if (listM[i]>maiorN){
        maiorN = listM[i]
    }
}

alert(`Lista: ${listM.join(", ")} \nMaior numero da lista: ${maiorN}`)
