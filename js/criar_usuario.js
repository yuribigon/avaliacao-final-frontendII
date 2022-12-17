let email = document.querySelector('#email');
let senha = document.querySelector('#senha');
let senhaVerificada = document.querySelector('#senhaVerificada');
let tbody = document.querySelector("#tbody");

document.querySelector('button').addEventListener('click', (e)=>{
    e.preventDefault();
    salvar(email.value, senha.value, senhaVerificada.value);
});

function salvar(email, senha, senhaVerificada){
    if(email==="" || senha === "" || senhaVerificada ==""){
        alert("Preencha dos campos");
    }
    if(senha !== senhaVerificada){
        alert("As senhas não correspondem");
        /* let p = document.querySelector('p');
        let p1 = document.createElement('p');
        p1.innerText = "As senhas não correspondem";
        p.appendChild(p1); */
    };
    
    //tenho que trazer os dados do localStorage, senao existir trazer um vetor vazio
    let db = JSON.parse(localStorage.getItem("usuarios") || "[]"); // => JSON.parse para converter string (formato do localStorage) para objeto
    
    //VOU CRIAR UM OBJETO CONTENDO OS DADOS SENDO INSERIDOS
    let usuario = {
        id : db.length + 1,
        email,
        senha,
        recados: []
    };
    
    db.push(usuario);

    localStorage.setItem('usuarios', JSON.stringify(db)); // => JSON.stringify para converter objeto para string
};