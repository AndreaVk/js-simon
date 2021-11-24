//Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi l'utente deve inserire,
//uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


const timer = setTimeout(guessNum, 300); 


    let numbers = [];
    for (let i = 0; i < 5; i++)
    {
    numbers.push(Math.floor(Math.random() * 100) + 1);
    }

    const p = document.createElement('p');
    p.innerText = "Hai 30 secondi per memorizzare questi numeri!";      
    const containerNum = document.getElementById('container-numbers')
    container.innerHTML = numbers;
    document.getElementById("container").appendChild(p);

    console.log(numbers);

    let sceltaUser = [];
    let score = 0;
    function guessNum () {
        container.innerHTML = '';
        for (let i = 0; i < 5; i++) 
        {
        
        let scelta = parseInt(prompt('Inserisci un numero'));
        sceltaUser.push(scelta);
        console.log(sceltaUser);
        if (sceltaUser[i]==numbers[i]) {
            score++;
            
            }
        }
        console.log(score);
        alert('Ne hai indovinati: ' + score)
    }
