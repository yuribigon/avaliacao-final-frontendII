let db = JSON.parse(localStorage.getItem("usuarios"));

document.querySelector('button').addEventListener('click', (e)=>{
    let email = document.querySelector('#email').value;
    let senha = document.querySelector('#senha').value;    

    e.preventDefault();
    for(const usuario of db){
       if(usuario.email === email){
            if(usuario.senha === senha){
                saveSession(usuario);
                return window.location='./recados.html'                                
            }else{
                alert('E-mail e/ou senha inválido(s), tente novamente');
                return window.location.reload();
            }
        }else{
            alert('E-mail e/ou senha inválido(s), tente novamente'); 
            return window.location.reload();          
        }
    };
});

function saveSession(usuario){
    sessionStorage.setItem('userSession', JSON.stringify(usuario));
}