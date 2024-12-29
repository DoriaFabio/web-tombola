console.clear();
let numeroTombola = [];
const extraction = document.getElementById("extraction");
const end = document.getElementById("end");
const randomNumber = document.getElementById("random");


for (let i = 1; i <= 90; i++) {
    numeroTombola.push(i);
}
console.log(numeroTombola);
const template = numeroTombola.map((numero) => {
    return `
    <div id=${numero} class="mycol">
        <a class="numeri text-decoration-none text-black">${numero}</a>
    </div>
    `;
}).join("");
numero.innerHTML += template;
let nuovoArray = numeroTombola
extraction.addEventListener("click", function () {
    let indice = Math.floor(Math.random() * nuovoArray.length);
    let random = nuovoArray[indice];
    randomNumber.innerHTML = random;
    nuovoArray = nuovoArray.filter(elemento => elemento !== random);
    console.log(nuovoArray);
    // numeroTombola.forEach((el) => {
    //     console.log(el);

    //     if (el == random) {
    //          el.classList.add("active");
    //     }
    // });
});

end.addEventListener("click", function () {
    alert("Finito il gioco");
});