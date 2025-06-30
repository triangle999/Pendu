let clavier = document.getElementById(`screenclavier`) 
let guessWord = [
[`Fruit`, `BANANE`],
[`Couleur`, `BLEU`],
[`Animal`, `TIGRE`],
[`Pays`, `CANADA`],
[`Objet`, `LAMPE`],
[`Métier`, `POMPIER`],
[`Véhicule`, `VELO`],
[`Sport`, `FOOTBALL`],
[`Ville`, `PARIS`],
[`Insecte`, `ABEILLE`],
[`Instrument`, `GUITARE`]
[`Saison`, `HIVER`],
[`Dieu`, `ZEUS`]
]

let lifej = 6
let life = document.getElementById('life').style.visibility

let randomWord = Math.floor(Math.random()*guessWord.length)
let wordToFind = guessWord[randomWord]

let hint = wordToFind[0]
let word = wordToFind[1]

let winnerLoser = document.getElementById('winnerLoser')

let audio = new Audio ('img/pendu.mp3')

function afficherLettre(lettre) {
    clavier.innerText += lettre 
}

function afficherHint(hint) {
    document.getElementById(`hint`).innerText = `Maintenant tu te débrouille avec ça : ${hint}`
}

for (let i = 0; i < word.length; i++) {
    clavier.innerHTML += '<button class="rounded guessbutton"></button>'
    
}

// for (let lifej = -; lifej < ; lifej--){
//     const element = array[lifej];
   
// }

function game() {
    audio.play()
    
    if (clavier.innerText != word) {
        winnerLoser.src = 'img/loser.gif'
        document.getElementById('life').style.visibility = 'hidden'
        randomWord
        console.log(clavier.innerText + word)
    } else if (clavier.innerText == word) {
        console.log(clavier.innerText + word)
        winnerLoser.src = 'img/win.gif'
    }
        
}

// setTimeout(play, 5000)

function again() {
    life = "visible"
        
}

console.log(`la catégorie ${hint} et le mot ${word}`)
