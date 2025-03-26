 // funcion suma
 let suma = function(a,b){
    if(isNaN(a) || isNaN(b)){
         throw new Error('Uno o ambos valores no son numeros')
    }else{
         return a+b;
    }
 };

 let miPromesa = new Promise((resolve, reject)=>{
     setTimeout(()=>{
         try{
             let valor = suma(5, 'a');
             resolve(valor)
         }catch (error_r){
             reject(error_r.message)
         }
         
     })
 });

 miPromesa.then((resultado)=>{
     console.log('La suma es: ', resultado)
 }).catch((error)=>{
     console.log('Error: ', error)
 });