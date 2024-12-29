****
🎯 **Obiettivo**

Ricostruire il tabellone e le funzionalità della tombola, con l’estrazione dei numeri e conseguente illuminazione dei numeri estratti! 

### Milestone

1️⃣ **Struttura e grafica**

Mettiamo in piedi la struttura con HTML e CSS preparando i numeri del tombolone. Inseriamo anche i bottoni per estrarre i numeri, per visualizzare il numero estratto e per smettere di giocare. Potete ispirarvi all’immagine in allegato o dare sfogo alla vostra fantasia.

2️⃣ **Estrazione dei numeri**

Al click sul tasto Estrai verrà estratto un numero a caso dall’array dei numeri disponibili. Questo numero andrà  mostrato e la casella corrispondente verrà colorata in modo da segnalarne l’estrazione. Non dimenticate di rimuovere il numero estratto dalla lista dei numeri estraibili per evitare doppioni!!

3️⃣ **Fine Gioco**

Il gioco finisce automaticamente quando vengono estratti tutti i numeri o se si clicca sul tasto “Termina Gioco”.
Il tasto “Termina gioco” non può essere cliccato prima che vengano estratti 15 numeri *(ogni cartella della tombola è composta da 15 numeri pertanto nessuno può vincere prima che ne vengano estratti almeno 15)*
Quando il gioco finisce, mostriamo una schermata che annuncia che un giocatore ha fatto Tombola!

🌟 **Bonus (cartelle)**

Perché non provare anche a generare le cartelle per giocare? Potreste inserire un form che chiede il numero dei giocatori e far generare delle cartelle di 15 numeri, controllando però che siano tutte diverse tra loro.

🌟 **Bonus 2 (storage)**

Alziamo un pò la sfida e trovate un modo per mantenere lo stato del gioco anche al reload della pagina (hint: esiste una metodo in js per sfruttare una “forma di storage” nel browser).