// 18 · Remover duplicados
// Um Set é uma coleção que não aceita repetidos. Jogue o array num Set e volte pra array com [...].

let nf = [ "Maçã","Banana","Maçã","Laranja","Uva", "Banana","Laranja"];

let unicos = [...new Set(nf)];

alert(`${unicos.join("\n")} \n${unicos.length} de ${nf.length}`)
