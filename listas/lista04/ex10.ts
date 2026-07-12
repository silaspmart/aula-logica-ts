// 10 · Dobrar com map
//Use .map pra criar uma nova lista com cada número dobrado.

let list = [1, 8, 6, 7, 4, 3, 5];
let dList = list.map(n => n*2);

alert(`${dList.join(", ")}`);