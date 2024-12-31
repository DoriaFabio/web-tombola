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
    <span id=${numero} class="mycol">
        <a class="numeri text-decoration-none text-black">${numero}</a>
    </span>
    `;
}).join("");
numero.innerHTML += template;
let nuovoArray = numeroTombola;
const buttonNumber = document.querySelectorAll("span");
console.log(buttonNumber);
buttonNumber.forEach((el) => {
    let c = parseInt(el.id)
    console.log(c);
    if (c % 5 == 0) {
        el.classList.add("me-3");
    }
    console.log(el.id[0]);
    if ((c == 30 || el.id[0] == 2 || el.id[0] == 5 || c == 60) && (c != 5 && c != 2 && c != 50 && c!= 20) ) {
        el.classList.add("mb-3");
    }
});
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