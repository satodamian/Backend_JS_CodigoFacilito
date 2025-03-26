function avanzaFila(callback){
    setTimeout(()=>{
        console.log('Tu turno a llegado');
        callback();
    }, 5000)
}

function llamada(){
    console.log('Te presentas a tu turno')
}

console.log('Llegas a la fila');
avanzaFila(llamada);
console.log('Te vas a comprar cafe');
