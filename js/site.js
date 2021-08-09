let email = document.getElementById("email");




let buscar_mail = () => {
    

    if(email.value.length > 4){
        let url = 'https://www.dinatecnica.com.ar/schmersal/procesar.php?buscar_email=awrred';

        //let url = 'https://jsonplaceholder.typicode.com/todos/1';

        // var url = new URL('https://sl.se')

        // var params = {lat:35.696233, long:139.570431} // or:
        // url.search = new URLSearchParams(params).toString();
       
        fetch(url,{            
            mode: 'no-cors'         
        })
        .then((res) => console.log(res))
        
        .catch((err) => console.log(err));


    }
    
}


email.addEventListener('keyup', buscar_mail);