function obtenerUsuarios(){
    return new Promise((resolve, reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
        xhr.onload = () =>{
            if(xhr.status === 200){
                resolve(JSON.parse(xhr.responseText));
            }else{
                reject(xhr.statusText);
                // throw new Error('Error de conexion')
            }
        }
        xhr.send();
    });
}

obtenerUsuarios()
.then((usuarios)=>{
    console.log(usuarios);
})
.catch(()=>{
    console.log();
})