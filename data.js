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