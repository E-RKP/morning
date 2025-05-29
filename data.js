let hotel = {

  camere: [
    { numero: 'int', 
      tipo: 'singola', 
      occupata: true
    },

    { numero: 'int', 
      tipo: 'doppia', 
      occupata: false
    },

    { numero: 'int', 
      tipo: 'tripla', 
      occupata: true 
    },

    { numero: 'int', 
      tipo: 'singola', 
      occupata: false
    },
  ],

  prenotaCamera: function (tipoo){

    for (i=0; i<this.camere.length;i++){
      if (tipoo === this.camere[i].tipo && this.camere[i].occupata === false){
        return `La camera numero ${i} è libera`
      }
    }
    return `Nessuna camera disponibile`
  }
}

console.log(hotel.prenotaCamera('singola'))

let carello = {

  prodotti: [
    {
      id: 'EEE',
      nome: 'Guerra e Pace',
      prezzo: 9.90,
      quantità: 1
    },

    {
      id: 'AAA',
      nome: 'Superman',
      prezzo: 19.90,
      quantità: 0
    },

    {
      id: 'BBB',
      nome: 'Elektra',
      prezzo: 49.90,
      quantità: 3
    },

    {
      id: 'CCC',
      nome: 'Taratarughe Ninja',
      prezzo: 24.90,
      quantità: 10
    }
  ]
}


const aggiungipace = document.getElementById('aggiungipace')
const aggiungisuperman = document.getElementById('aggiungisuperman')
const aggiungiart = document.getElementById('aggiungitart')
const aggiungielektra = document.getElementById('aggiungielektra')
const narticolo = document.getElementById('totalicus')
const totaleprezzo = document.getElementById('numero')
let somma = 0
let narticoli = 0



aggiungipace.onclick = function aggiungipace(){
  narticoli++;
  somma = somma+carello.prodotti[0].prezzo
  if (somma >100){
    somma = 100
    somma = `Il totale rimane ${somma} perchè siamo bravi`
  }
  
  narticolo.innerHTML = narticoli;
  totaleprezzo.innerHTML = somma
}

function aggiungisupermanm (){

  narticoli++;
  somma = somma+carello.prodotti[1].prezzo
  if (somma >100){
    somma = 100
    somma = `Il totale rimane ${somma} perchè siamo bravi`
  }

  narticolo.innerHTML = narticoli
  totaleprezzo.innerHTML = somma
}

aggiungisuperman.addEventListener('click', ()=>{
  aggiungisupermanm();
})

const rimuovisuperman = document.getElementById('rimuovisuperman')
const rimuovipace = document.getElementById('rimuovipace')

function rimuovipacee (){
  narticoli--;
  somma = somma-carello.prodotti[0].prezzo
  if (somma < 0){
    somma = 0
  }
  if (narticoli < 0){
    narticoli = 0
  }

  narticolo.innerHTML =narticoli
  totaleprezzo.innerHTML = somma
}

rimuovipace.addEventListener('click', ()=>{
  rimuovipacee();
})

function rimuovipsupermann (){
  narticoli--;
  somma = somma-carello.prodotti[1].prezzo
  if (somma < 0){
    somma = 0
  }
  if (narticoli < 0){
    narticoli = 0
  }

  narticolo.innerHTML =narticoli
  totaleprezzo.innerHTML = somma
}

rimuovisuperman.addEventListener('click', ()=>{
  rimuovipsupermann();
})