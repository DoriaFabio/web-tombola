console.clear();
let numeroTombola = [];

for (let i = 1; i <= 90; i++) {
    numeroTombola.push(i);
}
console.log(numeroTombola);
const template = numeroTombola.map((numero) => {
    return `
    <div class="mycol">
        <a class="numeri text-decoration-none text-black">${numero}</a>
    </div>
    `;
}).join("");
numero.innerHTML += template;