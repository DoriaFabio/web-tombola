console.clear();
let numeroTombola = [];
const extraction = document.getElementById("extraction");
const end = document.getElementById("end");
const randomNumber = document.getElementById("random");
// const tablenumber = document.getElementById("numero");


for (let i = 1; i <= 90; i++) {
    numeroTombola.push(i);
}
console.log(numeroTombola);
const template = numeroTombola.map((numero) => {
    return `
    <span id=${numero} class="mycol">
        <a class="numeri text-decoration-none text-black">${numero}</a>
    </span>
    `;
}).join("");
numero.innerHTML += template;
let nuovoArray = numeroTombola;
const buttonNumber = document.querySelectorAll("span");
console.log(buttonNumber);
extraction.addEventListener("click", function () {
    let indice = Math.floor(Math.random() * nuovoArray.length);
    let random = nuovoArray[indice];
    randomNumber.innerHTML = random;
    nuovoArray = nuovoArray.filter(elemento => elemento !== random);
    console.log(nuovoArray);
    buttonNumber.forEach((el) => {
        let p = parseInt(el.id)
        console.log(p);
        if (p == random) {
            el.classList.add("active");
        }
    });
});

end.addEventListener("click", function () {
    alert("Finito il gioco");
    location.reload();
});